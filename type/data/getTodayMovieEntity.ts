import { Movie } from '@/type/Movie';

export interface getTodayMovieEntity {
  boxOfficeResult: {
    boxofficeType: string;
    showRange: string;
    dailyBoxOfficeList: Movie[];
  };
}
