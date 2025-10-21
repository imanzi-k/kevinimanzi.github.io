/*
Kevin Imanzi
Lab5
script.js
*/
// Variables to store personal information
let myName = "Kevin Imanzi"; // Student's name
const age = 21; // Current age
var favoriteProgrammingLanguage = "JavaScript"; // Favorite language

// Displaying name, age, and favorite programming language
console.log("Name:", myName);
console.log("Age:", age);
console.log("Favorite Programming Language:", favoriteProgrammingLanguage);

// Create student object with multiple properties
const student = {
    name: "Kevin Imanzi",
    major: "Computer Engineering Technology",
    gradYear: 2026,
    hobbies: ["Reading", "Listening to Music", "Watching Soccer", "Exploring New Places"]
};

// Log the complete student object
console.log("Student Object:", student);

// Select welcome message div and insert personalized message
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.innerHTML = `<h3>Welcome to ${myName}'s Interactive Portfolio!</h3>`;

// Display current date and time
function displayCurrentTime() {
    const currentTimeDiv = document.getElementById('current-time');
    const now = new Date();
    currentTimeDiv.textContent = `Current Date & Time: ${now.toLocaleString()}`;
}

// Call the function to display time on page load
displayCurrentTime();

// Change background color function
const colorBox = document.querySelector('.sect1'); // picks the first element with class "sect1"
const changeColorBtn = document.getElementById('change-color-btn');

function changeBackgroundColor() 
{
    // Array of colors to cycle through
    const colors = ['lightblue', 'lightcoral', 'lightgreen', 'lightyellow', 'lightpink', 'lavender', 'white', 'black'];

    // Selects a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
     // Loop through all elements with the class and change their background
    colorBox.style.background = randomColor;
}

changeColorBtn.addEventListener('click', changeBackgroundColor);

// Stores a reference to the "Greet" button element
const greetBtn = document.getElementById('greet-btn'); 

// Greet user function
function greetUser() {
    let hour = new Date().getHours(); //Stores the current hour
    let greeting; //Variable that will store greeting message based on the time of the day
    
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    
    alert(`${greeting}! Welcome to my interactive portfolio!`);
}

greetBtn.addEventListener('click', greetUser);

// Click counter
let clickCount = 0;
const clickCounterBtn = document.getElementById('click-counter-btn');
const clickCountDisplay = document.getElementById('click-count');

function incrementClickCount() {
    clickCount++;
    clickCountDisplay.textContent = `Clicks: ${clickCount}`;
}

clickCounterBtn.addEventListener('click', incrementClickCount);

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
});

// Get references to the input field, button, and result display elements from the HTML
const ageInput = document.getElementById('age-input');      // The text box where the user enters their age
const checkAgeBtn = document.getElementById('check-age-btn'); // The button the user clicks to check their age category
const ageResult = document.getElementById('age-result');    // The area where the result message will appear

// Function that determines and displays the user's age category
function checkAgeCategory() {
    // Convert the input value (string) into an integer
    const userAge = parseInt(ageInput.value);
    let category; // Variable to hold the message that will be displayed

    // Check if the input is not a number or is negative
    if (isNaN(userAge) || userAge < 0) {
        category = "Please enter a valid age!";
    } 
    // If age is less than 18 → user is a minor
    else if (userAge < 18) {
        category = "You are a Minor (under 18)";
    } 
    // If age is between 18 and 64 → user is an adult
    else if (userAge >= 18 && userAge < 65) {
        category = "You are an Adult (18-64)";
    } 
    // If age is 65 or above → user is a senior
    else {
        category = "You are a Senior (65+)";
    }

    // Display the message inside the result element on the webpage
    ageResult.textContent = category;
}

// When the user clicks the "Check Age" button, run the checkAgeCategory() function
checkAgeBtn.addEventListener('click', checkAgeCategory);


// Grade calculator
// Get references to the input, button, and result display elements from the HTML
const gradeInput = document.getElementById('grade-input');      // The input box where the user enters their numeric grade
const checkGradeBtn = document.getElementById('check-grade-btn'); // The button the user clicks to check their letter grade
const gradeResult = document.getElementById('grade-result');    // The area on the page where the result will be shown

// Function that converts a numeric grade into a letter grade
function calculateLetterGrade() {
    // Convert the user's input (a string) into an integer
    const score = parseInt(gradeInput.value);
    let letterGrade; // Variable that will store the calculated letter grade

    // Check for invalid input (non-numbers, negatives, or values above 100)
    if (isNaN(score) || score < 0 || score > 100) {
        letterGrade = "Please enter a valid grade (0-100)";
    } 
    // Grade 90–100 → A
    else if (score >= 90) {
        letterGrade = "A (Excellent!)";
    } 
    // Grade 80–89 → B
    else if (score >= 80) {
        letterGrade = "B (Good)";
    } 
    // Grade 70–79 → C
    else if (score >= 70) {
        letterGrade = "C (Average)";
    } 
    // Grade 60–69 → D
    else if (score >= 60) {
        letterGrade = "D (Pass)";
    } 
    // Anything below 60 → F
    else {
        letterGrade = "F (Fail)";
    }

    // Display the result message inside the gradeResult element
    gradeResult.textContent = `Letter Grade: ${letterGrade}`;
}

