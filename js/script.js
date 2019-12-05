let grandTotal = 0;
let editIndex = 0;
let editFlag = false;
let insertRowIndex = 1;

function grandTotalValue(grandTotal) {
    document.getElementById("grand-total").innerText = grandTotal;
}

function addItem() {
    let list = [];
    let name = document.getElementById("nameId");
    let unit = document.getElementById("unitId");
    let price = document.getElementById("priceId");
    let total = unit.value * price.value;
    if (name.value != "" && unit.value != "" && price.value != "") {
        list.push(name.value);
        list.push(unit.value);
        list.push(price.value);
        list.push(total);
        grandTotal = grandTotal + total;
        updateTable(list);
        grandTotalValue(grandTotal);
    } else {
        alert("first filled all field")
    }
    name.value = "";
    unit.value = "";
    price.value = "";
}

function updateTable(list) {
    let table = document.getElementById("item-table");
    let row = table.insertRow(insertRowIndex);
    let nameCell = row.insertCell(0);
    let unitCell = row.insertCell(1);
    let priceCell = row.insertCell(2);
    let totalCell = row.insertCell(3);
    let editCell = row.insertCell(4);
    let deletCell = row.insertCell(5);
    nameCell.innerHTML = list[0];
    unitCell.innerHTML = list[1];
    priceCell.innerHTML = list[2];
    totalCell.innerHTML = list[3];
    editCell.innerHTML = "<html><body><button class=click-btn onclick=\"editItem(this)\"><i class='far fa-edit'></i></button></body></html>"
    deletCell.innerHTML = "<html><body><button class=click-btn onclick=\"deleteItem(this)\"><i class='far fa-trash-alt'></i></button></body></html>"
    insertRowIndex++;
}

function editItem(row) {
    let index = row.parentNode.parentNode.rowIndex;
    document.getElementById("nameId").value = document.getElementById("item-table").rows[index].cells[0].innerHTML;
    document.getElementById("unitId").value = document.getElementById("item-table").rows[index].cells[1].innerHTML;
    document.getElementById("priceId").value = document.getElementById("item-table").rows[index].cells[2].innerHTML;
    editFlag = true;
    editIndex = index;
}

function editButton() {
    if (editFlag) {
        let name = document.getElementById("nameId").value;
        let unit = document.getElementById("unitId").value;
        let price = document.getElementById("priceId").value;

        grandTotal = grandTotal - document.getElementById("item-table").rows[editIndex].cells[3].innerHTML;
        console.log(grandTotal);
        document.getElementById("item-table").rows[editIndex].cells[0].innerHTML = name;
        document.getElementById("item-table").rows[editIndex].cells[1].innerHTML = unit;
        document.getElementById("item-table").rows[editIndex].cells[2].innerHTML = price;
        document.getElementById("item-table").rows[editIndex].cells[3].innerHTML = unit * price;
        grandTotal = grandTotal + parseInt(document.getElementById("item-table").rows[editIndex].cells[3].innerHTML);

        document.getElementById("nameId").value = "";
        document.getElementById("unitId").value = "";
        document.getElementById("priceId").value = "";
        grandTotalValue(grandTotal);
        editFlag = false;
    }
}

function deleteItem(row) {
    let index = row.parentNode.parentNode.rowIndex;
    let minusValue = document.getElementById("item-table").rows[index].cells[3].innerHTML;
    grandTotal = grandTotal - minusValue;
    document.getElementById("item-table").deleteRow(index);
    grandTotalValue(grandTotal);
    insertRowIndex--;
}