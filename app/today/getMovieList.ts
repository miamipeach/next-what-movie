import { Movie } from '@/type/Movie';
import { getYesterdayDate } from '@/utils/common';

interface TodayMovieList {
  boxOfficeResult: {
    dailyBoxOfficeList: Movie[];
  };
}

export async function getTodayMovieList(): Promise<Movie[]> {
  const url = `${
    process.env.NEXT_PUBLIC_API_BASE_URL as string
  }boxoffice/searchDailyBoxOfficeList.json?key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&targetDt=${getYesterdayDate()}`;

  const res = await fetch(url);
  const result = (await res.json()) as TodayMovieList;

  return result.boxOfficeResult.dailyBoxOfficeList;
}
