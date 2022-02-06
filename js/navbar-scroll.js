window.onload = function() {
    if(window.scrollY >= 70) {
        document.getElementById('navbar').classList.add('scrolled');
    }
}

window.onscroll = function() {
    if(window.scrollY >= 70){
        document.getElementById('navbar').classList.add('scrolled')
    }
    else{
        document.getElementById('navbar').classList.remove('scrolled')
    }
}