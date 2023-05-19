export class Employee {
  id : number;
  name : string;
  email : string;
  jobTitle : string;
  phoneNumber : string;
  imageURL : string;
  employeeCode : string;

  constructor(id: number, name: string, email: string, jobTitle: string, phoneNumber: string, imageURL: string, employeeCode: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.jobTitle = jobTitle;
    this.phoneNumber = phoneNumber;
    this.imageURL = imageURL;
    this.employeeCode = employeeCode;
  }
}
