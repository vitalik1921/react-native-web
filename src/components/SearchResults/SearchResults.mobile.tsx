import * as React from "react";
import { FlatList, View, Button, StyleSheet } from "react-native";
import { SearchState } from '../../types/actions/search';
import SearchRow from "./components/SearchRow";

// There is may copypasted code from the mobile
// But this is sort of simulation - where we use 
// 2 different components for different platforms
// but now the difference between this components
// is so small tha we could use 1 component
// for both platforms

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
  }
});

const MobileSearch = ({ search, setPage, setRowsNumber }: Props) => {
  const handlePage = (n: number) => () => {
    setPage(n);
  }

  const renderRow = ({ item }: any) => {
    return <SearchRow row={item} />;
  }

  const pages = Math.ceil(search.items.length / search.rowsNumber);
  const startItem = (search.pageNumber - 1) * search.rowsNumber;
  const endItem = startItem + search.rowsNumber;

  React.useEffect(() => {
    setRowsNumber(10);
  }, []);

  return (
    <>
      <FlatList
        data={search.items.slice(startItem, endItem)}
        renderItem={renderRow}
      />
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

export default MobileSearch;
