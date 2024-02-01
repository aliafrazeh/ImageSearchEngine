// variables
const searchForm = document.querySelector('#search-form')
const searchBox = document.querySelector('#search-box')
const searchResult = document.querySelector('#search-result')
const showMoreBtn = document.querySelector('#show-more-btn')
let keyword = "";
let page = 1;
const accessKey = '6w3-O2x-UfXY2nEbjMp_lhUVMtW_OWQJcGi4vOZpMfc';
eventlisteners()
// eventlisteners
function eventlisteners(){
    searchForm.addEventListener('submit',e=>{
        e.preventDefault();
        page = 1;
        if (searchBox.value === '' || searchBox.value == null || searchBox.value.length === 0){

        }else{
            searchImage();
        }
    })
    showMoreBtn.addEventListener('click',()=>{
        page++;
        searchImage();    
    })
}

// functions

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${page}`;
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1){
        searchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = result.urls.raw;
        imageLink.target = "_blank";
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)

    })
    showMoreBtn.style.display = "block"

}
