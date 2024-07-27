function createSum(num){
  
  return function(num2){
    return num + num2;
  }
}

const result = createSum(3);
console.log(result(2));