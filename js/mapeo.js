function validar(){
    var caja = document.getElementById("resultados");
    caja.style.display = 'none';
    
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var d = parseFloat(document.getElementById("d").value);
    
    var alpha = parseFloat(document.getElementById("alpha").value);
    var beta = parseFloat(document.getElementById("beta").value);
    var gamma = parseFloat(document.getElementById("gamma").value);
    var delta = parseFloat(document.getElementById("delta").value);
    
    if( !isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(alpha) && !isNaN(beta) && !isNaN(gamma) && !isNaN(delta)){
        
        if(a != 0){
            if(d != 0){
                caja.style.display = 'none';
                resolver(a, b, c, d, alpha, beta, gamma, delta);
            }else{
                caja.style.display = 'block';
                caja.innerHTML = "<p> d tiene que ser menor a 0</p>"; 
            }
        }else{
            caja.style.display = 'block';
            caja.innerHTML = "<p> a no puede valer 0</p>"; 
        }
    }
    else{
        //caja de resultados
       caja.style.display = 'block';
       caja.innerHTML = "<p> Ingrese solo numeros y rellene todos los campos</p>";
    }
    
    /*
     
     */
}

function resolver(a, b, c, d, alpha, beta, gamma, delta){
    a = a/a;
    b= b/a;
    c = c/a;
    d = d/a;
    //valores del centro
    var h = ((-1)*b)/2;
    var k = ((-1)*c)/2;
    var centrof = new Array();
    var xp, yp, hf, kf;
    var arriba = new Array();
    var abajo = new Array();
    //radio
    var radio = Math.pow(h, 2) + Math.pow(k, 2) - d;
    radio = Math.sqrt(radio);
    if(isNaN(radio) || radio == 0){
        document.getElementById("resultados").style.display = "block";
        document.getElementById("resultados").innerHTML = "<p>La ecuaci&oacuten no es v&aacutelida</p>";
    } else{
        console.log("h: " + h + " k: " + k + " radio: " + radio);
        dibujar(h, k, radio, "original");
    
        //transformar centro
        arriba = multiplicar(alpha, 0, h, k);
        xp = arriba.pop();
        yp = arriba.pop();
        arriba = sumar(beta, 0, xp, yp);
        
        abajo = multiplicar(gamma, 0, h, k);
        xp = abajo.pop();
        yp = abajo.pop();
        abajo = sumar(delta, 0, xp, yp);
        xp = abajo.pop();
        yp = abajo.pop();
        var xp2 = arriba.pop();
        var yp2 = arriba.pop();
        
        centrof = dividir(xp, yp, xp2, yp2);
        hf = centrof.pop();
        kf = centrof.pop();
        dibujar(hf, kf, radio, "mapeado");
        console.log(hf);
        console.log(kf);
    }
    
}

function sumar(x1, y1, x2, y2){
    var texto = new Array();
    var a = x1 + x2;
    var b = y1 + y2;
    texto.push(b);
    texto.push(a);
    return texto;
}

function multiplicar(a, b, c, d){
    var texto = new Array();
    var af = (a * c) - (b * d);
    var bf = (a * d) + (b * c);
    texto.push(bf); //val y
    texto.push(af); //val x
    return texto;
}

function dividir(a, b, c, d){
    var texto = new Array;
    var af = ((a * c) + (b * d))/((c * c) + (d * d));
    var bf = ((b * c) - (d * a))/((c * c) + (d * d));
    texto.push(bf);
    texto.push(af);
    return texto;
}

