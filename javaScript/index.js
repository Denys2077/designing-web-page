/**
 * 
 */
const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress');
const progressSteps = document.querySelectorAll('.progress-step');
const formSteps = document.querySelectorAll('.form-step');
const btn = document.querySelector('.btn-done');

let formStepsNum = 0;

nextBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		formStepsNum++;
		updateFormSteps();
		updateProgressBar();
	});
});

prevBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		formStepsNum--;
		updateFormSteps();
		updateProgressBar();
	});
});

function updateFormSteps() {
	formSteps.forEach(formStep => {
		formStep.classList.contains('active') && formStep.classList.remove('active');
	});
	formSteps[formStepsNum].classList.add('active');
};

function updateProgressBar() {
	progressSteps.forEach((progressStep, ind) => {
		if(ind < formStepsNum + 1) {
			progressStep.classList.add('active');
		} else {
			progressStep.classList.remove('active');
		}
	})
};

btn.addEventListener('click', () => {
	console.log("Account Created Successfully!");
});