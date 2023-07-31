function submitForm(event) {
    event.preventDefault(); // Prevent the form submission

    var readData = renderData();
    var password = readData[2]; // Extract the password from readData

    if (password === '') {
        alert("Please enter your password.");
    } else {
        var storedData = storedDataInLocalStorage(readData);
        insertDataInTable(storedData); // Call insertDataInTable with storedData
        greeting(); // Check for data and show the alert
        profileData()
    }
    
}


function renderData() {
    var name = document.getElementById("name").value;
    var contact=document.getElementById("contact").value
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var arr = [name, contact, email, password];
    return arr;
}

function storedDataInLocalStorage(readData) {
    localStorage.setItem("Name", readData[0]);
    localStorage.setItem("Contact",readData[1])
    localStorage.setItem("Email", readData[2]);
    localStorage.setItem("password", readData[3]);

    // No need to get data again from Local Storage, just use the readData directly
    return readData;
}

function insertDataInTable(readData) { // Fix the parameter name to readData
    let table = document.getElementById("table");
    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let contactCell = row.insertCell(1);
    let emailCell = row.insertCell(2);
    let statusCell = row.insertCell(3);

    nameCell.innerHTML = readData[0];
    contactCell.innerHTML=readData[1]
    emailCell.innerHTML = readData[2];
    statusCell.innerHTML = readData[3];
}
function greeting(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  if(name!='' && email!='' && password!=''){
    alert("Congrats!Your account is created successfully")
  }
  else{
    alert("Enter the data in require field first")
  }

}

function addMoney() {
    var currentAmount = parseInt(document.getElementById("loanAmount").textContent.replace("$", ""));
    var addedAmount = parseInt(prompt("Enter the amount you want to add:"));

    if (!isNaN(addedAmount) && addedAmount > 0) {
        var newAmount = currentAmount + addedAmount;
        document.getElementById("loanAmount").innerHTML = "$" + newAmount;
        alert("Money added successfully!");
    } else {
        alert("Invalid amount. Please enter a valid number greater than 0.");
    }
}
function withdrawMoney() {
    var currentAmount = parseInt(document.getElementById("loanAmount").textContent.replace("$", ""));
    var withdrawnAmount = parseInt(prompt("Enter the amount you want to withdraw:"));

    if (!isNaN(withdrawnAmount) && withdrawnAmount > 0 && withdrawnAmount <= currentAmount) {
        var newAmount = currentAmount - withdrawnAmount;
        document.getElementById("loanAmount").innerHTML = "$" + newAmount;
        alert("Money withdrawn successfully!");
    } else {
        alert("Invalid amount. Please enter a valid number greater than 0 and less than or equal to your current balance.");
    }
}













    // Retrieve the user's name from localStorage
    var name = localStorage.getItem("Name");

    // Display the name in the <h4> tag
    document.getElementById("personName").textContent = name;


    
var Email=localStorage.getItem("Email");
document.getElementById("personEmail").textContent=Email;

function profileData() {
    var table = document.getElementById("table2");

    // Check if the table exists
    if (!table) {
        console.error("Table with id 'table2' not found.");
        return;
    }

    let row = table.insertRow();
    let nameCell = row.insertCell(0);
    let mailCell = row.insertCell(1);
    let statusCell = row.insertCell(2);

    let name = localStorage.getItem("Name");
    let email = localStorage.getItem("Email");

    // Check if name and email are not null or empty
    if (name !== null && name !== "" && email !== null && email !== "") {
        nameCell.innerHTML = name;
        mailCell.innerHTML = email;
        statusCell.innerHTML = "Active";
    } else {
        nameCell.innerHTML = "N/A";
        mailCell.innerHTML = "N/A";
        statusCell.innerHTML = "Inactive";
    }
}


function displayPic(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const imagePreview = document.getElementById("image-preview");

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}


