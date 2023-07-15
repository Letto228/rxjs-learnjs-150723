import { combineLatest, distinctUntilChanged, fromEvent, map, startWith } from "rxjs";
import { userService } from "./user.service";

export class FormComponent {
    private readonly inputElement: HTMLInputElement;
    private readonly buttonElement: HTMLButtonElement;

    constructor(formContainer: HTMLElement) {
        const inputElement = formContainer.querySelector('input');
        const buttonElement = formContainer.querySelector('button');

        if (!inputElement || !buttonElement) {
            throw new Error('Форма не имеет необходимых елементов');
        }

        this.inputElement = inputElement;
        this.buttonElement = buttonElement;

        this.listenInputChange();
        this.listenSendValue();
    }

    private listenInputChange() {
        const inputValue$ = fromEvent(this.inputElement, 'input')
            .pipe(
                map(({target}) => (target as HTMLInputElement).value),
                startWith(this.inputElement.value),
            );

        combineLatest([
            inputValue$,
            userService.uniqueNameSequence$,
        ])
            .pipe()
            .subscribe(([inputValue, names]) => {
                this.updateFormValidStatus(inputValue, names);
            })
    }

    private updateFormValidStatus(inputValue: string, names: string[]) {
        const isValid = inputValue && names.includes(inputValue);

        this.buttonElement.disabled = !isValid;

        if (isValid) {
            this.inputElement.classList.remove('error');

            return;
        }

        this.inputElement.classList.add('error');
    }

    private listenSendValue() {
        fromEvent(this.buttonElement, 'click')
            .pipe()
            .subscribe(() => {
                console.log('add', this.inputElement.value);
            })
    }
}