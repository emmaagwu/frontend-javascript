// Define a type alias for row ID
export type RowID = number;

// Define an interface for row structure
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optional field
}
