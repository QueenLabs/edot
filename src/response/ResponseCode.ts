export default class ResponseCode {
    public static readonly SUCCESS = new ResponseCode(201, 'OK');
    constructor(public readonly code: number, public readonly message?: string) { }
    public toNumber(): number {
        return this.code;
    }
}