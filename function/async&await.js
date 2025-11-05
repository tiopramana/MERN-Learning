const login = () => {
  console.log("Masukan Nama Dan Akun Anda");
  let username = prompt("Masukan Username");
  let password = prompt("Masukan Password");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Pengecekan Data Login");
      if (username === "admin" && password === "1234") {
        resolve("Login Berhasil");
      } else {
        reject("Login Gagal, Silahkan Coba Lagi");
      }
    }, 1000);
  });
};

function goToHomePage(cek) {
  return Promise.resolve(`Goto Home Page : ${cek}`);
}

// Promises

// login()
//   .then((response) => {
//     console.log("Validated Data");
//     return goToHomePage(response);
//   })
//   .then((cek) => {
//     console.log(cek);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Async/Await

async function LoginAsync() {
  try {
    const response = await login();
    console.log("Validated Data");
    const cek = await goToHomePage(response);
    console.log(cek);
  } catch (err) {
    console.error(err);
  }
}

LoginAsync();

const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("API call completed " + time);
    }, time);
  });
};

let multipleApiCalls = [
  makeApiCall(1000),
  makeApiCall(2000),
  makeApiCall(3000),
];

(async function () {
  for (let request of multipleApiCalls) {
    try {
      const response = await request;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
})();
