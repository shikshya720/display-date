function showTime() {
	var d = new Date();
	var day = d.getDay();
	var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var month =d.getMonth();
	var date = d.getDate();
	var year = d.getFullYear();
	var s = d.getSeconds();
	var session = "AM";
	var h =d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	var session = "AM";
	if(h==0){
		h=12;
	}
	if (h>12) {
		h=h-12;
		session="PM"
	}
	h=(h<10) ? h:h;
	m=(s<10) ? m:m;
	s=(s<10) ? "0" + s:s;
	var time =  h +":"+ m + ":"+ s + " " + session;
	var date = month + "/" + date + "/" + year;

    document.getElementById("date").textContent = date;
	document.getElementById("time").innerHTML = time;
	document.getElementById("time").textContent = time;
	document.getElementById("date").textContent = date;
	document.getElementById("day").innerHTML = "Today is " +weekday[day];
	setTimeout(showTime,1000);
	
	}
	showTime();