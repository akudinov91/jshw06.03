//Задача 1. Напишите функцию calculateBMI, которая принимает объект с данными о человеке (имя, рост, вес) и возвращает его индекс массы тела (BMI).

// function calculateBMI(person) {
//   if (!person || !person.name || !person.height || !person.weight) {
//     return null;
//   }
//   const bmi = person.weight / (person.height / 100) ** 2;
//   return bmi.toFixed(2);
// }
// const personData = {
//   name: "Иван",
//   height: 175,
//   weight: 70,
// };
// const bmiResult = calculateBMI(personData);
// if (bmiResult !== null) {
//   console.log(
//     `${personData.name}, ваш индекс массы тела (BMI) равен: ${bmiResult}`
//   );
// }

//Задача 2. Создайте функцию findLongestWord, которая принимает массив слов и возвращает самое длинное слово из этого массива.

// function findLongestWord(words) {
//   if (!Array.isArray(words) || words.length === 0) {
//     return "Invalid input. Please provide a non-empty array of words.";
//   }

//   let longestWord = words[0];

//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }
// const wordsArray = ["apple", "banana", "orange", "strawberry", "blueberry"];
// const longestWord = findLongestWord(wordsArray);

// console.log("Самое длинное слово:", longestWord);

//Задача 3. Напишите функцию createUser, которая принимает имя и возраст пользователя, а затем возвращает объект, представляющий этого пользователя со свойствами name и age.

// function createUser(name, age) {
//   let user = {
//     name: name,
//     age: age,
//   };

//   return user;
// }
// let newUser = createUser("Иван", 25);
// console.log(newUser);

// Задача 4. Создайте функцию filterProductsByPrice, которая принимает массив объектов с информацией о продуктах (название и цена), а затем возвращает новый массив с продуктами, цена которых меньше определенной суммы.

// function filterProductsByPrice(products, maxPrice) {
//   const filteredProducts = products.filter(function (product) {
//     return product.price < maxPrice;
//   });

//   return filteredProducts;
// }
// const products = [
//   { name: "Продукт 1", price: 50 },
//   { name: "Продукт 2", price: 30 },
//   { name: "Продукт 3", price: 80 },
//   { name: "Продукт 4", price: 25 },
// ];

// const maxPrice = 40;
// const result = filterProductsByPrice(products, maxPrice);

// console.log(result);

//Задача 5. Напишите функцию getFullName, которая принимает объект с данными о человеке (имя и фамилия) и возвращает его полное имя в формате "Имя Фамилия".

// function getFullName(person) {
//   if (person && person.firstName && person.lastName) {
//     return `${person.firstName} ${person.lastName}`;
//   } else {
//     return "Не удалось получить полное имя";
//   }
// }
// const personData = {
//   firstName: "Андрей",
//   lastName: "Кудинов",
// };
// const fullName = getFullName(personData);
// console.log(fullName);

//Задача 6. Создайте функцию sortByAge, которая принимает массив объектов с информацией о людях (имя и возраст), а затем возвращает этот массив, отсортированный по возрастанию возраста.

// function sortByAge(people) {
//   people.sort(function (a, b) {
//     return a.age - b.age;
//   });
//   return people;
// }

// const peopleArray = [
//   { name: "Andrew", age: 33 },
//   { name: "Gurban", age: 28 },
//   { name: "Ian", age: 36 },
// ];

// const sortedPeople = sortByAge(peopleArray);

// console.log(sortedPeople);

//Задача 7.Напишите функцию formatDate, которая принимает объект с информацией о дате (год, месяц, день) и возвращает строку с отформатированной датой в формате "ГГГГ-ММ-ДД".

// function formatDate(dateObject) {
//   const year = dateObject.year;
//   const month = dateObject.month;
//   const day = dateObject.day;

//   const formattedMonth = month < 10 ? `0${month}` : `${month}`;
//   const formattedDay = day < 10 ? `0${day}` : `${day}`;

