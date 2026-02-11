class Course{
    constructor(protected credits:number){}

    //Method including the formula to calculate the GPA
    //Formula is : Grade X Credits

    gpaContribution(grade: number):number{
        return grade*this.credits;

    }

    getCredits(): number{
        return this.credits;
    }

}

//Here defining the courses and credits
let math = new Course(4);
let english = new Course(6);
let programming = new Course(2);

//
let mathGrade = 4.0;
let englishGrade = 3.3;
let programmingGrade = 3.7;

let totalPoints = 0;

totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);

let totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();

//totalpoints/total credits

let GPA = totalPoints / totalCredits
console.log(GPA)

//Create an array to pass grades of several students
let students1 = [
    {name:"Alice", math: 4.0, english: 3.3, programming:3.7},
    {name:"Bob", math: 3.0, english: 3.3, programming:2.7},
    {name:"Clare", math: 3.3, english: 3.8, programming:3.2},
]

//calculate the gpa for each student
for (let student of students1){
    let totalPoints=0;

    totalPoints += math.gpaContribution(student.math);
    totalPoints += english.gpaContribution(student.english);
    totalPoints += programming.gpaContribution(student.programming);

    let gpa = totalPoints / totalCredits;
    console.log(student.name + " GPA: ", gpa);
}