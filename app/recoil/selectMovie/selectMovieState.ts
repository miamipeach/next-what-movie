import { atom } from 'recoil';
import { MovieDetail } from '@/type/MovieDetail';

export const selectMovieState = atom<MovieDetail>({
  key: 'SelectMovie',
  default: undefined,
});
