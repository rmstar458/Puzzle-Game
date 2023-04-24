let arr=document.getElementsByClassName("question");
let hint=document.getElementsByClassName("tooltiptext");
var hinttext=["Do you know square of 4 is 16 and 5 is 25.","Carefully observe you surrounding and use you general intelligence","Every living being there has a word hidden in them except the cat","Recall your past, the answer lies there","You are already familiar with the answer, because you have read/listen it somewhere","aaB"];
let isdead=[1,0,0,1,1,0]
let k=0;
for(let i=0;i<arr.length;i++){
    if(i==k){
        arr[i].style.display="block";
    }
    else{
        arr[i].style.display="none";
    }
}
let image=["Images/jungle.jpg","Images/level-1.jpeg","Images/gate.webp","Images/level3.webp","Images/level-4.1.jpeg","Images/level6.webp","Images/level7.webp","none"];
k++;

function myfunc(){
    document.body.style.backgroundImage = "url("+image[k]+")";
    if(k!=7) hint[k-1].innerHTML=hinttext[k-1];
    for(let i=0;i<arr.length;i++){
        if(i==k){
            arr[i].style.display="block";
        }
        else{
            arr[i].style.display="none";
        }
    }
   
    k++;
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

let answer=["0",125,"SHANKT","BOOK,NOVEL,PAGES,READ,STORY,WORDS",3,4,229];

function check(){
    var x=document.getElementsByClassName("level1")[k-2].value;
    console.log(k);
    console.log(x);
    if(x==answer[k-1]){
        document.getElementsByClassName("btn1")[k-2].style.opacity = "1";
        let temp=document.getElementsByClassName("check")[k-2];
        temp.style.backgroundColor="#1aff1a";
        temp.innerHTML="&#10004";
        temp.style.borderRadius="50%";
        temp.style.padding="2%";
        temp.style.fontSize="3rem";
        if(k==7){
            myfunc();
        }
    }
    else{
        if(isdead[k-2]==1){
            document.getElementsByClassName("main")[0].style.display="none";
            document.body.style.backgroundImage = "url(Images/deadend.jpg)";
        }
        else{
            alert("Try Again");
        }
    }
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));
  
   return JSON.parse(jsonPayload);
};
let obj;
function handleCredentialResponse(response) {
    obj=parseJwt(response.credential);
    nextpage();
    
}
function nextpage(){
    if(obj.email_verified==true){
        document.getElementsByClassName("login")[0].style.display="none";
        document.getElementsByClassName("main")[0].style.display="flex";
        document.getElementsByClassName("navbar")[0].style.display="flex"
        document.body.style.backgroundImage = "url("+image[0]+")";
    }
    document.getElementById("hellouser").innerHTML="Hello : "+obj.name;
    document.getElementById("mailiduser").innerHTML="G-Mail : "+obj.email;
}

function onSignout() {
    google.accounts.id.disableAutoSelect();
    document.getElementsByClassName("login")[0].style.display="block";
    document.getElementsByClassName("main")[0].style.display="none";
    document.getElementsByClassName("navbar")[0].style.display="none"
    document.body.style.backgroundImage = "url(Images/background.png)";
}


