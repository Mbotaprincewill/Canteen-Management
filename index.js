function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
    content.style.display= 'none';  
    }); 
    document.getElementById(id).style.display = 'block';
}

function createWorker(){
    const form1 = document.getElementById('workerForm');
/*
form1.addEventListener("submit", function(event){
const inputs = document.querySelectorAll('input');

let filledFields = true;
    inputs.forEach(input =>{
        if(!input.value){
            filledFields=false;
        }
    });
    if(!filledFields){
        event.preventDefault();
        alert("Please fill all fields!");
    }

});
 */

const workerArray = [];
let firstName = document.getElementById('fname').value;
let lastName = document.getElementById('lname').value;
let Date_Of_Birth = document.getElementById('DOB').value;
let Place_Of_Birth = document.getElementById('POB').value;
let Department = document.getElementById('dept').value;
let Status = document.getElementById('status').value;
let Gender = document.getElementById('gender').value;
let registrationDate = Date();

const WorkerObject = {
firstName,
lastName,
Date_Of_Birth,
Place_Of_Birth,
Department,
Status,
Gender,
registrationDate
};

const select = document.getElementById('workerList');

const list = document.createElement('option');

list.textContent = (firstName + "" + lastName);
select.appendChild(list);


workerArray.push(WorkerObject);
console.log(workerArray);

let number = 1;
/*
let num = newRow.getBoundingClientRect().height;
console.log(num);
*/
let body = document.getElementById('data');

const newRow = document.createElement('tr');

    const numberCell = newRow.insertCell();
    const nameCell = newRow.insertCell();
    const departmentCell = newRow.insertCell();
    const statusCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const genderCell = newRow.insertCell();
    const regDateCell = newRow.insertCell();

    numberCell.textContent = number;
    nameCell.textContent = (firstName + "" + lastName);
    departmentCell.textContent = Department;
    statusCell.textContent = Status;   
    dateCell.textContent = Date_Of_Birth;
    genderCell.textContent = Gender;
    regDateCell.textContent = registrationDate;

    

    window.alert('Worker saved')
    body.appendChild(newRow);
    form1.reset();

}
/*
function createStaf(){
    if(!window.indexedDB){
        console.error('Your browser dont have indexedDb');
        return;
    }
    const request = window.indexedDB.open("quanticDb", 1);
    
    request.onupgradeneeded = function(event){
        const db = event.target.result;
        const objectStore = db.createObjectStore('staf', {
            keyPath: 'id', autoIncrement: true});
        };
    
        request.onsuccess = function(event){
            const db = event.target.result;
            document.getElementById('stafForm').addEventListener('Submit', function(event){
                event.preventDefault();
                const firstName = document.getElementById('fname').value;
                const lastName = document.getElementById('lname').value;
                const dateOfBirth = document.getElementById('DOB').value;
                const placeOfBirth = document.getElementById('POB').value;
                const dept = document.getElementById('dept').value;
                const status = document.getElementById('status').value;
                const gender = document.getElementById('gender').value;
    
                const transaction = db.transaction(['staf'], 'readWrite');
                const objectStore = transaction.objectStore('staf');
                const stafs = {
                    firstName, lastName, dateOfBirth, placeOfBirth, dept, status, gender
                };
                const request = objectStore.add(stafs);
                request.onsuccess = function(){
                    document.getElementById('message').textContent = 'Staf created successfully';
                    document.getElementById('stafForm').reset();
                };
                request.onerror = function(){
                    document.getElementById('message').textContent = ' error creating staff';
                };
            
            });
        };
        request.onerror = function(){
            document.getElementById('message').textContent = ' error opening the database';
        };
    
    }
 */