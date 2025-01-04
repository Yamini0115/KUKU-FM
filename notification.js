 //initialize the countdown value
 let countdown=3;
 
 //get the timer element
 const timerElement=document.getElementById("timer1");
 const timeimg=document.getElementById("img1");
 const timerEle=document.getElementById("p1");
 
 //create an interval to update the timer every second
 const interval=setInterval(show,1000);
   //update the timer display
 
function show(){
timerElement.textContent=countdown;
 //check if the countdown has reached zero
 if(countdown==0){
     clearInterval(interval);  //stop the timer
     timeimg.src="91d293c9dcbb42e2ad388d3fa4380110.webp";
     timerEle.textContent=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia est nisi natus, debitis eius sunt. Modi accusantium assumenda veniam fugiat excepturi ad rerum hic qui aut expedit mollitia dicta, dignissimos voluptatem? Eveniet dolore dolorem iusto incidunt illum quidem, libero quas corporis repudiandae commodi minus voluptatum, eos vero? Quasi, amet iure porro temporibus odit voluptas ut modi? Tenetur obcaecati unde, magnam inventore eius voluptatum atque nihil vitae officiis, accusantium in veniam nam laudantium dolorum a quisquam, voluptatibus eaque ad optio esse porro culpa. Aut libero a aperiam obcaecati,  veritatis modi. Laborum velit nesciunt quam eum dicta sequi, voluptatum distinctio eius."
     timerEle.style.marginTop="-200px";
     timerEle.style.color="white";
    }
 else{
     countdown--;
 }
   }