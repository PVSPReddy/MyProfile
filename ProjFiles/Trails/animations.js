//indexservice.js
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
    var value = sender.dataset.id;
    var btnHome = document.getElementById("btnHome");
    btnHome.style.backgroundColor = 'skyblue';
    var btnCareer = document.getElementById("btnCareer");
    btnCareer.style.backgroundColor = 'skyblue';
    var btnProfile = document.getElementById("btnProfile");
    btnProfile.style.backgroundColor = 'skyblue';
    var btnContact = document.getElementById("btnContact");
    btnContact.style.backgroundColor = 'skyblue';
    sender.style.backgroundColor = 'red';
    var scrollTime = 5000;
    var x,y;
    if(value == "home")
    {
        var myDiv = document.getElementById('coverPic');
        y = myDiv.offsetTop;
        x = myDiv.offsetLeft;
        //document.body.animate(scrollTo(document.body, myDiv.offsetTop, scrollTime));
        //scrollTo(document.body, myDiv.offsetTop, scrollTime);
    }
    else if(value == "career")
    {
        var myDiv = document.getElementById('projects');
        y = myDiv.offsetTop;
        x = myDiv.offsetLeft;
        //scrollTo(document.body, myDiv.offsetTop, scrollTime);
    }
    else if(value == "profile")
    {
        var myDiv = document.getElementById('careers');
        y = myDiv.offsetTop;
        x = myDiv.offsetLeft;
        //scrollTo(document.body, myDiv.offsetTop, scrollTime);   
    }
    else if(value == "contact")
    {
        var myDiv = document.getElementById('contact');
        y = myDiv.offsetTop;
        x = myDiv.offsetLeft;
        //scrollTo(document.body, myDiv.offsetTop, scrollTime);   
    }
    else 
    {
            
    }
//    document.body.scroll({
//        top: x,
//        left: 0,
//        behavior: 'smooth'
//    });
    //x = document.body.offsetTop;
    x=window.scrollY;
    z = 1500;
    //document.body.animate({scroll}, 4000)
    //slideToDiv(x,y,z);
    var id = setInterval(frame, 10);
    function frame()
    {
        if(x>y)
        {
            var offSets = x-y;
            var intervals = offSets/10;
            if(y<=x)
            {
                scrollTo(document.body, x, 1);
                x -= 10;
            }
            else
            {
                clearInterval(id);
            }
//            for(; y<=x; )
//            {
//                setTimeout(sliding(x), 10000);
//                x -= 10;
//            }
        }
        else
        {
            var offSets = y-x;
            var intervals = offSets/10;
            if(y<=x)
            {
                scrollTo(document.body, x, 1);
                x += 10;
            }
            else
            {
                clearInterval(id);
            }
//            for(; y>=x; )
//            {
//                setTimeout(sliding(x), 10000);
//                x += 10;
//            }
        }
    }
    
    
    
    
}


function slideToDiv(x,y,z)
{
    if(x>y)
    {
        var offSets = x-y;
        var intervals = offSets/10;
        for(; y<=x; )
        {
            setTimeout(sliding(x), 10000);
            //scrollTo(document.body, x+interval, 1);
            //window.setTimeout(scrollTo(document.body, x, 100), 100);
            //scrollTo(document.body, x, 1);
            x -= 10;
        }
    }
    else
    {
        var offSets = y-x;
        var intervals = offSets/10;
        for(; y>=x; )
        {
            setTimeout(sliding(x), 10000);
            //scrollTo(document.body, x+interval, 1);
            //window.setTimeout(scrollTo(document.body, x, 100), 100);
            //scrollTo(document.body, x, 1);
            x += 10;
        }
    }
}
function sliding(v)
{
//    window.setTimeout(scrollTo(document.body, x, 100), 100);
    scrollTo(document.body, v, 1);
    return true;
}

function slideTo(x, y, time, decelRate, interval) {
	if (!decelRate)
		decelRate = 1;
	if (!interval)
		interval = 25;
	slideTo_h(x, y, time * decelRate, decelRate, interval, (new Date()).getTime());
}

function slideTo_h(x, y, time, decelRate, interval, dateTime) {
	if (time <= 0) {
		window.scrollTo(x, y);
		return;
	}
	var delay = interval + dateTime - (new Date()).getTime();
	setTimeout(function() { slideTo_h(x, y, time - interval * decelRate, decelRate, interval, dateTime + interval); }, (delay > 0 ? delay : 0));
	var m = interval / time;
	var rateX = (x - (document.documentElement.scrollLeft || document.body.scrollLeft)) * m;
	var rateY = (y - (document.documentElement.scrollTop || document.body.scrollTop)) * m;
	window.scrollBy(rateX, rateY);
}

//function slideTo(x, y, time, decelRate, interval) {
//	if (!decelRate)
//		decelRate = 1;
//	if (!interval)
//		interval = 25;
//	slideTo_h(x, y, time * decelRate, decelRate, interval, (new Date()).getTime());
//}
//
//function slideTo_h(x, y, time, decelRate, interval, dateTime) {
//	if (time <= 0) {
//		window.scrollTo(x, y);
//		return;
//	}
//	var now = (new Date()).getTime();
//	setTimeout(function() { slideTo_h(x, y, time - interval * decelRate, decelRate, interval, dateTime + interval); }, interval + dateTime - now);
//	var m = interval / time;
//	var rateX = (x - window.scrollX) * m;
//	var rateY = (y - window.scrollY) * m;
//	window.scrollBy(rateX, rateY);
//}

