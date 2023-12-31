import '../../assets/css/style.css';
import  './styles.css';
import { dragElement$ } from './drag-and-drop';

const box = document.querySelector('.draggable') as HTMLElement;

dragElement$(box).subscribe(({left, top}) => {
    box.style.left = `${left}px`;
    box.style.top = `${top}px`;
})
