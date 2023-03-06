

let tasks = [{
    taskName: "Walk Dog",
    describe: "Go outside, walk with dog, watch dog pee, go inside",
    pic: "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_1280.jpg",
    level: "Priority Level:",
    like: 0
},{
    taskName: "Finish Code Review",
    describe: "Sit, code, screw up, correct, repeat",
    pic: "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_1280.jpg",
    level: "Priority Level:",
    like: 0
},{
    taskName: "Water Plants",
    describe: "Stand, check soil moisture, water if necessary",
    pic: "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_1280.jpg",
    level: "Priority Level:",
    like: 0
},{
    taskName: "Finish Law Paper",
    describe: "Read, write, read, write, read write, cry, give up, submit",
    pic: "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_1280.jpg",
    level: "Priority Level:",
    like: 0
}];

for(let val of tasks){
document.getElementById("result").innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${val.pic}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.taskName}</h5>
    <p class="card-text">${val.describe}</p>
    <hr>
<br>
    <p class="btn btn-info btn-lg likeBtn "> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-exclamation-triangle-fill fa-lg column" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> ${val.level} <span class="badge text-bg-success likecount" id="bigbig">${val.like}</span></p>
    
   
    
    </div>
  </div>
</div>
`
}

let btns = document.getElementsByClassName("likeBtn");


for(let i =0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
      tasks[i].like++;
        console.log(tasks[i].like)
        // if(tasks[i].like <= 2){
        //     document.getElementById("bigbig").text-bg-danger;
        // }
      
     
    document.getElementsByClassName("likecount")[i].innerHTML = tasks[i].like;
    })
}




