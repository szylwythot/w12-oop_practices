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

const pdYear = poemFromInternet.yearFromInternet;
const pdAuthor = poemFromInternet.authorFromInternet;
// const pdTitle = poemFromInternet.titleFromInternet;
// const pdText = poemFromInternet.textFromInternet;

// const {yearFromInternet, authorFromInternet} = poemFromInternet;

// console.log(yearFromInternet);
// console.log(authorFromInternet);


function funWithPointData({yearFromInternet, authorFromInternet}) {
    console.log(yearFromInternet);
    console.log(authorFromInternet);
}

funWithPointData(poemFromInternet);