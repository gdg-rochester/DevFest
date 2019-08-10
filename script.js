google.charts.load("current", {packages:["corechart"]});

const foodKey = 'Food preferences';
const genderKey = 'Gender';
const tshirtKey = 'T-shirt Size';
const topicsKey = 'What topics would you like to have at DevFest ?';
const professionKey = 'Which of the following best describes you?';
const referralKey = 'How did you hear about this event?';

$.ajax({
    type: 'GET',
    url: "http://104.154.16.247:5000/get_attendees",
    contentType: 'application/json',
    dataType: 'json',
    success: function(data) {
        extract_data(data)
    },
    error: function(error) {
        console.log("FAIL");
    }
});

foodPreferences = new Map();
gender = new Map();
tshirt = new Map();
topics = new Map();
profession = new Map();
referral = new Map();

function extract_data(response) {
    for (i = 0; i < response.attendee.length; i++) {
        get_food_data(response.attendee[i].attendee[0].details);
        get_gender_data(response.attendee[i].attendee[0].details);
        get_tshirt_data(response.attendee[i].attendee[0].details);
        get_topics_data(response.attendee[i].attendee[0].details);
        get_profession_data(response.attendee[i].attendee[0].details);
        get_referral_data(response.attendee[i].attendee[0].details);
    }

    // Draw Food Chart
    var foodData = new google.visualization.DataTable();
    foodData.addColumn('string', 'Preference');
    foodData.addColumn('number', 'Count');


    var foodKeys = Object.keys(foodPreferences);
    var foodArray = new Array();
    i = 0;
    for (const [k, v] of foodPreferences) {
        foodArray[i] = new Array();
        foodArray[i][0] = k;
        foodArray[i][1] = v;
        foodData.addRow(foodArray[i]);
        i++;
    }


    var foodOptions = {
        title: 'Food Preferences',
        legend: {
            position: 'none'
        },
    };
    var foodChart = new google.visualization.BarChart(document.getElementById('food_chart'));
    foodChart.draw(foodData, foodOptions);

    // Draw Tshirt Chart
    var tshirtData = new google.visualization.DataTable();
    tshirtData.addColumn('string', 'Size');
    tshirtData.addColumn('number', 'Count');


    var tshirtKeys = Object.keys(foodPreferences);
    var tshirtArray = new Array();
    i = 0;
    for (const [k, v] of tshirt) {
        tshirtArray[i] = new Array();
        tshirtArray[i][0] = k;
        tshirtArray[i][1] = v;
        tshirtData.addRow(tshirtArray[i]);
        i++;
    }


    var tshirtOptions = {
        title: 'Tshirt Sizes',
        legend: {
            position: 'none'
        },
    };
    var tshirtChart = new google.visualization.BarChart(document.getElementById('tshirt_chart'));
    tshirtChart.draw(tshirtData, tshirtOptions);


    // Draw Profession Chart
    var professionData = new google.visualization.DataTable();
    professionData.addColumn('string', 'Size');
    professionData.addColumn('number', 'Count');

    var professionArray = new Array();
    i = 0;
    for (const [k, v] of profession) {
        professionArray[i] = new Array();
        professionArray[i][0] = k;
        professionArray[i][1] = v;
        professionData.addRow(professionArray[i]);
        i++;
    }


    var professionOptions = {
        title: 'Profession'
    };
    var professionChart = new google.visualization.PieChart(document.getElementById('profession_chart'));
    professionChart.draw(professionData, professionOptions);


    // Draw Gender Chart
    var genderData = new google.visualization.DataTable();
    genderData.addColumn('string', 'Gender');
    genderData.addColumn('number', 'Count');

    var genderArray = new Array();
    i = 0;
    for (const [k, v] of gender) {
        genderArray[i] = new Array();
        genderArray[i][0] = k;
        genderArray[i][1] = v;
        genderData.addRow(genderArray[i]);
        i++;
    }


    var genderOptions = {
        title: 'Diversity Inclusion',
        pieHole:0.4
    };
    var genderChart = new google.visualization.PieChart(document.getElementById('gender_chart'));
    genderChart.draw(genderData, genderOptions);

    // console.log(foodPreferences);
    // console.log(gender);
    // console.log(tshirt);
    // console.log(topics);
    // console.log(profession);
    // console.log(referral);
}

function get_food_data(attendee) {
    if (!foodPreferences.has(attendee[foodKey])) {
        foodPreferences.set(attendee[foodKey], 0);
    } else {
        currentCount = foodPreferences.get(attendee[foodKey]);
        foodPreferences.set(attendee[foodKey], currentCount + 1);
    }
}

function get_gender_data(attendee) {
    if (!gender.has(attendee[genderKey])) {
        gender.set(attendee[genderKey], 0);
    } else {
        currentCount = gender.get(attendee[genderKey]);
        gender.set(attendee[genderKey], currentCount + 1);
    }
}

function get_tshirt_data(attendee) {
    if (!tshirt.has(attendee[tshirtKey])) {
        tshirt.set(attendee[tshirtKey], 0);
    } else {
        currentCount = tshirt.get(attendee[tshirtKey]);
        tshirt.set(attendee[tshirtKey], currentCount + 1);
    }
}

function get_topics_data(attendee) {
    if (!topics.has(attendee[topicsKey])) {
        topics.set(attendee[topicsKey], 0);
    } else {
        currentCount = topics.get(topics[i]);
        topics.set(topics[i], currentCount + 1);
    }

}

function get_profession_data(attendee) {
    if (!profession.has(attendee[professionKey])) {
        profession.set(attendee[professionKey], 0);
    } else {
        currentCount = profession.get(attendee[professionKey]);
        profession.set(attendee[professionKey], currentCount + 1);
    }
}

function get_referral_data(attendee) {
    if (!referral.has(attendee[referralKey])) {
        referral.set(attendee[referralKey], 0);
    } else {
        currentCount = referral.get(attendee[referralKey]);
        referral.set(attendee[referralKey], currentCount + 1);
    }
}