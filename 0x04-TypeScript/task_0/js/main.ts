interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Julien',
  lastName: 'Doe',
  age: 20,
  location: 'California'
}

const student2: Student = {
  firstName: 'Emmanuel',
  lastName: 'Agwu',
  age: 22,
  location: 'Lagos'
}

const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
table.border = "1";

const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);