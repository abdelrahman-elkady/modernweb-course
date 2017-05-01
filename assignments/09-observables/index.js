import Observable from './Observable';

let stream$ = new Observable([1,2,3]);

stream$.subscribe({
  next: el => console.log(el)
});

stream$.push(4);
