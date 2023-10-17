export interface MovieDetail {
  movieInfoResult: {
    movieInfo: {
      movieCd: string;
      movieNm: string;
      movieNmEn: string;
      movieNmOg: string;
      showTm: string;
      prdtYear: string;
      openDt: string;
      prdtStatNm: string;
      typeNm: string;
      nations: { nationNm: string }[];
      genres: { genreNm: string }[];
      actors: { peopleNm: string; cast: string }[];
      audits: { watchGradeNm: string }[];
    };
  };
}
