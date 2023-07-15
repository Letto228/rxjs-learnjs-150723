// import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // Subject = Observable + Observer

// const stream$ = new AsyncSubject<number>();

// stream$.subscribe({
//     next: value => {
//         terminalLog(`Sub 1 = ${value}`);
//     },
//     complete: () => {
//         terminalLog(`COMPLETE 1`);
//     },
// });

// stream$.next(1);
// stream$.next(2);
// stream$.next(3);

// setTimeout(() => {
//     stream$.next(4);
//     stream$.next(5);
//     stream$.next(6);
// }, 4000);


// setTimeout(() => {
//     // terminalLog(`Create sub 2 ${stream$.value}`);
//     terminalLog(`Create sub 2`);
//     stream$.subscribe({
//         next: value => {
//             terminalLog(`Sub 2 = ${value}`);
//         },
//         complete: () => {
//             terminalLog(`COMPLETE 2`);
//         },
//     });

//     stream$.next(7);
//     stream$.next(8);
//     stream$.next(9);
// }, 6000)

// setTimeout(() => {
//     stream$.complete();
//     stream$.next(10);
// }, 7000);

// setTimeout(() => {
//     stream$.subscribe({
//         next: value => {
//             terminalLog(`Sub 3 = ${value}`);
//         },
//         complete: () => {
//             terminalLog(`COMPLETE 3`);
//         },
//     });
// }, 9000);
