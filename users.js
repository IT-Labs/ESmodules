// No module usage

// let users = ['Filip', 'Stefan', 'Nikola'];

// function getUsers() {
//     return users;
// }


// Wrappers

// function usersWrapper() {
//     let users = ['Filip', 'Stefan', 'Nikola'];

//     function getUsers() {
//         return users;
//     }

//     APP.getUsers = getUsers;
// }

// usersWrapper();


// IIFE

// (function () {
//     let users = ['Filip', 'Stefan', 'Nikola'];

//     function getUsers() {
//         return users;
//     }

//     APP.getUsers = getUsers;
// })();


//  Modules

let users = ['Filip', 'Stefan', 'Nikola'];

export default function getUsers() {
    return users;
}

// export default getUsers;