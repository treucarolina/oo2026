var Student = /** @class */ (function () {
    function Student(mathGrade, englishGrade) {
        this.mathGrade = mathGrade;
        this.englishGrade = englishGrade;
    }
    //This method is to show the grades.
    Student.prototype.show = function () {
        console.log(this.mathGrade, this.englishGrade);
    };
    //Method to calculate the average.
    Student.prototype.average = function () {
        return (this.mathGrade + this.englishGrade) / 2;
    };
    //Method to add grades of the same subject.
    Student.prototype.add = function (other) {
        return new Student(this.mathGrade + other.mathGrade, this.englishGrade + other.englishGrade);
    };
    //Method to calculate avg math grade for both students
    Student.prototype.averageMath = function (count) {
        return this.mathGrade / count;
    };
    Student.prototype.improveMath = function () {
        this.mathGrade += 5;
        //this.mathGrade = this.mathGrade + 5;
    };
    return Student;
}());
var student1 = new Student(85, 92);
var student2 = new Student(70, 90);
//Array of students
var students = [
    new Student(80, 85),
    new Student(90, 88),
    new Student(71, 54),
    new Student(60, 87),
];
//Combine all students into one total
var classTotal = students[0];
for (var i = 1; i < students.length; i++) {
    classTotal = classTotal.add(students[i]);
}
//number of students in class
var n = students.length;
console.log("class average of mathemathics: ", classTotal.averageMath(n));
//console.log(student1.mathGrade);
student1.show();
console.log("This is the average grade of student1:" + student1.average());
//Test adding other student grades
var combined = student1.add(student2);
combined.show();
//The 2 will go to count in mathGrade and this will give us the result
console.log(combined.averageMath(2));
student1.improveMath();
student1.show();
