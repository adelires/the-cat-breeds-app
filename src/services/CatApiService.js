import axios from 'axios';

class CatApiServide {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.thecatapi.com/v1',
            headers: {
                'X-Api-Key': 'b8ffd968-21bc-4deb-a1da-5e10e1a1d5ef'
            }
        });
    }

    searchBreeds = (breed) => {
        return this.api.get(`/breeds/search?q=${breed}`);
    }

    getBreedImage = (breedId) => {
        return this.api.get(`/images/search?breed_id=${breedId}&limit=1`);
    }
}

export default CatApiServide;
