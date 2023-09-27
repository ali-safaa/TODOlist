let inputTag = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');
let updateDiv = document.querySelector('[data-updateDiv]');

button.addEventListener('click', (e) => AddTODO(e));

function AddTODO(e) {
  e.preventDefault();
  if (inputTag.value == '') return;

  let div_2 = document.createElement('div');
  let h3 = document.createElement('h3');
  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  let span_2 = document.createElement('span');

  h3.innerText = inputTag.value;
  span_2.innerText = 'rename';
  div_2.classList.add('div-2');
  input.classList.add('input-checkbox');
  span_2.classList.add('span-2');
  div_2.appendChild(h3);
  div_2.appendChild(input);
  div_2.appendChild(span_2);
  div.appendChild(div_2);
  inputTag.value = '';
  input.addEventListener('click', () => DoneTODO(h3, input, span_2));
  span_2.addEventListener('click', () => RenameTODO(h3));
}

function DoneTODO(header3, checkbox, spanElement2) {
  if (checkbox.checked) {
    header3.classList.add('todo-done');
    spanElement2.textContent = '';
    spanElement2.classList.remove('span-2');
  } else {
    header3.classList.remove('todo-done');
    spanElement2.textContent = 'rename';
    spanElement2.classList.add('span-2');
  }
}

function RenameTODO(header3) {
  let span_3 = document.createElement('span');
  let input_2 = document.createElement('input');
  let div_2 = document.createElement('div');

  input_2.value = header3.textContent;
  span_3.textContent = 'update';

  // div.classList.add('rename-value');
  div_2.classList.add('div-2');
  span_3.classList.add('span-3');
  input_2.classList.add('input-2');
  div_2.appendChild(input_2);
  div_2.appendChild(span_3);
  updateDiv.appendChild(div_2);

  span_3.addEventListener('click', () => {
    header3.textContent = input_2.value;
    span_3.textContent = '';
    input_2.setAttribute('type', 'hidden');
    span_3.classList.remove('span-3');
  });
}
