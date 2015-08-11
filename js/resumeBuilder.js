
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

		for (var generic in bio.contacts){

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
            "location": "Winnipeg, MB",
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
            "url": "http://edx.org"
    }],

    "display": function (){

        $("#education").append(HTMLschoolStart);
        

        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education["schools"][0]["name"]);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education["schools"][0].degree);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education["schools"][0].dates);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education["schools"][0].location);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education["schools"][0].majors);

        $(".education-entry").append(formattedHTMLschoolName + formattedHTMLschoolDegree);
        $(".education-entry").append(formattedHTMLschoolDates);
        $(".education-entry").append(formattedHTMLschoolLocation); 
        $(".education-entry").append(formattedHTMLschoolMajor);

        $(".education-entry").append(HTMLonlineClasses);

        var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education["onlineCourses"][0].title);
        var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education["onlineCourses"][0].school);
        var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education["onlineCourses"][0].date);
        var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education["onlineCourses"][0].url);

        $(".education-entry").append(formattedHTMLonlineTitle + formattedHTMLonlineSchool);
        $(".education-entry").append(formattedHTMLonlineDates);
        $(".education-entry").append(formattedHTMLonlineURL);

    }
}

var work = {

    "jobs": [
        {
            "employer": "New Flyer",
            "title": "Customer Support Analyst",
            "location": "Winnipeg, MB",
            "dates": "2014 - Present",
            "description": "Analyzing data to gain insights in improving customer's fleet operations."
        },
        {
            "employer": "Sequoia Energy",
            "title": "Resource Assessmennt Tech.",
            "location": "Winnipeg, MB",
            "dates": "2011 - 2014",
            "description": "Analyzed data for wind power site suitability."
        }

    ],

    "display": function (){

        $("#workExperience").append(HTMLworkStart);

        for(var job in work["jobs"]){

            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]);
            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]);
            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]);

            $(".work-entry").append(formattedHTMLworkEmployer + formattedHTMLworkTitle);
            $(".work-entry").append(formattedHTMLworkDates);
            $(".work-entry").append(formattedHTMLworkLocation);
            $(".work-entry").append(formattedworkDescription);

        }


    }
}

var projects = {

    "projects": [
        {

            "title": "Asteroids Game",
            "dates": "2014",
            "description": "Asteroids game implemented in Python.",
            "images": "http://needstobefilledout"
        }

    ],

    "display": function (){

        $("#projects").append(HTMLprojectStart);

        for(var project in projects["projects"]){

            var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects["projects"][project]["title"]);
            var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects["projects"][project]["dates"]);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects["projects"][project]["description"]);
            var formattedHTMLprojectImage = HTMLprojectImage.replace("%data", projects["projects"][project]["images"]);

            $(".project-entry").append(formattedHTMLprojectTitle);
            $(".project-entry").append(formattedHTMLprojectDates);
            $(".project-entry").append(formattedHTMLprojectDescription);
            $(".project-entry").append(formattedHTMLprojectImage);


        }

    }

}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
