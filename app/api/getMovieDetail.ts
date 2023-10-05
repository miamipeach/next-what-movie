import { MovieDetail } from '@/type/MovieDetail';
import { useQuery } from '@tanstack/react-query';

interface IMovieDetail {
  movieCd: string;
}

export async function getMovieDetail({ movieCd }: IMovieDetail): Promise<MovieDetail> {
  console.log('skp movieCd', movieCd);

  if (movieCd === '') return Promise.reject();

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL as string}movie/searchMovieInfo.json?key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&movieCd=${movieCd}`;

  const res = await fetch(url);
  const result = (await res.json()) as MovieDetail;

  return result;
}

export function useGetMovieDetail({ movieCd }: IMovieDetail) {
  return useQuery({
    queryKey: ['get-movie-detail'],
    queryFn: () => getMovieDetail({ movieCd }),
    refetchOnWindowFocus: false,
    enabled: false,
  });
}
