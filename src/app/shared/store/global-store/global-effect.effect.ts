import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, from, map, mergeMap, of } from 'rxjs';
import { DEFINE_STORE, INITIALIZE_STORE } from './actions.action';

@Injectable({ providedIn: 'root' })
export class GlobalEffect {
    constructor(private actions: Actions) {}

    initializeStore$ = createEffect(() => {
        return this.actions.pipe(
            ofType(INITIALIZE_STORE),
            mergeMap(() =>
                from([1, 2, 3, 4]).pipe(
                    map((data) => ({ type: DEFINE_STORE, myNumber: data })),
                    catchError(() => EMPTY)
                )
            )
        );
    });
}
