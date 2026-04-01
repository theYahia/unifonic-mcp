export declare class UnifonicClient {
    private appSid;
    constructor();
    request(method: string, path: string, body?: Record<string, string>): Promise<unknown>;
}
