import { Movie } from '@/type/Movie';
import { getYesterdayDate } from '@/utils/common';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/type/Button';

interface TodayMovieList {
  boxOfficeResult: {
    dailyBoxOfficeList: Movie[];
  };
}

export const getTodayMovieList = async (): Promise<Movie[]> => {
  const url = `${
    process.env.NEXT_PUBLIC_API_BASE_URL as string
  }boxoffice/searchDailyBoxOfficeList.json?key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&targetDt=${getYesterdayDate()}`;

  const res = await fetch(url);
  const result = (await res.json()) as TodayMovieList;

  return result.boxOfficeResult.dailyBoxOfficeList.sort((s1, s2) => {
    return parseInt(s1.rank) - parseInt(s2.rank);
  });
};

export const useTodayMovieList = () => {
  const { data, isLoading } = useQuery(['get-today-movie'], getTodayMovieList);

  const list: Button[] = data?.map((d: Movie) => ({ value: d.movieCd, label: d.movieNm })) || [];

  return { list, isLoading };
};
