const item=document.querySelectorAll('.item')
var coverLink=document.querySelector('.cover-img a')
var coverPic=document.querySelector('.cover-img img')
var coverRating=document.querySelector('.cover-img .cover-rating')
var coverTitle=document.querySelector('.cover-img .cover-title')
var actual_selected_category=document.querySelector('.actual-selected-category')
var target_list_trending=document.querySelector('.target-list-trending')
var target_list_anticipated=document.querySelector('.anticipated-list')

item.forEach((link)=>{
    link.addEventListener('click',function(){
        item.forEach(item=>item.classList.remove('active'))
        link.classList.add('active')
        if(link.classList.contains('action')){
            renderGenreData('action')
        }else if(link.classList.contains('home')){
                renderGenreData('crime')
        }else if(link.classList.contains('sci-fi')){
            renderGenreData('sci-fi')
        }else if(link.classList.contains('crime')){
            renderGenreData('crime')
        }else if(link.classList.contains('romance')){
            renderGenreData('romance')
        }else if(link.classList.contains('disney')){
            renderPlatformData('Disney')
        }else if(link.classList.contains('hbo')){
            renderPlatformData('hbo')
        }else if(link.classList.contains('netflix')){
            renderPlatformData('Netflix')
        }
        else if(link.classList.contains('account')){
            alert('This feature is currently under development')
        }else if(link.classList.contains('logout')){
            alert('logging you out!!')
        }
    })

 

})

function renderGenreData(genre){
    var mostPopularTemplate=''
    var trendingTemplate=''
    var mostAnticipatedTemplate=''
    fetch('../js/movie_db.json')
    .then(response=>response.json())
    .then((data)=>{
        var movies=data.movies
        var filteredArray= movies.filter((movie)=>{
            return movie.genre===genre
        })

        var randomNumber=Math.floor(Math.random()*filteredArray.length)
        coverPic.src=filteredArray[randomNumber].image
        coverLink.href=`movies.html?id=${filteredArray[randomNumber].id}&type=movie`
        coverRating.innerHTML=filteredArray[randomNumber].review
        coverTitle.innerHTML=filteredArray[randomNumber].name
        filteredArray.forEach((movie)=>{
            mostPopularTemplate+=`
            <div class="category-data">
                <img src=${movie.thumbnail} alt="">
                <div class="category-data-info">
                    <a href=movies.html?id=${movie.id}&type=movie><h3>${movie.name}</h3></a>
                    <span>IMDB : ${movie.review}</span>
                </div>
            </div>
            `
        })


       
        trendingFiltered=movies.filter((movie)=>{
           return movie.Trending<=2
        })

        trendingFiltered.forEach((movie)=>{
          trendingTemplate+=`
            <div class="each-movie-item">
            <div class="trending-img">
                <img src=${movie.thumbnail} alt="">
            </div>
          <div class="trending-info">
            <a href=movies.html?id=${movie.id}&type=movie style="text-decoration:none;color:#000;"><h4>${movie.name}</h4></a>
            <span>${movie.genre}</span>
            <h6>IMDB : <span class="movie-review">${movie.review}</span></h6>
          </div>
        </div>
            `
        })


        anticipatedFiltered=movies.filter((movie)=>{
            return movie.releaseDate==""
         })
 
         for(var i=0;i<2;i++){
            mostAnticipatedTemplate+=`
            <div class="each-anticipated-movie">
            <div class="trending-img">
                <img src=${anticipatedFiltered[i].thumbnail} alt="">
            </div>
            <div class="trending-info">
                <a href=movies.html?id=${anticipatedFiltered[i].id}&type=movie style="text-decoration:none;color:#000;"><h4></h4></a>
                <span>${anticipatedFiltered[i].name}</span>
                <h6>Produced by : <span class="movie-producer">${anticipatedFiltered[i].producer}</span></h6>
              </div>
        </div>
              `
         }
        
    
        actual_selected_category.innerHTML=mostPopularTemplate;
        target_list_trending.innerHTML=trendingTemplate;
        target_list_anticipated.innerHTML=mostAnticipatedTemplate;
    })
}

function renderPlatformData(platform){
    var mostPopularTemplate=''
    fetch('../js/movie_db.json')
    .then(response=>response.json())
    .then((data)=>{
        var movies=data.movies
        var filteredArray=movies.filter((movie)=>{
           return movie.platforms==platform
        })
        var randomNumber=Math.floor(Math.random()*filteredArray.length)
        coverPic.src=filteredArray[randomNumber].image
        coverLink.href=`movies.html?id=${filteredArray[randomNumber].id}&type=movie`
        coverRating.innerHTML=filteredArray[randomNumber].review
        coverTitle.innerHTML=filteredArray[randomNumber].name
        filteredArray.forEach((movie)=>{
            mostPopularTemplate+=`
            <div class="category-data">
                <img src=${movie.thumbnail} alt="">
                <div class="category-data-info">
                    <a href=movies.html?id=${movie.id}&type=movie><h3>${movie.name}</h3></a>
                    <span>IMDB : ${movie.review}</span>
                </div>
            </div>
            `
        })
        actual_selected_category.innerHTML=mostPopularTemplate;

    
}
    )}


renderGenreData('crime')