function friendNumbers(num1, num2) {
  let total1 = 0;
  let total2 = 0;
  let biggerOne;

  if (num1 > num2) biggerOne = num1;
  else biggerOne = num2;

  for (let i = 1; i < biggerOne; i++) {
    if (num1 % i == 0 && num1 > i && i != num1 && i != num2) {
      total1 += i;
    }
    if (num2 % i == 0 && num2 > i && i != num1 && i != num2) {
      total2 += i;
    }
  }
  if (total1 == num2 && total2 == num1)
    console.log("This numbers are friendnumbers");
  else console.log("This numbers ain't be friendnumbers");
}
friendNumbers(284, 220);

function primeNumber(...params) {
  let [numbers] = [params];

  for (let i = 0; i < numbers.length; i++) {
    let state = false;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        state = true;
      }
    }
    if (state == false) {
      console.log(numbers[i]);
    }
  }
}
primeNumber(4, 7, 8, 9, 10, 11, 12, 13);

function findingPrime() {
  for (let i = 1; i <= 1000; i++) {
    let durum = false;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        durum = true;
      }
    }
    if (durum == false) {
      console.log(i);
    }
  }
}
findingPrime();

function findingPerfect() {
  
  
  for (let i = 1; i < 1000; i++) {
    let toplam = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j == 0) {
        toplam += j;
      }
      
    }
    if (toplam == 2 * i) {
      console.log(i);
    
    }
      
  }
}
findingPerfect();
