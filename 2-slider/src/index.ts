import { fromEvent, map, withLatestFrom } from 'rxjs';
import '../../assets/css/style.css';
import { terminalLog } from '../../utils/log-in-terminal';
import './slider';
import { createSlider$ } from './slider';

const buttonElement = document.getElementById('send-result') as HTMLElement;

fromEvent<MouseEvent>(buttonElement, 'click')
    .pipe(
        withLatestFrom(
            createSlider$('quality'),
            createSlider$('rating'),
            createSlider$('actual'),
        ),
        map(([_event, quality, rating, actual]) => (quality + rating + actual) / 3),
    )
    .subscribe(value => {
        terminalLog(`Send result = ${value}`);
    })