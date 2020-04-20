import { createSelector } from 'reselect';

export const getIsLoading = state => state.products.isLoading;
export const getError = state => state.products.error;
export const getProductsList = createSelector(
    state => state.products.elements,
    elements =>
        elements.map(({ id, image , name, desc, price, availableSizes }) => ({
            id,
            image,
            name,
            desc,
            price,
            availableSizes
        })),
);

export const getFilterSizes = state => state.products.filterSizes;
export const getOrderBy = state => state.products.orderBy;
