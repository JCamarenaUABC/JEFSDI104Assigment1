//Create an Object literal for the pet salon(Name, adress, Hours)

var ObjSalon = {
    nameSalon:"Pets",
    address: {
        street: "Km2 Carretera Tijuana Colonia Zaragoza, Mexicali BC",
        number: "49"
    },
    hours:{
        open: "8 am",
        close: "4 pm"
    },
    pets:[
        {   //Object 1
            namepet:"Napo",
            Age:6,
            breed:"Callejero",
            gender: "Male",
            type:"Dog"
        },
        {   //Object 2
            namepet:"Rafael",
            Age:2,
            breed:"Canalera",
            gender: "Male",
            type:"Turtle"
        },
        {   //Object 3
            namepet:"Mistica",
            Age:7,
            breed:"Callejero",
            gender: "Femela",
            type:"Dog"
        },
        {   //Object 4
            namepet:"La Pocha",
            Age:4,
            breed:"PitBull",
            gender: "Femela",
            type:"Dog"
        },
        {   //Object 5
            namepet:"Godzilla",
            Age:22,
            breed:"Desert lizard",
            gender: "Male",
            type:"Lizard"
        },
        {   //Object 6
            namepet:"Porfirio",
            Age:7,
            breed:"Callejero",
            gender: "Male",
            type:"Dog"
        },
    ]
}


//EXTRA HOMEWORK
//CSS
//DISPLAY DE OLDES AND YOUNGEST PET (CREATE A FUNCTION)



//Object structuring
//console.log(ObjSalon.address.street);

//var {name,address:{street,number},hours:{open,close}} = ObjSalon;

//console.log(name +"|"+ street +"|"+open);
//console.log(ObjSalon.pets);

//create and Array with pets(Obj literal) (name, breed, gender, type, services)
/*var ObjPets = {
    name:"Napo",
    breed:"Callejero",
    gender: "Male",
    type:"Dog",
    services:{
        hour: "11 am",
        descrition: "Washing Dog"
    }
}*/

//Function to display on the console the names of the pets
function DisplayNumberPets(Array)
{
    console.log("Number of records: "+Array.pets.length);
}

function DisplayName(Array)
{
    for(var x=0; x<Array.pets.length; x++){
        console.log(Array.pets[x].namepet);
    }
}

function GetMax(Array){
    var max =0;
/*
    for(var x=1; x<ObjSalon.pets.length; x++){
            temp = ObjSalon.pets[x].Age;
            //j = i - 1;
            var j=x-1;
            while ((ObjSalon.pets[j]!=undefined) && (ObjSalon.pets[j].Age > temp) && (j >= 0)) {
                max = ObjSalon.pets[j].Age;
                j--;
            }    
    }*/
    max = Math.max.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));

    console.log("Valor Maximo: "+max);
}

function GetMin(Array){

    min = Math.min.apply(Math, Array.pets.map(function(objArray) { 
        return objArray.Age; 
    }));

    console.log("Valor Minimo: "+min);
}


console.log("------Display Name--------");
DisplayName(ObjSalon);

console.log("------Display Number of Pets--------");
DisplayNumberPets(ObjSalon);

console.log("------Display Max Min-------");
GetMin(ObjSalon);
GetMax(ObjSalon);

//function to display on console the number of registered pets


