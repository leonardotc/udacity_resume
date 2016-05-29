/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var model = {
  
  bio: {
    name : 'Leonardo Teixeira Cardoso',
    role : 'Developer',
    contacts : {
      mobile: '11 977777364',
      email: 'leonardo.t.cardoso@hotmail.com',
      github: 'github.com/leonardotc',
      twitter: 'https://twitter.com/beeth_of_death',
      location: 'São Paulo'
    },
    welcomeMessage: 'Welcome!',
    skills: ['javascript', 'ruby', 'java', 'coffee (the drink, not the script language)', 'wso2'],
    biopic: 'http://www.rhlaw.com/blog/wp-content/uploads/2011/10/kitten-300x300.jpg'
  },
  
  education: {
    schools: [{
        name: 'PUC-SP',
        location: 'Rua Monte Alegre',
        degree: 'bacharel',
        majors: ['Philosophy'],
        dates: '2009-01-01',
        url: 'puc.com.br' 
      },
      {
        name: 'Fatec-SP',
        location: 'Av. Tiradentes',
        degree: 'tecnologo',
        majors: ['ADS'],
        dates: '2015-01-01',
        url: 'fatec.sp.gov.br' 
      }
    ],
    
    onlineCourses: [
      {
        title: 'CS101',
        school: 'Udacity',
        date: '2013',
        url: 'https://www.udacity.com/course/intro-to-computer-science--cs101'
      },
      {
        title: 'CS253',
        school: 'Udacity',
        date: '2014',
        url: 'https://www.udacity.com/courses/web-development'
      },
      {
        title: 'UD989',
        school: 'Udacity',
        date: '2016',
        url: 'https://classroom.udacity.com/courses/ud989'
      },
      {
        title: 'UD507',
        school: 'Udacity',
        date: '2016',
        url: 'https://classroom.udacity.com/courses/ud507'
      }
    ],
    display: function(){}
  },
  
  init: function() {
    
  },
  
  work: {
    jobs: [{
        employer: 'Lighthouse Tecnologia e Serviços', 
        title: 'Junior System Analyst', 
        location: 'São Paulo', 
        dates: '2013-07-07',
        description: 'Full Stack development using javascript, java and groovy. Acting mainly as a developer but also doing technical specifications, taking requirements and end-user support.' },
      {
        employer: 'Lighthouse Tecnologia e Serviços', 
        title: 'Junior Integration Analyst', 
        location: 'São Paulo', 
        dates: '2015-10-12',
        description: 'Tasked with soa integration, build webservices, etl modules, documentation analysis and data modeling. Mostly focused on Java Development as well as a full soa set of tools.' }
      ]
  },
  
  projects: {
    projects: [
      {
        title: 'Logali',
        dates: '2014-12-12',
        description: 'Mobile development using phonegap. Developed a mobile frontend (using html5, javascript and knockout) to consume a set of webservices to feed with data about locations, clubs etc.',
        images: ["http://blogs.library.duke.edu/wp-content/uploads/2014/09/Books.jpg"] 
      },
      {
        title: 'Remote Monitor Assistant',
        dates: '2015-09-12',
        description: 'Native Android development as well as web-development. A mobile client streamed videos to a webclient (through a third party server). The web client could freeze the image and draw things on the screen which would be transmitted back to the mobile client.',
        images: ["http://blogs.library.duke.edu/wp-content/uploads/2014/09/Books.jpg"] 
      }
    ]
  },
  
  getBio: function() {
    return this.bio;
  },
  
  getEducation: function() {
    return this.education;
  },
  
  getWork: function() {
    return this.work;
  },
  
  getProjects: function() {
    return this.projects;
  },
  
  getModel: function() {
    return this;
  }
}


