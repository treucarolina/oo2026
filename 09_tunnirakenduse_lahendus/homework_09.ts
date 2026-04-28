class Salary {
    hourWage:number=0;
    jobName:string;
    jobStatus:string;
    salaryContributor:number = 1;
    daySalary:number = 1;

    //constructor runs when a new water object is created
    constructor(jobName:string, jobStatus:string){
        this.jobName = jobName;
        this.jobStatus = jobStatus;
    }

    getHourWage():number{
        if (this.jobName === "teacher"){
            this.hourWage = 11 * this.salaryContributor;
        } else if (this.jobName === "cook"){
            this.hourWage = 8 * this.salaryContributor;
        } else if (this.jobName === "engineer"){
            this.hourWage = 14 * this.salaryContributor;
        }
        return this.hourWage;
    }

    getJobName():string{
        return this.jobName;
    }

    getJobStatus():string{
        return this.jobStatus;
    }

    assignSalContr():void{
        if (this.jobStatus === "beginner"){
            this.salaryContributor = this.salaryContributor * 0.7;
        } else if (this.jobStatus === "intermediate"){
            this.salaryContributor = this.salaryContributor * 1;
        } else if (this.jobStatus === "professional"){
            this.salaryContributor = this.salaryContributor * 1.3;
        }
    }

    getSalContr():number{
        return this.salaryContributor;
    }

    workADay():number {
        this.daySalary = 0;
        
        this.daySalary = this.hourWage * 8;

        return this.daySalary;
    }

    daysNeeded(targetSalary:number):number {
        let days:number;
        days = targetSalary / this.daySalary;
        return days;
    }
}

let s = new Salary("teacher", "professional"); 
s.assignSalContr();
console.log(s.getHourWage());
console.log(s.getJobName());
console.log(s.getJobStatus());



console.log(s.getSalContr());

console.log(s.workADay());

console.log(s.daysNeeded(1500));