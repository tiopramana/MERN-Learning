// Synchronous programming adalah eksekusi kode yang berjalan satu per satu secara berurutan

console.log("Starting file operations...");

function sleep(miliseconds) {
  let startTime = new Date().getTime();
  console.log("Sleeping for " + miliseconds + " milliseconds...");
  while (new Date().getTime() < startTime + miliseconds) {
    console.log("Still sleeping...");
  }
  console.log("Woke up after " + miliseconds + " milliseconds!");
}

sleep(2000);

console.log("File operations will continue after sleep...");

// Asynchronous programming memungkinkan kode untuk berjalan tanpa harus menunggu proses sebelumnya selesai dengan menggunakan timeout

console.log("Starting file operations...");

function sleep(miliseconds) {
  console.log("Operataion Started");
  setTimeout(() => {
    console.log("Operation Is Running");
  }, miliseconds);
}

sleep(2000);

console.log("File operations will continue after sleep...");
