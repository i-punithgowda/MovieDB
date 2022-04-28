const url=window.location.search
const param=new URLSearchParams(url)
const type=param.get('type')
const trendingList=document.querySelector('.trending-list .content-flex')
const anticipatedList=document.querySelector('.anticipated-list .content-flex')
if(type=="movie"){
fetch('../js/movie_db.json')
.then(response=>response.json())
.then((data)=>{
   movies=data.movies;
   var trendingTemplate=``;
  for(var i=0;i<=10;i++){
      trendingTemplate+=`
      <div class="each-content">
                    <div class="content-img">
                        <img src=${movies[i].image} alt="">
                    </div>
                    <div class="content-info">
                        <h3 class="content-name"> <a href=movies.html?id=${movies[i].id}&type=movie><h3>${movies[i].name}</h3></a></h3>
                        <span class="imdb">IMDB : <span class="content-review">${movies[i].review}</span></span>
                    </div>
                </div>
      `
  }

  anticipatedTemplate=``;
   anticipatedMovies= movies.filter((movie)=>{
        return movie.releaseDate==""
    })

    anticipatedMovies.forEach((movie)=>{
        anticipatedTemplate+=`
        <div class="each-content">
        <div class="content-img">
            <img src=${movie.image} alt="">
        </div>
        <div class="content-info">
        <a href=movies.html?id=${movie.id}&type=movie><h3>${movie.name}</h3></a>
        </div>
    </div>
        `
    })
    


  trendingList.innerHTML=trendingTemplate
  anticipatedList.innerHTML=anticipatedTemplate

})
}else if(type=="show"){
    fetch('../js/shows_db.json')
    .then(response=>response.json())
    .then((data)=>{
       movies=data.shows;
       var trendingTemplate=``;
      for(var i=0;i<=10;i++){
          trendingTemplate+=`
          <div class="each-content">
                        <div class="content-img">
                            <img src=${movies[i].image} alt="">
                        </div>
                        <div class="content-info">
                            <h3 class="content-name"> <a href=movies.html?id=${movies[i].id}&type=movie><h3>${movies[i].name}</h3></a></h3>
                            <span class="imdb">IMDB : <span class="content-review">${movies[i].review}</span></span>
                        </div>
                    </div>
          `
      }
    
      anticipatedTemplate=``;
       anticipatedMovies= movies.filter((movie)=>{
            return movie.releaseDate==""
        })
    
        anticipatedMovies.forEach((movie)=>{
            anticipatedTemplate+=`
            <div class="each-content">
            <div class="content-img">
                <img src=${movie.image} alt="">
            </div>
            <div class="content-info">
            <a href=movies.html?id=${movie.id}&type=movie><h3>${movie.name}</h3></a>
            </div>
        </div>
            `
        })
        
    
    
      trendingList.innerHTML=trendingTemplate
      anticipatedList.innerHTML=anticipatedTemplate
    })    

}