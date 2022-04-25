const item=document.querySelectorAll('.item')
var coverLink=document.querySelector('.cover-img a')
var coverPic=document.querySelector('.cover-img img')
var coverRating=document.querySelector('.cover-img .cover-rating')
var coverTitle=document.querySelector('.cover-img .cover-title')
var selectedCategory="";





item.forEach((link)=>{
    link.addEventListener('click',function(){
        item.forEach(item=>item.classList.remove('active'))
        link.classList.add('active')
        if(link.classList.contains('action')){
            renderGenreData('action')
        }else if(link.classList.contains('home')){
            renderPlatformData('random')
        }else if(link.classList.contains('sci-fi')){
            renderGenreData('sci-fi')
        }else if(link.classList.contains('crime')){
            renderGenreData('crime')
        }else if(link.classList.contains('romance')){
            renderGenreData('romance')
        }else if(link.classList.contains('disney')){
            renderPlatformData('disney')
        }else if(link.classList.contains('hbo')){
            renderPlatformData('hbo')
        }else if(link.classList.contains('hbo')){
            renderPlatformData('netflix')
        }
        else if(link.classList.contains('account')){
            alert('This feature is currently under development')
        }else if(link.classList.contains('logout')){
            alert('logging you out!!')
        }
    })

 

})

function renderGenreData(genre){
    fetch('../js/movie_db.json')
    .then(response=>response.json())
    .then((data)=>{
        movies=data.movies
       filteredArray= movies.filter((movie)=>{
            return movie.genre===genre
        })
        console.log(filteredArray)
        var randomNumber=Math.floor(Math.random()*2)
        console.log(filteredArray[randomNumber].review)
        coverPic.src=filteredArray[randomNumber].image
        coverLink.href=`movies.html?id=${filteredArray[randomNumber].id}`
        coverRating.innerHTML=filteredArray[randomNumber].review
        coverTitle.innerHTML=filteredArray[randomNumber].name
    })
}

function renderPlatformData(platform){
    alert(platform)
}
