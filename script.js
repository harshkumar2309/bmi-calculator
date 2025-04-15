const form = document.querySelector('form')
form.addEventListener('submit', function(e){
// Prevent the default behaviour(page refresh on submit, etc..) of the form.
    e.preventDefault();

// store the value of height & weight only when the 'submit' event occurs. 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height!"
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight!"
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);

// Print the message for weight category based on BMI.
        if( bmi < 18.5 ){
            results.innerHTML = `<span>BMI: ${bmi} <br> Underweight</span>`;
        } else if( bmi >= 18.5 && bmi < 25 ){
            results.innerHTML = `<span>BMI: ${bmi} <br> Normalweight</span>`;
        } else {
            results.innerHTML = `<span>BMI: ${bmi} <br> Overweight</span>`;
        } 
    } 
})