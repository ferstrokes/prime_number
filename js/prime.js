tooltips = function (){
    $('.agregar, .limpiar').tooltip();
    $('#numbers').keypress(function(e) {
    if(e.which == 13) {
       addNum($('#numbers').val()); 
    }
});
};


var nums = [];

isPrime = function(n) {
    //Si el producto del numero al dividirse entre 1 es diferente de cero 
    //o si el numero es menor a 2 sera primo
    if (n%1 || n<2) return false; 
    //calculamos la raiz cuadrada del numero
    var rC = Math.sqrt(n);
    //ciclo desde el primer primo hasta el ultimo dividendo posible (obtenido por la raiz cuadrada)
    for (var i=2;i<=rC;i++){
        //si tiene algun otro dividendo sera primo
        if (n%i==0) {
            return false;
        }
    }
    return true;
}


listNoPrime = function() {
    var newArray = [],
        arrayNums = nums;
    //evaluamos con un ciclo finito el array
    for (i=0; i<=arrayNums.length - 1; i++) {
        //verificamos si el numero no es primo
        if (!isPrime(arrayNums[i])) {
            //se agrega al nuevo array
            newArray.push(arrayNums[i])
        } 
    } 
    //Salida de array sin numeros primos
    //Se usas "sort" para ordenamiento de manera ascendente
    nums = newArray.sort(function (a, b) {
        return a-b
    });
    $("#result h3").html("");
     _.each(nums, function(item){
        $("#result h3").append('<span class="label label-default numberlist">' + item +'</span>');
    });
};

addNum = function(n){
    if(n == "" || !Number(n)){
        $("#result h3").html('<div class="alert alert-danger"> Ops! eso no es un numero, intenta de nuevo. </div>');
        return false;
    }
    nums.push(n);
    $("#result h3").html("");
    _.each(nums, function(item){
        $("#result h3").append('<span class="label label-default numberlist">' + item +'</span>');
    });
    //document.getElementById("result").textContent = nums;
    document.getElementById("numbers").value = "";
};

removeall =  function(){
    nums = [];
     $("#result h3").html("");
}


//listNoPrime([40, 31, 58, 7, 13, 100, 25]);
