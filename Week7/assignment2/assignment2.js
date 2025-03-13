// Create the student object
let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    courses: ["Mathematics", "Physics", "Literature"],

     // Method to add a new course
    addCourse: function (courseName) {
        this.courses.push(courseName);
    },
  
    // Method to remove a course
    removeCourse: function (courseName) {
        // Find the index of the course
        const index = this.courses.indexOf(courseName);
        // If the course exists in the array, remove it
        if (index !== -1) {
        this.courses.splice(index, 1);
        }
    },

     // Method to return a string with the student's full name and age
  getInfo: function () {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
  }

};

// Test your methods
student.addCourse("Computer Science");
student.removeCourse("Physics");
console.log(student.courses);
console.log(student.getInfo()); 


// Create a new object named internationalStudent that inherits from student
let internationalStudent = Object.create(student);

// Add a country property to the new object
internationalStudent.country = "Congo"; // Replace with actual country

// Test the new object
console.log(internationalStudent.getInfo());     // Inherited method from student
console.log(internationalStudent.country);       // "YourHomeCountry"


//  function that accepts the student object and logs the course list
function displayStudentCourses(studentObj) {
    console.log("The courses the student is studying are:");
    // Log each course
    studentObj.courses.forEach(course => {
      console.log(course);
    });
  }
  
  //  calling the function with the student object
  displayStudentCourses(student);


// Create an object named grades
let grades = {
    course1: {
      courseName: "Mathematics",
      grade: "A"
    },
    course2: {
      courseName: "Physics",
      grade: "B"
    },
    course3: {
      courseName: "Chemistry",
      grade: "C"
    }
  };
  
  // Function that iterates through the grades object and displays each course name and grade
  function displayGrades(gradesObj) {
    for (let key in gradesObj) {
      console.log(
        `Course: ${gradesObj[key].courseName}, Grade: ${gradesObj[key].grade}`
      );
    }
  }
  
  // Call the function to display the grades
  displayGrades(grades);
  
  function compareStudents(std1, std2) {
    if (
      std1.firstName === std2.firstName &&
      std1.lastName === std2.lastName &&
      std1.age === std2.age
    ) {
      console.log("They are the same student.");
    } else {
      console.log("They are different students.");
    }
  }
  
  // Example usage:
  compareStudents(student, internationalStudent);