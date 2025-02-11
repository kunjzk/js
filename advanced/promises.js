// 1: Promise Creation

function fetchData() {
  // fetch some data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched successfully");
      } else {
        reject("error fetching data");
      }
    }, 3000);
  });
}

// 2: Promise consumption
let response = fetchData();
console.log(response); // This will return Promise { <pending> } for 3 seconds then exit.

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

fetchData()
  .then((data) => {
    console.log(data);
    return "Cool stuff";
  })
  .then((value) => {
    console.log("Received " + value + " from the previous then statement");
  })
  .catch((data) => {
    console.log(data);
  });
