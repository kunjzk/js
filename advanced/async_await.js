function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
      //reject({ name: "chaicode", url: "https://chaicode.com" }); // if we return a reject we'd trigger the catch condition below
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data");
    const userData = await fetchUserData(); // can only use await with async
    // We pause execution here for 3 seconds - hold the thread
    console.log("user data fetched successfully");
    console.log("User Data: ", userData);
  } catch (error) {
    console.log("Errr fetching data", error);
  }
}

getUserData();
