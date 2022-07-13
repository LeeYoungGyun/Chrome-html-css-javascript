const quotes = [
    {
        quote: "Tis better to have loved and lost, than never to have loved at all",
        author: "Alfred, Lord Tennyson",
    },
    {
        quote:  "There is always some madness in love. But there is also always some reason in madness.",
        author: "Friedrich Nietzsche ",
    },
    {
        quote:  "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote:  "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
    },
    {
        quote:  "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote:  "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote:  "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David",
    },
    {
        quote:  "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote:  "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;