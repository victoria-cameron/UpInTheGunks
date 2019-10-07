function checkAll() {
    var checked = document.getElementsByName('checkBoxes');
    var checkedBoxes = [];
        for (var i=0; i<checked.length; i++){
            if (checked[i].checked) {
                checkedBoxes.push(checked[i]);
            }
        }
    var fs = require('fs');
    var data ={};
    data.table = checkedBoxes;
    for(var i = 0; i < checkedBoxes.length; i++){
    	var obj = { id: i, checkBox};
    	data.table.push(obj);
    }
    fs.writeFile("input.json", JSON.stringify(data), function(err){
    	if(err)throw err;
    	console.log('data');
    });
    return checkedBoxes.length > 0 ? checkedBoxes : null;
}
function searchFunction(){
    var search = document.getElementId("search");
    var data = document.getElementId("checkBox");

    search.onclick = function(){
    	var input = document.getElementById("filterBy");
    	for(var i = 0; i < checkedBoxes.length; i++){
    		if(checkedBoxes[i] == search){
    			alert(data[i]);
    		}else{
    			alert("not found");
    		}
    	}
    }
}
