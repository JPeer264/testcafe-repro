const inputEl = document.querySelector('input.focused-element');
const anotherInputEl = document.querySelector('input.another-element');

(inputEl as HTMLElement).focus();

inputEl.addEventListener('blur', () => {
  const someDiv = document.createElement('div');

  someDiv.classList.add('this-should-appear');

  document.body.appendChild(someDiv);
});
