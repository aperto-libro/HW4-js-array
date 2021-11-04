# HW4-js-array

1. Создайте на вашем github репозиторий с именем HW4-js-array. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.

2. Создайте index.html с базовой разметкой в котором подключите js script с домашним заданием или используйте тег script в котором реализуете домашнее задание.

3. В README.md добавить описание с заданием

4. Перед каждым выполненным заданием разместите
   console.log('------------- # номер выполненного пункта')

5. Замените код Function Expression стрелочной функцией:
   function ask(question, yes, no) {
   if (confirm(question)) yes()
   else no();
   }
   ask(
   "Вы согласны?",
   function() { console.log("Вы согласились."); }, // нужно обновить данное место
   function() { console.log("Вы отменили выполнение."); } // нужно обновить данное место
   );

6. Напишите код который преобразует строку 'my-short-string' в массив значений ['my', 'short', 'string'].

7. Напишите код который преобразует массив ['JavaScript', 2015] в строку вида 'JavaScript 2015'.

8. Отфильтровать всех пользователей которые старше 20 лет. Дан массив данных:
   let users = [{id: 1, name: "Vic", age: 21}, {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
   Должны получить следующий результат: [{id: 3, name: "Jon", age: 5}].

9. У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
   let users = [{id: 1, name: "Vic", age: 21}, {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
   let names = /_ ... ваш код _/
   console.log( names ); // [Vic, Petya, Jon]

10. Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
    Функция должна изменять принимаемый массив и ничего не возвращать.
    Например:
    let arr = [5, 3, 8, 1];
    filterRangeInPlace(arr, 1, 4);
    console.log( arr ); // [3, 1]

11. Написать функцию которая будет преобразовывать строку в массив. Первый аргумент функции должен принимать строку, второй аргумент функции должен принимать разделитель (сепаратор). Функция должна возвращать полученный массив.

12. Напишите функцию slArray(arr, startIndex, endIndex), которая принимает массив arr, и возвращает новый массив, в который должна скопировать значения в рендже с startIndex, endIndex.
    Функция должна возвращать новый массив и не изменять исходный.
    Например:
    let arr = [5, 3, 8, 1];
    let range = slArray(arr, 1, 4);
    console.log( range ); // 3, 8, 1
    console.log( arr ); // 5,3,8,1 (без изменений)

13. Напишите функцию суммирования sum, которая принимает аргументы с помощью spread operator. Функция sum должна возвращать результат суммирования всех значений которые передаются в функцию.
