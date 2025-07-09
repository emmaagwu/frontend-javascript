interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // Allows extra properties like contract, email, etc.
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface for the Student instance
interface Student {
  workOnHomework(): string;
  displayName(): string;
}


// Interface for the Student constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}


const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


// StudentClass implementing the Student interface
class StudentClass implements Student {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Emmanuel", "Agwu");


console.log(teacher3);

console.log(director1);

console.log(printTeacher("John", "Doe"));


console.log(student.displayName()); // Emmanuel
console.log(student.workOnHomework()); // Currently working