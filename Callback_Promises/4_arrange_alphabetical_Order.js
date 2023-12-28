// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
    {
        title: "The great escape",
        author: "Paul Brickhill",
        year: 1944,
    },
    {
        title: "Silent Spring",
        author: "Rachel Carson",
        year: 1962,
    },
    {
        title: "Manasi",
        author: "Rabindranath Tagore",
        year: 1890,
    },
    {
        title: "Gitanjli",
        author: "Rabindranath Tagore",
        year: 1910,
    }

];

function logTitles (titles){
    titles.sort();
    console.log(titles.join(", "));
}

function extraTitles(books, callback){
    const titles = books.map((book)=> book.title);
    callback(titles);
}

extraTitles(books, logTitles);
