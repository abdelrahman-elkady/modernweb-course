import Observable from './Observable';

let stream$ = new Observable([1, 2, 3, 4, 5, 6, 7, 8]);

stream$.subscribe({
  next: el => console.log(el)
});

stream$.push(9);

console.log("---- Mapped ----");

let mappedStream$ = Observable.map(stream$, item => item * 2);
mappedStream$.subscribe({
  next: el => console.log(el)
})

console.log("---- Filtered ----");

let filteredStream$ = Observable.filter(stream$, item => item % 2 === 0);

filteredStream$.subscribe({
  next: el => console.log(el)
})
