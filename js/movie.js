const url=window.location.search
const params=new URLSearchParams(url)
const id=params.get('id')
const type=params.get('type')
const title=document.querySelector('.movie-title h2')
const genre = document.querySelector('.genre span')
const director=document.querySelector('.director')
const producer=document.querySelector('.production')
const description=document.querySelector('.movie-description p')
const review=document.querySelector('.actual-review')
const trailer=document.querySelector('#trailer-frame')
const movieCast=document.querySelector('.movie-cast')
const platforms=document.querySelector('.platform-icons')


function renderData(){
    var castTemplate=''
if(type=="movie"){
    fetch('../js/movie_db.json')
    .then(response=>response.json())
    .then((data)=>{
        movies=data.movies
       var movieData= movies.filter((movie)=>{
            return movie.id==id
        })
      mov=movieData[0]
      cast=mov.cast
      title.innerHTML=mov.name 
      genre.innerHTML=mov.genre
      director.innerHTML=mov.director
      producer.innerHTML=mov.producer
      description.innerHTML=mov.description
      review.innerHTML=mov.review
      trailer.src=mov.trailer
        for (var key in cast){
            castTemplate+=`
        <div class="each-cast">
        <img src=${cast[key][1]}>
        <h3 class="cast-name">${key}</h3>
        <h4 class="cast-role">${cast[key][0]}</h4>
        </div>
      `
        }

        if(mov.platforms==='Netflix'){
            platforms.innerHTML='<img src="../img/netflix.png"/>'
        }else if(mov.platforms==='Disney'){
            platforms.innerHTML='<img src="../img/disney.png"/>'
        }else if(mov.platforms==='hbo'){
            platforms.innerHTML='<img src="../img/hbo.png"/>'
        }


      

      movieCast.innerHTML=castTemplate

    })
}else if(type=='show'){
    fetch('../js/shows_db.json')
    .then(response=>response.json())
    .then((data)=>{
        movies=data.shows
       var movieData= movies.filter((movie)=>{
            return movie.id==id
        })
      mov=movieData[0]
      cast=mov.cast
      title.innerHTML=mov.name 
      genre.innerHTML=mov.genre
      director.innerHTML=mov.director
      producer.innerHTML=mov.producer
      description.innerHTML=mov.description
      review.innerHTML=mov.review
      trailer.src=mov.trailer
        for (var key in cast){
            castTemplate+=`
        <div class="each-cast">
        <img src=${cast[key][1]}>
        <h3 class="cast-name">${key}</h3>
        <h4 class="cast-role">${cast[key][0]}</h4>
        </div>
      `
        }

        if(mov.platforms==='Netflix'){
            platforms.innerHTML='<img src="../img/netflix.png"/>'
        }else if(mov.platforms==='Disney'){
            platforms.innerHTML='<img src="../img/disney.png"/>'
        }else if(mov.platforms==='hbo'){
            platforms.innerHTML='<img src="../img/hbo.png"/>'
        }


      

      movieCast.innerHTML=castTemplate

    })


}
}

renderData()