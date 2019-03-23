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


const WebSearch = ({ search, setRowsNumber }: Props) => {
  const handleRowNumbers = (n: number) => () => {
    setRowsNumber(n);
  }

  const renderRow = ({ item }: any) => {
    return <SearchRow row={item} />;
  }

  return (
    <>
      <FlatList
        data={search.items}
        renderItem={renderRow}
      />
      <View style={styles.buttons}>
        {[5, 10, 15, 20, 25].map((pageN) => (
          <Button
            disabled={search.rowsNumber === pageN}
            onPress={handleRowNumbers(pageN)}
            title={pageN.toString()}
          />
        ))}
      </View>
    </>
  );
}

export default WebSearch;
