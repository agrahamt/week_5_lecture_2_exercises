// You are working for a state university and are tasked with writing
// software to determine the academic standing and honors recognition of students.
// The rules are:
//
// Standings:
// - 2.0 or higher - good standing
// - less than 2.0 - academic probation
//
// Honors recognitions:
// - 3.40 to 3.59 - cum laude
// - 3.60 t0 3.79 - magna cum laude
// - 3.80 to 4.00 or higher - summa cum laude
//
// Given a GPA, your job is to print whether or not the student is in good standing.
// If the student has earned honors recognitions print those out too.
// For example:
// - A GPA of 2.5 prints "Student is in good standing".
// - A GPA of 1.9 prints "Student is on probation".
// - A GPA of 3.6 prints "Student is in good standing with magna cum laude".
var mygpa = 3.9
function standing (gpa) {
  if (gpa < 2)
  return "Student is on probation.";

    else if ((gpa >= 2.0) && (gpa < 3.4))
		return "Student is in good standing";

    else if ((gpa >= 3.4) && (gpa < 3.6))
    return "student is in good standing with cum laude."

    else if ((gpa >= 3.6) && (gpa <= 3.79))
    return "student is in good standing with magna cum laude."
    else if ((gpa >= 3.8) && (gpa <= 4))
    return "student is in good standing with summa cum laude."
}
console.log (standing(1.9))
console.log (standing(2))
console.log (standing(3.41))
console.log (standing(3.61))
console.log (standing(3.81))
