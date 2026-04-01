export interface UnifonicMessage {
    MessageID: string;
    Status: string;
    NumberOfUnits: number;
    Cost: string;
    TimeCreated: string;
}
export interface UnifonicBalance {
    Balance: string;
    CurrencyCode: string;
}
export interface UnifonicSender {
    SenderID: string;
    Status: string;
}
export interface UnifonicApiResponse {
    success: boolean;
    message: string;
    data?: unknown;
    [key: string]: unknown;
}
