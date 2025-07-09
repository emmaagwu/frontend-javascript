/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a new row object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

// Insert the row and store the ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row to include age
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Update and delete the row
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
