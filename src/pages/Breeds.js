import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchBreeds } from '../store/actions/breedsAction';
import BreedList from '../components/BreedList';

class Breeds extends Component {

    handleChange = (event) => {
        if (event.keyCode === 13) {
            let breed = event.target.value;
            this.props.searchBreeds(breed);
        }
    };

    render() {
        const { loading } = this.props;
        return (
            <div className="breed">
                <div className="breed__search">
                    <label htmlFor="breed" className="breed__search-label">Search Breed: </label>
                    <input type="text" name="breed" className="breed__search-input" onKeyUp={this.handleChange} />
                    {loading ? <span className="breed__search-loader"><i className="fas fa-lg fa-spinner fa-spin"></i></span> : null}
                </div>
                <div className="">
                    <BreedList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.breedsState.loading
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ searchBreeds }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Breeds);