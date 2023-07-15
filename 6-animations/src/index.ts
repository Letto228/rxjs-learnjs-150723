import { animationFrameScheduler, asapScheduler, asyncScheduler } from 'rxjs';
import '../../assets/css/style.css';
import { animationDownElement$ } from './animate';
import  './styles.css';

const shapeElement = document.querySelector('.animated-shape') as HTMLElement;

animationDownElement$(shapeElement, 20000, asyncScheduler).subscribe();
