document.addEventListener('DOMContentLoaded', function () {
  const profileImage = document.getElementById('profileImage');

  if (profileImage) {
    // Extract filename and base name
    const fileName = profileImage.src.split('/').pop();
    const baseName = fileName.split('.')[0];

    // Set initial alt text
    profileImage.alt = `Profile image of ${baseName}`;

    // Handle broken image path or incorrect filename
    profileImage.onerror = () => {
      const brokenFileName = profileImage.src.split('/').pop();
      const brokenBaseName = brokenFileName.split('.')[0];
      profileImage.alt = `Profile image of ${brokenBaseName} is not available`;
    };
  }
  
  /*Retrieve button class*/
  const buttons = document.querySelectorAll('.gitHub-Button, .frontendMentor-Button, .linkedIn-Button, .facebook-Button, .youtube-Button');


  /*Button event listeners for hover*/
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      if(!button.classList.contains('active')){
      button.style.backgroundColor = 'limegreen';
      }
    });
      button.addEventListener('mouseleave', () => {
        if(!button.classList.contains('active')){
        button.style.backgroundColor = 'rgb(56, 56, 56)';
      }
    });
  });

  /*Button event listeners for click*/
  buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn =>{
          btn.classList.remove('active');
          btn.style.backgroundColor = 'rgb(56, 56, 56)';
    });
        button.classList.add('active');
        button.style.backgroundColor = 'green';
    });
  });

  /*Button event listeners for redirection*/
  buttons.forEach(button => {
      button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        };
      });
    });
});
