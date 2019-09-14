console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
//'September 7, 2019 23:15:30'
var firstDay = new Date(); 
var pastDate = firstDay.getDate() - firstDay.getDay(); 
firstDay.setDate(pastDate);
var pastMonth = firstDay.getMonth()+1;
var pastDay = firstDay.getDate();

var total = 0;

tablec = document.getElementsByClassName("bodytext"); 
var table = tablec[0]; 
for(var i = 0; i < table.rows.length; i++) {
    var content = table.rows[i].cells[0].innerHTML; 
    if (content != "<b>On-Campus Blue Meal Plan Activity</b>" && content != "Posted") {
        var month = parseInt(content[0],10);
        var day = parseInt(content[2],10);
        if (month >= pastMonth){
            if (day >= pastDay){
                total = total + 1
            }
        }
    }
}

chrome.storage.local.set({totalCount: total}, function() {
    console.log("Total: " + total);
});

// localStorage.setItem('totalCount', total);
// console.log('here');
