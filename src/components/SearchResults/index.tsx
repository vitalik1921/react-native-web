import React from 'react';
import { Platform } from "react-native";
import WebSearch from "./SearchResults.web";
import MobileSearch from "./SearchResults.mobile";
import { SearchState } from '../../types/actions/search';
import { Config } from "../../config";

type WebProps = {
    search: SearchState
    setPage: Function
    setRowsNumber: Function
}

type MobileProps = {
    search: SearchState
    setPage: Function
}

export default Platform.OS === Config.os.web
    ? ({ search, setPage, setRowsNumber }: WebProps) =>
        <WebSearch search={search} setPage={setPage} setRowsNumber={setRowsNumber} />
    : ({ search, setPage }: MobileProps) =>
        <MobileSearch search={search} setPage={setPage} />;