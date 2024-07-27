function outputPrimeNumber(num){
  if (num <= 1000 && num > 1) {
    for (let i = 2; i < num; i++) {
      if(num % i === 0) {
        return 'Составное число';
      } 
    }
    return 'Простое число';
  } else {
    return 'Неверные данные';
  }
}

console.log(outputPrimeNumber());
