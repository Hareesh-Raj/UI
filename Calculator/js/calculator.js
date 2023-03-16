const calculator = {
    addition : function(a,b) {
        return this.isNumber(a,b)? a+b : "Not a number invalid operation";
      } ,
    subtraction : function(a,b) {
        return this.isNumber(a,b)? a-b : "Not a number invalid operation";
    },
    multiplication: function(a,b) {
        return this.isNumber(a,b)? a*b : "Not a number invalid operation";
    },
    division : function(a,b)
    {
        return isNumber(a,b)? a/b : "Not a number invalid operation";
    },
    isNumber : function(a,b){
        return ( typeof a == "number" && typeof b == "number" ) ? true :false;
    }
}

let result=calculator.addition("2",3);
console.log(result);