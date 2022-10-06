var modal = document.getElementById("myModal");
// Get the button that opens the modal
var bttn = document.getElementById("myBtn").addEventListener('click', print , false);
function print() {
    doucument.getElementById('printResult').innerHtml = 'heloo';
}




/*function checkAnswers() {
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal
    //btn.onclick = function () {

    //this is the array for correct answer
        var answers = ["burj khalifa", "pyramid", "australia", "cardiff", "africa", "russia", "canada", "scotland",
            "greenland", "greece"];

     //other variables declaration
        var inputAnswers = [];
        var wrong = 0;
        var correct = 0;

    //statements to recive userinput and push it into an array for comparison
        var answer1 = document.getElementById('q1answer').value;
        var answer2 = document.getElementById('q2answer').value;
        var answer3 = document.getElementById('q3answer').value;
        var answer4 = document.getElementById('q4answer').value;
        var answer5 = document.getElementById('q5answer').value;
        var answer6 = document.getElementById('q6answer').value;
        var answer7 = document.getElementById('q7answer').value;
        var answer8 = document.getElementById('q8answer').value;
        var answer9 = document.getElementById('q9answer').value;
        var answer10 = document.getElementById('q10answer').value;
        inputAnswers.push(answer1.toLowerCase());
        inputAnswers.push(answer2.toLowerCase());
        inputAnswers.push(answer3.toLowerCase());
        inputAnswers.push(answer4.toLowerCase());
        inputAnswers.push(answer5.toLowerCase());
        inputAnswers.push(answer6.toLowerCase());
        inputAnswers.push(answer7.toLowerCase());
        inputAnswers.push(answer8.toLowerCase());
        inputAnswers.push(answer9.toLowerCase());
        inputAnswers.push(answer10.toLowerCase());
        console.log('correct answer', answers);
        console.log('your answers', inputAnswers);

        for (j = 0; j < answers.length; j++) {
            if (answers[j] == inputAnswers[j]) { correct++; }
        }
        return correct;
        document.getElementById('printresult').innerHTML = "Well done!! You have got " + correct + " words out of 10."
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }*/

       

        
    



















