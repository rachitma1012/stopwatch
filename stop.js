 // fetching of all elements of the html
 const start = document.querySelector(".start ");
 const stop = document.querySelector(".stop")
 const msec = document.querySelector(".msec");
  const sec = document.querySelector(".sec");
   const minute = document.querySelector(".min");
   const setLap = document.querySelector(".lap");
   const collectionlaps = document.querySelector(".laps");
 const reset = document.querySelector(".reset");
 const btns =document.querySelectorAll(".btn-btn");
 const clearallbtn = document.querySelector(".clear");
 const bg = document.querySelector(".outer");
 let milisec;
 let second = 0
 let miliCounter=0;
 let minuteCount = 0;
 let lapitem = 0;
 // for apending zero in the min sec and milisec
 const appendZero = (value)=>{
 return  value<10?"0"+value:value
 }
 // this variable used for crating only single click function
let click = true;
// eventListener for creating a start button
 start.addEventListener("click",()=>{
     if(click){
         // for animation if timer start
         bg.classList.add("animation-bg");
         // for removing hdeen class from the buttons
         btns[1].classList.remove("hidden");
     btns[2].classList.remove("hidden");
      btns[3].classList.remove("hidden");
      // for creating the timer 
     milisec = setInterval(()=>{
         if(miliCounter===99){
             miliCounter=0
             const zs = ++second;
            sec.innerHTML= `&nbsp;${appendZero(zs)}&nbsp; : &nbsp;`
            if(second===59){
                second=0;
                const zm = ++minuteCount
             minute.innerHTML = `${appendZero(zm)}&nbsp; : &nbsp;`
            }
         }
         const zmsec = ++miliCounter;
         msec.innerHTML = `&nbsp;${appendZero(zmsec)}`
     },10)
     click=false;
     }
 })
 // eventlistner for reseting the timer
 reset.addEventListener("click",()=>{
     click=true;
  
     bg.classList.remove("animation-bg");
     minute.innerHTML= `00&nbsp; : &nbsp;`
     sec.innerHTML = ` &nbsp;00&nbsp; : &nbsp;`
     msec.innerHTML = `&nbsp;00  `

     clearInterval(milisec);
     second = 0;
  miliCounter=0;
  minuteCount = 0;
 })

 // eventlistner for creatin the stop button
 stop.addEventListener("click",()=>{
     click = true;
     bg.classList.remove("animation-bg");
     clearInterval(milisec);
 })
 // for creating the lap
 setLap.addEventListener("click",()=>{
     clearallbtn.classList.remove("hidden");
     const item = document.createElement("li");
     const sp1 = document.createElement("span");

     item.setAttribute("class","lap-item");
     sp1.setAttribute("class","time");
     sp1.innerHTML = `#${++lapitem}.&nbsp;&nbsp;${appendZero(minuteCount)}&nbsp; : &nbsp;${appendZero(second)}&nbsp; : &nbsp;${appendZero(miliCounter)}`;
     item.append(sp1);
     collectionlaps.append(item);
 })
 // this addeventlistner for clearing the lap
clearallbtn.addEventListener("click",()=>{
 collectionlaps.innerHTML = ``;
 clearallbtn.style.display = 'none';
 
})