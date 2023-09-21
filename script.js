let input = document.querySelector('input');
let button = document.querySelector('button');
let div = document.querySelector('div');

button.addEventListener('click', (e) => AddTODO(e));

function AddTODO(e) {
  e.preventDefault();
  if (input.value == '') return;
  let div_2 = document.createElement('div');
  let h3 = document.createElement('h3');
  let span = document.createElement('span');
  let span_2 = document.createElement('span');
  span.textContent = '-';
  span_2.textContent = 'rename';
  h3.innerText = input.value;
  div_2.classList.add('div-2');
  span.classList.add('span');
  span_2.classList.add('span-2');
  div_2.appendChild(h3);
  div_2.appendChild(span);
  div_2.appendChild(span_2);
  div.appendChild(div_2);
  input.value = '';
  span.addEventListener('click', () => RemoveTODO(h3, span, span_2));
  span_2.addEventListener('click', () => RenameTODO(h3));
}

function RemoveTODO(header3, spanElement, spanElement2) {
  header3.textContent = '';
  spanElement.textContent = '';
  spanElement2.textContent = '';
  spanElement.classList.remove('span');
  spanElement2.classList.remove('span-2');
}

function RenameTODO(header3) {
  let span_3 = document.createElement('span');
  span_3.textContent = 'update';
  let input = document.createElement('input');
  let div_2 = document.createElement('div');
  input.value = header3.textContent;
  div_2.classList.add('div-2');
  span_3.classList.add('span-3');
  div_2.appendChild(input);
  div.appendChild(div_2);
  div.appendChild(span_3);

  span_3.addEventListener('click', () => {
    header3.textContent = input.value;
    span_3.textContent = '';
    input.setAttribute('type', 'hidden');
  });
}
