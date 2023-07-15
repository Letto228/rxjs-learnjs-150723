// import { Observable, OperatorFunction, Subscription, filter, interval, take } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';
// import { map } from 'rxjs';

// // const double = map<number, number>(value => value * 2);

// // const doubleWithFilter = map<number, number>(value => value * 2);

// // function doubleWithFilter(parentSource$: Observable<number>): Observable<number> {
// //     const double = map<number, number>(value => value * 2);
// //     const filterByThre = filter<number>(value => value % 3 === 0);

// //     return filterByThre(
// //         double(parentSource$)
// //     );
// // }
// // function doubleWithFilter(parentSource$: Observable<number>): Observable<number> {
// //     return filter<number>(value => value % 3 === 0)(
// //         map<number, number>(value => value * 2)(parentSource$)
// //     );
// // }

// // const parentSource$ = interval(1000);

// // const childSource$ = customMap<number, number>(value => value * 2)(parentSource$);
// // const childSource$ = doubleWithFilter(parentSource$);

// // childSource$.subscribe(value => {
// //     terminalLog(value);
// // })


// // ----------------

// // const parentSource$ = interval(1000);

// // // const childSource$ = take(4)(
// // //     filter<number>(value => value % 3 === 0)(
// // //         map<number, number>(value => value * 2)(parentSource$) // mapChildStream$
// // //     ) // filterChildStream$
// // // ); // takeChildStream$
// // const childSource$ = filter<number>(value => value % 3 === 0)(
// //     map<number, number>(value => value * 2)(
// //         take<number>(4)(parentSource$) // takeChildStream$
// //     ) // mapChildStream$
// // ); // filterChildStream$

// // childSource$.subscribe({
// //     next: value => {
// //         terminalLog(value);
// //     },
// //     complete: () => {
// //         terminalLog('COMPLETE');
// //     }
// // })

// // ----------------

// // const parentSource$ = interval(1000);

// // const childSource$ = take(4)(
// //     filter<number>(value => value % 3 === 0)(
// //         map<number, number>(value => value * 2)(parentSource$) // mapChildStream$
// //     ) // filterChildStream$
// // ); // takeChildStream$

// // function pipe(...operators: OperatorFunction<any, any>[]): OperatorFunction<any, any> {
// //     return (parentSource$: Observable<any>): Observable<any> => 
// //         operators.reduce(
// //             (source$, operator) => operator(source$),
// //             parentSource$,
// //         )
// // }

// // const childSource$ = pipe(
// //     map<number, number>(value => value * 2), // mapChildStream$
// //     filter<number>(value => value % 3 === 0), // filterChildStream$
// //     take(4), // takeChildStream$
// // )(parentSource$);

// // childSource$.subscribe({
// //     next: value => {
// //         terminalLog(value);
// //     },
// //     complete: () => {
// //         terminalLog('COMPLETE');
// //     }
// // })

// // ----------------

// // const parentSource$ = interval(1000);

// // parentSource$
// interval(1000)
//     .pipe(
//         map<number, number>(value => value * 2), // mapChildStream$
//         filter<number>(value => value % 3 === 0), // filterChildStream$
//         take(4), // takeChildStream$
//     )
//     .subscribe({
//         next: value => {
//             terminalLog(value);
//         },
//         complete: () => {
//             terminalLog('COMPLETE');
//         }
//     })

// // -0-1-2-3-4-5 -6 -7 -8 -9 -

// // map<number, number>(value => value * 2)
// // -0-2-4-6-8-10-12-14-16-18-

// // filter<number>(value => value % 3 === 0)
// // -0- - -6- -  -12-  -  -18-

// // skip(1)
// // - - - -6- -  -12-  -  -18-

// // take(2)
// // - - - -6- -  -12|