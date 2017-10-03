function InitializePage()
{
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
        var _projects="";
        for(i=0; i<actual_JSON.Projects.length; i++)
            {
                _projects += "<div class=\"projectDiv\">"+
                "<div>"+
                    "<h3 style=\"height : 43px;\">"+actual_JSON.Projects[i].projectName+"</h3>"+
                "</div>"+
                "<div>"+
                    "<img src=\"ProjFiles/Images/"+actual_JSON.Projects[i].projectImage+"\" onclick=\"searchBackClicked(this)\" data-id=\"search\" type=\"image/*\" style=\"height : 220px; width : 100%; float:left; background-color: steelblue;\" id=\"searchBack\" />"+
                "</div>"+
            "</div>";
    
            }
        var _projectsBase = document.getElementById("projects");
        _projectsBase.innerHTML = _projects;
 });
}

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'ProjFiles/LocalFiles/projects.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
