let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFact);

async function getFact() {
  let number = numberInput.value;

  let res =  await fetch(`http://numbersapi.com/${number}`);
  let data = await res.text();
  console.log(data)
}