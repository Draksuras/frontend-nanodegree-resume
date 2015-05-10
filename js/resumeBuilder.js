
var bio = {

    "name" : "Paulo Moreira",
    "role" : "Front-End Web Developer",
    "contacts" : {
        "mobile": "650-555-555",
        "email": "moreira.a.paulo@gmail.com",
        "github": "https://github.com/Draksuras",
        "location": "Winnipeg"
        },
    "welcomeMessage": "Welcome to my Resume",
    "skills": ["To", "fill", "out", "later"],
    "biopic": "images/fry.jpg",
    "display": function() {

    	var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
		var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills);


		$("#header").prepend(formattedHTMLheaderRole);
		$("#header").prepend(formattedHTMLheaderName);

		for (generic in bio.contacts){

			var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", generic);
			formattedHTMLcontactGeneric = formattedHTMLcontactGeneric.replace("%data%", bio.contacts[generic]);

			$("#topContacts").append(formattedHTMLcontactGeneric);
		}

		$("#header").append(formattedHTMLbioPic);
		$("#header").append(formattedHTMLwelcomeMsg);
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++){

			$("#header").append(formattedHTMLskills);

		}		


	}
    

}



var education = {

    "schools": [
        {

            "name": "University of Manitoba",
            "location": "Winnipeg",
            "degree": "Science",
            "majors": ["Chemistry"],
            "dates": 2011,
            "url": "http://umanitoba.ca"
        }
    ],

    "onlineCourses": [
        {
            "title": "Introduction to Programming",
            "school": "Rice university",
            "date": 2014,
            "url": "edx.org"
    }]
}

var work = {

    "jobs": [
        {
            "employer": "New Flyer",
            "title": "Customer Support Analyst",
            "location": "Winnipeg",
            "dates": "Aug-2014 - PResent",
            "description": "Analyzing data to gain insights in improving customer fleet's operations."
        },
        {
            "employer": "Sequoia Energy",
            "title": "Resource Assessmennt Tech.",
            "location": "Winnipeg",
            "dates": "2011-2014",
            "description": "Analyzed data for wind power site suitability."
        }

    ]
}

var projects = {

    "projects": [
        {

            "title": "Asteroids Game",
            "dates": "2014",
            "description": "Asteroids game implemented in Python",
            "images": "http://needstobefilledout"
        }

    ]
}


bio.display();