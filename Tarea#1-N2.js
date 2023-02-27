class Ejercicio1{
    suma2numeros(){
        console.log("Sumar dos numeros siempre cuando el promero sea mayor al segundo")
        let num1=Math.floor(Math.random()*10),num2=Math.floor(Math.random()*10),suma=0
        if(num1>num2){
            suma=num1 + num2
            console.log(num1, "+", num2,"=",suma)
        }else{
            console.log("No se pudo realizar la suma porque",num1,"es menor que",num2)
        }
    
    }

}
//let resultado = new Ejercicio1()
//resultado.suma2numeros()

class Ejercicio2{
    operadores(){
        console.log("Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo")
        let num1=Math.floor(Math.random()*10),num2=Math.floor(Math.random()*10)
        let suma=0,resta=0,multi=0,divi=0,residuo=0
        let ops="+",opr="-",opm="*",opd="/",opre="%"

        if (ops="+"){
            suma= num1 + num2
            console.log(num1,ops,num2,"=",suma)
        }else{

        }
        if (opr="-"){
            resta= num1 - num2
            console.log(num1,opr,num2,"=",resta)
        }else{
            
        }
        if (opm="*"){
            multi= num1 * num2
            console.log(num1,opm,num2,"=",multi)
        }else{
            
        }
        if (opd="/"){
            divi= num1 / num2
            console.log(num1,opd,num2,"=",divi)
        }else{
            
        }
        if (opre="%"){
            residuo= num1 % num2
            console.log(num1,opre,num2,"=",residuo)
        }else{
            
        }

    }
}
//let resultado = new Ejercicio2()
//resultado.operadores()

class Ejercicio3{
    mayorde2numeros(){
        console.log("Presentar el mayor de dos numeros")
        let num1=Math.floor(Math.random()*10),num2=Math.floor(Math.random()*10)
        if (num1>num2){
            console.log(num1,">",num2)
        }else{
            if(num1==num2){
                console.log(num1,"=",num2)
            }else{
                console.log(num1,"<",num2)
            }
        }
    }
}
//let resultado= new Ejercicio3()
//resultado.mayorde2numeros()

class Ejercicio4{
    nombreporpantalla(){
        console.log("Dado un nombre presentarlo")
        let nombre="Jose"
        console.log("Su nombre es ",nombre)
    }
}
//let resultado=new Ejercicio4()
//resultado.Ejercicio4()

class Ejercicio5{
    ivadeunproducto(){
        console.log("Dado un valor de compra presentar el total considerando un 12% de iva")
        let iva=0.12, producto=Math.floor(Math.random()*1000),total=0,impuestoiva=0
        impuestoiva=producto*iva
        total=(producto+impuestoiva)
        console.log("El total de la compra de su  producto con iva incluido es: ",total)
    }
}
//let resultado=new Ejercicio5()
//resultado.ivadeunproducto()

class Ejercicio6{
    nombre5veces(){
        console.log("Presentar 5 veces un nombre")
        let nombre="Jose",x=0
        while (x<5){
            console.log(nombre)
            x=x+1
        }
    }
}
//let resultado=new Ejercicio6()
//resultado.nombre5veces()

class Ejercicio7{
    multiplos3(){
        console.log("Presentar los numeros multiplos de 3 del 3 al 21")
        let i=3
        for(i=3;i<=21;i=i+1) {
            if(i % 3 == 0){
                console.log(i)
            }
        }
    }
}
//let resultado=new Ejercicio7()
//resultado.multiplos3()

class Ejercicio8{
    multiplos21(){
        console.log("Presentar los numeros multiplos de 3 del 21 al 3")
        let i=21
        for(i=21;i>=3;i=i-1) {
            if(i % 3 == 0){
                console.log(i)
            }
        }
    }
}
//let resultado=new Ejercicio8()
//resultado.multiplos21()

