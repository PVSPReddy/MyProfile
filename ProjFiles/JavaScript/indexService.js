function InitializePage()
{
    var projectsBase = document.getElementById("projects");
    var projects = "<div class=\"projectDiv\">"+
                "<div>"+
                    "<h3>Life Improvement Community</h3>"+
                "</div>"+
                "<div>"+
                    "<img src=\"ProjFiles/Images/LIC1.png\" onclick=\"searchBackClicked(this)\" data-id=\"search\" type=\"image/*\" style=\"height : 220px; width : 100%; float:left; background-color: steelblue;\" id=\"searchBack\" />"+
                "</div>"+
            "</div>";
    projectsBase.innerHTML = projects;
    
    
    var careersBase = document.getElementById("careers");
    var careers = "<div class=\"careerDiv\">"+
                "<div>"+
                    "<h3>DevRabbit</h3>"+
                "</div>"+
                "<div>"+
                    "<img src=\"ProjFiles/Images/CompanyLogo1.png\" onclick=\"searchBackClicked(this)\" data-id=\"search\" type=\"image/*\" style=\"height : 160px; width : 100%; float:left; background-color: steelblue;\" id=\"searchBack\" />"+
                "</div>"+
                 "<div>"+
                    "<p>8-2-268/R/5, Sagar Society, " +
                        "Road No.2, Banjara Hills, " +
                        "Hyderabad-500034, India " +
                        "Office: +91-40-2355-1445 </p>"+
                "</div>"+
            "</div>";
    careersBase.innerHTML = careers;
    tryJSON();
}



function tryJSON()
{
    loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
 });
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '../LocalFiles/projects.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }