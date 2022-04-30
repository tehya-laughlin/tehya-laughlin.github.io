const genQbutton = document.getElementById('js-new-quote');
const quoteText = document.getElementById('js-quote-text');
const author = document.getElementById('author');
const endpoint = 'https://programming-quotes-api.herokuapp.com/Quotes/random';
const prevButton = document.getElementById('js-prev-quote');

let curr = {author: 'No Author', en: 'No previous quote'};
let prev = curr;

async function getQuote(){
  console.log('Into getQuote()');
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText)
    }
      const json = await response.json();
      console.log(json);
      displayQuote(json.en, json.author);
      curr = json;
  } catch(err) {
    console.log('Fail');
    alert('Failed');
  }
}

function displayQuote(q, a){
  if(q !== ''){
    console.log('display gen OK');
    //set the div content in the app box to the quote var
    quoteText.textContent = q;
    author.textContent = a;
  } else {
    console.error('ERROR: Quote gen failed');
  }
}

function quoteButtonClick(){
  console.log('Into quoteButtonClick()');
  prev = curr;
  getQuote();

}

function displayPrevQuote(){
  console.log('Into displayPrevQuote');
  if(prev.en !== ''){
    console.log(curr);
    displayQuote(prev.en,prev.author);
    curr = prev;
  } else {
    console.error('ERROR: Prev Quote Failed');
  }

}

genQbutton.addEventListener('click', quoteButtonClick);
prevButton.addEventListener('click', displayPrevQuote);
