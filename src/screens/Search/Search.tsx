import React from 'react';
import { ScrollView, TextInput, StyleSheet } from "react-native";

import { SearchState } from '../../types/actions/search';
import SearchResults from '../../components/SearchResults';

type Props = {
    search: SearchState
    searchRequest: Function
    setPage: Function
    setRowsNumber: Function
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
});

const Search = ({ search, searchRequest, setPage, setRowsNumber }: Props) => {
    const handleSearch = (text: string) => {
        searchRequest(text);
    };
    return (
        <ScrollView style={styles.container}>
            <TextInput
                placeholder="Type to search a repository"
                value={search.searchQuery}
                onChangeText={handleSearch}
            />
            <SearchResults
                search={search}
                setPage={setPage}
                setRowsNumber={setRowsNumber}
            />
        </ScrollView>
    );
}

export default Search;