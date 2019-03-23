import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from "../../store/configureStore";
import Search from './Search';

import * as searchAction from "../../actions/search";

const mapStateToProps = (state: AppState) => ({
    search: state.search,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    searchRequest: (text: string) =>
        dispatch(searchAction.searchRequest(text)),
    setPage: (pageNumber: number) =>
        dispatch(searchAction.setPage(pageNumber)),
    setRowsNumber: (rowsNumber: number) =>
        dispatch(searchAction.setRowsNumber(rowsNumber)),
});

const SearchContainer = (props: any) => (
    <Search {...props} />
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);