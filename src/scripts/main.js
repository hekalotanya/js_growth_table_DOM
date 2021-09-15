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
      appendRowButton.disabled =rows.length === 9;
      removeRowButton.disabled = false;

      const newRow = firstRow.cloneNode(true);
      const table = document.querySelector('.field');

      table.append(newRow);
      break;

    case removeRowButton:
      removeRowButton.disabled = rows.length === 3;
      appendRowButton.disabled = false;

      firstRow.remove();
      break;

    case appendColumnButton:

      appendColumnButton.disabled = firstRowChildren.length === 9;
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

      removeColumnButton.disabled = newfirstRowChildren.length === 2;
      appendColumnButton.disabled = false;

      break;
  }
});
