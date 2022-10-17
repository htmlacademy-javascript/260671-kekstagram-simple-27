const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
let val = Number(scaleValue);

biggerButton.addEventListener('click', () => {
    val += 25;
    console.log(val);
});

smallerButton.addEventListener('click', () => {
    val -= 25;
    console.log(val);
});