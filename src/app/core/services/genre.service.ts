import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenreResponse } from "../genres/types/GenreResponse.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GenreService {
  constructor(private readonly http: HttpClient) {}

  getGenres(): Observable<GenreResponse[]> {
    return this.http.get<GenreResponse[]>('http://localhost:5039/api/v1/Genres');
  }
}