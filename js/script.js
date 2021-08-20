const balance = document.getElementById('main-balance');
const newAmount = document.getElementById('new-item');
const breakdownList = document.getElementById('breakdown-list');
const incExpSelector = document.getElementById('inc-ex-selector');
const addButton = document.getElementById('add-new-item-button');
const newItemDesc = document.getElementById('new-item-description');
let currentBalance = parseInt(balance.innerText);

function numberFormat(num) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
}

addButton.addEventListener('click', function () {
  //Read the amount from the newAmount field
  const addNewAmount = parseInt(newAmount.value);
  //Read if it is an expense or an income
  const incOrExp = incExpSelector.value;
  //create new list item
  const newListItem = document.createElement('li');
  newListItem.classList.add('breakdown-item');
  const newListHeader = document.createElement('h4');
  newListHeader.innerText = newItemDesc.value;
  const newListAmount = document.createElement('p');
  newListAmount.innerText = `${incOrExp === 'income' ? '+' : '-'}${numberFormat(
    addNewAmount
  )}`;

  newListItem.innerHTML += newListHeader.outerHTML + newListAmount.outerHTML;
  breakdownList.appendChild(newListItem);

  //update main balance
  newBalance =
    incOrExp === 'income'
      ? currentBalance + addNewAmount
      : currentBalance - addNewAmount;
  balance.innerText = numberFormat(newBalance);
  currentBalance = newBalance;
});
