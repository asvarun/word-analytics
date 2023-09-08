const textArea = document.querySelector('.text-area');
const charactersNumber = document.querySelector('.character-count');
const wordsNumber = document.querySelector('.word-count');
const twitterNumber = document.querySelector('.twitter-count');
const facebookNumber = document.querySelector('.facebook-count');

function inputHandler() {
  const numberOfCharacters = textArea.value.length;
  charactersNumber.textContent = numberOfCharacters;

  const twitterCharactersLeft = 10 - numberOfCharacters;
  twitterNumber.textContent = twitterCharactersLeft;

  if (twitterCharactersLeft < 0) {
    twitterNumber.classList.add('char-limit');
  } else if (twitterCharactersLeft >= 0) {
    twitterNumber.classList.remove('char-limit');
  }

  const facebookCharactersLeft = 20 - numberOfCharacters;
  facebookNumber.textContent = facebookCharactersLeft;

  if (facebookCharactersLeft < 0) {
    facebookNumber.classList.add('char-limit');
  } else if (facebookCharactersLeft >= 0) {
    facebookNumber.classList.remove('char-limit');
  }

  const numberOfWords = textArea.value.split(' ');
  const wordLength = numberOfWords.length;
  wordsNumber.textContent = wordLength;

  if (textArea.value.trim().length === 0) {
    wordsNumber.textContent = 0;
  }
}

textArea.addEventListener('input', inputHandler);
