// --- Toast Notification helpr ---
const showToast = (message, type = 'success') => {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.4s forwards';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
};

// --- Task 1: Age to Days ---
document.getElementById('t1-btn').addEventListener('click', () => {
    const age = parseFloat(document.getElementById('t1-age').value);
    if (isNaN(age) || age <= 0) return showToast("Invalid age!", "error");
    const days = Math.floor(age * 365.25);
    document.getElementById('t1-result').textContent = `${days} Days Old`;
    showToast("Age converted!", "success");
});

// --- Task 2: Hours to Seconds ---
document.getElementById('t2-btn').addEventListener('click', () => {
    const hours = parseFloat(document.getElementById('t2-hours').value);
    if (isNaN(hours) || hours < 0) return showToast("Invalid hours!", "error");
    const seconds = hours * 3600;
    document.getElementById('t2-result').textContent = `${seconds} Seconds`;
    showToast("Hours converted!", "success");
});

// --- Task 3: Find Next Number (Array & Single Value) ---
const arrTask3 = [1, 10, 30, 45, 54];
document.getElementById('t3-btn').addEventListener('click', () => {
    const num = parseFloat(document.getElementById('t3-num').value);
    if (isNaN(num)) return showToast("Enter a valid number!", "error");
    
    let resultMsg = "";
    
    // Scenario 1: Array Logic
    const index = arrTask3.indexOf(num);
    if (index !== -1 && index < arrTask3.length - 1) {
        resultMsg += `In Array: Next is ${arrTask3[index + 1]}. `;
    } else {
        resultMsg += `In Array: Not found/No next. `;
    }

    // Scenario 2: Float/Int Logic
    let singleLogicNext = Number.isInteger(num) ? num + 1 : Math.ceil(num);
    resultMsg += `|Next num is : ${singleLogicNext}`;

    document.getElementById('t3-result').textContent = resultMsg;
    showToast("Next number calculated!", "success");
});

// --- Task 4: Capitalize Name ---
document.getElementById('t4-btn').addEventListener('click', () => {
    const name = document.getElementById('t4-name').value.trim().toLowerCase();
    if (!name) return showToast("Name cannot be empty!", "error");
    
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById('t4-result').textContent = capitalized;
    showToast("Name capitalized!", "success");
});

// --- Task 5: BMI Calculator ---
document.getElementById('t5-btn').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('t5-weight').value);
    const height = parseFloat(document.getElementById('t5-height').value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        return showToast("Invalid Weight or Height!", "error");
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    
    if (bmi < 18.5) category = "Underweight";
    else if (bmi <= 24.9) category = "Normal";
    else if (bmi <= 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById('t5-result').textContent = `BMI: ${bmi} (${category})`;
    showToast("BMI Calculated!", "success");
});

// --- Task 6: Random Array Generator ---
document.getElementById('t6-btn').addEventListener('click', () => {
    const randomLength = 5 + Math.floor(Math.random() * 5); 
    const randomArr = [];
    
    for (let i = 0; i < randomLength; i++) {
        randomArr.push(Math.floor(Math.random() * 100));
    }
    
    const first = randomArr[0];
    const last = randomArr[randomArr.length - 1];
    
    document.getElementById('t6-result').innerHTML = 
        `Arr: [${randomArr.join(', ')}]<br>First: ${first} | Last: ${last}`;
    showToast("Array generated!", "success");
});

const t7Input1 = document.getElementById('t7-val1');
const t7Input2 = document.getElementById('t7-val2');
const t7Result = document.getElementById('t7-result-box');

const calculateLive = () => {
    if (t7Input1.value === "" && t7Input2.value === "") {
        return t7Result.value = "";
    }
    const val1 = parseInt(t7Input1.value);
    const val2 = parseInt(t7Input2.value);
    
    t7Result.value = val1 + val2;
};

t7Input1.addEventListener('input', calculateLive);
t7Input2.addEventListener('input', calculateLive);