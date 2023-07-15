// import { concatMap, exhaustMap, interval, map, mergeAll, mergeMap, of, switchMap, take } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const stream$ = interval(1000).pipe(
// //     map(value => of(value)), // Observable<Observable<number>>
// //     mergeAll(), // Observable<number>
// // )

// // const stream$ = interval(3000).pipe(
// //     mergeMap(count => interval(1000).pipe(
// //         map(value => `Root ${count}: ${value}`),
// //         take(7),
// //     ), 1),
// // )

// // const stream$ = interval(3000).pipe(
// //     concatMap(count => interval(1000).pipe(
// //         map(value => `Root ${count}: ${value}`),
// //         take(7),
// //     )),
// // )

// // const stream$ = interval(3000).pipe(
// //     switchMap(count => interval(1000).pipe(
// //         map(value => `Root ${count}: ${value}`),
// //         take(7),
// //     )),
// // )

// const stream$ = interval(3000).pipe(
//     exhaustMap(count => interval(1000).pipe(
//         map(value => `Root ${count}: ${value}`),
//         take(7),
//     )),
// )

// stream$.subscribe(console.log);
