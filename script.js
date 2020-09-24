var rain = prompt("How many inches of rain fell?");
let s = "*".repeat(rain);
console.log("rain", s);

let bushels = 50;
if (rain >= 20) {
  bushels = bushels - bushels * 0.1;
} else if (rain < 10) {
  bushels = bushels - bushels * 0.2;
}

var fertilizer = prompt("Did you use fertilizer");
if (fertilizer === "yes") {
  var fertlizerType = prompt(" Did you use premium or regular fertilizer?");
  console.log(fertlizerType);
}
