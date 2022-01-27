// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  const directors = arr.map((eachDirector) => {
  return eachDirector.director;
  })
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spilbergMovies = arr.filter ( (eachSpilbergMovie) => {

    if (eachSpilbergMovie.director === "Steven Spielberg" && (eachSpilbergMovie.genre).includes("Drama")) {
      return eachSpilbergMovie;
    }    
  })
  return spilbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {

  if (arr.length === 0){
    return 0;
  }

  let totalScore = arr.reduce ( (accumulator, eachScore) => {
    if (eachScore.score === undefined) {
      return accumulator;
    } else {
      return accumulator + eachScore.score;
    }    
  }, 0)
  let totalScoreAverage = (totalScore / arr.length).toFixed(2);
  return Number (totalScoreAverage);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {

  if (arr.length === 0){
    return 0;
  }

  let allDrama = 0

  let totalDramaScore = arr.reduce ( (accumulator, eachDramaScore) => {    
    if ((eachDramaScore.genre).includes("Drama")) {
      allDrama ++; 
      return accumulator + eachDramaScore.score;
    } else if (eachDramaScore.score === undefined) {
      return accumulator;       
    } else {
      return accumulator;
    }    
  }, 0)

  if (allDrama === 0) {
    return 0;
  }  
  let totalDramaAverage = (totalDramaScore / allDrama).toFixed(2);
  return Number (totalDramaAverage);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let clonArr = JSON.parse(JSON.stringify(arr));
  let ascendingYear = clonArr.sort((firstYear, secondYear) => {
    if (firstYear.year > secondYear.year) {
      return 1;
    } else {
      return -1;
    }
  })
  return ascendingYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  
  let allTitles = arr.map((eachTitle)=> {
    return eachTitle.title;
  })
  let copyArr = JSON.parse(JSON.stringify(allTitles));
  let alphabeticTitles = copyArr.sort();

  if (alphabeticTitles.length > 20) {
    alphabeticTitles.slice(0, 20);
  } 

  return alphabeticTitles;
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
    bestYearAvg,
  }
} 