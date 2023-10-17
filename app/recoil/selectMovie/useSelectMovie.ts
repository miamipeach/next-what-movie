'use client';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { selectMovieState } from '@/app/recoil/selectMovie/selectMovieState';
import talkData from '../../../public/data/talk.json';
import { MovieDetail } from '@/type/MovieDetail';

export const useSelectMovie = () => {
  const setSelectMovie = useSetRecoilState(selectMovieState);

  const changeSelectMovie = (selectMovie: MovieDetail) => {
    setSelectMovie(selectMovie);
  };

  const getSelectMovieMsg = useRecoilCallback(({ snapshot }) => () => {
    const movie = snapshot.getLoadable(selectMovieState).contents as MovieDetail;

    if (!movie) {
      return [{ direction: 'left', msg: '영화를 골라봐' }];
    }

    return [
      {
        direction: 'right',
        msg: `${movie.movieInfoResult.movieInfo.movieNm}??`,
      },
      ...talkData[1],
      {
        direction: 'left',
        msg: `${movie.movieInfoResult.movieInfo.genres
          .map((g) => g.genreNm)
          .join(' ')}인데 재밋을 것 같아`,
      },
    ];
  });

  return { changeSelectMovie, getSelectMovieMsg };
};
