
let nameInput=document.getElementById("addname");
let ageInput=document.getElementById("addage");
let yearInput=document.getElementById("addyear");
let addressInput=document.getElementById("addaddress");

let massagebox=document.getElementById("display");

let addproduct=document.getElementById("addvalue");

let submitBtn=document.getElementById("sub");
let idcnt=0;
let updateId;

addproduct.addEventListener('click',function(){
  
    let name,age,year,address;

    name=nameInput.value;
    age=ageInput.value;
    year=yearInput.value;
    address=addressInput.value;
    
    var tablerow=document.createElement("tr");
    
    var nametr=document.createElement("td");
    tablerow.appendChild(nametr);

    var agetr=document.createElement("td");
    tablerow.appendChild(agetr);

    var yeartr=document.createElement("td");
    tablerow.appendChild(yeartr);

    var addresstr=document.createElement("td");
    tablerow.appendChild(addresstr);
    
    var delBtn=document.createElement("button");
	
	var editBtn=document.createElement("button");
	
	delBtn.innerText="Delete";
	editBtn.innerText="Edit";
	
	nametr.setAttribute("class","nameedit");
	agetr.setAttribute("class","ageedit");
	yeartr.setAttribute("class","yearedit");
	addresstr.setAttribute("class","addressedit");
    delBtn.setAttribute("class","delete");
	editBtn.setAttribute("class","edit");
	tablerow.setAttribute("id","list_"+idcnt);
	
    tablerow.appendChild(delBtn);
	tablerow.appendChild(editBtn);

    massagebox.appendChild(tablerow);
    
    nametr.innerText=name;
    
    agetr.innerText=age;

    yeartr.innerText=year;
    
    addresstr.innerText=address;
    console.log(tablerow);
	
	let edit_Btn=document.getElementsByClassName("edit");
	let del_Btn=document.getElementsByClassName("delete");
	
	for(var i = 0; i < edit_Btn.length ; i++){
		edit_Btn[i].addEventListener("click",edittext);
	}
	for(var i = 0 ; i < del_Btn.length ; i++){
		del_Btn[i].addEventListener("click",delcontent);
	}
	idcnt++;

    clearAndShow();
	
})

function clearAndShow(){
    nameInput.value="";
    ageInput.value="";
    yearInput.value="";
    addressInput.value="";

}
function edittext(){
	let getprnt=this.parentNode;
	let name_edit=getprnt.getElementsByClassName("nameedit")[0];
	let age_edit=getprnt.getElementsByClassName("ageedit")[0];
	let year_edit=getprnt.getElementsByClassName("yearedit")[0];
	let address_edit=getprnt.getElementsByClassName("addressedit")[0];
	
	nameInput.value = name_edit.innerText;
	ageInput.value = age_edit.innerText;
	yearInput.value = year_edit.innerText;
	addressInput.value = address_edit.innerText;
	
	submitBtn.style.display="inline-block";
	
	let getid=getprnt.getAttribute("id");
	
	updateId=getid;
	console.log(updateId);
}
function delcontent(){
	this.parentNode.remove();
	//submitBtn.style.display="none";
}
function done(i){
	
	let upId=document.getElementById(i);
	console.log(upId);
	let nameupdate=upId.getElementsByClassName("nameedit")[0];
	let ageupdate=upId.getElementsByClassName("ageedit")[0];
	let yearupdate=upId.getElementsByClassName("yearedit")[0];
	let addressupdate=upId.getElementsByClassName("addressedit")[0];
	
	nameupdate.innerText=nameInput.value;
	ageupdate.innerText=ageInput.value;
	yearupdate.innerText=yearInput.value;
	addressupdate.innerText=addressInput.value;
}

submitBtn.addEventListener("click",function(){
	done(updateId);
	clearAndShow();
	submitBtn.style.display="none";
})