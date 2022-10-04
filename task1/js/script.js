let articleInput = document.getElementById("article");
let addBtn = document.getElementById("addBtn");
let showPlace = document.getElementById("showPlace");

if (localStorage.getItem('articles') != null) {
    displayData();
  }

function displayData(){

    let articleInputInStorage = JSON.parse( localStorage.getItem('articles'));

    let str ;

    for (let i = 0; i < articleInputInStorage.length; i++){

        str += `<li type="button" class="fw-bold ms-0"><a class=" text-decoration-none" id="${articleInputInStorage[i].ind}">${articleInputInStorage[i].val}</a></li>`;

        showPlace.innerHTML = str ;

    }
  }


let allArticles = [];

let index = 0 ;
addBtn.addEventListener('click',function(){
    let value = articleInput.value;
    allArticles.push({ind: index + 1 , val:value ,com:""});
    localStorage.setItem('articles',JSON.stringify(allArticles));
    displayData();
    index = index + 1 ;
});


let allArticle = document.querySelectorAll("a");

for (var i = 0 ; i< allArticle.length; i++) {

    allArticle[i].addEventListener('click',function(e){

    let clickedArticle = e.target;

    let oneArticle =  document.getElementById("oneArticle");

    oneArticle.innerHTML = clickedArticle.innerHTML;

    let placeOfOne =  document.getElementById("placeOfOne");

    placeOfOne.classList.remove("d-none");

    let commentInput = document.getElementById("comment");

    let addComment = document.getElementById("addComment");

    addComment.addEventListener('click',function(){

        let index = clickedArticle.getAttribute('id')-1;

        let comment = commentInput.value;

        let oldData = JSON.parse( localStorage.getItem('articles'));

        oldData[index].com = comment ;
    
        localStorage.setItem('articles', JSON.stringify(oldData));

        let displayFirst = document.getElementById("displayFirst");

        let display = document.getElementById("display");
    
        display.innerHTML = `
        <h3> ${oldData[index].val}</h3>
        <p>${oldData[index].com}</p>
    
        `;

        displayFirst.classList.add("d-none");

        display.classList.remove("d-none");
    });



    });
}

