import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscriber, share, takeUntil, timer } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const stream$ = (new Observable<number>((subscriber: Subscriber<number>) => {
//     let count = 0;
    
//     console.log('START');

//     const intervalId = setInterval(() => {
//         count += 1;

//         console.log('INCREMENT', count);

//         subscriber.next(count);

//         if (count === 5) {
//             subscriber.complete();
//             // subscriber.error(new Error('danger'));
//         }
//     }, 1000);

//     return () => {
//         clearInterval(intervalId);
//         console.log('DESTROY');
//     }
// })).pipe(
//     // takeUntil(timer(3000)),
//     share({
//         connector: () => new ReplaySubject(1),
//         resetOnComplete: false,
//         resetOnError: false,
//         resetOnRefCountZero: false,
//     }),
// );

// const sub = stream$.subscribe(value => {
//     terminalLog(`Sub 1 = ${value}`)
// });

// setTimeout(() => {
//     // stream$.subscribe(value => {
//     //     terminalLog(`Sub 2 = ${value}`)
//     // });
//     sub.unsubscribe();
// }, 2000);

// setTimeout(() => {
//     stream$.subscribe(value => {
//         terminalLog(`Sub 3 = ${value}`)
//     });
// }, 7000);
