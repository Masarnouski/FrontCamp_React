import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilmAPI, searchBy, sortBy } from '../../services';
import { store } from '../../store';
import { getTextInputValue, getSortType, getFilms } from '../../actions';
import { Home } from '../../components/home/home'

class HomeContainer extends Component {
  fetchData = async (searchParams) => {
    try {
      const { data: films } = await FilmAPI.getFilmsByQuery(searchParams);
      store.dispatch(getFilms(films));
    } catch (error) {}
  };

  async componentDidMount() {
    await this.fetchData({
      searchBy: searchBy.TITLE,
      sortBY: sortBy.RELEASE_DATE,
      textInputValue: '',
    });
  }



  clickSubmitButton = async (e) => {
    e.preventDefault();
    const { textInputValue, searchBy, sortBy } = this.props;
    await this.fetchData({ search: textInputValue, searchBy, sortBy });
  };

  render() {
    const { filmsList, textInputValue, changeTextInputValue, clickTabButton, clickToggleButton } = this.props;
    return (
      <Home
        filmsInfo={filmsList}
        onClickTabButton={clickTabButton}
        changeTextInputValue={changeTextInputValue}
        textInputValue={textInputValue}
        onClickSubmitButton={this.clickSubmitButton}
        onClickToggleButton = {clickToggleButton}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  filmsList: state.films,
  textInputValue: state.textInputValue,
  searchBy: state.searchBy,
  sortBy: state.sortBy,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeTextInputValue: (event) => {
      dispatch(getTextInputValue(event.target.value));
    },
    clickTabButton: () => {
      dispatch(getSortType(sortBy.RELEASE_DATE));
    }
  };
};

export const homeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
