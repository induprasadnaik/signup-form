function calculateGrade() {
    let subjects = ['Social','Maths','Science','History','Geography'];
    let totalMarks = 0;
    let marks = [];
    let m = '';
    // Collect marks for 5 subjects
    for (let i = 0; i < 5; i++) {

        let mark = parseFloat(prompt(`Enter marks for subject `+subjects[i]+` (0-100):`));

        // Validate input
        if (mark == '' || mark < 0 || mark > 100) {
            alert("Invalid input! Please enter a number between 0 and 100.");
            return;
        }
        m += '<li>Your mark for '+subjects[i]+' is : '+mark+'</li>';
        marks.push(mark);
        totalMarks += mark;

    }

    // Calculate average
    let averageMarks = totalMarks / 5;

    // Determine grade
    let grade = "";
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "A";
    } else if (averageMarks >= 70) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    } else if (averageMarks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById('marks').innerHTML = m;
    // Display results
    document.getElementById('result').innerHTML= `Total Marks: ${totalMarks}</br>Average: ${averageMarks.toFixed(2)}</br>Grade: ${grade}`;
}

$(document).ready(function(){
    $('#slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{ items:1 },
            600:{ items:1 },
            1000:{ items:1 }
        }
    });
});