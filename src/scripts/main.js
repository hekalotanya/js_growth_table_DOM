'use strict';

// write code here
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const firstRow = document.querySelector('tr');
  const rows = [...document.querySelectorAll('tr')];
  const firstRowChildren = [...document.querySelector('tr').children];

  switch (e.target) {
    case appendRowButton:
      removeRowButton.disabled = false;

      if (rows.length === 9) {
        appendRowButton.disabled = true;
      }

      if (rows.length < 10) {
        const newRow = firstRow.cloneNode(true);
        const table = document.querySelector('.field');

        table.append(newRow);
      }
      break;

    case removeRowButton:
      appendRowButton.disabled = false;

      if (rows.length === 3) {
        removeRowButton.disabled = true;
      }

      if (rows.length > 2) {
        firstRow.remove();
      }
      break;

    case appendColumnButton:
      removeColumnButton.disabled = false;

      if (firstRowChildren.length < 10) {
        for (let i = 0; i < rows.length; i++) {
          const newRow = document.createElement('td');

          rows[i].append(newRow);
        }
      }

      if (firstRowChildren.length === 9) {
        appendColumnButton.disabled = true;
      }
      break;

    case removeColumnButton:
      appendColumnButton.disabled = false;

      if (firstRowChildren.length > 2) {
        for (let i = 0; i < rows.length; i++) {
          rows[i].firstChild.remove();
        }
      }

      if (firstRowChildren.length === 3) {
        removeColumnButton.disabled = true;
      }
      break;
  }
});
