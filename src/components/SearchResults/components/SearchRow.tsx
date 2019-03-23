import * as React from "react";
import { Text } from "react-native";

type Props = {
  row: any
}

const SearchRow = ({ row }: Props) => (
  <Text>{JSON.stringify(row)}</Text>
);

export default SearchRow;
