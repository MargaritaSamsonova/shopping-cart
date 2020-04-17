import { createSelector } from 'reselect';

export const getIsLoading = state => state.cart.isLoading;
export const getError = state => state.cart.error;
export const getCart = createSelector(
    state => state.cart.elements,
    elements => elements
);
