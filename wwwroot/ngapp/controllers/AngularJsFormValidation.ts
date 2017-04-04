namespace MyApp.Controllers {
    export class EmployeeController {
        public firstName = "";
        public lastName = "";
        public age = 0;
        public employeeType = "";
        public yearlySalary = 0;
        public hourlySalary = 0;

        public add() {
            console.log(`First Name: ${this.firstName}`);
            console.log(`Last Name: ${this.lastName}`);
            console.log(`Age: ${this.age}`);
            console.log(`Employee Type: ${this.employeeType}`);
            console.log(`Employee Yearly Salary: ${this.yearlySalary}`);
            console.log(`Employee Hourly Salary: ${this.hourlySalary}`);
        }
    }

    angular.module('MyApp').controller('EmployeeController', EmployeeController);
}