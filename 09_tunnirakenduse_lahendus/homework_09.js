var Salary = /** @class */ (function () {
    //constructor runs when a new water object is created
    function Salary(jobName, jobStatus) {
        this.hourWage = 0;
        this.salaryContributor = 1;
        this.daySalary = 1;
        this.jobName = jobName;
        this.jobStatus = jobStatus;
    }
    Salary.prototype.getHourWage = function () {
        if (this.jobName === "teacher") {
            this.hourWage = 11 * this.salaryContributor;
        }
        else if (this.jobName === "cook") {
            this.hourWage = 8 * this.salaryContributor;
        }
        else if (this.jobName === "engineer") {
            this.hourWage = 14 * this.salaryContributor;
        }
        return this.hourWage;
    };
    Salary.prototype.getJobName = function () {
        return this.jobName;
    };
    Salary.prototype.getJobStatus = function () {
        return this.jobStatus;
    };
    Salary.prototype.assignSalContr = function () {
        if (this.jobStatus === "beginner") {
            this.salaryContributor = this.salaryContributor * 0.7;
        }
        else if (this.jobStatus === "intermediate") {
            this.salaryContributor = this.salaryContributor * 1;
        }
        else if (this.jobStatus === "professional") {
            this.salaryContributor = this.salaryContributor * 1.3;
        }
    };
    Salary.prototype.getSalContr = function () {
        return this.salaryContributor;
    };
    Salary.prototype.workADay = function () {
        this.daySalary = 0;
        this.daySalary = this.hourWage * 8;
        return this.daySalary;
    };
    Salary.prototype.daysNeeded = function (targetSalary) {
        var days;
        days = targetSalary / this.daySalary;
        return days;
    };
    return Salary;
}());
var s = new Salary("teacher", "professional");
s.assignSalContr();
console.log(s.getHourWage());
console.log(s.getJobName());
console.log(s.getJobStatus());
console.log(s.getSalContr());
console.log(s.workADay());
console.log(s.daysNeeded(1500));
