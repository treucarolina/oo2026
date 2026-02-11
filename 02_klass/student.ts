class Student{
    constructor(protected mathGrade: number, protected englishGrade: number){}

    //This method is to show the grades.
    show(): void{
        console.log(this.mathGrade, this.englishGrade)
    }

    //Method to calculate the average.
    average(): number{
        return (this.mathGrade + this.englishGrade) / 2
    }

    //Method to add grades of the same subject.
    add(other:Student): Student{
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade)
    }

    //Method to calculate avg math grade for both students
    averageMath(count:number): number{
        return this.mathGrade / count
    }

    improveMath():void{
        this.mathGrade += 5;
        //this.mathGrade = this.mathGrade + 5;
    }
}

let student1: Student = new Student(85, 92);
let student2: Student = new Student(70,90);

//Array of students
let students: Student[]=[
    new Student(80,85),
    new Student(90,88),
    new Student(71,54),
    new Student(60,87),
]

//Combine all students into one total
let classTotal=students[0];

for(let i=1; i<students.length; i++){
    classTotal=classTotal.add(students[i]);
}

//number of students in class
const n = students.length;
console.log("class average of mathemathics: ", classTotal.averageMath(n));

//console.log(student1.mathGrade);
student1.show();
console.log("This is the average grade of student1:" + student1.average());

//Test adding other student grades
let combined = student1.add(student2);
combined.show();

//The 2 will go to count in mathGrade and this will give us the result
console.log(combined.averageMath(2));

student1.improveMath();
student1.show();