// Add a click event listener to the button so the function runs when it's clicked
checkGradeBtn.addEventListener('click', calculateLetterGrade);

// Password strength checker
// Get references to the password input field and the area where the strength result will be shown
const passwordInput = document.getElementById('password-input'); // Input box where the user types their password
const passwordResult = document.getElementById('password-result'); // Element to display password strength feedback

// Add an event listener that runs whenever the user types in the password field
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value; // Get the current password value
    const length = password.length;       // Calculate the length of the password
    let strength;                         // Variable to store the strength message

    // Determine password strength based on its length
    if (length === 0) {
        strength = ""; // Empty input → no message
    } else if (length < 6) {
        strength = "Weak - Password too short"; // Less than 6 characters → weak
    } else if (length < 10) {
        strength = "Medium - Consider making it longer"; // 6–9 characters → medium
    } else {
        strength = "Strong - Good password!"; // 10 or more characters → strong
    }

    // Display the strength message in the passwordResult element
    passwordResult.textContent = strength;
});

// Stores skills in an array
const mySkills = ["HTML", "CSS", "JavaScript", "Java", "SQL", "Git", "C", "Networking"];
const showSkillsBtn = document.getElementById('show-skills-btn');
const skillsList = document.getElementById('skills-list');

//Function that will display my skills
function displaySkills() {
    skillsList.innerHTML = ''; // Clear existing list
    
    // Use for loop to display each skill
    for (let i = 0; i < mySkills.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${i + 1}. ${mySkills[i]}`;
        skillsList.appendChild(li);
    }
}

showSkillsBtn.addEventListener('click', displaySkills);

// Times table generator
const timesTableInput = document.getElementById('times-table-input');
const generateTableBtn = document.getElementById('generate-table-btn');
const timesTableResult = document.getElementById('times-table-result');

//A times table generator function
function generateTimesTable() {
    const number = parseInt(timesTableInput.value);
    
    if (isNaN(number) || number < 1 || number > 12) {
        timesTableResult.textContent = "Please enter a number between 1 and 12";
        return;
    }
    
    let tableHTML = `<h4>Times Table for ${number}</h4><ul>`;
    
    // Use for loop to generate multiplication table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<li>${number} × ${i} = ${number * i}</li>`;
    }
    
    tableHTML += '</ul>';
    timesTableResult.innerHTML = tableHTML;
}

generateTableBtn.addEventListener('click', generateTimesTable);

// Skills manager with array methods
let managedSkills = ["HTML", "CSS", "JavaScript"];
const newSkillInput = document.getElementById('new-skill');
const addSkillBtn = document.getElementById('add-skill-btn');
const skillsDisplay = document.getElementById('skills-display');
const skillsCount = document.getElementById('skills-count');

//
function updateSkillsDisplay() {
    skillsDisplay.innerHTML = '';
    
    // Use forEach to display each skill
    managedSkills.forEach((skill, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${skill}`;
        
        // Add remove button for each skill
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', () => removeSkill(index));
        
        li.appendChild(removeBtn);
        skillsDisplay.appendChild(li);
    });
    
    // Update skills count
    skillsCount.textContent = `Total Skills: ${managedSkills.length}`;
}

function addSkill() {
    const newSkill = newSkillInput.value.trim();
    
    if (newSkill === '') {
        alert('Please enter a skill name');
        return;
    }
    
    // Use push() to add new skill
    managedSkills.push(newSkill);
    newSkillInput.value = '';
    updateSkillsDisplay();
}

function removeSkill(index) {
    // Remove skill at specific index
    managedSkills.splice(index, 1);
    updateSkillsDisplay();
}

addSkillBtn.addEventListener('click', addSkill);

// Initialize skills display
updateSkillsDisplay();

// Search skills functionality
const searchSkillInput = document.getElementById('search-skill');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

function searchSkills() {
    const searchTerm = searchSkillInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        searchResults.innerHTML = '<li>Please enter a search term</li>';
        return;
    }
    
    // Use filter() to find matching skills
    const filteredSkills = managedSkills.filter(skill => 
        skill.toLowerCase().includes(searchTerm)
    );
    
    searchResults.innerHTML = '';
    
    if (filteredSkills.length === 0) {
        searchResults.innerHTML = '<li>No skills found matching your search</li>';
    } else {
        filteredSkills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            searchResults.appendChild(li);
        });
    }
}

searchBtn.addEventListener('click', searchSkills);

// Allow search on Enter key
searchSkillInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchSkills();
    }
});

// Log completion message
console.log("All interactive features loaded successfully!");
console.log("Total managed skills:", managedSkills.length);