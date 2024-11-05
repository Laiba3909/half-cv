var cvContent = document.getElementById('cvContent');
var editCvButton = document.getElementById('editCv');
var cvDisplay = document.getElementById('cvDisplay');
var generatePdfButton = document.getElementById('generatePdf');
document.addEventListener("DOMContentLoaded", function () {
    var submit = document.getElementById("submit");
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var nameTrim = name === null || name === void 0 ? void 0 : name.trim();
        if (!nameTrim) {
            alert("Fill the name field");
            return;
        }
        var name1 = document.getElementById("name1").value;
        var name2 = document.getElementById("name2").value;
        var nameTrim2 = name2 === null || name2 === void 0 ? void 0 : name2.trim();
        if (!nameTrim2) {
            alert("Fill the Last name field");
            return;
        }
        var social = document.getElementById("social").value;
        var socialTrim = social === null || social === void 0 ? void 0 : social.trim();
        if (!socialTrim) {
            alert("Fill the social field");
            return;
        }
        var country = document.getElementById("country")
            .value;
        var countryTrim = country === null || country === void 0 ? void 0 : country.trim();
        if (!countryTrim) {
            alert("Fill the country field");
            return;
        }
        var city = document.getElementById("city").value;
        var cityTrim = city === null || city === void 0 ? void 0 : city.trim();
        if (!cityTrim) {
            alert("Fill the let city");
        }
        var email = document.getElementById("email").value;
        var emailTrim = email === null || email === void 0 ? void 0 : email.trim();
        if (!emailTrim) {
            alert("Fill the email field");
        }
        var contact = document.getElementById("contact")
            .value;
        var contactTrim = contact === null || contact === void 0 ? void 0 : contact.trim();
        if (!contactTrim) {
            alert("Fill the contact field");
        }
        var adress = document.getElementById("adress").value;
        var adressTrim = adress === null || adress === void 0 ? void 0 : adress.trim();
        if (!adressTrim) {
            alert("Fill the adress field");
        }
        var education = document.getElementById("education")
            .value;
        var educationTrim = education === null || education === void 0 ? void 0 : education.trim();
        if (!educationTrim) {
            alert("Fill the education field");
        }
        var degree = document.getElementById("degree").value;
        var degreeTrim = degree === null || degree === void 0 ? void 0 : degree.trim();
        if (!degreeTrim) {
            alert("Fill the degree field");
        }
        var coleege = document.getElementById("coleege")
            .value;
        var coleegeTrim = coleege === null || coleege === void 0 ? void 0 : coleege.trim();
        if (!coleegeTrim) {
            alert("Fill the college/school name field");
        }
        var grade = document.getElementById("grade").value;
        var gradeTrim = grade === null || grade === void 0 ? void 0 : grade.trim();
        if (!gradeTrim) {
            alert("Fill the grade field");
        }
        var graduationstart = document.getElementById("graduationstart").value;
        var graduationstartTrim = coleege === null || coleege === void 0 ? void 0 : coleege.trim();
        if (!graduationstartTrim) {
            alert("Fill the graduationstart date field");
        }
        var graduationend = document.getElementById("graduationend").value;
        var graduationendTrim = graduationend === null || graduationend === void 0 ? void 0 : graduationend.trim();
        if (!graduationendTrim) {
            alert("Fill the graduationend date field");
        }
        var jobtitle = document.getElementById("jobtitle")
            .value;
        var jobtitleTrim = jobtitle === null || jobtitle === void 0 ? void 0 : jobtitle.trim();
        if (!jobtitleTrim) {
            alert("Fill the jobtitle field");
        }
        var employer = document.getElementById("employer")
            .value;
        var employerTrim = employer === null || employer === void 0 ? void 0 : employer.trim();
        if (!employerTrim) {
            alert("Fill the employer field");
        }
        var cityOfJob = document.getElementById("cityOfJob")
            .value;
        var cityOfJobTrim = cityOfJob === null || cityOfJob === void 0 ? void 0 : cityOfJob.trim();
        if (!cityOfJobTrim) {
            alert("Fill the cityOfJob field");
        }
        var state = document.getElementById("state").value;
        var stateTrim = state === null || state === void 0 ? void 0 : state.trim();
        if (!stateTrim) {
            alert("Fill the state field");
        }
        var startdate = document.getElementById("startdate")
            .value;
        var startdateTrim = startdate === null || startdate === void 0 ? void 0 : startdate.trim();
        if (!startdateTrim) {
            alert("Fill the startdate field");
        }
        var enddate = document.getElementById("enddate")
            .value;
        var enddateTrim = enddate === null || enddate === void 0 ? void 0 : enddate.trim();
        if (!enddateTrim) {
            alert("Fill the enddate field");
        }
        var textarea = document.getElementById("textarea")
            .value;
        var textareaTrim = textarea === null || textarea === void 0 ? void 0 : textarea.trim();
        if (!textareaTrim) {
            alert("Fill the textarea field");
        }
        var skill1 = document.getElementById("skill1").value;
        var skill1Trim = skill1 === null || skill1 === void 0 ? void 0 : skill1.trim();
        if (!skill1Trim) {
            alert("Fill the skill1 field");
        }
        var skill2 = document.getElementById("skill2").value;
        var skill2Trim = skill2 === null || skill2 === void 0 ? void 0 : skill2.trim();
        if (!skill2Trim) {
            alert("Fill the skill2 field");
        }
        var skill3 = document.getElementById("skill3").value;
        var skill3Trim = skill3 === null || skill3 === void 0 ? void 0 : skill3.trim();
        if (!skill3Trim) {
            alert("Fill the skill3 field");
        }
        var skill4 = document.getElementById("skill4").value;
        var skill4Trim = skill4 === null || skill4 === void 0 ? void 0 : skill4.trim();
        if (!skill4Trim) {
            alert("Fill the skill4 field");
        }
        var moreSkill = document.getElementById("moreSkill").value;
        var summary = document.getElementById("Summary")
            .value;
        var skills1 = document.getElementById("skills1")
            .value;
        var skills1Trim = skills1 === null || skills1 === void 0 ? void 0 : skills1.trim();
        if (!skills1Trim) {
            alert("Fill the skills1 field");
        }
        var skills2 = document.getElementById("skills2")
            .value;
        var skills2Trim = skills2 === null || skills2 === void 0 ? void 0 : skills2.trim();
        if (!skills2Trim) {
            alert("Fill the skills2 field");
        }
        var skills3 = document.getElementById("skills3")
            .value;
        var skills3Trim = skills3 === null || skills3 === void 0 ? void 0 : skills3.trim();
        if (!skills3Trim) {
            alert("Fill the skills3 field");
        }
        var skills4 = document.getElementById("skills4")
            .value;
        var skills4Trim = skills4 === null || skills4 === void 0 ? void 0 : skills4.trim();
        if (!skills4Trim) {
            alert("Fill the skills4 field");
        }
        cvContent.innerHTML = "<div style=\"background-color:white; height:auto; width:1000px; margin-left:250px; border-radius:3px; overflow:visible;\"><div id=\"box1\" style=\"display: flex;justify-content: space-between;\"><h1 style=\" color:white;\">".concat(name.charAt(0).toUpperCase() +
            name.slice(1) +
            " " +
            name1.charAt(0).toUpperCase() +
            name1.slice(1) +
            " " +
            name2.charAt(0).toUpperCase() +
            name2.slice(1), "</h1> <ul><li><span class=\"span1\" >Adress:</span><span  class=\"span5\">").concat(adress, " ").concat(city, ", ").concat(country, "</span></li>\n            <li><span \n         class=\"span2\"    style=\"margin-top:-30px\">Email:</span><span  class=\"span6\"><a href=\"mailto:").concat(email, "\">").concat(email, "</a></span></li>\n             <li><span class=\"span3\" style=\"margin-top:-20px\">Social Link:</span><span  class=\"span7\"><a href=\"").concat(social, "\">LinkedIn</a></span></li>\n              <li><span \n               class=\"span4\" style=\"margin-top:-15px\";>Phone:</span><span  class=\"span8\">Contact no:").concat(contact, "</span></li>\n    </ul></div>\n    \n\n    <div class=\"box2\">\n    <h1>Summary</h1>\n    <hr/>\n    <p class=\"summary\">").concat(summary, "</p>\n       \n      <h1>Skills</h1>\n    <hr/>\n    <div class=\"box3\">\n    <div class=\"column1\">\n    <p>1.").concat(skill1, " -<span>").concat(skills1, "</span></p>\n    <p>2.").concat(skill2, " -<span>").concat(skills2, "</span></p>\n    </div>\n   <div class=\"column2\"> <p>3.").concat(skill3, " -<span>").concat(skills3, "</span></p>\n    <p>4.").concat(skill4, " -<span>").concat(skills4, "</span></p> </div>\n    </div>\n     <div class=\"box4\">\n      <p>").concat(moreSkill, "</p>\n    </div>\n    </div>\n    \n    \n    <div class=\"box5\">\n    <h1>Experience</h1>\n    <hr/>\n    <div class=\"column3\">\n    <p>job Title: ").concat(jobtitle, "</p>\n    <p>Employer: ").concat(employer, "</p>\n    </div>\n\n    <div class=\"column4\">\n    <p>City of Employment: ").concat(cityOfJob, "</p>\n    <p>State: ").concat(state, "</p>\n    </div>\n\n    <div class=\"column5\">\n    <p>Job Start Date: ").concat(startdate, "</p>\n    <p>Job End Date: ").concat(enddate, "</p>\n    </div>\n    <div class=\"duties\">\n    <br/>\n    <hr/>\n    <br/>\n    <h1>Job Responsibilities:</h1>\n    <p class=\"summary\">").concat(textarea, "</p>\n    </div>\n\n\n\n    \n    <div class=\"box6\">\n    <h1>Education</h1>\n    <hr/>\n    <div class=\"column3\">\n    <p>Academic Level: ").concat(education, "</p>\n    <p>Degree: ").concat(degree, "</p>\n    </div>\n\n    <div class=\"column4\">\n    <p>School/College name: ").concat(coleege, "</p>\n    <p>Grade: ").concat(grade, "</p>\n    </div>\n\n    <div class=\"column5\">\n    <p>Graduation Start Date: ").concat(graduationstart, "</p>\n    <p>Graduation End Date: ").concat(graduationend, "</p>\n    </div>\n    \n    \n   \n    <div class=\"last\"></div>\n    </div>\n    ");
        cvDisplay.style.display = 'block';
    });
    editCvButton.addEventListener('click', function () {
        cvDisplay.style.display = 'none';
    });
    generatePdfButton.addEventListener("click", function () {
        var element = cvContent.textContent;
        // Check if CV content is not empty
        if (!element || element.trim() === "") {
            alert("CV content khali hai! Pehle form fill karein.");
            return; // Exit the function if CV content is empty
        }
        var options = {
            margin: 1,
            filename: 'CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Generate PDF
        html2pdf().from(element).set(options).save();
    });
});
