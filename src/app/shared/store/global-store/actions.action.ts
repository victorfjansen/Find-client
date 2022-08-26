import { createAction, props } from '@ngrx/store';

export const INITIALIZE_STORE = '[Global] Initializes store';
export const DEFINE_STORE = '[Global] Defines Store';

export const initialize = createAction(INITIALIZE_STORE);
export const defineStore = createAction(DEFINE_STORE, props<{ myNumber: number }>());
