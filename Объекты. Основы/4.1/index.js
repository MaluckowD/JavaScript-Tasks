
// task 1

const user = {}

user.name = "John"
user.surname = "Smith"

console.log(user)

user.name = "Pete"

//delete user["name"]
delete user.name

console.log(user)

//task 2

let schedule = {};

const isEmpty = (obj) => {
  for (key in obj) {
    return false
  }

  return true
}

// alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false


// task 3

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const getPrice = (salaries) => {
  let sum = 0
  for (key in salaries) {
    sum += salaries[key]
  }
  return sum
}

console.log(getPrice(salaries))


// task 4

const multiplyNumerc = (menu) => {
  for (let key in menu){
    if (typeof menu[key] === "number"){
      menu[key] *= 2
    }
  }

  return menu
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumerc(menu));