    function loaderfit(){
        const loading= document.querySelector('.loading');
        const body = document.querySelector('body');
        while(loading.style.display='flex'){
        body.classlist.add='fit';
        }
     }
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loading');
        loader.style.display = 'none';
    });
    loaderfit();
     // Hero Section Typing Function and Word Change ends Here

      document.addEventListener("DOMContentLoaded", () => {
          
              const wordElement = document.querySelector("#name");
               const textToType = "I am Moshood Abdulhaqq";

          let charIndex = 0;

          function typeText() {
           if (charIndex < textToType.length) {
        wordElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); 
    }
}

// Start the typing effect when the page loads
window.addEventListener('load', typeText);
     });
     // Hero Section Typing Function and Word Change ends Here


