function abc() {
  console.log(this); // points to the global object
}
abc();

//console.log(this);

let user = {
  firstName: "Anshika",
  lastName: "Agarwal",
  hobbies: ["swimming", "dancing"],
  printFullName: function () {
    //console.log(this.firstName + " " + this.lastName);
    console.log(`${this.firstName} ${this.lastName}`);
  },

  showHobbies() {
    console.log(this.firstName);

    this.hobbies.forEach((hobby) => {
      console.log(this.firstName + " loves " + hobby);
    });
  },
};

user.printFullName();
user.showHobbies();

//console.log(this.firstName);

// Template Literals ---- ES6 feature

// this keyword inside any object points to that object
