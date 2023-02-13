

let index=2;
let audioelement= new Audio('music/2.mp3');
let masterplay=document.getElementById('masterplay');
let playbar=document.getElementById('playbar');
let gifitem=document.getElementById('gif');

let songitem= Array.from(document.getElementsByClassName('songitems'));
let song=[
    {
        songname: "maan meri jaan" ,filepath:"music/2.mp3", coverpath:"first.jfif"
    },
    {
        songname: "Kahani suno" ,filepath:"music/3.mp3", coverpath:"cover/3.jfif"
    },
    {
        songname: "Kesariya" ,filepath:"music/4.mp3", coverpath:"cover/4.jpg"
    },
    {
        songname: "Srivalli" ,filepath:"music/5.mp3", coverpath:"cover/5.jpg"
    },
    {
        songname: "Oo bolega Oo" ,filepath:"music/6.mp3", coverpath:"cover/6.jpg"
    },
    {
        songname: "Barish me tum" ,filepath:"music/6.mp3", coverpath:"cover/7.jpg"
    }

   
]

//to play music
masterplay.addEventListener('click',()=>{
  if(audioelement.paused || audioelement.currentTime<=0)
  {
    audioelement.play();
    masterplay.className="fa-solid fa-2x fa-circle-pause";
    gifitem.style.opacity="0.75";
  }
  else{
  audioelement.pause();
  pauseall();
  masterplay.className="fa-solid fa-2x fa-circle-play";
  gifitem.style.opacity="0";
}
})


 
 audioelement.addEventListener('timeupdate',()=>{
   
    let currval=  parseFloat( (audioelement.currentTime/audioelement.duration )*100);
    
   // console.log(currval);

    playbar.value=currval;
   
 })

 playbar.addEventListener('change',()=>{
   
    
    audioelement.currentTime=audioelement.duration*playbar.value/100;

    
 })

songitem.forEach((elem,i)=>{
   // console.log(elem);
    elem.getElementsByTagName('img')[0].src=song[i].coverpath;
    elem.getElementsByClassName('names')[0].innerText=song[i].songname;
})

const pauseall=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element,ind)=>{
    element.addEventListener('click',(e)=>{
    console.log(e);
      pauseall();

     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioelement.currentTime=0;
      audioelement.src=`music/${ind+1}.mp3`
      masterplay.className="fa-solid fa-2x fa-circle-pause";
      audioelement.play();
    })

} ) 