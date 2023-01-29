monthsOfYearMatrix = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};


// back link
function backToIndex() {
    window.open("index.html", "_self");
}


// get arg which is index of article object at JSON data
let params = new URLSearchParams(window.location.search);
let arg = params.get('arg');


/*
FETCH DATA FROM API
SAVE IT
*/

let data = [];

const articles = fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=SjW3MCMm6evjGcwVESaCiQcENNsQKA8P')
.then(response => response.json())
.then(json => {
    return json.results;
});

const arrayObject = () => {
    articles.then(
        (output) => {
            for (const temp in output) {
                if (Object.hasOwnProperty.call(output, temp)) {
                    const item = output[temp];
                    data.push(item);
                };
            };
            return data;
        })
        .then(
            (data) => {
                let articleObj = data[arg];
                // console.log(articleObj);

                const picTarget = document.getElementById("opened-article-pic");
                picTarget.src = `${articleObj.multimedia[0].url}`;

                const titleTarget = document.getElementById("selected-article-title");
                titleTarget.innerText = `${articleObj.title}`;

                const titleBrief = document.getElementById("selected-article-brief");
                titleBrief.innerText = `${articleObj.abstract}`;

                const titleBody = document.getElementById("selected-article-body");
                titleBody.innerText = `${articleObj.abstract}`;

                const pubDate = document.getElementById("pubDate");
                let dateObj = new Date(articleObj.published_date);
                let day = dateObj.getDate();
                let month = monthsOfYearMatrix[dateObj.getMonth() + 1];
                let year = dateObj.getFullYear();
                pubDate.innerText = `${day}-${month}-${year}`;

                const authorName = document.getElementById("author-name");
                authorName.innerText = `${articleObj.byline}`;

            }
        );
}
arrayObject();