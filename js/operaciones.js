function validar(){
	
    var caja = document.getElementById("resultados");
    caja.style.display = 'none';
    
    var xz1 = parseFloat(document.getElementById("xz1").value);
    var yz1 = parseFloat(document.getElementById("yz1").value);
    var xz2 = parseFloat(document.getElementById("xz2").value);
    var yz2 = parseFloat(document.getElementById("yz2").value);
    var n = parseInt(document.getElementById("n").value);
    
    
    if( !isNaN(xz1) && !isNaN(yz1) && !isNaN(xz2) && !isNaN(yz2) && !isNaN(n)){
        if(n >= 1 && Number.isInteger(n)){
            caja.innerHTML = "";

            resolver(xz1, yz1, xz2, yz2, n);
        }
        else{
            //caja de resultados
            caja.style.display = 'block';
            caja.innerHTML = " <p>'n' debe ser entero positivo </p>";
        }
    }
    else{
        //caja de resultados
       caja.style.display = 'block';
       caja.innerHTML = "<p> Ingrese solo numeros y rellene todos los campos</p>";
    }
    
}

function resolver(xz1, yz1, xz2, yz2, n){
    var texto = "";
    var suma = document.getElementById("suma").checked;
    var resta = document.getElementById("resta").checked;
    var multiplicacion = document.getElementById("multiplicacion").checked;
    var division = document.getElementById("division").checked;
    var potencia = document.getElementById("potencia").checked;
    var raiz = document.getElementById("raiz").checked;
    var complemento = document.getElementById("complemento").checked;
    var distancia = document.getElementById("distancia").checked;
    
    if(suma){
       texto = texto + "<h1 align='left'>- Suma: </h1>" + "<p>Z = ";
       texto = texto + sumar(xz1, yz1, xz2, yz2);
       texto = texto + " <b>i</b>)</p>";
    }
    if(resta){
        texto = texto + "<h1 align='left'>- Resta: </h1>" + "<p>Z = ";
        texto = texto + restar(xz1, yz1, xz2, yz2);
        texto = texto + + " <b>i</b>)</p>";
    }
    if(multiplicacion){
        texto = "<h1 align='left'>- Multiplicaci&oacuten: </h1>" + "<p>Z = ";
        texto = texto + multiplicar(xz1, yz1, xz2, yz2);
        texto = texto + " <b>i</b>)</p>";
    }
    if(division){
        texto = texto + "<h1 align='left'>- Divisi&oacuten: </h1>" + "<p>Z = ";
        texto = texto + dividir(xz1, yz1, xz2, yz2);
        texto = texto + " <b>i</b>)</p>";
    }
    if(potencia){
        texto = texto + "<h1 align='left'>- Potencia: </h1>" + "<p>Z = ";
        texto = texto + elevar(xz1, yz1, n);
        texto = texto + " <b>i</b>)</p>";
    }
    if(raiz){
        texto = texto + sacarRaiz(xz1, yz1, n);
    }
    if(complemento){
        texto = texto + "<h1 align='left'>- Conjugado: </h1>" + "<p>Z = ";
        texto = texto + obtenerComplemento(xz1, yz1);
        texto = texto + " <b>i</b>)</p>";
    }
    if(distancia){
        texto = texto + medirDistancia(xz1, yz1, xz2, yz2);
    }
	
    var caja = document.getElementById("resultados"); //caja de resultados
	var graficas = document.getElementById("graficas");
	graficas.style.display = 'block';
    caja.style.display = 'block'; //Hacer visible
    caja.innerHTML = texto; //Insertar texto
}

