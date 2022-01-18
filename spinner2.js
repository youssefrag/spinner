const symbols = "|/-\\|/-\\|"
let time = 100
for (let char of symbols) {
  setTimeout(() => {
    process.stdout.write('\r' + char)
  }, time);
  time += 200;
}
setTimeout(() => {
    console.log("")
  }, time);