function dibujar(x, y, radio, id){
    y = y*(-1);
    ej = document.getElementById(id);
    lienzo1=ej.getContext("2d");
    lienzo1.lineWidth=1;
    lienzo1.strokeStyle = '#5b2e35';
    if(true){
        //EJE X
        var lienzo1;
        lienzo1.beginPath(); 
        lienzo1.moveTo(150,0); 
        lienzo1.lineTo(150,300);
        lienzo1.stroke(); 
        lienzo1.closePath();

        //EJE Y
        lienzo1.beginPath(); 
        lienzo1.moveTo(0,150);
        lienzo1.lineTo(300,150);
        lienzo1.stroke();
        lienzo1.closePath();

        //cuadricula
        lienzo1.lineWidth=0.5;
        lienzo1.strokeStyle = '#5b2e35'; 
        lienzo1.beginPath(); 
        lienzo1.moveTo(50,0); 
        lienzo1.lineTo(50,300);
        lienzo1.moveTo(100,0); 
        lienzo1.lineTo(100,300);
        lienzo1.moveTo(200,0); 
        lienzo1.lineTo(200,300);
        lienzo1.moveTo(250,0); 
        lienzo1.lineTo(250,300);
        lienzo1.stroke(); 
        lienzo1.closePath(); 

        lienzo1.beginPath(); 
        lienzo1.moveTo(0,50);
        lienzo1.lineTo(300,50);
        lienzo1.moveTo(0,100);
        lienzo1.lineTo(300,100);
        lienzo1.moveTo(0,200);
        lienzo1.lineTo(300,200);
        lienzo1.moveTo(0,250);
        lienzo1.lineTo(300,250);
        lienzo1.stroke();
        lienzo1.closePath();
    }
    
    ///trazo
    var traslado = "none";
    lienzo1.lineWidth=2;
    lienzo1.strokeStyle = '#34a7b2'; 
    var esc = 150;
    var cant = 0;
    var estado = "none";
    var bandera = 0;
    var escalaEscrita = 50;
    //Hacer pequeño
    if(Math.abs(x) > esc || Math.abs(y) > esc){
        lienzo1.scale(0.5, 0.5);
        esc += 150;
        cant++;
        estado = cant;
        lienzo1.translate(300,300);
        bandera = 1;
        traslado = "transladado";
	escalaEscrita = esc/3;
    }
    while(Math.abs(x) > esc || Math.abs(y) > esc){
        lienzo1.scale(0.5, 0.5);
        cant++;
        esc = esc*2;
        estado = cant;
        lienzo1.translate(0,0);
        bandera = 1;
        escalaEscrita = esc/3;
        traslado = "transladado";
    }
	//Hacer grande
    var escC = 50;
    
    if((Math.abs(x) < escC && Math.abs(y) < escC) && (Math.abs(x) > 0 && Math.abs(y) > 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
	escalaEscrita = escC;
        traslado = "transladado";
    }

    while((Math.abs(x) < escC && Math.abs(y) < escC) && (Math.abs(x) > 0 && Math.abs(y) > 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
	escalaEscrita = escC;
        traslado = "transladado";
    }
    
	//Hacer grande si un valor es 0
    if((Math.abs(x) < escC && Math.abs(x) > 0 && Math.abs(y) == 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
	escalaEscrita = escC;
        traslado = "transladado";
    }
    
    while((Math.abs(x) < escC && Math.abs(x) > 0 && Math.abs(y) == 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
	escalaEscrita = escC;
        traslado = "transladado";
    }
    
    if((Math.abs(y) < escC && Math.abs(y) > 0 && Math.abs(x) == 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
        escalaEscrita = escC;
        traslado = "transladado";
    }
    
    while((Math.abs(y) < escC && Math.abs(y) > 0 && Math.abs(x) == 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
        escalaEscrita = escC;
        traslado = "transladado";
    }
    
    //RADio
    //hacer peque
    if(radio > esc){
        lienzo1.scale(0.5, 0.5);
        esc += 150;
        cant++;
        estado = cant;
        if(traslado == "none"){
            lienzo1.translate(300,300);
        }
        bandera = 1;
	escalaEscrita = esc/3;
    }
    while(radio > esc){
        lienzo1.scale(0.5, 0.5);
        cant++;
        esc = esc*2;
        estado = cant;
        if(traslado == "none"){
            lienzo1.translate(0,0);
        }
        bandera = 1;
        escalaEscrita = esc/3;
    }
    //agrandar
    if(radio < escC){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        if(traslado == "none"){
            lienzo1.translate(75,75);
        }
	escalaEscrita = escC;
    }

    while(radio < escC){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        if(traslado == "none"){
            lienzo1.translate(0,0);
        }
	escalaEscrita = escC;
    }
    
	//Grosor de lineas
    if (estado == "none"){
        lienzo1.lineWidth=2;
        lienzo1.translate(150,150);
    } else if(estado == 1/cant){
        lienzo1.lineWidth=Math.pow(estado, 2);
    } else if(estado == cant){
        lienzo1.lineWidth=Math.pow(2, estado);
    }
	
    lienzo1.strokeStyle = '#34a7b2';
    lienzo1.beginPath();
    lienzo1.arc(x, y, radio, 0, 2 * Math.PI, false);
    lienzo1.stroke();
    lienzo1.closePath();
    
    document.getElementById(id+"1").innerHTML = "Escala 1 = " + escalaEscrita;
}
