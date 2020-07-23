// No module usage

// function addUsers(name) {
//   document.getElementById('users-list').innerHTML += `<li>${name}</li>`;

// }

// document.getElementById('submit').addEventListener('click', () => {
//   const input = document.getElementById('input');

//   addUsers(input.value);

//   input.value = '';
// })


// const usersList = window.getUsers()
// usersList.array.forEach(user => addUsers(user));


// Wrappers

// function domWrapper() {
//   function addUsers(name) {
//     document.getElementById('users-list').innerHTML += `<li>${name}</li>`;
  
//   }
  
//   document.getElementById('submit').addEventListener('click', () => {
//     const input = document.getElementById('input');
  
//     addUsers(input.value);
  
//     input.value = '';
//   })
  
  
//   const usersList = APP.getUsers()
//   usersList.forEach(user => addUsers(user));
// }

// domWrapper();


// IIFE

// (function () {
//   function addUsers(name) {
//     document.getElementById('users-list').innerHTML += `<li>${name}</li>`;
  
//   }
  
//   document.getElementById('submit').addEventListener('click', () => {
//     const input = document.getElementById('input');
  
//     addUsers(input.value);
  
//     input.value = '';
//   })
  
  
//   const usersList = APP.getUsers()
//   usersList.forEach(user => addUsers(user));
// })();

// ES Modules

import getUsers from './users.js';

function addUsers(name) {
  document.getElementById('users-list').innerHTML += `<li>${name}</li>`;

}

document.getElementById('submit').addEventListener('click', () => {
  const input = document.getElementById('input');

  addUsers(input.value);

  input.value = '';
})


const usersList = getUsers();
usersList.forEach(user => addUsers(user));


