var editCvButton = document.getElementById("editCv");
var generatePdfButton = document.getElementById("generatePdf");
var share_cv = document.getElementById("share-cv");
document.addEventListener("DOMContentLoaded", function () {
    var submit = document.getElementById("submit");
    var cvGenerated = false;
    submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", function (event) {
        event.preventDefault();
        if (cvGenerated) {
            alert('Cv is already genarated');
            return;
        }
        var name = document.getElementById("name").value;
        var nameTrim = name === null || name === void 0 ? void 0 : name.trim();
        if (!nameTrim) {
            alert("Fill the name field");
            return;
        }
        var link = document.getElementById("link-share").value;
        var linkTrim2 = link === null || link === void 0 ? void 0 : link.trim();
        if (!linkTrim2) {
            alert("Fill the share link field");
            return;
        }
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
        cvGenerated = true;
        var cvContent = document.createElement('div');
        cvContent.id = 'cvContent';
        cvContent.style.padding = "20px";
        cvContent.style.fontFamily = "Arial, sans-serif";
        cvContent.style.backgroundColor = "white";
        cvContent.style.width = "auto";
        cvContent.style.maxWidth = "1000px";
        cvContent.style.margin = "0 auto";
        cvContent.style.borderRadius = "3px";
        cvContent.style.maxHeight = "auto";
        cvContent.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        cvContent.innerHTML = "\n  <div id=\"box1\" style=\"display: flex; justify-content: space-between; background-color: #CD4FE9; margin-top: 1px; color: azure; width: auto; height: 100px;\">\n    <h1 style=\"font-size: 30px; margin-left: 40px; margin-top: 40px; color: white;\">\n      ".concat(name.charAt(0).toUpperCase() + name.slice(1), "  ").concat(name2.charAt(0).toUpperCase() + name2.slice(1), "\n    </h1>\n  </div>\n\n \n  <div> \n    <ul style=\"margin-top: 40px; margin-right: 40px; display: flex; flex-direction: column; gap: 8px; list-style-type: none; padding: 0;\">\n      <li><span style=\"font-size: 22px;\">Address:</span><span style=\"font-size: 18px; margin-left:-19px;\">").concat(adress, " ").concat(city, ", ").concat(country, "</span></li>\n      <li><span style=\"font-size: 22px;\">Email:</span> <span style=\"font-size: 18px; margin-left:-19px;\"><a href=\"mailto:").concat(email, "\" style=\"color: black; text-decoration: none;\">").concat(email, "</a></span></li>\n      <li><span style=\"font-size: 22px;\">Social Link:</span> <span style=\"font-size: 18px; margin-left:-19px;\"><a href=\"").concat(social, "\" style=\"color: black; text-decoration: none;\">LinkedIn</a></span></li>\n      <li><span style=\"font-size: 22px;\">Phone:</span> <span style=\"font-size: 18px; margin-left:-19px;\">Contact no: ").concat(contact, "</span></li>\n    </ul>\n  </div>\n\n \n  <div class=\"box2\">\n    <h1 style=\"margin-left: 10px; font-weight: 900;\">Summary</h1>\n    <hr style=\"margin-top: -25px; border: 1px solid; width: auto;\">\n    <p  style=\"width: auto; margin-left: 10px;\">").concat(summary.charAt(0).toUpperCase() + summary.slice(1), "</p>\n  </div>\n\n  \n  <h1 style=\"margin-left: 10px; font-weight: 900;\">Skills</h1>\n  <hr style=\"margin-top: -25px; border: 1px solid; width: auto;\">\n  <div style=\" gap: 1px; width: auto; margin-left: 8px;\">\n    <p>1. ").concat(skill1, " - ").concat(skills1, "</p>\n    <p>2. ").concat(skill2, " - ").concat(skills2, "</p>\n    <p>3. ").concat(skill3, " - ").concat(skills3, "</p>\n    <p>4. ").concat(skill4, " - ").concat(skills4, "</p>\n  </div>\n\n  <h1 style=\"margin-left: 8px; font-weight: 900;\">Experience</h1>\n  <hr style=\"margin-top: -25px; border: 1px solid; width: auto;\">\n  <div>\n    <p>Job Title: ").concat(jobtitle, "</p>\n    <p>Employer: ").concat(employer, "</p>\n    <p>City: ").concat(cityOfJob, "</p>\n    <p>State: ").concat(state, "</p>\n    <p>Job Start Date: ").concat(startdate, "</p>\n    <p>Job End Date: ").concat(enddate, "</p>\n\n    <h3>Job Responsibilities:</h3>\n    <p style=\"width: auto; margin-left: 10px;\">").concat(textarea, "</p>\n  </div>\n\n  \n  <h1 style=\"margin-left: 10px; font-weight: 900;\">Education</h1>\n  <hr style=\"margin-top: -25px; margin-left:-20px; border: 1px solid; width: auto;\">\n  <div>\n    <p>Academic Level: ").concat(education, "</p>\n    <p>Degree: ").concat(degree, "</p>\n    <p>School: ").concat(coleege, "</p>\n    <p>Grade: ").concat(grade, "</p>\n    <p>Graduation Start Date: ").concat(graduationstart, "</p>\n    <p>Graduation End Date: ").concat(graduationend, "</p>\n  </div>\n");
        document.body.appendChild(cvContent);
        var linking = link;
        var uniquepath = "resumes/".concat(link.replace(/\s+/g, '-'), "_cv.html");
        share_cv.addEventListener('click', function () {
            var cvString = cvContent.innerHTML;
            var downloadLink = document.createElement('a');
            downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(cvString);
            downloadLink.download = uniquepath;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
        editCvButton.addEventListener("click", function () {
            cvContent.style.display = "none";
            cvGenerated = false;
        });
        generatePdfButton.addEventListener('click', function () {
            html2pdf().from(cvContent).set({
                margin: 1,
                filename: 'CV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            }).save();
        });
    });
});
