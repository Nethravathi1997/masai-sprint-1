var btn;
count = 0;

function submit() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    count +=1;

    cell0.innerHTML = x.value
    cell1.innerHTML = quantity.value
}

function submit1() {
    var table = document.getElementById("myTable1");
    var row = table.insertRow(1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    cell0.innerHTML = x1.value
    cell1.innerHTML = quantity1.value

    if(String(x.value)===String(x1.value)){

    cell2.innerHTML = (Number(quantity.value) - Number(quantity1.value))
            if(cell2.innerHTML < 5 ){
                alert("Stock of " + x.value + " is Running Low")
            }
        }
    else{
        alert("Stock of " + x1.value + " is Not Available")
        var row = table.deleteRow(1);
    }
}