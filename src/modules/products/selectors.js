import { createSelector } from 'reselect';

export const getIsLoading = state => state.products.isLoading;
export const getError = state => state.products.error;
export const getProductsImages = createSelector(
    state => state.products.elements,
    elements =>
        elements.map(({ id, image , name }) => ({
            id,
            image,
            name
        })),
);
