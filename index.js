const rating = document.getElementById("rating");
const rate_one = document.getElementById("one");
const rate_two = document.getElementById("two");
const rate_three = document.getElementById("three");
const rate_four = document.getElementById("four");
const rate_five = document.getElementById("five");
const thank_state = document.getElementById("thank--state");
const thank_rate = document.getElementById("thank--rate");


// ------ rate one ------
if (rate_one.checked === true){
    rate_one.style.backgroundColor = "#fb7413"
}

// ----- onclick of submit btn --------
document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    // ------ rate one ------
    if (rate_one.checked === true){
        thank_state.style.display = "block";
        thank_rate.innerHTML = rate_one.value;
        rating.style.display = "none";
    } // ------ rate two ------
    else if (rate_two.checked === true){
        thank_state.style.display = "block";
        thank_rate.innerHTML = rate_two.value;
        rating.style.display = "none";
    } // ------ rate three ------
    else if (rate_three.checked === true){
        thank_state.style.display = "block";
        thank_rate.innerHTML = rate_three.value;
        rating.style.display = "none";
    } // ------ rate four ------
    else if (rate_four.checked === true){
        thank_state.style.display = "block";
        thank_rate.innerHTML = rate_four.value;
        rating.style.display = "none";
    } // ------ rate five ------
    else if (rate_five.checked === true){
        thank_state.style.display = "block";
        thank_rate.innerHTML = rate_five.value;
        rating.style.display = "none";
    }
}
