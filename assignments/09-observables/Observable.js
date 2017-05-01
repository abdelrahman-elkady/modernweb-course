import _ from 'lodash';

export default class Observable {
  constructor(data=[], handlers) {

    if(_.isNil(handlers)) {
      handlers = {
        next: el => el,
        error: err => { throw err },
        complete: () => true
      }
    }

    let {next, error, complete} = handlers;

    this._next = next;
    this._error = error;
    this._complete = complete;

    this.data = data;
    this.observers = [];
  }

  push(item) {
    this.data.push(item);
    this.observers.forEach(observer => observer.next(this._next(item)));
  }

  subscribe(cb) {
    this.observers.push(cb);
    const {next, error, complete} = cb;

    this.data.forEach(item => next(this._next(item)));
  }
}
