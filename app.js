  let costumer = prompt("Please enter your name");

  let costumer1 =prompt('Please enter your gender (male) or (female)');

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
  let typeOfTem =prompt('Please write your drink down')
  alert('please wait the drink is being prepered')
  
  if (costumer1 == 'male') {
    console.log('Ok Mr ' + costumer + ' ' + 'your order is ' + typeOfDrink + ' ' + typeOfTem);
  }

  else if (costumer1 == 'female') {
    console.log('Ok Ms ' + costumer + ' ' + 'your order is ' + typeOfDrink + ' ' + typeOfTem);
  }
  else {
    console.log('Ok ' + costumer + ' ' + 'your order is ' + typeOfDrink + ' ' + typeOfTem);
  };

