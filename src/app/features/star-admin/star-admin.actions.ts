import { createAction } from '@ngrx/store';

export const selectStar = createAction('[Star Admin Component] Select star', (id: string) => ({ id }));