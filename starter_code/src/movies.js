/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let orderedArray = [...array];
  if (array.length !== 0) {
    orderedArray.sort(function(a, b) {
      if (a.year < b.year) {
        return -1;
      } else if (a.year > b.year) {
        return 1;
      } else if (a.year === b.year) {
        return a.title < b.title ? -1 : 1;
      } else {
        return 0;
      }
    });
  }
  return orderedArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let dramaSteven = [];
  if (array.length !== 0) {
    dramaSteven = array.filter(
      movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }

  return dramaSteven.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  let top20 = array
    .map(movies => movies.title)
    .sort()
    .splice(0, 20);
  return top20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  let averageTotal = [];
  averageTotal =
    array.reduce(function(acc, movie) {
      if (typeof movie.rate !== 'undefined') {
        return acc + movie.rate;
      } else {
        return acc;
      }
    }, 0) / array.length;
  return isNaN(averageTotal) ? 0 : Math.round(averageTotal * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaRate = array.filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(dramaRate);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  return array.map(movie => {
    const durationAsString = movie.duration;

    let duration = 0;

    for (let value of durationAsString.split(' ')) {
      const number = parseInt(value);
      if (value.includes('h')) {
        duration += number * 60;
      } else if (value.includes('min')) {
        duration += number;
      }
    }

    return {
      ...movie,
      duration
    };
  });
}

//Not working

/* function turnHoursToMinutes(array) {
  let minutesArray = [];
  minutesArray = array.map(movie => {
    if (movie.duration.includes('h')) {
      let timeSplit = movie.duration.split(' ');
      let minutesSum = parseInt(timeSplit[0]) * 60 + parseInt(timeSplit[1]);
      return minutesSum;
    } else {
      let minutesSum = Number.parseInt(movie.duration);
      return minutesSum;
    }
  });
  return minutesArray;
}
 */
// BONUS Iteration: Best yearly rate average - Best yearly rate average

//UNFINISHED

const bestYearAvg = array => {
  const movieAverageRateByYear = array.reduce((acc, movie) => {
    const yearOfMovie = movie.year;
    const rateOfMovie = movie.rate;

    if (typeof acc[yearOfMovie] === 'undefined') {
      acc[yearOfMovie] = [rateOfMovie];
    } else {
      acc[yearOfMovie].push(rateOfMovie);
    }
    return acc;
  }, {});

  for (let year in movieAverageRateByYear) {
    const averageRateOfYear = (movieAverageRateByYear[year] = movieAverageRateByYear[year].reduce(
      (acc, rate, index, originalArray) => acc + rate / originalArray.length,
      0
    ));
    movieAverageRateByYear[year] = averageRateOfYear;
  }
};
