import React from 'react';
import { Platform } from "react-native";
import WebSearch from "./SearchResults.web";
import MobileSearch from "./SearchResults.mobile";
import { SearchState } from '../../types/actions/search';
import { Config } from "../../config";

type Props = {
    search: SearchState
    setPage: Function
    setRowsNumber: Function
}

export default Platform.OS === Config.os.web
    ? (props: Props) =>
        <WebSearch {...props} />
    : (props: Props) =>
        <MobileSearch {...props} />