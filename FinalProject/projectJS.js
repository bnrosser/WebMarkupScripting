

document.getElementById("myButton").addEventListener('click', function () {
    if (validateForm()) {
        myWindow();
    }
});

function validateForm() {

    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = '*Invalid email format, please enter a valid email';
        document.getElementById('emailError').style.color = 'red';
        return false;
    }

    document.getElementById('emailError').textContent = '';
    return true;
}

function myWindow() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    visitorName = document.getElementById("nameInput").value;
    visitorEmail = document.getElementById("emailInput").value;
    visitorGoal = document.getElementById("goalInput").value;
    const meals = {
        Monday: {
            breakfast: document.getElementById("mondayBreakfast").value,
            snack: document.getElementById("mondaySnack").value,
            lunch: document.getElementById("mondayLunch").value,
            lsnack: document.getElementById("mondayLSnack").value,
            dinner: document.getElementById("mondayDinner").value
        },
        Tuesday: {
            breakfast: document.getElementById("tuesdayBreakfast").value,
            snack: document.getElementById("tuesdaySnack").value,
            lunch: document.getElementById("tuesdayLunch").value,
            lsnack: document.getElementById("tuesdayLSnack").value,
            dinner: document.getElementById("tuesdayDinner").value
        },
        Wednesday: {
            breakfast: document.getElementById("wednesdayBreakfast").value,
            snack: document.getElementById("wednesdaySnack").value,
            lunch: document.getElementById("wednesdayLunch").value,
            lsnack: document.getElementById("wednesdayLSnack").value,
            dinner: document.getElementById("wednesdayDinner").value
        },
        Thursday: {
            breakfast: document.getElementById("thursdayBreakfast").value,
            snack: document.getElementById("thursdaySnack").value,
            lunch: document.getElementById("thursdayLunch").value,
            lsnack: document.getElementById("thursdayLSnack").value,
            dinner: document.getElementById("thursdayDinner").value
        },
        Friday: {
            breakfast: document.getElementById("fridayBreakfast").value,
            snack: document.getElementById("fridaySnack").value,
            lunch: document.getElementById("fridayLunch").value,
            lsnack: document.getElementById("fridayLSnack").value,
            dinner: document.getElementById("fridayDinner").value
        },
        Saturday: {
            breakfast: document.getElementById("saturdayBreakfast").value,
            snack: document.getElementById("saturdaySnack").value,
            lunch: document.getElementById("saturdayLunch").value,
            lsnack: document.getElementById("saturdayLSnack").value,
            dinner: document.getElementById("saturdayDinner").value
        },
        Sunday: {
            breakfast: document.getElementById("sundayBreakfast").value,
            snack: document.getElementById("sundaySnack").value,
            lunch: document.getElementById("sundayLunch").value,
            lsnack: document.getElementById("sundayLSnack").value,
            dinner: document.getElementById("sundayDinner").value
        }
    };

    let myText = "<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n";
    myText += "<center><h2>Hello " + visitorName + ", here is your personalized meal plan!</h2></center>\n";
    myText += "<center><h3>Your Email is: " + visitorEmail + "</h3></center>\n";
    myText += "<center><h3>Your Weekly Goal is: " + visitorGoal + "<br><br></h3></center>\n";
    myText += "<center><h2>Here is your Weekly Meal Plan:<br><br></h2></center>\n";

    daysOfWeek.forEach(day => {
        myText += "<h2>" + day + " Meal Plan</h2>\n";
        myText += "<ul>\n";
        myText += "<li><strong>Breakfast:</strong> " + meals[day].breakfast + "</li>\n";
        myText += "<li><strong>Snack:</strong> " + meals[day].snack + "</li>\n";
        myText += "<li><strong>Lunch:</strong> " + meals[day].lunch + "</li>\n";
        myText += "<li><strong>Late Snack:</strong> " + meals[day].lsnack + "</li>\n";
        myText += "<li><strong>Dinner:</strong> " + meals[day].dinner + "</li>\n";
        myText += "</ul>\n<br>\n";
    });

    flyWindow = window.open('about:blank', 'myPop', 'width=800,height=600,left=200,top=200');
    flyWindow.document.write(myText);
    flyWindow.document.body.style.background = 'rgb(117, 219, 117)';
    flyWindow.document.body.style.fontFamily = "Arial, sans-serif";
    flyWindow.document.body.style.fontWeight = "bold";

    newButton = flyWindow.document.createElement('button');
    newButton.textContent = 'Print';
    newButton.style.padding = '10px 20px';
    newButton.style.marginLeft = '10px';
    newButton.style.marginRight = '50px';
    newButton.style.backgroundColor = '#28a745';
    newButton.style.color = 'white';
    newButton.style.border = 'none';
    newButton.style.cursor = 'pointer';
    newButton.style.marginBottom = '10px';
    flyWindow.document.body.appendChild(newButton);

    newButton.addEventListener('click', function () {
        flyWindow.print();
    });

    newButton2 = flyWindow.document.createElement('button');
    newButton2.textContent = 'Download';
    newButton2.style.padding = '10px 20px';
    newButton2.style.marginRight = '50px';
    newButton2.style.backgroundColor = '#28a745';
    newButton2.style.color = 'white';
    newButton2.style.border = 'none';
    newButton2.style.cursor = 'pointer';
    newButton2.style.marginBottom = '10px';
    flyWindow.document.body.appendChild(newButton2);

    newButton2.addEventListener('click', function () {
        const blob = new Blob([myText], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'meal_plan.html';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });

    newButton3 = flyWindow.document.createElement('button');
    newButton3.textContent = 'Close Planner'
    newButton3.style.padding = '10px 20px';
    newButton3.style.backgroundColor = '#28a745';
    newButton3.style.color = 'white';
    newButton3.style.border = 'none';
    newButton3.style.cursor = 'pointer';
    newButton3.style.marginBottom = '10px';
    flyWindow.document.body.appendChild(newButton3);



    newButton3.addEventListener('click', function () {
        flyWindow.close();
    });
}



