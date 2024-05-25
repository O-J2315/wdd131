

window.onload = checkFirstTime();

function checkFirstTime(){
    let counter = parseInt(localStorage.getItem('numOfReviews'));
    if(counter!=0){
       addReview();
    }else{
        localStorage.setItem('numOfReviews', counter.toString());
        addReview();
    };
};

function addReview() {
    let counter = parseInt(localStorage.getItem('numOfReviews'));
    counter = counter + 1;
    localStorage.setItem('numOfReviews', counter.toString());
    document.getElementById('reviews').innerText = localStorage.getItem('numOfReviews');
    console.log(counter);
}