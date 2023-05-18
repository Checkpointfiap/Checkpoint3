document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('dark-mode')
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('input-dark-mode')

    if(darkMode){
        html.setAttribute("dark", "true")
      }
  
      inputDarkMode.addEventListener('change', () => {
        if(inputDarkMode.checked){
          html.setAttribute("dark", "true")
       

        }
      })
  
    })