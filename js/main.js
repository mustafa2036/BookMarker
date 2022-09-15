// Custom Variable
var NameInput = document.getElementById('NameInput');
var UrlInput = document.getElementById('UrlInput');
var bookMark = document.getElementById('bookmarkLsit');
var alertName = document.getElementById('alertName');
var alertUrl = document.getElementById('alertUrl');
var listInput = [];

// if => Return Search AddList
if( localStorage.getItem('AddList') != null ){
    listInput = JSON.parse(localStorage.getItem('AddList'));
    AddWebsite();
} else{
    listInput = [];
}
// Function => return onClick Of InputName.value, Input.Url Of User
function onClick(){
    if( validName() && validUrl()){
        var WebsiteList = {
            name: NameInput.value,
            url: UrlInput.value,
        }
        listInput.push(WebsiteList);
        localStorage.setItem('AddList', JSON.stringify(listInput));
        AddWebsite();
    }
}
// Function AddWebsite Of Input User
function AddWebsite(){
    var temp = ``;
    for(var i = 0; i < listInput.length; i++) {
        temp += `
            <div class="row box-wite py-5 px-1 m-1" id=`+ listInput[i].name +`>
                <h2>`+ listInput[i].name +`</h2>
                <a href=`+ listInput[i].url +`
                target="_blank" class="btn btn-outline-primary btn-box">Visit</a>
                <button onclick="deleteItmes(${i})" class="btn btn-outline-danger btn-box ms-3">Delete</button>
            </div>
        `
    }
    bookMark.innerHTML = temp;
}
// Function => retrun ClearData Of Input User
function clearData(){
    NameInput.value = "";
    UrlInput.value = "";
}
// Function => return deleteItems of Index
function deleteItmes(index) { 
    listInput.splice(index, 1);
    localStorage.setItem('AddList', JSON.stringify(listInput));
    AddWebsite();
}
// Function => Return Valid True Or False
function validName(){
    var regex = /^[A-Z]?[a-z]{4,9}[0-9]?$/;
    var validTest = false;

    if(regex.test(NameInput.value) == true){
        alertName.style.display = 'none';
        validTest = true;
    } else{
        alertName.style.display = 'block';
        validTest = false;
    }
    return validTest
}
// Function => Return Valid True Or False
function validUrl(){
    var regexx = /^(https|http)[:\/\/]{2,4}[a-zA-Z.]{3,4}[a-zA-Z]{4,10}[.\\\/][a-zA-Z]{2,3}$/;
    var validTest = false;

    if(regexx.test(UrlInput.value) == true){
        alertUrl.style.display = 'none';
        validTest = true;
    } else{
        alertUrl.style.display = 'block';
        validTest = false;
    }
    return validTest;
}