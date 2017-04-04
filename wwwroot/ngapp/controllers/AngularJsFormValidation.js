var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var EmployeeController = (function () {
            function EmployeeController() {
                this.firstName = "";
                this.lastName = "";
                this.age = 0;
                this.employeeType = "";
                this.yearlySalary = 0;
                this.hourlySalary = 0;
            }
            EmployeeController.prototype.add = function () {
                console.log("First Name: " + this.firstName);
                console.log("Last Name: " + this.lastName);
                console.log("Age: " + this.age);
                console.log("Employee Type: " + this.employeeType);
                console.log("Employee Yearly Salary: " + this.yearlySalary);
                console.log("Employee Hourly Salary: " + this.hourlySalary);
            };
            return EmployeeController;
        }());
        Controllers.EmployeeController = EmployeeController;
        angular.module('MyApp').controller('EmployeeController', EmployeeController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=AngularJsFormValidation.js.map