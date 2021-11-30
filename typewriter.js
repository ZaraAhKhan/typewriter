const sentence = "hello there from lighthouse";
let delay = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },  delay += 50);
}
setTimeout(()=> {
  return console.log("\n");
},1500);