class Ejercicio9{
    nombresiguales(){
        console.log("Dados dos nombres indicar si son iguales o diferentes")
        let Nombre1="Jose",nombre2="Adrian"
        if(Nombre1 == nombre2){
            console.log(Nombre1,"Es igual a",nombre2)
        }else{
            console.log(Nombre1,"No es igual a",nombre2)
        }
    }
}
//let resultado=new Ejercicio9()
//resultado.nombresiguales()

class Ejercicio10{
    numeroarreglos(){
        console.log("Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres")
        let numeros=["145","344442","2273","489898","523","60099","71226","855665","95","10"],i=0,longitud=numeros.length
        for(i=0;i<longitud;i=i+1){
            if(numeros[i].length < 5){
                console.log(numeros[i])
            }
        }
    }
}
//let resultado=new Ejercicio10()
//resultado.numeroarreglos()

class Ejercicio11{
    arreglosnum(){
        console.log("Dado un arreglo presentar sus elementos")
        let num1=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10)
        let num3=Math.floor(Math.random()*10)
        let num4=Math.floor(Math.random()*10)
        let num5=Math.floor(Math.random()*10)
        let i=0,arreglo=[num1,num2,num3,num4,num5],longitud=arreglo.length
        for(i=0;i<longitud;i=i+1){
            console.log(arreglo[i])
        }
    }
}
//let resultado=new Ejercicio11()
//resultado.arreglosnum()

class Ejercicio12{
    arreglos2(){
        console.log("Dado un arreglo de numeros presentar los menores a 10")
        let num1=Math.floor(Math.random()*15)
        let num2=Math.floor(Math.random()*15)
        let num3=Math.floor(Math.random()*15)
        let num4=Math.floor(Math.random()*15)
        let num5=Math.floor(Math.random()*15)
        let num6=Math.floor(Math.random()*15)
        let num7=Math.floor(Math.random()*15)
        let num8=Math.floor(Math.random()*15)
        let num9=Math.floor(Math.random()*15)
        let num10=Math.floor(Math.random()*15)
        let arreglo=[num1,num2,num3,num4,num5,num6,num7,num8,num9,num10],i=0,longitud=arreglo.length
        for(i=0;i<longitud;i=i+1){
            if(arreglo[i]<10){
                console.log(arreglo[i])
            }
        }
    }
}
//let resultado=new Ejercicio12()
//resultado.arreglos2()

class Ejercicio13{
    arreglo3(){
        console.log("Dado un arreglo de numeros presentar los impares y al final la suma de los pares")
        let arreglo=[20,3,78,12,9],i=0,longitud=arreglo.length,suma=0
        for(i=0;i<longitud;i=i+1){
            if(arreglo[i] % 2 == 0){
                suma=suma+arreglo[i]
            }else{
                console.log("Los impares son: ",arreglo[i])
            }
        }
        console.log("La suma de los pares es:",suma)
    }
}
//let resultado=new Ejercicio13()
//resultado.arreglo3()

class Ejercicio14{
    arreglo4(){
        console.log("Presentar el primero el medio y el ultimo valor de un arreglo")
        let arreglo=[Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10],longitud=arreglo.length,medio=(Math.trunc(longitud/2))
        console.log(arreglo[0],arreglo[medio],arreglo[longitud-1])
    }
}
//let resultado=new Ejercicio14()
//resultado.arreglo4()

class Ejercicio15{
    vuelto(){
        console.log("Calcular el vuelto de un a compra dado el costo y el pago")
        let costo=Math.floor(Math.random()*100),pago=Math.floor(Math.random()*1000),vuelto=0
        vuelto=pago-costo
        console.log("Su vuelto es:",vuelto.toFixed(2))//Usando".tofixed(2)" para mostrar unicamente 2 decimales
    }
}
//let resultado=new Ejercicio15()
//resultado.vuelto()

class eJERCICIO16{
    tablamultiplicar(){
        console.log("Presentar la tabla de multiplicar de cualquier numero del 1 al 12")
        let num=Math.floor(Math.random()*100),multi=0,i=1
        for(i=1;i<=12;i=i+1){
            multi=i*num
            console.log(i,"*",num,"=",multi)
        }
    }
}
//let resultado=new eJERCICIO16()
//resultado.tablamultiplicar()

