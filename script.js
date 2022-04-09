var body = document.querySelector('body')
var darkmode = document.querySelector('.darkmode')
var menutog = document.querySelector('.menutog')
var navigation = document.querySelector('.navigation')

darkmode.onclick = function(){
    body.classList.toggle('dark')
    darkmode.classList.toggle('active')
}

menutog.onclick = function(){
    menutog.classList.toggle('active')
    navigation.classList.toggle('hmm')
}