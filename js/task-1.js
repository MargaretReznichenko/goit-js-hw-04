//Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює чи помістяться всі
//товари в контейнер при пакуванні.
//Функція оголошує два парамерти
//products-об'єкт, у якому ключі містять назви товарів, а їхні
//значення-кількість цих товарів.Наприклад {appless 2, grapes 4 }.
//containerSize - число, максимальна кількість одиниць товарів,
//яку в себе може вмістити контейнер.
//Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.
//Тобто порахувати загальну кількість товарів в об'єкті products і повернути false, якщо ні.


function isEnoughCapacity(products, containerSize) {
  let sum = 0;
  for (const value of Object.values(products)) {
    sum += value;
  }
  return sum <= containerSize;
}


console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
