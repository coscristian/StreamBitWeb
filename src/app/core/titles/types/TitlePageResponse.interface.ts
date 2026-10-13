import { TitleResponse } from "./TitleResponse.interface";

export interface TitlePageResponse {
    page: number;
    pageSize: number;
    totalResults: number;
    totalPages: number;
    results: TitleResponse[];
}