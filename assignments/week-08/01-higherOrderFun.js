const radius = [3, 7, 14, 10];

const area = function (radius) {
  return Number((Math.PI * radius * radius).toFixed(2));
};

const circumference = function (radius) {
  return Number((Math.PI * radius * 2).toFixed(2));
};

function calculate(logic, radius) {
  const output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
}

console.log(calculate(area, radius));
console.log(calculate(circumference, radius));
