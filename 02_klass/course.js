var Course = /** @class */ (function () {
    function Course(credits) {
        this.credits = credits;
    }
    //Method including the formula to calculate the GPA
    //Formula is : Grade X Credits
    Course.prototype.gpaContribution = function (grade) {
        return grade * this.credits;
    };
    Course.prototype.getCredits = function () {
        return this.credits;
    };
    return Course;
}());
//Here defining the courses and credits
var math = new Course(4);
var english = new Course(6);
var programming = new Course(2);
//
var mathGrade = 4.0;
var englishGrade = 3.3;
var programmingGrade = 3.7;
var totalPoints = 0;
totalPoints += math.gpaContribution(mathGrade);
totalPoints += english.gpaContribution(englishGrade);
totalPoints += programming.gpaContribution(programmingGrade);
var totalCredits = math.getCredits() + english.getCredits() + programming.getCredits();
//totalpoints/total credits
var GPA = totalPoints / totalCredits;
console.log(GPA);
//Create an array to pass grades of several students
var students1 = [
    { name: "Alice", math: 4.0, english: 3.3, programming: 3.7 },
    { name: "Bob", math: 3.0, english: 3.3, programming: 2.7 },
    { name: "Clare", math: 3.3, english: 3.8, programming: 3.2 },
];
//calculate the gpa for each student
for (var _i = 0, students1_1 = students1; _i < students1_1.length; _i++) {
    var student = students1_1[_i];
    var totalPoints_1 = 0;
    totalPoints_1 += math.gpaContribution(student.math);
    totalPoints_1 += english.gpaContribution(student.english);
    totalPoints_1 += programming.gpaContribution(student.programming);
    var gpa = totalPoints_1 / totalCredits;
    console.log(student.name + " GPA: ", gpa);
}
