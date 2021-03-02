/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { Dog } from '../models';
/**
 * DogApi - axios parameter creator
 * @export
 */
export const DogApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new dog to the store
         * @param {Dog} body Dog object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDog: async (body: Dog, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling addDog.');
            }
            const localVarPath = `/dog`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http_bearer_test required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deletes a dog
         * @param {number} dogId Dog id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDog: async (dogId: number, apiKey?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dogId' is not null or undefined
            if (dogId === null || dogId === undefined) {
                throw new RequiredError('dogId','Required parameter dogId was null or undefined when calling deleteDog.');
            }
            const localVarPath = `/dog/{dogId}`
                .replace(`{${"dogId"}}`, encodeURIComponent(String(dogId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http_bearer_test required

            if (apiKey !== undefined && apiKey !== null) {
                localVarHeaderParameter['api_key'] = String(apiKey);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single dog
         * @summary Find dog by ID
         * @param {number} dogId ID of dog to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDogById: async (dogId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dogId' is not null or undefined
            if (dogId === null || dogId === undefined) {
                throw new RequiredError('dogId','Required parameter dogId was null or undefined when calling getDogById.');
            }
            const localVarPath = `/dog/{dogId}`
                .replace(`{${"dogId"}}`, encodeURIComponent(String(dogId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http_bearer_test required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update an existing dog
         * @param {Dog} body Dog object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDog: async (body: Dog, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateDog.');
            }
            const localVarPath = `/dog`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication http_bearer_test required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates a dog
         * @param {number} dogId ID of dog that needs to be updated
         * @param {string} [name] 
         * @param {string} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDogWithForm: async (dogId: number, name?: string, status?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dogId' is not null or undefined
            if (dogId === null || dogId === undefined) {
                throw new RequiredError('dogId','Required parameter dogId was null or undefined when calling updateDogWithForm.');
            }
            const localVarPath = `/dog/{dogId}`
                .replace(`{${"dogId"}}`, encodeURIComponent(String(dogId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new URLSearchParams();

            // authentication http_bearer_test required


            if (name !== undefined) { 
                localVarFormParams.set('name', name as any);
            }

            if (status !== undefined) { 
                localVarFormParams.set('status', status as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams.toString();

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DogApi - functional programming interface
 * @export
 */
export const DogApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new dog to the store
         * @param {Dog} body Dog object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addDog(body: Dog, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DogApiAxiosParamCreator(configuration).addDog(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Deletes a dog
         * @param {number} dogId Dog id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDog(dogId: number, apiKey?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DogApiAxiosParamCreator(configuration).deleteDog(dogId, apiKey, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a single dog
         * @summary Find dog by ID
         * @param {number} dogId ID of dog to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDogById(dogId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Dog>> {
            const localVarAxiosArgs = await DogApiAxiosParamCreator(configuration).getDogById(dogId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update an existing dog
         * @param {Dog} body Dog object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDog(body: Dog, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DogApiAxiosParamCreator(configuration).updateDog(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Updates a dog
         * @param {number} dogId ID of dog that needs to be updated
         * @param {string} [name] 
         * @param {string} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateDogWithForm(dogId: number, name?: string, status?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await DogApiAxiosParamCreator(configuration).updateDogWithForm(dogId, name, status, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DogApi - factory interface
 * @export
 */
export const DogApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Add a new dog to the store
         * @param {Dog} body Dog object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addDog(body: Dog, options?: any): AxiosPromise<void> {
            return DogApiFp(configuration).addDog(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deletes a dog
         * @param {number} dogId Dog id to delete
         * @param {string} [apiKey] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDog(dogId: number, apiKey?: string, options?: any): AxiosPromise<void> {
            return DogApiFp(configuration).deleteDog(dogId, apiKey, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single dog
         * @summary Find dog by ID
         * @param {number} dogId ID of dog to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDogById(dogId: number, options?: any): AxiosPromise<Dog> {
            return DogApiFp(configuration).getDogById(dogId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an existing dog
         * @param {Dog} body Dog object that needs to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDog(body: Dog, options?: any): AxiosPromise<void> {
            return DogApiFp(configuration).updateDog(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates a dog
         * @param {number} dogId ID of dog that needs to be updated
         * @param {string} [name] 
         * @param {string} [status] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateDogWithForm(dogId: number, name?: string, status?: string, options?: any): AxiosPromise<void> {
            return DogApiFp(configuration).updateDogWithForm(dogId, name, status, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DogApi - object-oriented interface
 * @export
 * @class DogApi
 * @extends {BaseAPI}
 */
export class DogApi extends BaseAPI {
    /**
     * 
     * @summary Add a new dog to the store
     * @param {Dog} body Dog object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DogApi
     */
    public addDog(body: Dog, options?: any) {
        return DogApiFp(this.configuration).addDog(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Deletes a dog
     * @param {number} dogId Dog id to delete
     * @param {string} [apiKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DogApi
     */
    public deleteDog(dogId: number, apiKey?: string, options?: any) {
        return DogApiFp(this.configuration).deleteDog(dogId, apiKey, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a single dog
     * @summary Find dog by ID
     * @param {number} dogId ID of dog to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DogApi
     */
    public getDogById(dogId: number, options?: any) {
        return DogApiFp(this.configuration).getDogById(dogId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update an existing dog
     * @param {Dog} body Dog object that needs to be added.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DogApi
     */
    public updateDog(body: Dog, options?: any) {
        return DogApiFp(this.configuration).updateDog(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Updates a dog
     * @param {number} dogId ID of dog that needs to be updated
     * @param {string} [name] 
     * @param {string} [status] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DogApi
     */
    public updateDogWithForm(dogId: number, name?: string, status?: string, options?: any) {
        return DogApiFp(this.configuration).updateDogWithForm(dogId, name, status, options).then((request) => request(this.axios, this.basePath));
    }
}