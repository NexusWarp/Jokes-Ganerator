const btn = document.querySelector(".btn");
let text = document.querySelector(".joketext");
let btnClicked = false;
btn.addEventListener("click", getJoke);

async function  getJoke(){
    text.innerHTML="Loading ...";
    btn.style.visibility ="hidden";
    let response =  await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single");
    let data =  await response.json();
    btn.innerHTML = "One More Please";
  setTimeout(()=>{
    btn.style.visibility = "visible"
  },5000)
    text.innerHTML = data.joke;
}
