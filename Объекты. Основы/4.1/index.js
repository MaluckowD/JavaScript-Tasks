
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
    if (obj[key] === undefined){
      return false
    }
  }

  return true
}

// alert( isEmpty(schedule) ); // true


schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
