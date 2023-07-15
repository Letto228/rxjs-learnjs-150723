import { Observable, animationFrameScheduler, interval, map, takeWhile, tap } from "rxjs";

const animationFn = (percentage: number) => {
    return Math.sin(-13 * (percentage + 1) * Math.PI * 2) * Math.pow(2, -10 * percentage) + 1;
}

function time$(scheduler = animationFrameScheduler): Observable<number> {
    // const startTime = Date.now();
    const startTime = scheduler.now();

    return interval(0, scheduler).pipe(
        map(() => scheduler.now() - startTime), // diff виртуального времени scheduler
    );
}

function duration$(allMs: number, scheduler = animationFrameScheduler): Observable<number> {
    return time$(scheduler).pipe(
        map(time => time / allMs),
        takeWhile(percentage => percentage <= 1),
    )
}

const diffPx = 100;

export function animationDownElement$(element: HTMLElement, animationTime: number, scheduler = animationFrameScheduler): Observable<unknown> {
    return duration$(animationTime, scheduler).pipe(
        map(animationFn),
        map(percentage => percentage * diffPx),
        tap(translate => {
            element.style.transform = `translateY(${translate}px)`;
        })
    )
}
