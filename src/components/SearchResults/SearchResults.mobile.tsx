import * as React from "react";
import { Text } from "react-native";
import { SearchState } from '../../types/actions/search';

type Props = {
  search: SearchState
  setPage: Function
}

const MobileSearch = ({ search, setPage }: Props) => (
  <>
    <Text>{search}</Text>
    <Text>{setPage}</Text>
  </>
);

export default MobileSearch;
