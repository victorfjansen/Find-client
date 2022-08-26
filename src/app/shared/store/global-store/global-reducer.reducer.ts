import { Action, createReducer, on } from '@ngrx/store';

import * as globalActions from './actions.action';

export interface IGlobalState {
    generic: number[];
}

export const initialState: IGlobalState = {
    generic: [],
};

export const globalReducer = createReducer(
    initialState,
    on(globalActions.initialize, () => ({ generic: [2] })),
    on(globalActions.defineStore, ({ generic }, { myNumber }) => ({ generic: [myNumber] }))
);
