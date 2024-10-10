function gradeCheck() {
    let grade = prompt("Enter your score: ");
    if (grade >=95) {
        alert("Your grade is: Excellent.");
    } else if (grade >=89) {
        alert("Your grade is: Good.");
    } else if (grade >=75) {
        alert("Your grade is: Fair.");
    } else {
        alert("Your grade: Needs Improvement.")
    }
}
