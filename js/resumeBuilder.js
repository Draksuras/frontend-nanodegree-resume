
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
            "url": "edx.org"
    }],

    "display": function (){

        $("#main").append(HTMLschoolStart);
        

        var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education["schools"][0]["name"]);
        var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education["schools"][0].degree);
        var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education["schools"][0].dates);
        var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education["schools"][0].location);
        var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education["schools"][0].majors);

        $("#education").append(formattedHTMLschoolName);
        $("#education").append(formattedHTMLschoolDegree);
        $("#education").append(formattedHTMLschoolDates);
        $("#education").append(formattedHTMLschoolLocation); 
        $("#education").append(formattedHTMLschoolMajor);
        
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

        $("#main").append(HTMLworkStart);

        for(job in work["jobs"]){

            var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job]["employer"]);
            var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work["jobs"][job]["title"]);
            var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work["jobs"][job]["dates"]);
            var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work["jobs"][job]["location"]);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work["jobs"][job]["description"]);

            $("#workExperience").append(formattedHTMLworkEmployer);
            $("#workExperience").append(formattedHTMLworkTitle);
            $("#workExperience").append(formattedHTMLworkDates);
            $("#workExperience").append(formattedHTMLworkLocation);
            $("#workExperience").append(formattedworkDescription);

        }


    }
}

var projects = {

    "projects": [
        {

            "title": "Asteroids Game",
            "dates": "2014",
            "description": "Asteroids game implemented in Python",
            "images": "http://needstobefilledout"
        }

    ],

    "display": function (){

        $("#main").append(HTMLprojectStart);

        for(project in projects["projects"]){

            var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects["projects"][project]["title"]);
            var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects["projects"][project]["dates"]);
            var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects["projects"][project]["description"]);
            var formattedHTMLprojectImage = HTMLprojectImage.replace("%data", projects["projects"][project]["images"]);

            $("#projects").append(formattedHTMLprojectTitle);
            $("#projects").append(formattedHTMLprojectDates);
            $("#projects").append(formattedHTMLprojectDescription);
            $("#projects").append(formattedHTMLprojectImage);


        }

    }

}


bio.display();
work.display();
projects.display();
education.display();
