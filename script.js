const fav = document.getElementById('fav')
const play = document.getElementById('play')
const heart = document.querySelector('.fa-heart')
const music = new Audio('./audios/music.mp3')
music.volume = 0.5

favoritado = false
tocandoMusica = false
desceu = false

fav.addEventListener('click',()=>{
    if (!favoritado){
        favoritado = true
        heart.style.color = "red"
    } else {
        favoritado = false
        heart.style.color = "white"
    }
})

play.addEventListener('click',()=>{
    if (!tocandoMusica){
        tocandoMusica = true
        music.play()
        play.innerHTML = `<i class="fa-solid fa-pause"></i> Pausar`
    } else {
        tocandoMusica = false
        music.pause()
        play.innerHTML = `<i class="fa-solid fa-play"></i> Voltar`
    }
})

function rolarParaBaixo(){
    document.getElementById('julli')
    .scrollIntoView({
        behavior: "smooth"
    })
}