import { MovieDetail } from '@/type/MovieDetail';

export const getMovieDetail = async (movieCd: string): Promise<MovieDetail> => {
  console.log('skp movieCd', movieCd);
  if (movieCd === '') return Promise.reject();

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL as string}movie/searchMovieInfo.json?key=${
    process.env.NEXT_PUBLIC_API_KEY
  }&movieCd=${movieCd}`;

  const res = await fetch(url);
  const result = (await res.json()) as MovieDetail;

  return result;
};
