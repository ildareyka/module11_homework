function count_even_and_odd(){
  const arr = [0, 1, 2, 3, 0, 4, 5, 6, 0];
  let even = 0;
  let odd = 0;
  let zero = 0;

  for(let i = 0; i < arr.length; i++) {
    if(i % 2 == 0) {
      even++
    } else if (i % 2 !== 0) {
      odd++
    };
  
    if (arr[i] === 0){
      zero++
    }
   };
console.log('Количество четных = ' + even);
console.log('Количество нечетных = ' + odd);
console.log('Количество нулевых элементов = ' + zero);
};

count_even_and_odd();