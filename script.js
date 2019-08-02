const foodKey = 'Food preferences';
const genderKey = 'Gender';
const tshirtKey = 'T-shirt Size';
const topicsKey = 'What topics would you like to have at DevFest ?';
const professionKey = 'Which of the following best describes you?';
const referralKey = 'How did you hear about this event?';

$.ajax({
  type: 'GET',
  url: "http://localhost:5000/get_attendees",
  contentType: 'application/json',
  dataType:'json',
  success: function(data) {
    extract_data(data)
  },
  error: function(error) {
    console.log("FAIL");
  }
});

foodPreferences =  new Map();
gender = new Map();
tshirt = new Map();
topics = new Map();
profession = new Map();
referral = new Map();

function extract_data(response) {
	for(i = 0; i < response.attendee.length; i++) {
		get_food_data(response.attendee[i].attendee[0].details);
		get_gender_data(response.attendee[i].attendee[0].details);
		get_tshirt_data(response.attendee[i].attendee[0].details);
		get_topics_data(response.attendee[i].attendee[0].details);
		get_profession_data(response.attendee[i].attendee[0].details);
		get_referral_data(response.attendee[i].attendee[0].details);
	}

	console.log(foodPreferences);
	console.log(gender);
	console.log(tshirt);
	console.log(topics);
	console.log(profession);
	console.log(referral);
}

function get_food_data(attendee) {
	if(! foodPreferences.has(attendee[foodKey])) {
			foodPreferences.set(attendee[foodKey], 0);
		} else {
			currentCount = foodPreferences.get(attendee[foodKey]);
			foodPreferences.set(attendee[foodKey], currentCount + 1);
		}
}

function get_gender_data(attendee) {
	if(! gender.has(attendee[genderKey])) {
			gender.set(attendee[genderKey], 0);
		} else {
			currentCount = gender.get(attendee[genderKey]);
			gender.set(attendee[genderKey], currentCount + 1);
		}
}

function get_tshirt_data(attendee) {
	if(! tshirt.has(attendee[tshirtKey])) {
			tshirt.set(attendee[tshirtKey], 0);
		} else {
			currentCount = tshirt.get(attendee[tshirtKey]);
			tshirt.set(attendee[tshirtKey], currentCount + 1);
		}
}

function get_topics_data(attendee) {
	topic = ["NA"]
	console.log(attendee)
	// topic.push(attendee[topicsKey]);
	
	for(i = 0; i < topic.length; i++) {
		if(! topics.has(topic[i])) {
			topics.set(topic[i], 0);
		} else {
			currentCount = topics.get(topic[i]);
			topics.set(topic[i], currentCount + 1);
		}
	}
	
}

function get_profession_data(attendee) {
	if(! profession.has(attendee[professionKey])) {
			profession.set(attendee[professionKey], 0);
		} else {
			currentCount = profession.get(attendee[professionKey]);
			profession.set(attendee[professionKey], currentCount + 1);
		}
}

function get_referral_data(attendee) {
	if(! referral.has(attendee[referralKey])) {
			referral.set(attendee[referralKey], 0);
		} else {
			currentCount = referral.get(attendee[referralKey]);
			referral.set(attendee[referralKey], currentCount + 1);
		}
}
