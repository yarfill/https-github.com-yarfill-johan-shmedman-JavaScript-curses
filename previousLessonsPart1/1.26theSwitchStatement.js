const day = 'monday';

switch(day) {
  case 'monday': // if this is true the code will be work --> day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday': 
    console.log ('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day');
}

// const day = 'monday';

if(day === "monday") {
 console.log('This is monday!');
} else if(day === "tuesday") {
 console.log(`Well it's tuesday`);
} else if(day === 'wednesday'|| day === 'thursday') { //wednesday OR thursday  (OR --> ||)
  console.log(`Well it's works`);
} else if(day === 'friday') {
  console.log('Next is friday');
}
else if(day === 'saturday' || day === 'sunday') {
  console.log(`wekends!!!`);
} else{
  console.log('Not a valid day!');
}


// My experiment
const money = 'dirham';

switch(money) {
  case 'dollar':
    console.log('American bank');
    break;
  case 'euro':
    console.log('Europian bank');
    break;
  case 'dirham':
    console.log('Arab Emirates bank');
    break;
}