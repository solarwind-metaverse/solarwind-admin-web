import { createSelector, createFeatureSelector } from '@ngrx/store';

export const starAdminState = createFeatureSelector<{ selectedStarId: string | undefined }>('starAdmin');

export const selectStarId = createSelector(
  starAdminState,
  (state: { selectedStarId: string | undefined }) => state.selectedStarId
);