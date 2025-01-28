// const yaroslav = {
//     firstName: 'Phill', // this is properties!
//     lastName: 'Filatov', // this is properties!
//     birthYear: 1999,  // this is properties!
//     job: 'developer', // this is properties!
//     friends: ['Vova', 'Max', 'Rodya', 'Lazar'], // this is properties!
//     hasDriversLicence: true,
    
    // calcAge: function (birthYear) { // How we can write the function NOW!
    //   return 2025 - birthYear;
    // }

    // calcAge: function () { // How we can write the function NOW!
    //   // console.log(this);
    //   return 2025 - this.birthYear;
    // }

  //   calcAge: function () { // How we can write the function NOW!
  //     this.age = 2025 - this.birthYear;
  //     return this.age;
  //   }
  // };
  // 2 ways to call the function 
  // console.log(yaroslav.calcAge(1999));
  // // console.log(yaroslav['calcAge'](1999));
  // console.log(yaroslav.age);
  // console.log(yaroslav.calcAge(1999));
  // console.log(yaroslav.calcAge(1999));
  // const calcAge =  function (birthYear) { // How we write the function before
  //   return 2025 - birthYear;
  // };

  // function calcAge(birthYear) {
  //   return 2025 - birthYear;    // Not gonna work because this is a declaration! HERE WE NEED AN EXPRESSION
  // };

  // Challenge from this lesson.

  const yaroslav = {
    firstName: 'Phill', // this is properties!
    lastName: 'Filatov', // this is properties!
    birthYear: 1999,  // this is properties!
    job: 'developer', // this is properties!
    friends: ['Vova', 'Max', 'Rodya', 'Lazar'], // this is properties!
    hasDriversLicence: true,

    calcAge: function () { // How we can write the function NOW!
      this.age = 2025 - this.birthYear;
      return this.age;
    },

    getSummary: function() {
      return `${this.firstName} is a ${this.calcAge()} years old ${yaroslav.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's lisence`
    }
  };

  console.log(yaroslav.getSummary());
