import { OperatorFunction, catchError, debounceTime, delayWhen, distinctUntilChanged, filter, map, of, pipe, retry, retryWhen, switchMap, timer } from "rxjs";
import { AjaxConfig, ajax } from "rxjs/ajax";

export function liveSearch<T>(
    urlCreater: (searchParam: string) => string,
    errorData: T,
    requestConfig: Omit<AjaxConfig, 'url'> = {crossDomain: true},
): OperatorFunction<string, T> {
    return pipe(
        debounceTime(300),
        filter(searchParam => searchParam.length >= 3),
        distinctUntilChanged(),
        map((searchParam): AjaxConfig => ({
            ...requestConfig,
            url: urlCreater(searchParam),
        })),
        switchMap(ajaxConfig => ajax<T>(ajaxConfig).pipe(
            map(({response}) => response),
            retry({
                count: 3,
                // delay: 1000,
                delay: (error, retryCount) => timer(1000 * retryCount),
                resetOnSuccess: false,
            }),
            // retryWhen(error$ => error$.pipe(
            //     delayWhen(_value => timer(3000)),
            // )),
            catchError(error => {
                console.log('error', error);
    
                return of(errorData);
            }),
        )),
    );
}

// EMPTY
// |

// NEVER
// -----------------------------------------

// THROW - throwError(new Error(...))
// X
