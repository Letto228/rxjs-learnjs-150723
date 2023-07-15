// import { Observable } from 'rxjs';
// import '../../assets/css/style.css';
// import { terminalLog } from '../../utils/log-in-terminal';

// const ws = new WebSocket('ws://localhost:8081');

// ws.onopen = () => {
//     ws.send('on');
// };

// const wsMessage$ = new Observable<MessageEvent>(subscriber => {
//     console.log('START');

//     function listenerMessage(message: MessageEvent) {
//         subscriber.next(message.data);
//         console.log('MESSAGE', message.data);
//     }

//     function listenerClose() {
//         subscriber.complete();
//     }

//     function listenerError(error: unknown) {
//         subscriber.error(error);
//     }

//     ws.addEventListener('message', listenerMessage);
//     ws.addEventListener('close', listenerClose);
//     ws.addEventListener('error', listenerError);

//     return () => {
//         ws.removeEventListener('message', listenerMessage);
//         ws.removeEventListener('close', listenerClose);
//         ws.removeEventListener('error', listenerError);

//         console.log('DESTROY');
//     }
// });

// wsMessage$.subscribe(value => {
//     terminalLog(`First - ${value}`);
// });

// setTimeout(() => {
//     wsMessage$.subscribe(value => {
//         terminalLog(`Last - ${value}`);
//     });
// }, 3000)
