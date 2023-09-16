import { createReducer, createSelector, on } from '@ngrx/store';
import { selectStar } from './star-admin.actions';

export const initialState: {
  selectedStarId: string | undefined
} = {
  selectedStarId: undefined
};

export const starAdminReducer = createReducer(
  initialState,
  on(selectStar, (state, { id }) => ({ ...state, selectedStarId: id }))
);