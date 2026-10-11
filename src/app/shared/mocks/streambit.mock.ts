export interface MovieMock {
  id: string;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  poster: string;
  backdrop: string;
  overview: string;
  runtime: string;
  status?: 'Now showing' | 'Coming soon' | 'Series';
}

export interface PersonMock {
  name: string;
  role: string;
  photo: string;
}

export interface ReviewMock {
  id: string;
  user: string;
  avatar: string;
  movieId: string;
  movieTitle: string;
  rating: number;
  text: string;
  date: string;
  likes: number;
  comments: number;
}

export interface DiscussionMock {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  avatar: string;
  replies: number;
  lastActivity: string;
}

export interface MatchMock {
  id: string;
  competition: string;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  status: 'live' | 'upcoming' | 'final';
  time: string;
}

export interface GenreMock {
  id: string;
  name: string;
  image: string;
}

export const MOCK_MOVIES: MovieMock[] = [
  {
    id: 'harbor-lights',
    title: 'Harbor Lights',
    year: 2024,
    rating: 8.4,
    genres: ['Drama', 'Crime'],
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'A night dispatcher in a coastal city starts noticing patterns in emergency calls that no one else wants to connect. What begins as overtime becomes a map of the town’s quiet deals.',
    runtime: '2h 11m',
    status: 'Now showing'
  },
  {
    id: 'quiet-room',
    title: 'The Quiet Room',
    year: 2023,
    rating: 7.9,
    genres: ['Thriller', 'Mystery'],
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'Two siblings inherit a soundproof editing suite and a stack of unfinished tapes. Each playback reveals a version of the family they were never supposed to hear.',
    runtime: '1h 54m',
    status: 'Now showing'
  },
  {
    id: 'iron-tide',
    title: 'Iron Tide',
    year: 2025,
    rating: 8.1,
    genres: ['Action', 'Sports'],
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'A second-division club fights its way through a season that is as much about payroll as it is about the pitch. The final stretch is decided off the field.',
    runtime: '2h 04m',
    status: 'Coming soon'
  },
  {
    id: 'northbound',
    title: 'Northbound',
    year: 2022,
    rating: 8.7,
    genres: ['Adventure', 'Drama'],
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'A freight engineer and a documentary crew share a week on a line that is being shut down. The landscape keeps changing; the timetable does not.',
    runtime: '2h 22m',
    status: 'Now showing'
  },
  {
    id: 'glass-season',
    title: 'Glass Season',
    year: 2024,
    rating: 7.6,
    genres: ['Sci-Fi', 'Drama'],
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'In a city that records every conversation as weather, a meteorologist tries to forecast a storm that is actually a person deciding to leave.',
    runtime: '1h 48m',
    status: 'Series'
  },
  {
    id: 'sunday-final',
    title: 'Sunday Final',
    year: 2021,
    rating: 8.0,
    genres: ['Sports', 'Documentary'],
    poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'Cameras follow four amateur clubs through one regional cup weekend. The trophy is small. The arguments in the parking lot are not.',
    runtime: '1h 36m',
    status: 'Now showing'
  },
  {
    id: 'night-relay',
    title: 'Night Relay',
    year: 2025,
    rating: 7.4,
    genres: ['Crime', 'Action'],
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'A radio station overnight host becomes the only witness to a city-wide blackout. Callers keep describing the same intersection.',
    runtime: '1h 59m',
    status: 'Coming soon'
  },
  {
    id: 'low-orbit',
    title: 'Low Orbit',
    year: 2023,
    rating: 8.2,
    genres: ['Sci-Fi', 'Thriller'],
    poster: 'https://images.unsplash.com/photo-1446776811953-b10d519abe67?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'A maintenance crew on a near-Earth platform finds a personal message stored in a system that is not supposed to keep personal anything.',
    runtime: '2h 07m',
    status: 'Now showing'
  },
  {
    id: 'red-bench',
    title: 'The Red Bench',
    year: 2020,
    rating: 7.2,
    genres: ['Comedy', 'Drama'],
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1524985069026-dd7784d596ce?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'A park regular starts leaving notes on the same bench every Friday. The replies arrive from people who swear they have never sat there.',
    runtime: '1h 42m',
    status: 'Now showing'
  },
  {
    id: 'west-end-shift',
    title: 'West End Shift',
    year: 2024,
    rating: 8.5,
    genres: ['Drama', 'Music'],
    poster: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=400&h=600&q=80',
    backdrop: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1400&h=700&q=80',
    overview: 'Stagehands on a closing musical keep the show running while the company decides who gets to take it on the road. The songs stay the same. The exits do not.',
    runtime: '2h 16m',
    status: 'Series'
  }
];

