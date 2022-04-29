const url = window.location.search
const param = new URLSearchParams(url)
const id = param.get('id')
const type = param.get('type')
var carousel = document.querySelector('.carousel-inner')
var title = document.querySelector('.title')
var actualReview = document.getElementById('actual-review')
var stars = document.querySelectorAll('.review-star')
var lengthReview=document.querySelector('.length-review')
var button = document.querySelector('.submit')
var length=0;
var starCount=0;

if (type == "movie") {
    fetch('../js/movie_db.json')
        .then(response => response.json())
        .then((data) => {
            movies=data.movies
           var mov= movies.filter((movie)=>{
                return movie.id==id
            })

           title.innerHTML=mov[0].name
           count=0

           var carouselTemplate=''



           mov[0].images.forEach((image)=>{
               if(count==0){
                   carouselTemplate+=`
                              <div class="carousel-item active">
                                <img class="d-block w-100 img-carousel rounded" src=${image} alt="First slide">
                              </div>
                   `
                   count=1
               }else{
                   carouselTemplate+=`
                              <div class="carousel-item ">
                                <img class="d-block w-100 img-carousel rounded" src=${image} alt="First slide">
                              </div>
                   `
               }
               
           })

           carousel.innerHTML=carouselTemplate

            
        })
} else if (type == "show") {
    fetch('../js/shows_db.json')
        .then(response => response.json())
        .then((data) => {
            movies=data.shows
           var mov= movies.filter((movie)=>{
                return movie.id==id
            })

           title.innerHTML=mov[0].name
           count=0

           var carouselTemplate=''



           mov[0].images.forEach((image)=>{
               if(count==0){
                   carouselTemplate+=`
                              <div class="carousel-item active">
                                <img class="d-block w-100 img-carousel rounded" src=${image} alt="First slide">
                              </div>
                   `
                   count=1
               }else{
                   carouselTemplate+=`
                              <div class="carousel-item ">
                                <img class="d-block w-100 img-carousel rounded" src=${image} alt="First slide">
                              </div>
                   `
               }
               
           })

           carousel.innerHTML=carouselTemplate

            
        })
    
    }


    actualReview.addEventListener('keyup',()=>{
     length=actualReview.value.length
       lengthReview.innerHTML=length
       if(length>=100){
           lengthReview.classList.remove('text-danger')
           lengthReview.classList.add('text-success')
       }
    })

    stars.forEach((star)=>{
        star.addEventListener('click',()=>{
            starCount=1
            stars.forEach(star=>star.style.color="")
            if(star.classList.contains(5)){
                 stars.forEach(star=>star.style.color="red")
            }else if(star.classList.contains(4)){
                for(var i=0;i<4;i++){
                    stars[i].style.color="red"
                }
            }else if(star.classList.contains(3)){
                for(var i=0;i<3;i++){
                    stars[i].style.color="red"
                }
            }else if(star.classList.contains(2)){
                for(var i=0;i<2;i++){
                    stars[i].style.color="red"
                }
            }else if(star.classList.contains(1)){
                for(var i=0;i<1;i++){
                    stars[i].style.color="red"
                }
            }
        })
    })

    button.addEventListener('click',()=>{
        if(length<100 ){
            alert("Review should be more than 100 charachetrs!!!")
        }else if(starCount==0){
            alert("Rate movie by clicking on stars!")
        }else{
            alert("Review submitted!!")
        }
    })