const item=document.querySelectorAll('.item')

item.forEach((link)=>{
    link.addEventListener('click',function(){
        item.forEach(item=>item.classList.remove('active'))
        link.classList.add('active')
    })
})


