

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
    const breakfast = ['Eggs', 'Avocado Toast', 'Yogurt', 'Bagel', 'Cereal', 'Oatmeal', 'Fruit Bowl'];
    const snack = ['Apple Slices', 'Greek Yogurt', 'Dried Fruit', 'Mixed Nuts', 'Granola Bar', 'Chia Pudding', 'Protein Bar'];
    const lunch = ['Ham Sandwich', 'Chicken Ceasar Salad', 'Veggie and Hummus Sandwich', 'Egg Salad Sandwich', 'Beef and Bean Burrito', 'Italian Pasta Salad', 'Mediterranean Orzo Pasta Salad'];
    const lsnack = ['Veggie Chips', 'Sweet Potato Toasts', 'Fruit Smoothie', 'Acai Bowl', 'Salad Skewers', 'Protein Muffins', 'Hummus & Veggies'];
    const dinner = ['Pan-Seared Salmon with Kale and Apple Salad', 'Cajun Cabbage Skillet', 'Sweet and Tangy Chicken Burgers', 'Chicken Katsu with Ginger Rice', 'Beef Stir-Fry', 'Chicken with a Lemon Herb Sauce', 'Whole-Wheat Fettuccine with Zucchini Ribbons'];
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
    myText += ("<center>" + "<h2>" + "Based on your inputs:" + "</h2>" + "</center>");
    myText += ("<center>" + "Breakfast: " + visitorBreakfast + "\n" + "</center>");
    myText += ("<center>" + "Snack: " + visitorSnack + "\n" + "</center>");
    myText += ("<center>" + "Lunch: " + visitorLunch + "\n" + "</center>");
    myText += ("<center>" + "Late Snack: " + visitorLsnack + "\n" + "</center>");
    myText += ("<center>" + "Dinner: " + visitorDinner + "\n" + "</center>");
    myText += ("<center>" + "<h2>" + "Here is your Weekly Meal Plan:" + "<br>" + "<br>" + "</h2>" + "</center>");
    for (let i = 0; i < 7; i++) {
        const dayOfWeek = daysOfWeek[i];
        const dayBreakfast = breakfast[i];
        const daySnack = snack[i];
        const dayLunch = lunch[i];
        const dayLsnack = lsnack[i];
        const dayDinner = dinner[i];

        myText += "<h2>" + dayOfWeek + " Meal Plan</h2>\n";
        myText += "<ul>\n";
        myText += "<li><strong>Breakfast:</strong> " + dayBreakfast + "</li>\n";
        myText += "<li><strong>Snack:</strong> " + daySnack + "</li>\n";
        myText += "<li><strong>Lunch:</strong> " + dayLunch + "</li>\n";
        myText += "<li><strong>Late Snack:</strong> " + dayLsnack + "</li>\n";
        myText += "<li><strong>Dinner:</strong> " + dayDinner + "</li>\n";
        myText += "</ul>\n<br>\n";
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



