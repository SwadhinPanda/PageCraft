function generateCard() {
    // Variables For Input Text
    const nameInput = document.getElementById("nameInput").value;
    const rollInput = document.getElementById("rollInput").value;
    const semInput = document.getElementById("semInput").value;
    const paperInput = document.getElementById("paperInput").value;
  
    //Variables for Old Text in Template
    const nameElement = document.getElementById("studentName");
    const rollElement = document.getElementById("studentRoll");
    const semElement = document.getElementById("studentClass");
    const paperElement = document.getElementById("paperName");
  
    //Assignment of New Input Text with Old Text in Template
    nameElement.textContent = nameInput;
    rollElement.textContent = rollInput;
    semElement.textContent = semInput;
    paperElement.textContent = paperInput;
    document.getElementById("result-section").style.display = "block";

    alert("Scroll Down and Zoom to fit the Front Page and take Screenshot");
  
    //Display Property for Form and Designed Image to Take Screenshot
    // document.getElementById("downloadCard").style.display = "block";
    // document.getElementById("generateCard").style.display = "none";
    
  }
  function downloadCard() {
    // Get the div element
    var divToCapture = document.getElementById("result-section");

    // Use html2canvas to capture the content of the div
    html2canvas(divToCapture).then(function(canvas) {
        // Create an image from the canvas
        var img = new Image();
        img.src = canvas.toDataURL('image/png');

        // Open the image in a new tab (you can also save it or manipulate as needed)
        var newWindow = window.open();
        newWindow.document.write('<img src="' + img.src + '" alt="Converted Image"/>');
    });
}