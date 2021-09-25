let songs=["Ai_kale_muluhadinma_oba_mata_adare","Iridata Palliyedi","Manike Mage Hithe"];

/**handling Events */

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

let currentSong=1;

/**Function Loading */
loadingSongs(songs[currentSong]);

function loadingSongs(song){
    cover.src=`images/${song}.jpeg`;
    title.innerText=song;
    audio.src=`songs/${song}.mp3`;

}

playBtn.addEventListener('click',()=>{
    let isPlaying=
})

