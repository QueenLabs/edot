import { response } from 'express';
import ResponseCode from './ResponseCode';

export default class BaseResponse<T = undefined> {

    public responseCode: number;
    public message: string;
    public status: number
    public error: any;

    constructor(
        response: ResponseCode,
        public success: true,
        public data: T = null,
        customMessage?: string,
        public meta?: any
    ) {
        this.status = response.code;
        this.message = response.message;
        this.success = true;
        this.error = null
        if (customMessage !== undefined) {
            this.message = customMessage;
        }
    }
}