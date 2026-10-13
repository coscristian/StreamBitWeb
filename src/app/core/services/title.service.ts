import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TitlePageResponse } from "../titles/types/TitlePageResponse.interface";
import { TitleListRequest } from "../titles/types/TitleListRequest.interface";

@Injectable({
    providedIn: 'root'
})
export class TitleService {
    private apiUrl = 'http://localhost:5039/api/v1/Titles';

    constructor(private http: HttpClient) {}

    getTitles(request: TitleListRequest) {
        return this.http.get<TitlePageResponse>(`${this.apiUrl}?format=${request.format}&page=${request.page}&pageSize=${request.pageSize}&orderBy=${request.orderBy}&sortAscending=${request.sortAscending}&genreId=${request.genreId}`);
    }
}