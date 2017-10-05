function InitializePage()
{
    getProjectsData("projects");
    getProjectsData("careers");
}



function getProjectsData(data)
{
    loadJSON(data, function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
        if(data == "projects")
            {
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
            }
        else if(data == "careers")
            {
                var _careers="";
                for(i=0; i<actual_JSON.Careers.length; i++)
            {
                _careers += "<div class=\"careerDiv\">"+
                "<div>"+
                    "<h3 style=\"height : 43px;\">"+actual_JSON.Careers[i].CompanyName+"</h3>"+
                "</div>"+
                "<div>"+
                    "<img src=\"ProjFiles/Images/"+actual_JSON.Careers[i].CompanyImage+"\" onclick=\"searchBackClicked(this)\" data-id=\"search\" type=\"image/*\" style=\"height : 160px; width : 100%; float:left; background-color: steelblue;\" id=\"searchBack\" />"+
                "</div>"+
                 "<div>"+
                    "<p style=\"height : 43px; float: right; \">"+actual_JSON.Careers[i].CompanyAddress+"</p>"+
                "</div>"+
            "</div>";
    
            }
        var _careersBase = document.getElementById("careers");
        _careersBase.innerHTML = _careers;
            }
 });
}

function loadJSON(data, callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'ProjFiles/LocalFiles/'+data+'.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }



function OptionClicked(sender)
{
    var value = sender.data-id;
}

