# asynchronous.js

> JavaScript code runs on a single thread (can do 1 thing at a time)

> Synchronous code waits for 1 action to complete before moving on to the next

example: var article = readSync(article_loc);
         console.log(article);
         var authors = readSync(authors_loc);
         console.log(authors);

if the top file is large then it will take a longer time to run the second line
that is why we use asynchronous.js, to combat this problem

readAsync(article_loc, function(){ // this is the asynchronous.js version of the code above
    console.log(article);
});
readAsync(authors_loc, function(){
    console.log(authors);
});

this code passes the thread to run outside of js so that allows the javascript thread to be freed up so it can move onto other things. because js can still only do 1 thing at a time. 

in a nut shell asynchronous.js code can start something now and finish it later.

ASYNC FLOW 

> Callbacks - good 
> Promises - better
> Generators - awesome