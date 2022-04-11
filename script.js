function Poem ({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    this.year = yearFromInternet;
    this.author = authorFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;
}

const poemFromInternet = {
    yearFromInternet : 1962,
    authorFromInternet : "Weöres Sándor",
    titleFromInternet : "Énhasadás",
    textFromInternet : 
    `Utcasarkon várok rám,
    fél órája is van tán,
    ám értelmem felragyog,
    nem jövök, mert itt vagyok.`
};

const favouritePopemOfAndras = new Poem (poemFromInternet);
console.log(favouritePopemOfAndras);