// TO SELECT ALL THE COLOR-BOXES , WE USED (QUERYSELECTORALL)
const colors = document.querySelectorAll('.color-boxes h2')

// GENERATING A FUNCTION NAMED (GENERATECOLORS)
function generateColors() {
    // SPECIFYING THE CONDITIONS FOR THE OUTPUT
  colors.forEach((color => {
    //  CONCATENATING OR ADDING THE # SYMBOL TO THE COLOR CODE 
    // & MENTIONED THE COLORS TO BE RANDOM 
    // & ALSO MENTIONED THE COLORCODE TO BE IN 16 DIGITS 
    // & MENTIONED BY USING SUBSTRING TO LET THE COLORCODE BE WITHIN 6 DIGITS ITSELF
       let hexCode = '#' + Math.random() .toString(16) .substring(2,8);
    //    SETTING THE COLOR-BOXES BACKGROUND COLOR TO BE THE RANDOM COLORS 
       color.style.backgroundColor = hexCode;
       color.innerHTML = hexCode;
  }));
}
// NOW , WE CALLED THE FUNCTION BELOW
generateColors()


// GENERATING A COPY FUNCTION WHEN WE CLICK / HOVER ON THE COLORBOXES

