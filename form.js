var save=document.getElementById("save")
var newt=document.getElementById("container")
function update(){
    var nam=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var course=document.getElementById("course").value;
    var email=document.getElementById("mail").value;
    var tr=document.createElement("tr")
    tr.innerHTML = `
        <td>${nam}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button onclick="this.closest('tr').remove()">Delete</button></td>
    `;
    newt.appendChild(tr)
}