var Person= function(fname, lname){
    this.fname = fname;
    this.lname = lname;
} 

var makena = new Person("MAkena", "Roselynhe")
Person.prototype.sayAge = function(){
    console.log("My age is: 26" )
}
//console.log(makena.fname + makena.lname )
//makena.sayAge()
//console.log(makena.__proto__)

function changeO(zebra){
    
    zebra.legs = function(){};
    zebra.eyes = {}
    
}

var lion = {}
lion.legs = {}
lion.eyes = function(){}
changeO(lion)

console.log(lion)


