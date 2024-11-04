function wordsLen(str) {
    const array = str.trim().split(/\s+/);
        return array.length;
    
}

function charsLen(str) {

var count = 0;

for (var i = 0; i < str.length; i++) {

    count++;

}
return  count;
}

function generate_random_number(min, max){
    return Math.random() * (max - min) + min;
}







let mainText = document.getElementById("mainText");
let mainText2 = document.getElementById("mainText2");
let timer = document.getElementById("timer");
// let start_btn = document.getElementById("start_btn");
let scontainer = document.getElementById("scontainer")
let pcontainer = document.getElementById("pcontainer")
typing_input = document.getElementById("typing_input")
result_table = document.getElementById("result_table")


let wpm_text = document.getElementById("wpm_text");
let cpm_text = document.getElementById("cpm_text");
let accuracy = document.getElementById("accuracy");
let wrong_words = document.getElementById("wrong_words");
let right_words = document.getElementById("right_words");



const paragraphs = '2';

fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`, {
    method: 'GET',
    headers: {
        'X-Api-Key': 'u8Ovvrd5EA9qqCr6A9n1lw==FWBv3gRrkFWJUt8I',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    const randomText = data.text;
    mainText.innerHTML = randomText;
})
.catch(error => {
    console.error('Error:', error);
});








function startTimer() {

    timer.innerHTML = "You have only 60 seconds! Type Fast!"
        setTimeout(function () {
            pcontainer.style.display = "none";
            typing_input.style.display = "none";
            scontainer.style.visibility = "visible";

            setTimeout(function () {
                mainText2.innerHTML = "Typing Analysis"
            }, 3000)

            let inputText = document.getElementById("input_box").value;

            const arrayOfString = mainText.innerText.trim().split(/\s+/);
            const arrayOfInput = inputText.trim().split(/\s+/);


            let noOfWords = wordsLen(inputText);
            let noOfChars = charsLen(inputText);

            let wrong_words_count = 0;
            let right_words_count = 0;

            for (let index = 0; index < arrayOfInput.length; index++) {
                const input_str = arrayOfInput[index];
                const actual_str = arrayOfString[index];

                if (input_str==actual_str){
                    right_words_count++;
                } else{
                    wrong_words_count++;
                }

            }

            wpm_text.innerHTML = noOfWords+" WPM"
            cpm_text.innerHTML = noOfChars+" CPM"
            accuracy.innerHTML = (right_words_count/noOfWords)*100+"%"
            wrong_words.innerHTML = wrong_words_count+" Words"
            right_words.innerHTML = right_words_count+" Words"



        }, 60000)
}



