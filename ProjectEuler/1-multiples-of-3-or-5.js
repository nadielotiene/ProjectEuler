function multiplesOf3Or5(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum += i
      }
    }
      // return true;
      return sum;
      console.log(sum);
  }
  
  multiplesOf3Or5(1000);
