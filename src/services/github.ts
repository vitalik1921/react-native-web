import { Config } from '../config';

const v1Api = Config.api.github.v1;

export default class GitHub {
    static search(query: string) {
        return fetch(`${v1Api.mainUrl}/${v1Api.endpoints.search}?q=${query}`)
            .then(response => response.json());
    }
}