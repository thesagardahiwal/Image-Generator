const url = "d_RhRFH6aqqJjwUG4pp3kJtAyO-u07yWAqkxCwqFjvU";

const inp = document.querySelector('#search-input');
const btn = document.querySelector('#search');
const shBtn = document.querySelector('#show-more-button');
const form = document.querySelector('form');
const searchResults = document.querySelector('.search-reasults');
const load = document.querySelector('.loading');

let inputData = "";
let page = 1;

async function searchImages(){
    load.style.display = "block";
    inputData = inp.value;
    const dynamicUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${url}`
    const res = await fetch(dynamicUrl);
    const data = await res.json();
    const resl = data.results;

    if (page === 1){
       searchResults.innerHTML = "";
    }

    resl.map((res)=>{
        load.style.display = "none";
        console.log('start');
        const imageWrapper = document.createElement('div');
        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        const tag = document.createElement('div');
        const a = document.createElement('a');
        imageWrapper.classList .add('reasult');
        tag.classList.add('tag');
        image.classList.add("image");
        image.src = res.urls.small;
        image.alt = res.alt_description;
        a.href = res.links.html;
        a.innerText = "Download"
        a.target = "_black";
        tag.appendChild(a);
        console.log("mission 1");
        imageDiv.appendChild(image);
        console.log("mission 2");
        imageWrapper.appendChild(imageDiv);
        console.log("mission 3");
        imageWrapper.appendChild(tag);
        console.log("mission 4");
        searchResults.appendChild(imageWrapper);
        console.log('finish');
             

    });
    page++;

    if(page>1){
        shBtn.style.display = "block"
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
     page = 1;
     searchImages();
    console.log("listning.")
})
shBtn.addEventListener('click', ()=>{
    
     
     searchImages();
    console.log("listning.")
})


