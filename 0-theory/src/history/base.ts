// import { Observable, Subscriber, Subscription } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// // const sequence = (function* iteratorFn() {
// //     let count = 0;

// //     while (true) {
// //         count += 1;

// //         terminalLog(`iterator ${count}`);

// //         yield count;
// //     }
// // })();

// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);
// // terminalLog(sequence.next().value);

// const stream$ = new Observable<number>((subscriber: Subscriber<number>) => {
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
// });

// // 1 Subcription - 1 subscribe
// // const substiption = stream$.subscribe({
// //     next: count => {
// //         terminalLog(count);
// //     },
// //     complete: () => {
// //         terminalLog('complete');
// //     },
// //     error: error => {
// //         terminalLog(`error - ${error}`);
// //     }
// // });

// // setTimeout(() => {
// //     terminalLog(substiption.closed);

// //     substiption.unsubscribe();

// //     terminalLog(substiption.closed);
// // }, 3000)

// // 1 Subcription - many subscribe
// const allSubscription = new Subscription();

// allSubscription.add(
//     stream$.subscribe(value => {
//         terminalLog(`A - ${value}`);
//     })
// )

// setTimeout(() => {
//     allSubscription.add(
//         stream$.subscribe(value => {
//             terminalLog(`B - ${value}`);
//         })
//     )
// }, 3000)

// setTimeout(() => {
//     terminalLog(allSubscription.closed);

//     allSubscription.unsubscribe();

//     terminalLog(allSubscription.closed);
// }, 5000)

// // takeUntil
// // ?????????
