import React from 'react';
import { connect } from 'react-redux';
import defaultImage from '../assets/images/image-not-found.png';
import { bindActionCreators } from 'redux';
import { loadMore } from '../store/actions/breedsAction'
import Stars from './Stars';


const BreedList = ({ breeds, searched, found, showing, loadMore, getBreedImage }) => {
    if (searched && found) {
        return (
            <div className="breed-list">
                <p className="breed-list__result-info">{breeds.length} results found</p>
                {breeds.slice(0, showing).map((breed, index) => {
                    let image = <img src={defaultImage} alt={breed.name} />
                    if (typeof breed.image == 'object') {
                        image = <img src={breed.image.url} alt={breed.name} />;
                    }
                    return (
                        <div key={breed.id} className="breed-list__item">
                            <div className="item-img">
                                {image}
                            </div>
                            <div className="item-info">
                                <p className="item-description">
                                    <strong>{breed.name}</strong> <br />
                                    {breed.description}
                                </p>
                                <ul className="item-data">
                                    <li><Stars label="Affection level" rank={breed.affection_level} /></li>
                                    <li><Stars label="Adaptability" rank={breed.adaptability} /></li>
                                    <li><Stars label="Child friendly" rank={breed.child_friendly} /></li>
                                    <li><Stars label="Dog friendly" rank={breed.dog_friendly} /></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
                {showing < breeds.length ? (
                    <div className="breed-list__buttons">
                        <button type="button" className="breed-list__load-more" onClick={() => loadMore()}>LOAD MORE</button>
                    </div>
                ) : null}
            </div>
        )
    }
    if (searched && !found) {
        return <p className="breed-list__result-info">No results found</p>
    }
    return null;
}

const mapStateToProps = state => ({
    breeds: state.breedsState.breeds,
    found: state.breedsState.found,
    searched: state.breedsState.searched,
    showing: state.breedsState.showing
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ loadMore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedList);