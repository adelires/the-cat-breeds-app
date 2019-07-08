import CatApiService from '../../services/CatApiService';

const api = new CatApiService();

export const SEARCH_BREEDS = 'search_breeds';
export const SHOW_MORE_BREEDS = 'show_more_breeds';
export const TOGGLE_BREEDS_LOADER = 'toggle_breeds_loader';

export const searchBreeds = (search) => {
    return async dispatch => {
        dispatch(loading());
        api.searchBreeds(search).then((response) => {
            let breeds = response.data
            let breedsImagePromises = [];
            for (let i = 0; i < breeds.length; i++) {
                const breed = breeds[i];
                breedsImagePromises.push(api.getBreedImage(breed.id).then(response => response.data[0] !== undefined ? response.data[0] : null));
            }
            breedsImagePromises.reduce((chain, current) => {
                return chain.then(chainResults => {
                    return current.then(currentResult => [ ...chainResults, currentResult ])
                });
            }, Promise.resolve([])).then(results => {
                for (let i = 0; i < results.length; i++) {
                    const image = results[i];
                    if (!image) {
                        continue;
                    }
                    const breedIndex = breeds.findIndex((breed) => {
                        return breed.id === image.breeds[0].id
                    });
                    if (breedIndex > -1) {
                        breeds[breedIndex].image = image;
                    }
                }
                dispatch({
                    type: SEARCH_BREEDS,
                    payload: {
                        search: search,
                        breeds: breeds
                    }
                });
                dispatch(loading(false));
            });
        });
    }
}

export const loadMore = () => ({
    type: SHOW_MORE_BREEDS
});

export const loading = (loading = true) => ({
    type: TOGGLE_BREEDS_LOADER,
    loading
});
