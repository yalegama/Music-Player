let songs=["Ai_kale_muluhadinma_oba_mata_adare","Iridata Palliyedi","Manike Mage Hithe"];

/**handling Events */

let container=document.getElementById('container');
let cover=document.getElementById('cover');
let title=document.getElementById('title');
let progress=document.getElementById('progress');
let shuffle=document.getElementById('shuffle');
let preBtn=document.getElementById('preBtn');
let playBtn=document.getElementById('playBtn');
let nextBtn=document.getElementById('nextBtn');
let repeat=document.getElementById('repeat');
let audio=document.getElementById('audio');

/*current Song Index*/

let currentSong=0;

/**Function Loading */
loadingSongs(songs[currentSong]);

function loadingSongs(song){
    cover.src=`images/${song}.jpeg`;
    title.innerText=song;
    audio.src=`songs/${song}.mp3`;

}

playBtn.addEventListener('click',()=>{
    let isPlaying=container.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})

/**pause function */
function pauseSong(){
    container.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
    
}

/**Play Song Function */
function playSong(){
    container.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}


/**Play Next Song  */
nextBtn.addEventListener('click',()=>{
    currentSong++;
    loadingSongs(songs[currentSong]);
    playSong();
})

/**Previous Song */

preBtn.addEventListener('click',()=>{
    currentSong--;

    loadingSongs(songs[currentSong]);
    playSong();
})