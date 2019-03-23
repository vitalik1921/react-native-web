import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  row: any
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  cell: {
    flex: 1,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#000000",
  },
});

const Cell = ({ children }: any) => (
  <Text style={styles.cell} >
    {[children]}
  </Text>
);

const SearchRow = ({ row }: Props) => (
  <View style={styles.row}>
    <Cell>{row.id}</Cell>
    <Cell>{row.name}</Cell>
    <Cell>{row.owner.login}</Cell>
    <Cell>{row['stargazers_count']}</Cell>
    <Cell>{new Date(row.created_at).toLocaleDateString()}</Cell>
  </View>
);

export default SearchRow;
