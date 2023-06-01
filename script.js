// let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
// let ans=touristSpots.split(" ");
// ans.sort();
// console.log(ans);

let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Metallica'];

function sortBandNamesWithoutArticles(names) {
const articles = ['a', 'an', 'the'];

// Remove articles from band names
const bandNamesWithoutArticles = names.map(name => {
let words = name.split(' ');
// Filter out articles
words = words.filter(word => !articles.includes(word.toLowerCase()));
return words.join(' ');
});

// Sort band names in lexicographic order
bandNamesWithoutArticles.sort();

// Display band names inside ul id='band' tag using li tag
const ulElement = document.getElementById('band');
bandNamesWithoutArticles.forEach(name => {
const liElement = document.createElement('li');
liElement.textContent = name;
ulElement.appendChild(liElement);
});
}

sortBandNamesWithoutArticles(bandNames);


