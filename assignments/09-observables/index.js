import Observable from './Observable';

let stream$ = new Observable([1,2,3]);

stream$.subscribe({
  next: el => console.log(el)
});

stream$.push(4);

let mappedStream$ = Observable.map(stream$, item => item * 2 );

mappedStream$.subscribe({
  next: el => console.log(el)
})
