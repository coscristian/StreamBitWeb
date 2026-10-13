import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieCardComponent } from '../../../../shared/components/movie-card/movie-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { GenreResponse } from '../../../genres/types/GenreResponse.interface';
import { GenreService } from '../../../services/genre.service';
import { TitleResponse } from '../../../titles/types/TitleResponse.interface';
import { TitleService } from '../../../services/title.service';
import { TitleListRequest } from '../../../titles/types/TitleListRequest.interface';

@Component({
  selector: 'streambit-content',
  standalone: true,
  imports: [MovieCardComponent, EmptyStateComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  tabs = ['All', 'Movies', 'Series', 'Coming soon'];
  activeTab: string = 'All';  
  genres: GenreResponse[] = [];
  activeGenreId: number = 0;
  titles: TitleResponse[] = [];

  titlesListRequest: TitleListRequest = {
    format: this.activeTab,
    page: 1,
    pageSize: 10,
    orderBy: 'popularity',
    sortAscending: false,
    genreId: this.activeGenreId
  };

  constructor(
    private route: ActivatedRoute,
    private readonly genreService: GenreService,
    private readonly titleService: TitleService
  ) {
    const genre = this.route.snapshot.queryParamMap.get('genre');
    if (genre) {
      this.activeGenreId = parseInt(genre);
    }    
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe((genres) => {
      this.genres = genres.slice(0, 5); // TODO: Remove this once the API feature is defined and implemented to get genres
    });

    this.applyFilters();
  }

  setTab(tab: string): void {
    this.activeTab = tab;
    this.applyFilters();
  }

  setGenre(id: number, name: string): void {
    this.activeGenreId = id;
    this.applyFilters();
  }

  private applyFilters(): void {        
    this.titlesListRequest.format = this.activeTab;
    this.titlesListRequest.genreId = this.activeGenreId;

    this.titleService.getTitles(this.titlesListRequest).subscribe((titles) => {
      this.titles = titles.results;
    });
  }
}