class Ejercicio17{
    multisucesivas(){
        console.log("Realizar la multiplicacion de dos numeros por medio de sumas sucesivas")
        let num=Math.floor(Math.random()*10)
        let num2=Math.floor(Math.random()*10) ,x=0,acu=0
        while(x<num2){
            acu=acu+num
            x=x+1
        }
        console.log("La respuesta de la multiplicacion es: ",num,"*",num2,"=",acu)
    }
}
//let resultado=new Ejercicio17()
//resultado.multisucesivas()

class Ejercicio18{
    divisionrestassucesivas(){
        console.log("Realizar la division de dos numeros por medio de restas sucesivas")
        let num=Math.floor(Math.random()*10),x=0
        let num2=Math.floor(Math.random()*10),divi=num/num2,acu=num2
        while(x<=num2){
            acu=acu-num
            x=x+1
        }
        console.log(num,"/",num2,"=",divi)
    }
}
//resultado=new Ejercicio18()
//resultado.divisionrestassucesivas()

class Ejercicio19{
    factorial(){
        console.log("Calcular el factorial de un numero")
        let i=1,num=Math.floor(Math.random()*10),factorial=num
        for(i=1;i<num;i=i+1){
            factorial=factorial*i
            
        }
        console.log("Factorial de",num,"es:",factorial)
    }
}
//let resultado=new Ejercicio19()
//resultado.factorial()

class Ejercicio20{
    exponentenum(){
        console.log("Calcular el exponente de un numero")
        let num=Math.floor(Math.random()*10),exp=3,total=1,x=0
        while(x<exp){
            total=total*num
            x=x+1
        }
        console.log(num,"^",exp,"=",total)
    }
}
//let resultado=new Ejercicio20()
//resultado.exponentenum()

class Ejercicio21{
    fibonacci(){
        console.log("Calcular la serie de fibonacci dado un numero")
        let num=8,a=0,b=1,i=0,suma=0
        for(i=1;i<=num;i=i+1){
            console.log(x)
            suma=a+b
            a=b
            b=suma
        }
    }

}
//let resultado=new Ejercicio21()
//resultado.fibonacci()

class Ejercicio22{
    numinvertido(){
        console.log("Dado un numero invertirlo")
        let num=12356,dijito
        while(num>0){
            dijito=Math.floor(num%10)
            num=Math.floor(num/10)
            console.log(dijito)
        }

    }
    
}
//let resultado=new Ejercicio22()
//resultado.numinvertido()

class Ejercicio23{
    divisoresnum(){
        console.log("Presentar los divisores de un numero")
        let divisores=0,num=Math.floor(Math.random()*10),i=0
        for(i=1;i<num;i=i+1){
            if(num % i == 0){
                console.log("Es:",i)
            }
        }
    }
}
//let resultado= new Ejercicio23()
//resultado.divisoresnum()

class Ejercicio24{
    Numperfecto(){
        console.log("Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)")
        let divisores=0,num=Math.floor(Math.random()*10),i=0,sumaperf=0
        for(i=1;i<num;i=i+1){
            if(num % i == 0){
                console.log(i)
                sumaperf=sumaperf+i
            }
        }
        console.log("")
        if(sumaperf==num){
            console.log(num,"Es un numero perfecto")
        }else{
            console.log(num,"No es un numero perfecto")
        }
    }
}
//let resultado=new Ejercicio24()
//resultado.Numperfecto()

class Ejercicio25{
    numprimo(){
        console.log("Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores")
        let num=Math.floor(Math.random()*10),x=0,i=0
        for(i=1;i<=num;i=i+1){
            if(num % i == 0){
                x=x+1
            }
        }
        if(x==2){
            console.log("El numero",num,"es primo")
        }else{
            console.log("El numero",num,"no es primo")
        }
    }
}
//let resultado=new Ejercicio25()
//resultado.numprimo()