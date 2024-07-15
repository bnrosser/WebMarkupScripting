

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
    visitorBreakfast = document.getElementById("breakfastInput").value;
    visitorSnack = document.getElementById("snackInput").value;
    visitorLunch = document.getElementById("lunchInput").value;
    visitorLsnack = document.getElementById("lsnackInput").value;
    visitorDinner = document.getElementById("dinnerInput").value;
    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    myText += ("<center>" + "<h2>" + "Hello " + visitorName + ", here is your personalized meal plan!" + "<br>" + "</h2>" + "</center>");
    myText += ("<center>" + "<h3>" + "Your Email is: " + visitorEmail + "<br>" + "</h3>" + "</center>");
    myText += ("<center>" + "<h3>" + "Your Weekly Goal is: " + visitorGoal + "<br>" + "<br>" + "</h3>" + "</center>");
    myText += ("<center>" + "<h3>" + "Based on your inputs, here is your weekly meal plan!" + "<br>" + "<br>" + "</h3>" + "</center>");
    for (let i = 0; i < 7; i++) {
        const dayIndex = i % 7;
        myText += `
              
                <h2>${daysOfWeek[dayIndex]} Meal Plan</h2>
                <ul>
                  <li><strong>Breakfast:</strong> ${visitorBreakfast}</li>
                  <li><strong>Snack:</strong> ${visitorSnack}</li>
                  <li><strong>Lunch:</strong> ${visitorLunch}</li>
                  <li><strong>Late Snack:</strong> ${visitorLsnack}</li>
                  <li><strong>Dinner:</strong> ${visitorDinner}</li>
                </ul>
              
              <br>
            `;
    }

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

    newButton3 = flyWindow.document.createElement('button');
    newButton3.textContent = 'Clear Planner';
    newButton3.style.padding = '10px 20px';
    newButton3.style.backgroundColor = '#28a745';
    newButton3.style.color = 'white';
    newButton3.style.border = 'none';
    newButton3.style.cursor = 'pointer';
    newButton3.style.marginBottom = '10px';
    flyWindow.document.body.appendChild(newButton3);

    const message = flyWindow.document.createElement('p');
    message.textContent = 'Meal Plan Printed!';
    message.classList.add('message');
    message.style.display = 'none';
    flyWindow.document.body.appendChild(message);
    newButton.addEventListener('click', function () {
        message.style.display = 'block';
    });

    const message2 = flyWindow.document.createElement('p');
    message2.textContent = 'Meal Plan Downloaded!';
    message2.classList.add('message');
    message2.style.display = 'none';
    flyWindow.document.body.appendChild(message2);
    newButton2.addEventListener('click', function () {
        message2.style.display = 'block';
    });

    newButton3.addEventListener('click', function () {
        flyWindow.close();
    });
}



