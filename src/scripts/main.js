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
      if (rows.length === 9) {
        appendRowButton.disabled = true;
      }

      removeRowButton.disabled = false;

      const newRow = firstRow.cloneNode(true);
      const table = document.querySelector('.field');

      table.append(newRow);
      break;

    case removeRowButton:
      if (rows.length === 3) {
        removeRowButton.disabled = true;
      }
      appendRowButton.disabled = false;

      firstRow.remove();
      break;

    case appendColumnButton:
      if (firstRowChildren.length === 9) {
        appendColumnButton.disabled = true;
      }
      removeColumnButton.disabled = false;

      for (let i = 0; i < rows.length; i++) {
        const newRow = document.createElement('td');

        rows[i].append(newRow);
      }
      break;

    case removeColumnButton:
      let RowlastChild = [];

      for (const i of rows) {
        RowlastChild.push(i.lastElementChild);
      }

      if (firstRowChildren.length > 2) {
        for (const i of RowlastChild) {
          i.remove();
        }
      }

      const newfirstRowChildren = [...document.querySelector('tr').children];

      if (newfirstRowChildren.length === 2) {
        removeColumnButton.disabled = true;
      }
      appendColumnButton.disabled = false;

      break;
  }
});
