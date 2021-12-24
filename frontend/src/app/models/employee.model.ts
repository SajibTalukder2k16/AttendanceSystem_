export interface Employee {
  EmployeeId:string;
  FirstName:string;
  LastName:string;
  Designation:string;
  Address:string;
  PhoneNumber:string;
  Email:string;
  PIN:string;
  Role:string;
}
export interface LogInData{
  EmployeeId:string;
  PIN:string;
}
export interface Attendance{
  EmployeeId:string;
  EntryTime:string;
  ExitTime:string;
  Suite:string;
  Date:string;
  Month:string;
  Year:string;
}
export interface MonthYear{
  MonthYear:string;
}
