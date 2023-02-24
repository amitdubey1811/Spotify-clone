

let index=1;
let audioelement= new Audio('music/2.mp3');
//console.log(audioelement);
let masterplay=document.getElementById('masterplay');
let playbar=document.getElementById('playbar');
let gifitem=document.getElementById('gif');
//let songinfo=document.getElementById('songinfo');

let songinfo=document.getElementById('detail');

let songitem= Array.from(document.getElementsByClassName('songitems'));
let song=[
    {
        songname: "Maan meri jaan" ,filepath:"music/2.mp3", coverpath:"first.jfif"
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

songinfo.innerText=song[index].songname;

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
//      let newmusic=new Audio(`music/${i+1}.mp3`);
//      var x=newmusic.duration();
   
//        console.log(x);
//   elem.getElementsByClassName('timeduration')[0].innerText= parseInt(x) ;
})



const pauseall=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    
    })
}
  
 let songind=0;
Array.from(document.getElementsByClassName('songitemplay')).forEach((element,ind)=>{
    element.addEventListener('click',(e)=>{
   // console.log(e);
      pauseall();
    
      songind=ind;
     if(masterplay.className=="fa-solid fa-2x fa-circle-play"){
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');

     audioelement.currentTime=0;
     audioelement.src=`music/${songind+1}.mp3`;
     songinfo.innerText=song[songind].songname;
     masterplay.className="fa-solid fa-2x fa-circle-pause";
     audioelement.play();

    }
     else
     {  
        if(audioelement.currentTime<=0)
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioelement.currentTime=0;
        audioelement.src=`music/${songind+1}.mp3`;
        songinfo.innerText=song[songind].songname;
        masterplay.className="fa-solid fa-2x fa-circle-play";
        audioelement.pause();
     }

    })

} ) 

document.getElementById('previous').addEventListener('click',()=>{
    if(songind<=0)
    songind=5;
    else
    songind-=1;
    audioelement.src=`music/${songind+1}.mp3`;
    songinfo.innerText=song[songind].songname;
    masterplay.className="fa-solid fa-2x fa-circle-pause";
    audioelement.play();

})

document.getElementById('next').addEventListener('click',()=>{
    if(songind>=5)
    songind=0;
    else
    songind+=1;
    audioelement.src=`music/${songind+1}.mp3`;
   songinfo.innerText=song[songind].songname;
    masterplay.className="fa-solid fa-2x fa-circle-pause";
    audioelement.play();

})



