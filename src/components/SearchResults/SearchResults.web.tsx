import * as React from "react";
import { FlatList } from "react-native";
import { SearchState } from '../../types/actions/search';
import SearchRow from "./components/SearchRow";

type Props = {
  search: SearchState
  setPage: Function
  setRowsNumber: Function
}

const WebSearch = ({ search }: Props) => {
  const renderRow = ({ item }: any) => {
    return <SearchRow row={item} />;
  }

  return (
    <FlatList
      data={search.items}
      renderItem={renderRow}
    />
  );
}

export default WebSearch;
