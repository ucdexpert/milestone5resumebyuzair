 

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();


    // Retrieve form elements with type assertions
  const profilePictureInput = document.getElementById('profilePicture')as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
     const addressElement = document.getElementById('address')as HTMLInputElement;

     //** 
const usernameElement = document.getElementById('username')as HTMLInputElement;




    // Check that elements are present
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && addressElement &&  usernameElement) {
        // Get values from the form
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const address = addressElement.value

        // **
        const username = usernameElement.value;
        const uniquePath = `resume / ${username.replace(/\as+/g, '_')}_cv.html`


        
       

//piicture Element
const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) :''






        // Create the resume output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ?`<img src="${profilePictureURL}" alt="Profile Picture "class="profilePicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Address</h3>
            <p>${address}</p>

        `;

const downloadLink = document.createElement('a')
downloadLink.href ='data:text/html;charset=utf-8,'+ encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent = "Download Your 2024 Resume";




        // Display the resume output
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;


//** */
            resumeOutputElement.appendChild(downloadLink)

            resumeOutputElement.style.display = 'block';
        }  

    } else {
        console.error('One or more form elements are missing.');
    }
});