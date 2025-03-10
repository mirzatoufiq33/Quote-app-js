let card = document.querySelector(".card");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn = document.querySelector("button");
let body = document.querySelector("body");

const fetchQuote = async () =>{
    const res = await fetch(`https://quotable.io/random`);
    const quote = await res.json();
    h1.innerText = await quote.content;
    p.innerText = await quote.author;
}

// When Document Loads
fetchQuote();

// When Clicked
btn.addEventListener("click", fetchQuote);

// Every 10 Seconds
setInterval(() => {
    fetchQuote();
}, 10000);