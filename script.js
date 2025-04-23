const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },

  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);

// const title = book.title;
// const author = book.author;

// console.log(author, titles);

// OBJECT DESTRUCTURING
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// Add at the end of the array
const endGenres = [...genres, "epic fantasy"];
endGenres;
// Add at the start of the array
const startGenres = ["epic fantacy", ...genres];
startGenres;

/*
const updatedBook = {
  ...book,
  // Adding new Property
  moviePublicationDate: "2001-12-19",
  // Overwiting an exsisting Property
  pages: 1200,
};
updatedBook;

const summary = `${title},a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
} `;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(pagesRange);

const getYear = (str) => str.split("-")[0]; // function expression
console.log(getYear(publicationDate));

// AND OPERATOR
// falsy : '0', '', null, undefined
console.log(true && "Some string");
// 'Some string'
console.log(false && "Some string");
// 'false'
console.log(hasMovieAdaptation && "This book has a movie");
// 'This book has a movie'

console.log(true || "Somestring");
console.log(false || "Somestring");

console.log(book.translations.spanish);

// //IF the result is falsy value
// const spanishTranslation = book.translations.spanish || "Not Translated";
// spanishTranslation; //"Not Translated"

// const count = book.reviews.librarything.reviewsCount ?? "No Data";
// count; // 0

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  //OPTIONAL CHAINING "?"
  // NULLISH COALESCING "??"
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything; //"undefined"
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book)); //"NaN";
*/

//MAPPING AN ARRAY
const books = getBooks();
//Formula = Array.map(callBack function)
const titles = books.map((book) => book.title);
titles; //'The Lord of the Rings', 'The Cyberiad', 'Dune',

//MAPPING AN ARRAY  OF OBJECT
const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
essentialData;
