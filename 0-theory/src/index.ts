import { asapScheduler, asyncScheduler, from, interval, observeOn, of, scheduled, subscribeOn, tap } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';

const data = Array.from({length: 10}, (_, index) => index);

// scheduled(data, asyncScheduler).subscribe(console.log);
// scheduled(data, asyncScheduler).subscribe(console.log);
// from(data).pipe(observeOn(asyncScheduler)); // anti-pattern

from(data).pipe(
    tap(() => {
        console.log('default scheduler');
    }),
    observeOn(asyncScheduler),
    tap(() => {
        console.log('before async scheduler');
    }),
    subscribeOn(asapScheduler),
).subscribe(console.log);

of(10,20,30).pipe().subscribe(v => {
    console.log('sync ', v)
});
