import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_GENRES, MOCK_MOVIES, MovieMock } from '../../../../shared/mocks/streambit.mock';
import { MovieCardComponent } from '../../../../shared/components/movie-card/movie-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { GenreResponse } from '../../../genres/types/GenreResponse.interface';
import { GenreService } from '../../../services/genre.service';

@Component({
  selector: 'streambit-content',
  standalone: true,
  imports: [MovieCardComponent, EmptyStateComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  tabs = ['All', 'Movies', 'Series', 'Coming soon'];
  activeTab = 'All';
  //genres = ['All', ...MOCK_GENRES.map((genre) => genre.name)];
  genres: GenreResponse[] = [];
  activeGenre = 'All';
  movies: MovieMock[] = MOCK_MOVIES;

  constructor(
    private route: ActivatedRoute,
    private readonly genreService: GenreService
  ) {
    const genre = this.route.snapshot.queryParamMap.get('genre');
    if (genre) {
      this.activeGenre = genre;
    }
    this.applyFilters();
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe((genres) => {
      this.genres = genres;
    });
  }

  setTab(tab: string): void {
    this.activeTab = tab;
    this.applyFilters();
  }

  setGenre(genre: string): void {
    this.activeGenre = genre;
    this.applyFilters();
  }

  private applyFilters(): void {
    this.movies = MOCK_MOVIES.filter((movie) => {
      const tabMatch =
        this.activeTab === 'All' ||
        (this.activeTab === 'Series' && movie.status === 'Series') ||
        (this.activeTab === 'Coming soon' && movie.status === 'Coming soon') ||
        (this.activeTab === 'Movies' && movie.status !== 'Series');
      const genreMatch = this.activeGenre === 'All' || movie.genres.includes(this.activeGenre);
      return tabMatch && genreMatch;
    });
  }
}