var octopus = {
  
  init: function() {
    model.init();
    view.init();
  },
  
  getProjects: function() {
    return model.getProjects();
  },
  
  getBio: function() {
    return model.getBio();
  },
  
  getContacts: function() {
    var bio = this.getBio();
    
    return bio.contacts;
  },
  
  getWork: function() {
    return model.getWork();
  },
  
  getProjects: function() {
    return model.getProjects();
  },
  
  getEducation: function() {
    return model.getEducation();
  },
  
  getModel: function() {
    return model.getModel();
  }
  
}

var view = {
  
  init: function() {
    this.header = $("#header");
    this.topContacts = $('#topContacts');
    this.work = $('#workExperience');
    this.projects = $('#projects');
    this.education = $('#education')
    this.map = $('#mapDiv');
    
    this.render();
  },
  
  render: function() {
    this.renderBio();
    this.renderWork();
    this.renderProjects();
    this.renderEducation();
    this.renderMap();
  },
  
  renderMap: function() {
    this.map.append(googleMap);
    initializeMap(octopus.getModel());
  },
  
  renderWork: function() {
    
    var work = octopus.getWork();

    for (var i = 0; i < work.jobs.length; i++) {
      var workStart = $(HTMLworkStart).appendTo(this.work);
      workStart.append((HTMLworkEmployer.replace("%data%", work.jobs[i].employer)) + (HTMLworkTitle.replace("%data%", work.jobs[i].title)));
      workStart.append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
      workStart.append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
      workStart.append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
    }
    
  },
  
  renderEducation: function() {
    var education = octopus.getEducation();
    
    for (var i = 0; i < education.schools.length; i++) {
      var schoolStart = $(HTMLschoolStart).appendTo(this.education);
      schoolStart.append((HTMLschoolName.replace("%data%", education.schools[i].name)) + (HTMLschoolDegree.replace("%data%", education.schools[i].degree)));
      schoolStart.append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
      schoolStart.append(HTMLschoolMajor.replace("%data%",education.schools[i].majors));
      schoolStart.append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
    }
    
    var onlineCourses = education.onlineCourses;
    if (onlineCourses.length > 0) {
      var courses = $(HTMLonlineClasses).appendTo(this.education);
      
      for (var i = 0; i < onlineCourses.length; i++) {
        courses.append((HTMLonlineTitle.replace("%data%", onlineCourses[i].title)) + (HTMLonlineSchool.replace("%data%", onlineCourses[i].school)));
        courses.append(HTMLonlineDates.replace("%data%", onlineCourses[i].date));
        courses.append(HTMLonlineURL.replace("%data%", onlineCourses[i].url));
      }
    }
    
  },
    
  renderProjects: function() {
    
    var projects = octopus.getProjects();

    for (var i = 0; i < projects.projects.length; i++) {
      var prjStart = $(HTMLprojectStart).appendTo(this.projects);
      prjStart.append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
      prjStart.append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
      prjStart.append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
      
      for (var j = 0; j < projects.projects[i].images.length; j++) {
        prjStart.append(HTMLprojectImage.replace("%data%",projects.projects[i].images[j]));
      }
    
    }
    
  },
  
  renderBio: function() {
    var bio = octopus.getBio();
    
    this.header.prepend(HTMLheaderRole.replace("%data%", bio.role));
    this.header.prepend(HTMLheaderName.replace("%data%", bio.name));
    
    this.renderContacts();
    
    this.header.append(HTMLbioPic.replace("%data%",bio.biopic));
    this.header.append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
    this.header.append(HTMLskillsStart);
    
    for (var i = 0; i < bio.skills.length; i++) {
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }

  },
  
  renderContacts: function() {
    var contacts = octopus.getContacts();
    
    this.topContacts.append(HTMLmobile.replace("%data%", contacts.mobile));
    this.topContacts.append(HTMLemail.replace("%data%", contacts.email));
    this.topContacts.append(HTMLgithub.replace("%data%", contacts.github));
    this.topContacts.append(HTMLtwitter.replace("%data%", contacts.twitter));
    this.topContacts.append(HTMLlocation.replace("%data%", contacts.location));
    
  }
}

octopus.init();