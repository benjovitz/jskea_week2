let getAll
let getSpecific 
let idEdit 
let brandEdit 
let modelEdit 
let priceEdit 

export function initP5(){
    console.log("hej")
    //buttons
    //document.getElementById("btn-get-all").onclick = getAllCars
    //document.getElementById("btn-get-specific").onclick = getSpecificCar
    document.getElementById("btn-add").onclick = addCar
    //document.getElementById("btn-find-edit").onclick= getCarForEdit
    //document.getElementById("btn-edit-car").onclick=editCar
    //HTML
    //getAll = document.getElementById("get-all")
    //getSpecific = document.getElementById("get-specific")
    //idEdit = document.getElementById("id-edit")
    //brandEdit = document.getElementById("brand-edit")
    //modelEdit = document.getElementById("model-edit")
    //priceEdit = document.getElementById("pricePrDay-edit")
}


//For better errorhandling, so you couldndt just remove readonly from DOM and edit a different car
let carID;


 function getAllCars(){
    
    fetch("http://localhost:8080/api/cars")
    .then(res=>res.json())
    .then(data=>{
        let text = ` <tr>
                    <th>id</th><th>brand</th><th>model</th><th>price per day</th><th>best discount</th><th>created</th>
                </tr>`
                text+=data.map(car=>"<tr><td>"+car.id+"</td><td>"+car.brand+"</td><td>"+car.model+"</td><td>"+car.pricePrDay+"</td><td>"+car.bestDiscount+"%</td><td>"+car.created+"</td></tr>").join("")
        getAll.innerHTML=text
    })
 }
 function getSpecificCar(){
    let id = document.getElementById("text-for-id").value
    fetch("http://localhost:8080/api/cars/"+id)
    .then(res=>res.json())
    .then(car=>{
        console.log(car)
        let text ="<li>ID: "+car.id+"</li><li>Brand: "+car.brand+"</li><li>Model: "+car.model+"</li><li>Price per day: "+car.pricePrDay+"</li><li> Best Discount: "+car.bestDiscount+"</li><li>Created: "+car.created+"</li>"
            if(car.reservations.length!=0){
            text+="<li> Reservations: <table><th>date</th><th>username</th><th>email</th>"
            text+= car.reservations.map(res=>"<tr><td>"+res.date+"</td><td>"+res.username+"</td><td>"+res.email+"</td></tr>").join("")
            text+="</table>"  
    }
       getSpecific.innerHTML=text
    })
 }
 function addCar(){
    let newCar={}
    newCar.brand=document.getElementById("brand").value
    newCar.model=document.getElementById("model").value
    newCar.pricePrDay=document.getElementById("pricePrDay").value
    console.log(newCar)
    
    fetch("https://danielcars.azurewebsites.net/api/cars",{
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newCar)
    })
    .then(res=>res.json())
    .then(car=>{
        let text = "<li>ID: "+car.id+"</li><li>Brand: "+car.brand+"</li><li>Model: "+car.model+"</li><li>Price pr day: "+car.pricePrDay+"</li>"
        document.getElementById("new-car").innerHTML=text
    })

 }
 function getCarForEdit(){
    carID = document.getElementById("text-for-id2").value
    fetch("http://localhost:8080/api/cars/"+carID)
    .then(res=>res.json())
    .then(car=>{
        console.log(car)
        idEdit.setAttribute("value",car.id)
        brandEdit.setAttribute("value",car.brand)
        modelEdit.setAttribute("value",car.model)
        priceEdit.setAttribute("value",car.pricePrDay)
    })
 }
 function editCar(){
    let edittedCar ={}
    edittedCar.brand=brandEdit.value
    edittedCar.model=modelEdit.value
    edittedCar.pricePrDay=priceEdit.value
    fetch("http://localhost:8080/api/cars/"+carID,{
        method: "put",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(edittedCar)
    })
    .then(res=>res.json())
    .then(data=>document.getElementById("response").innerHTML=data)
 }