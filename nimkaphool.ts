 declare const html2pdf : any
const editCvButton = document.getElementById("editCv") as HTMLButtonElement;
const generatePdfButton = document.getElementById("generatePdf") as HTMLButtonElement;
const share_cv = document.getElementById("share-cv") as HTMLButtonElement;
document.addEventListener("DOMContentLoaded", () => {
  let submit = document.getElementById("submit");
  let cvGenerated = false;
  submit?.addEventListener("click", (event) => {
    event.preventDefault();
    if(cvGenerated){
      alert('Cv is already genarated')
      return  
     
    }
  
    
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let nameTrim = name?.trim();
    if (!nameTrim) {
      alert(`Fill the name field`);
      return;
    }
    let link = (document.getElementById("link-share") as HTMLInputElement).value;
    let linkTrim2 = link?.trim();
    if (!linkTrim2) {
      alert(`Fill the share link field`);
      return;
    }



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
    

    cvGenerated = true;
const cvContent = document.createElement('div');
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

cvContent.innerHTML = `
  <div id="box1" style="display: flex; justify-content: space-between; background-color: #CD4FE9; margin-top: 1px; color: azure; width: auto; height: 100px;">
    <h1 style="font-size: 30px; margin-left: 40px; margin-top: 40px; color: white;">
      ${name.charAt(0).toUpperCase() + name.slice(1)}  ${name2.charAt(0).toUpperCase() + name2.slice(1)}
    </h1>
  </div>

 
  <div> 
    <ul style="margin-top: 40px; margin-right: 40px; display: flex; flex-direction: column; gap: 8px; list-style-type: none; padding: 0;">
      <li><span style="font-size: 22px;">Address:</span><span style="font-size: 18px; margin-left:-19px;">${adress} ${city}, ${country}</span></li>
      <li><span style="font-size: 22px;">Email:</span> <span style="font-size: 18px; margin-left:-19px;"><a href="mailto:${email}" style="color: black; text-decoration: none;">${email}</a></span></li>
      <li><span style="font-size: 22px;">Social Link:</span> <span style="font-size: 18px; margin-left:-19px;"><a href="${social}" style="color: black; text-decoration: none;">LinkedIn</a></span></li>
      <li><span style="font-size: 22px;">Phone:</span> <span style="font-size: 18px; margin-left:-19px;">Contact no: ${contact}</span></li>
    </ul>
  </div>

 
  <div class="box2">
    <h1 style="margin-left: 10px; font-weight: 900;">Summary</h1>
    <hr style="margin-top: -25px; border: 1px solid; width: auto;">
    <p  style="width: auto; margin-left: 10px;">${summary.charAt(0).toUpperCase() + summary.slice(1)}</p>
  </div>

  
  <h1 style="margin-left: 10px; font-weight: 900;">Skills</h1>
  <hr style="margin-top: -25px; border: 1px solid; width: auto;">
  <div style=" gap: 1px; width: auto; margin-left: 8px;">
    <p>1. ${skill1} - ${skills1}</p>
    <p>2. ${skill2} - ${skills2}</p>
    <p>3. ${skill3} - ${skills3}</p>
    <p>4. ${skill4} - ${skills4}</p>
  </div>

  <h1 style="margin-left: 8px; font-weight: 900;">Experience</h1>
  <hr style="margin-top: -25px; border: 1px solid; width: auto;">
  <div>
    <p>Job Title: ${jobtitle}</p>
    <p>Employer: ${employer}</p>
    <p>City: ${cityOfJob}</p>
    <p>State: ${state}</p>
    <p>Job Start Date: ${startdate}</p>
    <p>Job End Date: ${enddate}</p>

    <h3>Job Responsibilities:</h3>
    <p style="width: auto; margin-left: 10px;">${textarea}</p>
  </div>

  
  <h1 style="margin-left: 10px; font-weight: 900;">Education</h1>
  <hr style="margin-top: -25px; margin-left:-20px; border: 1px solid; width: auto;">
  <div>
    <p>Academic Level: ${education}</p>
    <p>Degree: ${degree}</p>
    <p>School: ${coleege}</p>
    <p>Grade: ${grade}</p>
    <p>Graduation Start Date: ${graduationstart}</p>
    <p>Graduation End Date: ${graduationend}</p>
  </div>
`;


document.body.appendChild(cvContent);


const linking = link;
const uniquepath = `resumes/${link.replace(/\s+/g, '-')}_cv.html`;

share_cv.addEventListener('click', () => {
    const cvString = cvContent.innerHTML;
    const downloadLink = document.createElement('a');

    downloadLink.href = `data:text/html;charset=utf-8,` + encodeURIComponent(cvString);
    downloadLink.download = uniquepath;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});








editCvButton.addEventListener("click", function () {
  cvContent.style.display = "none"; 
  cvGenerated = false;
});

generatePdfButton.addEventListener('click', () => { 
  html2pdf().from(cvContent).set({
    margin: 1,
    filename: 'CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).save();
});



})

  })














