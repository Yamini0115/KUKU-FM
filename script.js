 //fixed date
 let da = new Date();
 document.write(da);
 document.getElementById("date").innerHTML=da;

//replace the image

let parent=document.getElementById("dom");
let child=document.getElementById("dom1");
let para=document.createElement("img");
para.src="./92194a8551414a9391d5d8115033a3d7.webp";
para.style.width="250px";
para.style.height="250px";
para.style.backgroundColor="white";
parent.replaceChild(para,child);


//polymorphism:
  class fm {
    available() {

      let parent = document.getElementById("ph");
  
  // Create a list item
  const li = document.createElement("li");
  li.textContent = "";  // You can set some text if needed or leave it blank

  // Create a link
  let link = document.createElement("a");
  link.href = "https://www.google.com";
  link.textContent = "Youtube";
  link.style.color = "orangered";
  
  // Append the link to the list item
  li.appendChild(link);

  // Append the list item to the unordered list
  document.getElementById("list").appendChild(li);


    }
  }

  class yt extends fm {
    available() {
      let parent = document.getElementById("div1");
  
  // Create a list item
  let li = document.createElement("li");
  li.textContent = "";  // You can set some text if needed or leave it blank

  // Create a link
  let link = document.createElement("a");
  link.href = "https://www.google.com";
  link.textContent = "Twitter";
  link.style.color = "orangered";
  
  // Append the link to the list item
  li.appendChild(link);

  // Append the list item to the unordered list
  document.getElementById("list").appendChild(li);


    }
  }

  class tw extends fm {
    available() {
      let parent = document.getElementById("div1");
  
  // Create a list item
  let li = document.createElement("li");
  li.textContent = "";  // You can set some text if needed or leave it blank

  // Create a link
  let link = document.createElement("a");
  link.href = "https://www.google.com";
  link.textContent = "Intragram";
  link.style.color = "orangered";
  
  // Append the link to the list item
  li.appendChild(link);

  // Append the list item to the unordered list
  document.getElementById("list").appendChild(li);


    }
  }

  let kuku = [new fm(), new yt(), new tw()];
  kuku.forEach(fm => fm.available());
 
 
 function display1(){

   window.location.href='./display.html'
 }
     
 