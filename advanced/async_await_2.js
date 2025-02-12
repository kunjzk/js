function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
      //reject({ name: "chaicode", url: "https://chaicode.com" }); // if we return a reject we'd trigger the catch condition below
    }, 3000);
  });
}

function fetchBlogData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "blog", url: "https://chaicode.com/blog" });
      //reject({ name: "chaicode", url: "https://chaicode.com" }); // if we return a reject we'd trigger the catch condition below
    }, 2000);
  });
}

// Now we want to get both types of data in the ase call
async function getUserData() {
  try {
    // OPTION 1: two await calls
    // const userData = await fetchUserData();
    // const blogData = await fetchBlogData();
    // console.log(userData);
    // console.log(blogData);

    // OPTION 2: Promise.all()
    const [userData, blogData] = await Promise.all([
      fetchUserData(),
      fetchBlogData(),
    ]);
    console.log(userData);
    console.log(blogData);
  } catch (error) {
    console.log("Errr fetching data", error);
  }
}

getUserData();
