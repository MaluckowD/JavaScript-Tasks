'use strict'
const login = prompt("Кто там:")

if (login === "Админ"){
    const password = prompt("Введите пароль")
    alert(password === "Я Главный" ? "Здравствуйте" : password === "" || password === null ? "Отменено" : "Неверный пароль")
    console.log(password)
}

else if (login === "" || login === null){
    alert("Отменено")
}
else{
    alert("Я вас не знаю")
    console.log(login)
}

