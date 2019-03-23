import * as React from "react";
import { View, Text } from "react-native";

type Props = {
  row: any
}

const SearchRow = ({ row }: Props) => (
  <View>
    <Text>{row.id}</Text>
    <Text>{row.name}</Text>
    <Text>{row.owner.login}</Text>
    <Text>{row['stargazers_count']}</Text>
    <Text>{new Date(row.created_at).toLocaleDateString()}</Text>
  </View>
);

export default SearchRow;
