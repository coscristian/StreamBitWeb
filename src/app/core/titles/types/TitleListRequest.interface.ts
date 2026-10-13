export interface TitleListRequest {
    format: string;
    page: number;
    pageSize: number;
    orderBy: string;
    sortAscending: boolean;
    genreId?: number | null;
}