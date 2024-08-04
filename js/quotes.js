const quotes = [
{
    quote:
    "AThe world is a book and those who do not trvavel read only.",
    author: "Saint Augustaine",
},
{
    quote:
    "BThe world is a book and those who do not trvavel read only.",
    author: "Saint Augustaine",
},
{
    quote:
    "CThe world is a book and those who do not trvavel read only.",
    author: "Saint Augustaine",
},
{
    quote:
    "DThe world is a book and those who do not trvavel read only.",
    author: "Saint Augustaine",
},

];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;