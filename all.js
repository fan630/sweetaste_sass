let loveBtn = document.querySelectorAll('.itemCard--love')

loveBtn.forEach(item => item.addEventListener('click', function(e){
    if(e.target.classList.contains('fas')){
        console.log(e.target.classList)
        e.target.classList.remove('fas')
        e.target.classList.add('far')
    }else{
        e.target.classList.add('fas')
        e.target.classList.remove('far')
    }
}))