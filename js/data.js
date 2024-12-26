var td1 = document.getElementById('td1');
var td2 = document.getElementById('td2');
var td3 = document.getElementById('td3');
var td4 = document.getElementById('td4');
var nm = document.getElementById('name');
var pass= document.getElementById('pass');

function takeData() {
    td1.innerHTML = nm.value;
    td2.innerHTML = pass.value;
}
















// <script type="text/javascript" src="https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js"></script>
// {/* <script>
// function ExportToExcel(type, fn,dl) 
// {
//     // Get values from inputs to table
//     document.getElementById('td1').innerHTML = document.getElementById("name").value;
//     document.getElementById('td2').innerHTML = document.getElementById("pass").value;
//     // main code
//     var elt =document.getElementById('tbl');
//     var wb = XLSX.utils.table_to_book(elt,{ sheet: "sheet1"});
//     return dl?
//     XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64'}):
//     XLSX.writeFile(wb, fn || ('MostafaExcel.' + (type || 'xlsx')))
// }
// </script> */}