export const MOCK_CAST: PersonMock[] = [
  { name: 'Mara Ellison', role: 'Lead', photo: 'https://i.pravatar.cc/160?img=32' },
  { name: 'Jonah Reed', role: 'Lead', photo: 'https://i.pravatar.cc/160?img=12' },
  { name: 'Priya Nair', role: 'Supporting', photo: 'https://i.pravatar.cc/160?img=47' },
  { name: 'Luis Ortega', role: 'Supporting', photo: 'https://i.pravatar.cc/160?img=15' },
  { name: 'Helen Cho', role: 'Supporting', photo: 'https://i.pravatar.cc/160?img=49' },
  { name: 'Chris Daley', role: 'Director', photo: 'https://i.pravatar.cc/160?img=8' }
];

export const MOCK_REVIEWS: ReviewMock[] = [
  {
    id: 'r1',
    user: 'Ana V.',
    avatar: 'https://i.pravatar.cc/80?img=32',
    movieId: 'harbor-lights',
    movieTitle: 'Harbor Lights',
    rating: 9,
    text: 'Patient without being slow. The last twenty minutes reframe every radio call from the first act. I keep thinking about the harbor sequence.',
    date: '2 days ago',
    likes: 48,
    comments: 12
  },
  {
    id: 'r2',
    user: 'Marcus T.',
    avatar: 'https://i.pravatar.cc/80?img=12',
    movieId: 'northbound',
    movieTitle: 'Northbound',
    rating: 8,
    text: 'Looks like a travel film and behaves like a workplace story. The train is never romanticized. That’s why the last station lands.',
    date: '4 days ago',
    likes: 31,
    comments: 7
  },
  {
    id: 'r3',
    user: 'Sofia R.',
    avatar: 'https://i.pravatar.cc/80?img=47',
    movieId: 'quiet-room',
    movieTitle: 'The Quiet Room',
    rating: 7,
    text: 'The tapes idea is strong. I wanted one more scene with the mother. Still, the sound design does more storytelling than most scripts.',
    date: '1 week ago',
    likes: 19,
    comments: 4
  },
  {
    id: 'r4',
    user: 'Diego M.',
    avatar: 'https://i.pravatar.cc/80?img=15',
    movieId: 'iron-tide',
    movieTitle: 'Iron Tide',
    rating: 8,
    text: 'Finally a football film that cares about contracts. The locker room scenes are better than the match footage, and that’s a compliment.',
    date: '1 week ago',
    likes: 64,
    comments: 21
  },
  {
    id: 'r5',
    user: 'Nina K.',
    avatar: 'https://i.pravatar.cc/80?img=49',
    movieId: 'low-orbit',
    movieTitle: 'Low Orbit',
    rating: 9,
    text: 'Tight, claustrophobic, and funny in the way tired crews are funny. The message in the logs is a better hook than another AI villain.',
    date: '2 weeks ago',
    likes: 52,
    comments: 9
  },
  {
    id: 'r6',
    user: 'Owen P.',
    avatar: 'https://i.pravatar.cc/80?img=8',
    movieId: 'glass-season',
    movieTitle: 'Glass Season',
    rating: 6,
    text: 'Beautiful and a little proud of itself. Episode four is the one I’ll rewatch. The rest can lose ten minutes of sky.',
    date: '3 weeks ago',
    likes: 11,
    comments: 16
  }
];

