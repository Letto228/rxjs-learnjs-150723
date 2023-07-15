// import { catchError, interval, map, of, tap, zip } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const streamFirst$ = interval(1000);
// const streamSecond$ = of('1', '2', 3, '4');
// const streamFinal$ = zip(streamFirst$, streamSecond$);

// streamFinal$
//     .pipe(
//         map(([_, value]) => (value as any).toUpperCase()),
//         // tap({
//         //     next: value => {
//         //         console.log(value);
//         //     },
//         //     error: error => {
//         //         console.log(error);
//         //     }
//         // }),
//         catchError(error => {
//             console.log(error);

//             return of(NaN);
//         })
//     )
//     .subscribe({
//         next: value => {
//             console.log(value);
//         },
//         error: error => {
//             console.log(error);
//         }
//     })
// // 