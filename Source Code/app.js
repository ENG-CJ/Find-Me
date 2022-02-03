
// variables
let user_img=document.getElementById('user');
let username=document.getElementById('name');
let $gender= document.getElementById('gender');
let $email = document.getElementById('email');
let number = document.getElementById('number');
let dateOfBirth= document.getElementById('birth');
let country=document.getElementById('country');
let generateButton=document.getElementById('generateBtn');

// function event
generateButton.addEventListener('click',generateUser)

// function display data into the dom
let displayUser=(user)=>{
    let {first, title}=user.results[0].name;
    let {email, gender,phone}=user.results[0];
    let {medium}=user.results[0].picture;
    let {city}=user.results[0].location;
    let {date}=user.results[0].dob;
    
    username.innerHTML=`${title}. ${first}`
    $gender.innerHTML=`${gender}`
    user_img.src=`${medium}`
    $email.innerHTML=email;    
    number.innerHTML=phone;
    country.innerHTML=city;
    dateOfBirth.innerHTML=date;
}


// function fetches the data from api
function generateUser(){
    fetch("https://randomuser.me/api")
    .then(resp => resp.json())
    .then (data => displayUser(data))
    .catch(err=> alert('Data Was Not Found..'))
}



// default function
function defaultFunction(){
    fetch("https://randomuser.me/api")
    .then(resp => resp.json())
    .then (user=>{
    let {first, title}=user.results[0].name;
    let {email, gender,phone}=user.results[0];
    let {medium}=user.results[0].picture;
    let {city}=user.results[0].location;
    let {date}=user.results[0].dob;
    
    username.innerHTML=`${title}. ${first}`
    $gender.innerHTML=`${gender}`
    user_img.src=`${medium}`
    $email.innerHTML=email;    
    number.innerHTML=phone;
    country.innerHTML=city;
    dateOfBirth.innerHTML=date;
        
    }
    
)}

defaultFunction();
