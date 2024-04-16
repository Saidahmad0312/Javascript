function mostSpokenLanguages(countries, count) {
    let languages = {};
    countries.forEach(country => {
        for (let language in country) {
            if (language !== "name") {
                languages[language] = (languages[language] || 0) + country[language];
            }
        }
    });

    let sortedLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]);

    return sortedLanguages.slice(0, count).map(([language, count]) => ({ [language]: count }));
}

let countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
]);

console.log(mostSpokenLanguages(countries, 3));