//   const formattedDate = `${year}-${formattedMonth}-${formattedDay}`;

//   return formattedDate;
// }

// const dateObject = {
//   year: 2024,
//   month: 3,
//   day: 5,
// };

// const formattedDate = formatDate(dateObject);
// console.log(formattedDate);

//Задача 8. Напишите функцию calculateAverageGrade, которая принимает объект с данными о студенте (имя и массив оценок) и возвращает средний балл этого студента.

// function calculateAverageGrade(studentData) {
//   if (
//     !studentData ||
//     !studentData.grades ||
//     !Array.isArray(studentData.grades) ||
//     studentData.grades.length === 0
//   ) {
//     console.error("Invalid student data or empty grades array.");
//     return null;
//   }

//   const sumOfGrades = studentData.grades.reduce((sum, grade) => sum + grade, 0);
//   const averageGrade = sumOfGrades / studentData.grades.length;

//   return averageGrade;
// }
// const student = {
//   name: "Andrew",
//   grades: [5, 4, 3, 5, 4],
// };

// const averageGrade = calculateAverageGrade(student);
// console.log(`Средний балл студента ${student.name}: ${averageGrade}`);

//Задача 9. Создайте функцию findProductByName, которая принимает массив объектов с информацией о продуктах (название и цена) и название продукта для поиска, а затем возвращает объект с данными о найденном продукте.

// function findProductByName(products, productName) {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].name === productName) {
//       return products[i];
//     }
//   }

//   return null;
// }

// const products = [
//   { name: "Mouse", price: 20 },
//   { name: "Keyboard", price: 30 },
//   { name: "Monitor", price: 200 },
// ];

// const productNameToFind = "Keyboard";
// const foundProduct = findProductByName(products, productNameToFind);

// if (foundProduct) {
//   console.log("Найден продукт:", foundProduct);
// } else {
//   console.log("Продукт с именем", productNameToFind, "не найден.");
// }

//Задача 10. Напишите функцию mergeObjects, которая принимает два объекта и возвращает новый объект, содержащий все свойства из обоих объектов

// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let result = mergeObjects(obj1, obj2);
// console.log(result);

//Задача 11.Создайте функцию filterByCategory, которая принимает массив объектов с информацией о товарах (название, категория и цена) и название категории для фильтрации, а затем возвращает новый массив товаров только из указанной категории.

// function filterByCategory(products, category) {
//   const filteredProducts = products.filter(function (product) {
//     return product.category === category;
//   });

//   return filteredProducts;
// }

// const products = [
//   { name: "Товар1", category: "Категория1", price: 100 },
//   { name: "Товар2", category: "Категория2", price: 150 },
//   { name: "Товар3", category: "Категория1", price: 120 },
//   { name: "Товар4", category: "Категория3", price: 200 },
// ];

// const filteredProducts = filterByCategory(products, "Категория1");
// console.log(filteredProducts);

//Задача 12. Напишите функцию getTotalPages, которая принимает объект с информацией о книге (название и количество страниц) и возвращает общее количество страниц в книге, если она состоит из нескольких частей.

// function getTotalPages(book) {
//   if (book.parts && Array.isArray(book.parts)) {
//     let totalPages = 0;
//     for (let i = 0; i < book.parts.length; i++) {
//       totalPages += book.parts[i].pages;
//     }
//     return totalPages;
//   } else {
//     return book.pages || 0;
//   }
// }

// const bookSinglePart = {
//   title: "Книга без частей",
//   pages: 200,
// };

// const bookMultiPart = {
//   title: "Многотомная книга",
//   parts: [
//     { title: "Часть 1", pages: 100 },
//     { title: "Часть 2", pages: 150 },
//     { title: "Часть 3", pages: 120 },
//   ],
// };

// console.log(getTotalPages(bookSinglePart));
// console.log(getTotalPages(bookMultiPart));
