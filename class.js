class Poem{
    constructor({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
        this.year = yearFromInternet;
        this.author = authorFromInternet;
        this.title = titleFromInternet;
        this.text = textFromInternet;
    };

    logData() {
        console.log(this);
    }
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
Poem.prototype.lang = "Hungarian";
favouritePopemOfAndras.logData();