export const MOCK_DISCUSSIONS: DiscussionMock[] = [
  {
    id: 'd1',
    title: 'Is Harbor Lights a crime story or a workplace drama?',
    excerpt: 'The radio room feels more important than the suspects. Curious how others read the ending without spoiling it.',
    category: 'Movies',
    author: 'Ana V.',
    avatar: 'https://i.pravatar.cc/80?img=32',
    replies: 34,
    lastActivity: '18 min ago'
  },
  {
    id: 'd2',
    title: 'Sunday Final: which amateur club would you actually support?',
    excerpt: 'The Eastbridge keeper stole the documentary. Looking for people who played at this level and can fact-check the locker talk.',
    category: 'Sports',
    author: 'Diego M.',
    avatar: 'https://i.pravatar.cc/80?img=15',
    replies: 21,
    lastActivity: '1 hr ago'
  },
  {
    id: 'd3',
    title: 'Unpopular: Glass Season should have stayed a movie.',
    excerpt: 'The two-hour cut in my head is sharper. The weekly weather metaphor starts repeating by episode six.',
    category: 'Series',
    author: 'Nina K.',
    avatar: 'https://i.pravatar.cc/80?img=49',
    replies: 57,
    lastActivity: '3 hr ago'
  },
  {
    id: 'd4',
    title: 'Match thread: tonight’s cup tie and the Iron Tide comparisons',
    excerpt: 'If you’ve seen the film, you already know the wage-cap subplot. Tonight’s lineup looks like the second act.',
    category: 'Sports',
    author: 'Marcus T.',
    avatar: 'https://i.pravatar.cc/80?img=12',
    replies: 88,
    lastActivity: 'Live'
  },
  {
    id: 'd5',
    title: 'Soundtracks that do plot: West End Shift vs Quiet Room',
    excerpt: 'One uses songs as scene headings. The other uses silence. Collecting examples that are not needle-drops.',
    category: 'Movies',
    author: 'Sofia R.',
    avatar: 'https://i.pravatar.cc/80?img=47',
    replies: 16,
    lastActivity: 'Yesterday'
  }
];

export const MOCK_MATCHES: MatchMock[] = [
  {
    id: 'm1',
    competition: 'Premier League',
    home: 'Northgate',
    away: 'Harbor FC',
    homeScore: 1,
    awayScore: 1,
    status: 'live',
    time: "67'"
  },
  {
    id: 'm2',
    competition: 'NBA',
    home: 'Riverton',
    away: 'Union',
    homeScore: 88,
    awayScore: 93,
    status: 'live',
    time: 'Q4 3:12'
  },
  {
    id: 'm3',
    competition: 'Liga MX',
    home: 'Costa Sur',
    away: 'Altos',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    time: 'Today 20:00'
  },
  {
    id: 'm4',
    competition: 'LaLiga',
    home: 'Marea',
    away: 'Sierra',
    homeScore: 2,
    awayScore: 0,
    status: 'final',
    time: 'FT'
  },
  {
    id: 'm5',
    competition: 'NFL',
    home: 'Iron City',
    away: 'Lakeside',
    homeScore: null,
    awayScore: null,
    status: 'upcoming',
    time: 'Sun 13:00'
  },
  {
    id: 'm6',
    competition: 'Champions League',
    home: 'Ostend',
    away: 'Valois',
    homeScore: 3,
    awayScore: 2,
    status: 'final',
    time: 'FT'
  }
];

export const MOCK_GENRES: GenreMock[] = [
  { id: 'drama', name: 'Drama', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&h=240&q=80' },
  { id: 'action', name: 'Action', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=400&h=240&q=80' },
  { id: 'sports', name: 'Sports', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&h=240&q=80' },
  { id: 'scifi', name: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1446776811953-b10d519abe67?auto=format&fit=crop&w=400&h=240&q=80' },
  { id: 'thriller', name: 'Thriller', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&h=240&q=80' },
  { id: 'comedy', name: 'Comedy', image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=400&h=240&q=80' }
];

export function getMovieById(id: string | null): MovieMock | undefined {
  if (!id) {
    return undefined;
  }
  return MOCK_MOVIES.find((movie) => movie.id === id);
}

export function getReviewsForMovie(id: string): ReviewMock[] {
  return MOCK_REVIEWS.filter((review) => review.movieId === id);
}
