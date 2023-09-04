  /* 1) Написать скрипт, который выводит списки с товарами
 в интерфейс (на основе массива с объектами).
 Внизу каждого списка выводится итоговая сумма каждого товара.
 А так же в самом конце выводится итоговая сумма 
 и количество всех товаров.*/


let cars = [
    {
        title: "BMW",
        price: 40000,
        count: 15
    },
    {
        title: "Toyota",
        price: 20000,
        count: 13
    },
    {
        title: "Ford",
        price: 30000,
        count: 20
    },
    {
        title: "Chevrolet",
        price: 60000,
        count: 9
    },
    {
        title: "Volkswagen",
        price: 30000,
        count: 13
    },
  ];
  let allPrice = 0;
  let allCounts = 0;
  for (let i=0; i < cars.length; i++){
    const {title, price, count} = cars[i];  

    const newCars = document.createElement("ul");
    const carTitle = document.createElement("li");
    carTitle.innerText = title;

    const carPrice = document.createElement("li");
    carPrice.innerText = price;

    const carCount = document.createElement("li");
    carCount.innerText = count;

    const productTotalPrice = document.createElement("li");
    const totalPrice = price * count;
    productTotalPrice.innerText = "Итого: " + totalPrice;

    newCars.append(carTitle, carPrice, carCount, productTotalPrice);
    document.querySelector("body").append(newCars);

    allPrice += price * + count;
    allCounts += count;
  }
  const sum = document.createElement("p");
  sum.innerText = ".  Сумма цен всех машин : " + allPrice;
  const coun = document.createElement("p");
  coun.innerText = ".  Кол-во всех машин : " + allCounts;
  document.querySelector("body").append(coun);
  document.querySelector("body").append(sum);


// 


const workers = [
    {
        number: 1,
        name: "Bill Gates",
        pos: "Founder Microsoft",
        salary: "$1000"
    },
    {
        number: 2,
        name: "Steve Jobs",
        pos: "Founder Apple",
        salary: "$1200"
    },
    {
        number: 3,
        name: "Larry Page",
        pos: "Founder Google", 
        salary: "$1100"
    },
    {
        number: 4,
        name: "Mark Zuckerberg",
        pos: "Founder Facebook",
        salary: "$1300"
    },
  
];


/*Напишите скрипт, который выводит в интерфейс следующую 
   таблицу(html должен быть пустым, все элементы 
    создаются строго с помощью скриптов):*/

const table = document.createElement("table");

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["No", "Full Name", "Position", "Salary"];

for (let i = 0; i < headers.length; i++) {
    const th = document.createElement("th");
    th.textContent = headers[i];
    headerRow.appendChild(th);
}

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");

for (let i = 0; i < workers.length; i++) {
    const worker = workers[i];
    const row = document.createElement("tr");

    const numberCell = document.createElement("td");
    numberCell.textContent = worker.number;

    const nameCell = document.createElement("td");
    nameCell.textContent = worker.name;

    const posCell = document.createElement("td");
    posCell.textContent = worker.pos;

    const salaryCell = document.createElement("td");
    salaryCell.textContent = worker.salary;

    row.appendChild(numberCell);
    row.appendChild(nameCell);
    row.appendChild(posCell);
    row.appendChild(salaryCell);

    tbody.appendChild(row);
}

table.appendChild(tbody);
document.body.appendChild(table);

/* Дан массив из объектов, в котором хранятся породы 
собак и их возраст. Напишите цикл, 
который создаст для каждого объекта 
параграфы (Пример как должен выглядеть вывод 
    первого объекта:golden retriever's age is 7 ) 
    и добавит в body.*/

const dogs = [
    { breed: "golden retriever", age: 7 },
    { breed: "labrador retriever", age: 4 },
    { breed: "french bulldog", age: 12 },
    { breed: "beagle", age: 6 },
    { breed: "german shepherd dog", age: 2 },
    { breed: "poodle", age: 3 },
    { breed: "bulldog", age: 4 }
  ];
  const body = document.body;
  for (let i = 0; i < dogs.length; i++) {
    const text = dogs[i].breed + "'s age is " + dogs[i].age;
    
    const para = document.createElement("p");
    para.textContent = text;

    body.appendChild(para);
  }


  /*Создайте список с названиями фильмов и 
  годов их выпуска из массива объектов. 
  Массив с объектами создавать самому. 
  Каждый объект должен иметь два ключа – name, year.*/

  const films = [
    { film: "Critters 3", year: 1991 },
    { film: "Poison Ivy", year: 1992 },
    { film: "The Quick and the Dead", year: 1995 },
    { film: "The Man in the Iron Mask", year: 1998 },
    { film: "Inception", year: 2010 },
    { film: "The Great Gatsby", year: 2013 },
    { film: "Killers of the Flower Moon", year: 2023 }
  ];
  for (let i=0; i < films.length; i++){
    const {film, year} = films[i];  

    const newFilms = document.createElement("ul");
    const newfilm = document.createElement("li");
    newfilm.innerText = film;

    const newYear = document.createElement("li");
    newYear.innerText = year;

    newFilms.append(film + " - ", year);
    document.querySelector("body").append(newFilms);
  }
