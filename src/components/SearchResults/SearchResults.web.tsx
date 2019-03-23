import * as React from "react";
import { FlatList, View, Button, StyleSheet } from "react-native";
import { SearchState } from '../../types/actions/search';
import SearchRow from "./components/SearchRow";

type Props = {
  search: SearchState
  setPage: Function
  setRowsNumber: Function
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  activeButton: {
    backgroundColor: "grey",
  }
});

const WebSearch = ({ search, setPage, setRowsNumber }: Props) => {
  const handleRowNumbers = (n: number) => () => {
    setRowsNumber(n);
  }

  const handlePage = (n: number) => () => {
    setPage(n);
  }

  const renderRow = ({ item }: any) => {
    return <SearchRow row={item} />;
  }

  const pages = Math.ceil(search.items.length / search.rowsNumber);
  const startItem = (search.pageNumber - 1) * search.rowsNumber;
  const endItem = startItem + search.rowsNumber;

  return (
    <>
      <FlatList
        data={search.items.slice(startItem, endItem)}
        renderItem={renderRow}
      />
      <View style={styles.buttons}>
        {[5, 10, 15, 20, 25].map((pageN) => (
          <Button
            key={pageN}
            disabled={search.rowsNumber === pageN}
            onPress={handleRowNumbers(pageN)}
            title={pageN.toString()}
          />
        ))}
      </View>
      <View style={styles.buttons}>
        {Array.apply(null, Array(pages)).map((_cur, index) => (
          <Button
            key={index}
            disabled={search.pageNumber === (index + 1)}
            onPress={handlePage(index + 1)}
            title={`Page #: ${(index + 1).toString()}`}
          />
        ))}
      </View>
    </>
  );
}

export default WebSearch;
