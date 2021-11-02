let arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let delayTime = 100;
arr.forEach((el) => {
  setTimeout(() => {
    process.stdout.write(`${el}`);
  }, delayTime);
  delayTime += 200;
}
);