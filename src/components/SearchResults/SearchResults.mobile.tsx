import * as React from "react";
import { FlatList, View, Button, StyleSheet } from "react-native";
import { SearchState } from '../../types/actions/search';
import SearchRow from "./components/SearchRow";

type Props = {
  search: SearchState
  setPage: Function
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  }
});

const MobileSearch = ({ search, setPage }: Props) => {
  const handlePage = (n: number) => () => {
    setPage(n);
  }

  const renderRow = ({ item }: any) => {
    return <SearchRow row={item} />;
  }

  const pages = Math.floor(search.items.length / search.rowsNumber);

  return (
    <>
      <FlatList
        data={search.items}
        renderItem={renderRow}
      />
      <View style={styles.buttons}>
        {Array.apply(null, Array(pages)).map((_cur, index) => (
          <Button
            disabled={search.pageNumber === (index + 1)}
            onPress={handlePage(index + 1)}
            title={`Page #: ${(index + 1).toString()}`}
          />
        ))}
      </View>
    </>
  );
}

export default MobileSearch;