function dibujarDistancia(a, b, c, d){
	b = b*(-1);
	d = d*(-1);
	ej = document.getElementById("cDistancia");
    lienzo1=ej.getContext("2d");
    lienzo1.lineWidth=1;
    lienzo1.strokeStyle = '#5b2e35'; 
    
    if(true){
    //EJE X
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
	//Trazo
	lienzo1.lineWidth=2;
    lienzo1.strokeStyle = '#34a7b2'; 
	var bandera = "none";	
	var esc = 150;
    var cant = 0;
    var estado = "none";
 	var escalaEscrita = 50;
	var escC = 50;
	var bandera2 = 0;
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
	//Hacer grande punto1
	if(!(Math.abs(a)>150 || Math.abs(b)>150 || Math.abs(c)>150 || Math.abs(d)>150)){
		console.log("entra");
	if((Math.abs(a) < escC && Math.abs(b) < escC) && (Math.abs(a) > 0 && Math.abs(b) > 0) && bandera2 == 0){
		
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		bandera = "transladado";
		escalaEscrita = escC;
    }

    while((Math.abs(a) < escC && Math.abs(b) < escC) && (Math.abs(a) > 0 && Math.abs(b) > 0) && bandera2 == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        
        lienzo1.translate(0,0);
		bandera = "transladado";
		escalaEscrita = escC;
    }
    
	//Hacer grande si un valor es 0
    if((Math.abs(a) < escC && Math.abs(a) > 0 && Math.abs(b) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		bandera = "transladado";
		escalaEscrita = escC;
    }
    
    while((Math.abs(a) < escC && Math.abs(a) > 0 && Math.abs(b) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        
        lienzo1.translate(0,0);
		bandera = "transladado";
		escalaEscrita = escC;
    }
    
    if((Math.abs(b) < escC && Math.abs(b) > 0 && Math.abs(a) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		bandera = "transladado";
		escalaEscrita = escC;
    }
    
    while((Math.abs(b) < escC && Math.abs(b) > 0 && Math.abs(a) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        
		bandera = "transladado";
        lienzo1.translate(0,0);
		escalaEscrita = escC;
    }
	
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
	//Hacer grande punto 2
	if((Math.abs(c) < escC && Math.abs(d) < escC) && (Math.abs(c) > 0 && Math.abs(d) > 0) && bandera2 == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
		if(bandera == "none"){
			lienzo1.translate(75,75);
		}
		escalaEscrita = escC;
    }

    while((Math.abs(c) < escC && Math.abs(d) < escC) && (Math.abs(c) > 0 && Math.abs(d) > 0) && bandera2 == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        
		if(bandera == "none"){
			lienzo1.translate(0,0);
		}
		escalaEscrita = escC;
    }
    
	//Hacer grande si un valor es 0
    if((Math.abs(c) < escC && Math.abs(c) > 0 && Math.abs(d) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        if(bandera == "none"){
			lienzo1.translate(75,75);
		}
		escalaEscrita = escC;
    }
    
    while((Math.abs(c) < escC && Math.abs(c) > 0 && Math.abs(d) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        
        if(bandera == "none"){
			lienzo1.translate(0,0);
		}
		
		escalaEscrita = escC;
    }
    
    if((Math.abs(d) < escC && Math.abs(d) > 0 && Math.abs(c) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        if(bandera == "none"){
			lienzo1.translate(75,75);
		}
		
		escalaEscrita = escC;
    }
    
    while((Math.abs(d) < escC && Math.abs(d) > 0 && Math.abs(c) == 0) && bandera2 == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        
		bandera = "transladado";
        if(bandera == "none"){
			lienzo1.translate(0,0);
		}
		escalaEscrita = escC;
    }
	}
	
	
//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
	//Hacer el punto1 pequeño
	if(Math.abs(a) > esc || Math.abs(b) > esc){
        lienzo1.scale(0.5, 0.5);
        esc = esc*2;
        cant++;
        estado = cant;
        lienzo1.translate(300,300);
        bandera = "transladado";
		bandera2 = 1;
		escalaEscrita = esc/3;
    }
    while(Math.abs(a) > esc || Math.abs(b) > esc){
        lienzo1.scale(0.5, 0.5);
        cant++;
        esc = esc*2;
        estado = cant;
        lienzo1.translate(0,0);
        bandera = "transladado";
		bandera2 = 1;
		escalaEscrita = esc/3;
    }
	//Hacer punto2 pequeño
	if(Math.abs(c) > esc || Math.abs(d) > esc){
        lienzo1.scale(0.5, 0.5);
        esc = esc*2;
        cant++;
        estado = cant;
		if(bandera == "none"){
			lienzo1.translate(300,300);
		}
		bandera2 = 1;
		escalaEscrita = esc/3;
		console.log("escala:" + esc);
    }
    while(Math.abs(c) > esc || Math.abs(d) > esc){
        lienzo1.scale(0.5, 0.5);
        cant++;
        esc = esc*2;
        estado = cant;
		if(bandera == "none"){
			lienzo1.translate(0,0);
		}
        bandera = "transladado";
		bandera2 = 1;
		escalaEscrita = esc/3;
		console.log("escala:" + esc);
    }
	
	
	
	if (estado == "none"){
        lienzo1.lineWidth=2;
        lienzo1.translate(150,150);
    } else if(estado == 1/cant){
        lienzo1.lineWidth=Math.pow(estado, 2);
    } else if(estado == cant){
        lienzo1.lineWidth=Math.pow( 2, estado);
    }
	
	lienzo1.strokeStyle = '#34a7b2'; 
    lienzo1.beginPath();
    lienzo1.moveTo(a,b);
    lienzo1.lineTo(c, d);
	lienzo1.stroke();
    lienzo1.closePath();
	console.log(cant);
	document.getElementById("cDistancia1").innerHTML = "Escala 1 = " + escalaEscrita;
	
}

function dibujarRaices(x1, y1){
	
	var x = x1.pop();
	var y = (y1.pop())*(-1);
	
	ej = document.getElementById("cRaiz");
    lienzo1=ej.getContext("2d");
    lienzo1.lineWidth=1;
    lienzo1.strokeStyle = '#5b2e35'; 
    
	//dibuja ejes
    if(true){
    //EJE X
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
	
	//trazo
	//Trazo
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
    }

    while((Math.abs(x) < escC && Math.abs(y) < escC) && (Math.abs(x) > 0 && Math.abs(y) > 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
		escalaEscrita = escC;
    }
    
	//Hacer grande si un valor es 0
    if((Math.abs(x) < escC && Math.abs(x) > 0 && Math.abs(y) == 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		escalaEscrita = escC;
    }
    
    while((Math.abs(y) < escC && Math.abs(y) > 0 && Math.abs(x) == 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
		escalaEscrita = escC;
    }
    
    if((Math.abs(y) < escC && Math.abs(y) > 0 && Math.abs(x) == 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		escalaEscrita = escC;
    }
    
    while((Math.abs(x) < escC && Math.abs(x) > 0 && Math.abs(y) == 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
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
	//Dibuja el primero
    lienzo1.strokeStyle = '#34a7b2'; 
    lienzo1.beginPath();
    lienzo1.moveTo(0,0);
    lienzo1.lineTo(x, y);
	lienzo1.stroke();
    lienzo1.closePath();
	var i = 0;
	lienzo1.strokeStyle = '#34a7b2'; 
    lienzo1.beginPath();
	var tope = x1.length;
	for(i = 1; i<= tope; i++){
		x = x1.pop();
		y = (y1.pop())*(-1);
		lienzo1.moveTo(0,0);
		lienzo1.lineTo(x, y);
		console.log(i);
	}
	lienzo1.stroke();
    lienzo1.closePath();
	
	document.getElementById("cRaiz1").innerHTML = "Escala 1 = " + escalaEscrita;
	
}

function dibujar(id, x, y){
    y = y*(-1);
    
    ej = document.getElementById(id);
    lienzo1=ej.getContext("2d");
    lienzo1.lineWidth=1;
    lienzo1.strokeStyle = '#5b2e35'; 
    
    if(true){
    //EJE X
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
    
	//Trazo
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
    }

    while((Math.abs(x) < escC && Math.abs(y) < escC) && (Math.abs(x) > 0 && Math.abs(y) > 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
		escalaEscrita = escC;
    }
    
	//Hacer grande si un valor es 0
    if((Math.abs(x) < escC && Math.abs(x) > 0 && Math.abs(y) == 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		escalaEscrita = escC;
    }
    
    while((Math.abs(x) < escC && Math.abs(x) > 0 && Math.abs(y) == 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
		escalaEscrita = escC;
    }
    
    if((Math.abs(y) < escC && Math.abs(y) > 0 && Math.abs(x) == 0) && bandera == 0){
        lienzo1.scale(2, 2);
        escC = escC/2;
        cant++;
        estado = (1/cant);
        lienzo1.translate(75,75);
		escalaEscrita = escC;
    }
    
    while((Math.abs(y) < escC && Math.abs(y) > 0 && Math.abs(x) == 0) && bandera == 0){
        lienzo1.scale(2, 2);   
        cant++;
        escC = escC/2;
        estado = (1/cant);
        lienzo1.translate(0,0);
		escalaEscrita = escC;
    }
    
	console.log(cant);
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
    lienzo1.moveTo(0,0);
    lienzo1.lineTo(x, y);
	lienzo1.stroke();
    lienzo1.closePath();
	
	document.getElementById(id+"1").innerHTML = "Escala 1 = " + escalaEscrita;
    
  //  console.log(escalaEscrita);
    
}

function sumar(x1, y1, x2, y2){
    
    var texto;
    var a = x1 + x2;
    var b = y1 + y2;
    texto = a + " + (" + b;
    dibujar("cSuma", a,b);
    return texto;
}

function restar(x1, y1, x2, y2){
    var texto;
    var a = x1 - x2;
    var b = y1 - y2;
    texto = a + " + (" + b;
    dibujar("cResta", a,b);
    return texto;
}

function multiplicar(a, b, c, d){
    var texto;
    var af = (a * c) - (b * d);
    var bf = (a * d) + (b * c);
    texto = af + " + (" + bf;
    dibujar("cMultiplicacion", af,bf);
    return texto;
}

function dividir(a, b, c, d){
    var texto;
    var af = ((a * c) + (b * d))/((c * c) + (d * d));
    var bf = ((b * c) - (d * a))/((c * c) + (d * d));
    texto = af + " + (" + bf;
    dibujar("cDivision", af, bf);
    return texto;
}

function elevar(x, y, n){
    var r = Math.pow(x, 2) + Math.pow(y, 2);
    r = Math.sqrt(r);
    
    var angulo = 0;
    if(y != 0){
        angulo = Math.atan(y/x);
        
    } else{
        if(x >= 0){
            angulo = 0;
        } else{
            angulo = Math.PI;
        }
    }
    var texto;
    var af = Math.pow(r,n)*Math.cos(n*angulo);
    var bf = Math.pow(r,n)*Math.sin(n*angulo);
    
    if(Math.abs(af) < 0.000001){
        af = Math.round(af);
    }

    if(Math.abs(bf) < 0.000001){
        bf = Math.round(bf);
    }
    
    texto = af + " + (" + bf;
    dibujar("cPotencia", af,bf);
    return texto;
}

function sacarRaiz(x, y, n){
    var texto = "<h1 align='left'>- Raices: </h1><p>";
    var i;
    var r = Math.pow(x, 2) + Math.pow(y, 2);
    r = Math.sqrt(r);
	
	var aX = new Array();
	var aY = new Array();
    
    var angulo = 0;
    var angAux = 0;
    var af = 0;
    var bf = 0;
    if(y != 0){
        angulo = Math.atan(y/x);
        
    } else{
        if(x >= 0){
            angulo = 0;
        } else{
            angulo = Math.PI;
        }
    }
    
    for(i=0; i<n; i++){
        angAux = ((angulo + (2 * Math.PI * i))/n);
        af = (Math.pow(r, 1/n) * Math.cos(angAux));
        bf = (Math.pow(r, 1/n) * Math.sin(angAux));
        
        if(Math.abs(af) < 0.000001){
            af = Math.round(af);
        }
        
        if(Math.abs(bf) < 0.000001){
            bf = Math.round(bf);
        }
        texto = texto + "Z<sub>" + i + "</sub> = " + af;
        texto = texto + " + (" + bf + "<b>i</b>)";
        texto = texto + "<br>";
        //dibujar("cRaiz", af,bf);
		aX.push(af);
		aY.push(bf);
    }
	dibujarRaices(aX, aY);
    texto = texto + "</p>";
    return texto;
}

function obtenerComplemento(x, y){
    var texto;
    y = y*(-1);
    texto = x + " + (" + y;
    dibujar("cComplemento", x,y);
    return texto;
}

function medirDistancia(x1, y1, x2, y2){
	var texto = "<h1 align='left'>- Distancia: </h1>";
	var xf =(x2 - x1);
	var yf = (y2 - y1);
	var distancia = Math.sqrt(Math.pow(xf,2) + Math.pow(yf, 2));
	texto = texto + "<p>Distancia = " + distancia + "</p>";
    dibujarDistancia(x1,y1,x2,y2);
	return texto;
}

function seleccionarTodo(){
    var checkBox = document.getElementById("todo");

    if (checkBox.checked){
            document.getElementById("suma").checked = 1;
            document.getElementById("resta").checked = 1;
            document.getElementById("multiplicacion").checked = 1;
            document.getElementById("division").checked = 1;
            document.getElementById("potencia").checked = 1;
            document.getElementById("raiz").checked = 1;
            document.getElementById("complemento").checked = 1;
            document.getElementById("distancia").checked = 1;
    } else {
        document.getElementById("suma").checked = 0;
            document.getElementById("resta").checked = 0;
            document.getElementById("multiplicacion").checked = 0;
            document.getElementById("division").checked = 0;
            document.getElementById("potencia").checked = 0;
            document.getElementById("raiz").checked = 0;
            document.getElementById("complemento").checked = 0;
            document.getElementById("distancia").checked = 0;
    }	
}

//Fin