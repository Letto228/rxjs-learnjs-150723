// import { Observable, OperatorFunction, Subscription, interval } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// function customMap<T, U>(transform: (value: T) => U): OperatorFunction<T, U> {
//     return (parentSource$: Observable<T>): Observable<U> =>
//         new Observable<U>(subscriber => {
//             const subcription = parentSource$.subscribe({
//                 next: value => {
//                     const newValue = transform(value);

//                     subscriber.next(newValue);
//                 },
//                 error: error => {
//                     subscriber.error(error);
//                 },
//                 complete: () => {
//                     subscriber.complete();
//                 },
//             });

//             // return () => {
//             //     subcription.unsubscribe();
//             // }
//             return subcription;
//         })
// }

// // function double(parentSource$: Observable<number>): Observable<number> {
// //     return new Observable<number>(subscriber => {
// //         const subcription = parentSource$.subscribe({
// //             next: value => {
// //                 const newValue = value * 2;

// //                 subscriber.next(newValue);
// //             },
// //             error: error => {
// //                 subscriber.error(error);
// //             },
// //             complete: () => {
// //                 subscriber.complete();
// //             },
// //         })

// //         return () => {
// //             subcription.unsubscribe();
// //         }
// //     })
// // }

// const double = customMap<number, number>(value => value * 2);

// const parentSource$ = interval(1000);

// // const childSource$ = customMap<number, number>(value => value * 2)(parentSource$);
// const childSource$ = double(parentSource$);

// childSource$.subscribe(value => {
//     terminalLog(value);
// })
