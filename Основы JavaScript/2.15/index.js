
// task 1

function checkAge(age) {

  return age > 18 ? true : confirm('Родители разрешили?')
  return (age > 18) || confirm('Родители разрешили?');
}


function min(a, b) {
  return a > b ? b : a
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}