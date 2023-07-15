import { Observable, OperatorFunction, Subscription, fromEvent, map, switchMap, takeUntil, tap } from "rxjs";

interface ElementPosition {
    top: number;
    left: number;
}

export function dragElement$(element: HTMLElement): Observable<ElementPosition> {
    const elementMosedown$ = fromEvent<MouseEvent>(element, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');

    return elementMosedown$.pipe(
        tap(event => {
            event.preventDefault();
        }),
        switchMap(({offsetX, offsetY}) => mousemove$.pipe(
            tap(event => {
                event.preventDefault();
            }),
            map(({clientX, clientY}): ElementPosition => ({
                top: clientY - offsetY,
                left: clientX - offsetX,
            })),
            takeUntil(mouseup$),
        )),
    )
}

// const switchMap = (cb: (value: any) => Observable<any>): OperatorFunction<any, any> => 
//     (parentSource$: Observable<any>) => new Observable(subscriber => {
//         let nestedSubscription: Subscription | null = null;

//         const sub = parentSource$.subscribe({
//             next: value => {
//                 if (nestedSubscription) {
//                     nestedSubscription.unsubscribe();
//                 }

//                 nestedSubscription = cb(value).subscribe(v => {
//                     subscriber.next(v);
//                 });
//             },
//         });

//         return sub;
//     })
