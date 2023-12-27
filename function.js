const btn = document.querySelector(".btn");
let text = document.querySelector(".joketext");
btn.addEventListener("click", getJoke);

async function  getJoke(){
    let response =  await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single");
    let data =  await response.json();
    console.log(data);
  
    text.innerHTML = data.joke;
}