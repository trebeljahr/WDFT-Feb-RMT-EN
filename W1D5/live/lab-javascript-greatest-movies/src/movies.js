// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramasBySpielberg = movies.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return dramasBySpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;

  const moviesThatHaveScores = movies.filter(
    (movie) => movie.score !== undefined
  );
  const averageScore =
    moviesThatHaveScores.reduce((totalScore, movie) => {
      // const score = movie.score === undefined ? 10 : movie.score;
      return totalScore + movie.score;
    }, 0) / movies.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const onlyDramas = movies.filter((movie) => movie.genre.includes('Drama'));
  return scoresAverage(onlyDramas);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const copy = deepCopy(movies);
  return copy.sort((movie1, movie2) => {
    if (movie1.year > movie2.year) {
      return 1;
    } else if (movie1.year < movie2.year) {
      return -1;
    } else {
      // handle this later
      if (movie1.title > movie2.title) {
        return 1;
      } else if (movie1.title < movie2.title) {
        return -1;
      }
      return 0;
    }
  });
}

function deepCopy(element) {
  return JSON.parse(JSON.stringify(element));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const copy = deepCopy(movies);
  // sort, map, filter
  const sorted = copy.sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
      return 1;
    } else if (movie1.title < movie2.title) {
      return -1;
    }
    return 0;
  });
  const mapped = sorted.map((movie) => movie.title);
  return mapped.filter((_, index) => index <= 19);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
