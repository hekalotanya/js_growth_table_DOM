'use strict';

// write code here
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const firstRow = document.querySelector('tr');
  const rows = [...document.querySelectorAll('tr')];

  removeRowButton.disabled = false;

  if (rows.length === 9) {
    appendRowButton.disabled = true;
  }

  if (rows.length < 10) {
    const newRow = firstRow.cloneNode(true);
    const table = document.querySelector('.field');

    table.append(newRow);
  }
});

removeRowButton.addEventListener('click', () => {
  const firstRow = document.querySelector('tr');
  const rows = [...document.querySelectorAll('tr')];

  appendRowButton.disabled = false;

  if (rows.length === 3) {
    removeRowButton.disabled = true;
  }

  if (rows.length > 2) {
    firstRow.remove();
  }
});

appendColumnButton.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];
  const firstRow = [...document.querySelector('tr').children];

  removeColumnButton.disabled = false;

  if (firstRow.length < 10) {
    for (let i = 0; i < rows.length; i++) {
      const newRow = document.createElement('td');

      rows[i].append(newRow);
    }
  }

  if (firstRow.length === 9) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  const rows = [...document.querySelectorAll('tr')];
  const firstRow = [...document.querySelector('tr').children];

  appendColumnButton.disabled = false;

  if (firstRow.length > 2) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].firstChild.remove();
    }
  }

  if (firstRow.length === 3) {
    removeColumnButton.disabled = true;
  }
});
