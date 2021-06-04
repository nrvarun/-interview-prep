/* eslint-disable compat/compat */
let myPromise = new Promise((res, rej) => {
  if (true) {
    res('success');
  } else {
    rej('failure');
  }
}).catch((error) => console.log('Error:', error));

myPromise
  .then((success) => console.log(success))
  .catch((rej) => console.log(rej));

// A simple promise that resolves after a given time
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t <= 1000) {
        reject(`Rejected in ${t}`);
      }
      resolve(`Completed in ${t}`);
    }, t);
  });
};

// Resolving a normal promise.
timeOut(1000).then((result) => console.log(result)); // Completed in 1000

// Promise.all
Promise.all([
  timeOut(1000).catch((e) => e),
  timeOut(2000).catch((e) => e),
]).then((result) => console.log(result)); // ["Completed in 1000", "Completed in 2000"]

//Promise.race
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise.race([promiseOne, promiseTwo]).then((result) => {
  console.log('Race success,', result); // 'two'
});

// // Function to fetch Github info of a user.
// const fetchGithubInfo = async (url) => {
//   console.log(`Fetching ${url}`);
//   const githubRes = await fetch(url); // API call to get user info from Github.
//   const githubData = await githubRes.json();

//   return {
//     name: githubData.name,
//     bio: githubData.bio,
//     repos: githubData.public_repos,
//   };
// };

// // Iterates all users and returns their Github info.
// const fetchUserInfo = async (names) => {
//   const requests = names.map((name) => {
//     const url = `https://api.github.com/users/${name}`;
//     return fetchGithubInfo(url) // Async function that fetches the user info.
//       .then((a) => {
//         return a; // Returns the user info.
//       });
//   });
//   return Promise.all(requests); // Waiting for all the requests to get resolved.
// };

// fetchUserInfo(["sindresorhus", "yyx990803", "gaearon"]).then((a) =>
//   console.log(JSON.stringify(a))
// );

/*
Output:
[{
  "name": "Sindre Sorhus",
  "bio": "Full-Time Open-Sourcerer ·· Maker ·· Into Swift and Node.js ",
  "repos": 996
}, {
  "name": "Evan You",
  "bio": "Creator of @vuejs, previously @meteor & @google",
  "repos": 151
}, {
  "name": "Dan Abramov",
  "bio": "Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.",
  "repos": 232
}]
*/

setTimeout(() => {
  console.log('first');
}, 0);

console.log('second');
