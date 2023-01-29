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
                for (let idx = 0; idx < data.length; idx++) {

                    // add div for list of all news
                    const element = data[idx];
                    let newDiv = document.createElement("div");
                    newDiv.className = "news-block contentwidth";
                
                    let locToInsert = document.getElementById('newslist');
                    locToInsert.appendChild(newDiv);
                
                    // add section containing info about author, brief (title and a part of text body), and info buttom
                    let container = document.createElement("div");
                    container.className = "container";
                    newDiv.appendChild(container);
                
                    // add top left div
                    let topLeftBlockDiv = document.createElement("div");
                    topLeftBlockDiv.className = "top";
                    container.appendChild(topLeftBlockDiv);
                
                    
                    /* inserting INFO TOP ()*/ 
                
                    // create post info section (author pic, name / topic / publish date) and insert into top left div
                    let infoTopLeft = document.createElement("div");
                    infoTopLeft.className = "info-top";
                    topLeftBlockDiv.appendChild(infoTopLeft);
                
                    // add photo of the author
                    let imagePhotoOfAuthor = document.createElement("img");
                    imagePhotoOfAuthor.src = `./img/person.PNG`;
                    imagePhotoOfAuthor.className = "author-pic";
                    infoTopLeft.appendChild(imagePhotoOfAuthor);
                
                    // add span for the author's name
                    let spanAuthorName = document.createElement("span");
                    spanAuthorName.appendChild(
                        document.createTextNode(`${element.byline}`)
                    );
                    spanAuthorName.className = "black-text";
                    infoTopLeft.appendChild(spanAuthorName);
                
                    // add span for "in" insertion
                    let spanIn = document.createElement("span");
                    spanIn.appendChild(
                        document.createTextNode(`in`)
                    );
                    spanIn.className = "gray-text";
                    infoTopLeft.appendChild(spanIn);
                
                    // add span for post topic insertion
                    let spanPostTopic = document.createElement("span");
                    spanPostTopic.appendChild(
                        document.createTextNode(`${element.section}`)
                    );
                    spanPostTopic.className = "black-text";
                    infoTopLeft.appendChild(spanPostTopic);
                
                    // add dot
                    let spanDot = document.createElement("span");
                    spanDot.appendChild(
                        document.createTextNode(`·`)
                    );
                    spanDot.className = "black-text";
                    infoTopLeft.appendChild(spanDot);
                
                    // add span for post publication date insertion
                    let spanPostPublicationDate = document.createElement("span");
    
                    let dateObj = new Date(element.published_date);

                    let day = dateObj.getDate();
                    let month = monthsOfYearMatrix[dateObj.getMonth() + 1];
                    let year = dateObj.getFullYear();
                    spanPostPublicationDate.appendChild(
                        document.createTextNode(`${day}-${month}-${year}`)
                    );
                    spanPostPublicationDate.className = "gray-text";
                    infoTopLeft.appendChild(spanPostPublicationDate);
                
                    
                
                
                    /* inserting title and brief*/ 
                
                    // create post content section and insert into top left div
                    let contentTitleBriefTopLeft = document.createElement("div");
                    contentTitleBriefTopLeft.className = "top-left-block-div";
                    // EVENT LISTENER
                    contentTitleBriefTopLeft.addEventListener("click", function() {openArticle(idx)});
                    topLeftBlockDiv.appendChild(contentTitleBriefTopLeft);
                    
                    // create title h2 element and insert it into contentTitleBriefTopLeft
                    let pTitle = document.createElement("p");
                    pTitle.className = "post-title";
                    pTitle.appendChild(
                        document.createTextNode(element.title)
                    );
                    contentTitleBriefTopLeft.appendChild(pTitle);
                
                    // create brief paragraph and insert it into contentTitleBriefTopLeft
                    let postBriefParagraph = document.createElement("p");
                    postBriefParagraph.className = "post-brief-paragraph";
                    postBriefParagraph.appendChild(
                        document.createTextNode(element.abstract)
                    );
                    contentTitleBriefTopLeft.appendChild(postBriefParagraph);
                
                
                    /* ------------------------------------ BOTTOM DIV @ NEWS ------------------------------------ */
                    // add bottom div
                    let bottomBlockDiv = document.createElement("div");
                    bottomBlockDiv.className = "bottom-block-div";
                    container.appendChild(bottomBlockDiv);
                
                
                    /*bottom-post-info*/
                
                    // add bottom-post-info
                    let bottomPostInfo = document.createElement("div");
                    bottomPostInfo.className = "bottom-post-info";
                    bottomBlockDiv.appendChild(bottomPostInfo);
                
                    // add btn
                    let btnJavaScript = document.createElement("button"); 
                    btnJavaScript.className = "btn-java-script"
                    btnJavaScript.appendChild(
                        document.createTextNode(`Java Script`)
                    );
                    bottomPostInfo.appendChild(btnJavaScript);
                
                    // add '12 min read' 
                    let minRead = document.createElement("p"); 
                    minRead.className = "min-read"
                    minRead.appendChild(
                        document.createTextNode(`12 min read`)
                    );
                    bottomPostInfo.appendChild(minRead);
                
                    // add dot at bottom info
                    let dotAtBottom = document.createElement("p");
                    dotAtBottom.appendChild(
                        document.createTextNode(`·`)
                    );
                    dotAtBottom.className = "black-text";
                    bottomPostInfo.appendChild(dotAtBottom);
                
                    // add 'Selected for you' 
                    let selectedForYou = document.createElement("p"); 
                    selectedForYou.className = "selected-for-you"
                    selectedForYou.appendChild(
                        document.createTextNode(`Selected for you`)
                    );
                    bottomPostInfo.appendChild(selectedForYou);
                
                
                    /*bottom-actions*/
                
                    // add bottom-actions
                    let bottomActions = document.createElement("div");
                    bottomActions.className = "bottom-actions";
                    bottomBlockDiv.appendChild(bottomActions);
                
                
                    /* ------------------------------------ RIGHTHAND SIDE IMAGE ------------------------------------ */
                
                    // add image for article
                    let imageAtNewsList = document.createElement("img");
                    imageAtNewsList.className = "img-at-news-list";
                    // EVENT LISTENER
                    imageAtNewsList.addEventListener("click", function() {openArticle(idx)});
                    imageAtNewsList.src = `${element.multimedia[2].url}`;
                    imageAtNewsList.alt = "pic"
                    newDiv.appendChild(imageAtNewsList);
                }
            }
        );
}
arrayObject();






// select and open the article
function openArticle(arg) {
    let url = "article.html?arg=" + arg;
    window.open(url, "_self");
}