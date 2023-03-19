  let costumer = prompt("Please enter your name");

  let costumer1 =prompt('Please enter your gender (male) or (female)');

  while (costumer1 != "male" && costumer1 != "female") {
    costumer1 = prompt('Please enter your gender (male) or (female)');
  }

  if (costumer1 == 'male') {
    alert(`Welcome Mr ${costumer}`);
  }

  else if (costumer1 == 'female') {
    alert(`Welcome Ms ${costumer}` );
  }
  else {
    alert('Welcome ' + costumer)
  }

  let typeOfDrink =prompt("Do you prefer your drink hot or cold?");
  let typeOfTem =prompt('Please write down your drink☕')
  alert('please wait the drink is being prepered')
  
  if (costumer1 == 'male') {
    console.log('Ok Mr ' + costumer + ' ' + 'your order is ' + typeOfDrink + ' ' + typeOfTem);
  }

  else if (costumer1 == 'female') {
    console.log('Ok Ms ' + costumer + ' ' + 'your order is ' + typeOfDrink + ' ' + typeOfTem);
  }
  else {
    console.log('Ok ' + costumer + ' ' + 'your order is ' + typeOfDrink + ' ' + typeOfTem);
  }

  let answer = [costumer, costumer1, typeOfDrink, typeOfTem];

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }

