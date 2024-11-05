declare const html2pdf: any;
const cvContent = document.getElementById('cvContent') as HTMLDivElement
const editCvButton = document.getElementById('editCv') as HTMLButtonElement
const cvDisplay = document.getElementById('cvDisplay') as HTMLDivElement
const generatePdfButton = document.getElementById('generatePdf') as HTMLButtonElement;
document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById("submit");
  submit?.addEventListener("click", (event) => {
    event.preventDefault();

    let name = (document.getElementById("name") as HTMLInputElement).value;
    let nameTrim = name?.trim();
    if (!nameTrim) {
      alert(`Fill the name field`);
      return;
    }
    let name1 = (document.getElementById("name1") as HTMLInputElement).value;

    let name2 = (document.getElementById("name2") as HTMLInputElement).value;
    let nameTrim2 = name2?.trim();
    if (!nameTrim2) {
      alert(`Fill the Last name field`);
      return;
    }

    let social = (document.getElementById("social") as HTMLInputElement).value;
    let socialTrim = social?.trim();
    if (!socialTrim) {
      alert(`Fill the social field`);
      return;
    }

    let country = (document.getElementById("country") as HTMLSelectElement)
      .value;
    let countryTrim = country?.trim();
    if (!countryTrim) {
      alert(`Fill the country field`);
      return;
    }

    let city = (document.getElementById("city") as HTMLSelectElement).value;
    let cityTrim = city?.trim();
    if (!cityTrim) {
      alert(`Fill the let city`);
    }

    let email = (document.getElementById("email") as HTMLInputElement).value;
    let emailTrim = email?.trim();
    if (!emailTrim) {
      alert(`Fill the email field`);
    }

    let contact = (document.getElementById("contact") as HTMLInputElement)
      .value;
    let contactTrim = contact?.trim();
    if (!contactTrim) {
      alert(`Fill the contact field`);
    }

    let adress = (document.getElementById("adress") as HTMLInputElement).value;
    let adressTrim = adress?.trim();
    if (!adressTrim) {
      alert(`Fill the adress field`);
    }
    let education = (document.getElementById("education") as HTMLSelectElement)
      .value;
    let educationTrim = education?.trim();
    if (!educationTrim) {
      alert(`Fill the education field`);
    }

    let degree = (document.getElementById("degree") as HTMLSelectElement).value;
    let degreeTrim = degree?.trim();
    if (!degreeTrim) {
      alert(`Fill the degree field`);
    }

    let coleege = (document.getElementById("coleege") as HTMLInputElement)
      .value;
    let coleegeTrim = coleege?.trim();
    if (!coleegeTrim) {
      alert(`Fill the college/school name field`);
    }

    let grade = (document.getElementById("grade") as HTMLSelectElement).value;
    let gradeTrim = grade?.trim();
    if (!gradeTrim) {
      alert(`Fill the grade field`);
    }

    let graduationstart = (
      document.getElementById("graduationstart") as HTMLInputElement
    ).value;
    let graduationstartTrim = coleege?.trim();
    if (!graduationstartTrim) {
      alert(`Fill the graduationstart date field`);
    }

    let graduationend = (
      document.getElementById("graduationend") as HTMLInputElement
    ).value;
    let graduationendTrim = graduationend?.trim();
    if (!graduationendTrim) {
      alert(`Fill the graduationend date field`);
    }

    let jobtitle = (document.getElementById("jobtitle") as HTMLInputElement)
      .value;
    let jobtitleTrim = jobtitle?.trim();
    if (!jobtitleTrim) {
      alert(`Fill the jobtitle field`);
    }

    let employer = (document.getElementById("employer") as HTMLInputElement)
      .value;
    let employerTrim = employer?.trim();
    if (!employerTrim) {
      alert(`Fill the employer field`);
    }

    let cityOfJob = (document.getElementById("cityOfJob") as HTMLInputElement)
      .value;
    let cityOfJobTrim = cityOfJob?.trim();
    if (!cityOfJobTrim) {
      alert(`Fill the cityOfJob field`);
    }

    let state = (document.getElementById("state") as HTMLInputElement).value;
    let stateTrim = state?.trim();
    if (!stateTrim) {
      alert(`Fill the state field`);
    }

    let startdate = (document.getElementById("startdate") as HTMLInputElement)
      .value;
    let startdateTrim = startdate?.trim();
    if (!startdateTrim) {
      alert(`Fill the startdate field`);
    }

    let enddate = (document.getElementById("enddate") as HTMLInputElement)
      .value;
    let enddateTrim = enddate?.trim();
    if (!enddateTrim) {
      alert(`Fill the enddate field`);
    }

    let textarea = (document.getElementById("textarea") as HTMLTextAreaElement)
      .value;
    let textareaTrim = textarea?.trim();
    if (!textareaTrim) {
      alert(`Fill the textarea field`);
    }

    let skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
    let skill1Trim = skill1?.trim();
    if (!skill1Trim) {
      alert(`Fill the skill1 field`);
    }

    let skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
    let skill2Trim = skill2?.trim();
    if (!skill2Trim) {
      alert(`Fill the skill2 field`);
    }

    let skill3 = (document.getElementById("skill3") as HTMLInputElement).value;
    let skill3Trim = skill3?.trim();
    if (!skill3Trim) {
      alert(`Fill the skill3 field`);
    }

    let skill4 = (document.getElementById("skill4") as HTMLInputElement).value;
    let skill4Trim = skill4?.trim();
    if (!skill4Trim) {
      alert(`Fill the skill4 field`);
    }

    let moreSkill = (
      document.getElementById("moreSkill") as HTMLTextAreaElement
    ).value;

    let summary = (document.getElementById("Summary") as HTMLTextAreaElement)
      .value;


    let skills1 = (document.getElementById("skills1") as HTMLSelectElement)
      .value;
    let skills1Trim = skills1?.trim();
    if (!skills1Trim) {
      alert(`Fill the skills1 field`);
    }

    let skills2 = (document.getElementById("skills2") as HTMLSelectElement)
      .value;
    let skills2Trim = skills2?.trim();
    if (!skills2Trim) {
      alert(`Fill the skills2 field`);
    }

    let skills3 = (document.getElementById("skills3") as HTMLSelectElement)
      .value;
    let skills3Trim = skills3?.trim();
    if (!skills3Trim) {
      alert(`Fill the skills3 field`);
    }

    let skills4 = (document.getElementById("skills4") as HTMLSelectElement)
      .value;
    let skills4Trim = skills4?.trim();
    if (!skills4Trim) {
      alert(`Fill the skills4 field`);
    }

   cvContent.innerHTML = `<div style="background-color:white; height:auto; width:1000px; margin-left:250px; border-radius:3px; overflow:visible;"><div id="box1" style="display: flex;justify-content: space-between;"><h1 style=" color:white;">${
      name.charAt(0).toUpperCase() +
      name.slice(1) +
      " " +
      name1.charAt(0).toUpperCase() +
      name1.slice(1) +
      " " +
      name2.charAt(0).toUpperCase() +
      name2.slice(1)
    }</h1> <ul><li><span class="span1" >Adress:</span><span  class="span5">${adress} ${city}, ${country}</span></li>
            <li><span 
         class="span2"    style="margin-top:-30px">Email:</span><span  class="span6"><a href="mailto:${email}">${email}</a></span></li>
             <li><span class="span3" style="margin-top:-20px">Social Link:</span><span  class="span7"><a href="${social}">LinkedIn</a></span></li>
              <li><span 
               class="span4" style="margin-top:-15px";>Phone:</span><span  class="span8">Contact no:${contact}</span></li>
    </ul></div>
    

    <div class="box2">
    <h1>Summary</h1>
    <hr/>
    <p class="summary">${summary}</p>
       
      <h1>Skills</h1>
    <hr/>
    <div class="box3">
    <div class="column1">
    <p>1.${skill1} -<span>${skills1}</span></p>
    <p>2.${skill2} -<span>${skills2}</span></p>
    </div>
   <div class="column2"> <p>3.${skill3} -<span>${skills3}</span></p>
    <p>4.${skill4} -<span>${skills4}</span></p> </div>
    </div>
     <div class="box4">
      <p>${moreSkill}</p>
    </div>
    </div>
    
    
    <div class="box5">
    <h1>Experience</h1>
    <hr/>
    <div class="column3">
    <p>job Title: ${jobtitle}</p>
    <p>Employer: ${employer}</p>
    </div>

    <div class="column4">
    <p>City of Employment: ${cityOfJob}</p>
    <p>State: ${state}</p>
    </div>

    <div class="column5">
    <p>Job Start Date: ${startdate}</p>
    <p>Job End Date: ${enddate}</p>
    </div>
    <div class="duties">
    <br/>
    <hr/>
    <br/>
    <h1>Job Responsibilities:</h1>
    <p class="summary">${textarea}</p>
    </div>



    
    <div class="box6">
    <h1>Education</h1>
    <hr/>
    <div class="column3">
    <p>Academic Level: ${education}</p>
    <p>Degree: ${degree}</p>
    </div>

    <div class="column4">
    <p>School/College name: ${coleege}</p>
    <p>Grade: ${grade}</p>
    </div>

    <div class="column5">
    <p>Graduation Start Date: ${graduationstart}</p>
    <p>Graduation End Date: ${graduationend}</p>
    </div>
    
    
   
    <div class="last"></div>
    </div>
    `;

    cvDisplay.style.display = 'block';
  });

  editCvButton.addEventListener('click', function() {
    cvDisplay.style.display = 'none'; 
});










})