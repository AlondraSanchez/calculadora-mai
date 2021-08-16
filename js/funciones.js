function validar(){
	
    var caja = document.getElementById("resultados");
    caja.style.display = 'none';
    
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var d = parseFloat(document.getElementById("d").value);

    
    if( !isNaN(a) && !isNaN(b)){
        if(document.getElementById("zz").checked == 1){
            if(!isNaN(c) && !isNaN(d)){
                resolver(a, b, c, d);
            } else{
                caja.style.display = 'block';
                caja.innerHTML = "<p> Se necesita z<sub>2</sub></p>";
            }
        } else{
            resolver(a, b, 0, 0);
        }
    }
    else{
        //caja de resultados
       caja.style.display = 'block';
       caja.innerHTML = "<p> Ingrese solo numeros</p>";
    }
    
}

function resolver(a, b, c, d){
    var texto = "";
    //Funciones
    var e = document.getElementById("e").checked;
    var zz = document.getElementById("zz").checked;
    var sen = document.getElementById("sen").checked;
    var cos = document.getElementById("cos").checked;
    var tan = document.getElementById("tan").checked;
    var ctg = document.getElementById("ctg").checked;
    var sec = document.getElementById("sec").checked;
    var csc = document.getElementById("csc").checked;
    var senh = document.getElementById("senh").checked;
    var cosh = document.getElementById("cosh").checked;

    //Inversas
    var ln = document.getElementById("ln").checked;
    var asen = document.getElementById("asen").checked;
    var acos = document.getElementById("acos").checked;
    var atan = document.getElementById("atan").checked;
    var actg = document.getElementById("actg").checked;
    var asec = document.getElementById("asec").checked;
    var acsc = document.getElementById("acsc").checked;
    var asenh = document.getElementById("asenh").checked;
    var acosh = document.getElementById("acosh").checked;
    
    if(e){
       texto = texto + "<h1 align='left'>- e<sup>z</sup>: </h1>" + "<p>Z = ";
       texto = texto + elevarE(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(zz){
       texto = texto + "<h1 align='left'>- z<sup>z<sub>2</sub></sup>: </h1>" + "<p>Z = ";
       texto = texto + elevarZZ(a, b, c, d);
       texto = texto + " <b>i</b>)</p>";
    }
    if(sen){
       texto = texto + "<h1 align='left'>- Sen(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerSen(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(cos){
       texto = texto + "<h1 align='left'>- Cos(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerCos(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(tan){
       texto = texto + "<h1 align='left'>- Tan(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerTan(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(ctg){
       texto = texto + "<h1 align='left'>- Ctg(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerCtg(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(sec){
       texto = texto + "<h1 align='left'>- Sec(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerSec(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(csc){
       texto = texto + "<h1 align='left'>- Csc(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerCsc(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(senh){
       texto = texto + "<h1 align='left'>- Senh(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerSenh(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(cosh){
       texto = texto + "<h1 align='left'>- Cosh(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerCosh(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    
    //Inversas
    if(asen){
       texto = texto + "<h1 align='left'>- Arcsen(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAsen(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(acos){
       texto = texto + "<h1 align='left'>- Arccos(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAcos(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(atan){
       texto = texto + "<h1 align='left'>- Arctan(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAtan(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(actg){
       texto = texto + "<h1 align='left'>- Arcctg(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerActg(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(asec){
       texto = texto + "<h1 align='left'>- Arcsec(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAsec(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(acsc){
       texto = texto + "<h1 align='left'>- Arccsc(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAcsc(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(asenh){
       texto = texto + "<h1 align='left'>- Arsenh(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAsenh(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(acosh){
       texto = texto + "<h1 align='left'>- Arccosh(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerAcosh(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    if(ln){
       texto = texto + "<h1 align='left'>- Ln(z): </h1>" + "<p>Z = ";
       texto = texto + obtenerLn(a, b);
       texto = texto + " <b>i</b>)</p>";
    }
    
    
    var caja = document.getElementById("resultados"); //caja de resultados
    var graficas = document.getElementById("graficasF");
    graficas.style.display = 'block';
    caja.style.display = 'block'; //Hacer visible
    caja.innerHTML = texto;
}

function elevarE(a, b){
    var texto;
    var x, y;
    x = Math.exp(a)*Math.cos(b);
    y = Math.exp(a)*Math.sin(b);
    texto = x + " + (" + y;
    dibujar("ce", x, y);
    return texto;
}

function elevarZZ(a, b, c, d){
    var z = math.complex(a, b).toPolar();
    var z0 = math.complex(c, d);
    var argumento = math.complex(math.multiply(z0, math.complex(Math.log(z.r), z.phi)));
    var resultado = math.complex(math.multiply(math.complex(Math.exp(argumento.re)),math.complex(Math.cos(argumento.im), Math.sin(argumento.im))));
    var texto = resultado.re + " + (" + resultado.im;
    dibujar("czz", resultado.re, resultado.im);
    return texto;
}

function obtenerSen(a, b){
    var texto;
    var x, y;
    x = Math.sin(a)*Math.cosh(b);
    y = Math.cos(a)*Math.sinh(b);
    texto = x + " + (" + y;
    dibujar("cSen", x, y);
    return texto;
    
}

function obtenerCos(a, b){
    var texto;
    var x, y;
    x = Math.cos(a)*Math.cosh(b);
    y = Math.sin(a)*Math.sinh(b);
    texto = x + " - (" + y;
    dibujar("cCos", x, y);
    return texto;
}

function obtenerTan(a, b){
    var array = new Array;
    var x1, y1, x2, y2, xf, yf, texto;
    //seno
    x1 = Math.sin(a)*Math.cosh(b);
    y1 = Math.cos(a)*Math.sinh(b);
    //coseno
    x2 = Math.cos(a)*Math.cosh(b);
    y2 = Math.sin(a)*Math.sinh(b)*(-1);
    array = dividir(x1,y1,x2,y2);
    yf = array.pop();
    xf = array.pop();
    texto =  xf + " + (" + yf;
    
    dibujar("cTan", xf, yf);
    return texto;
}

function obtenerCtg(a, b){
    var array = new Array;
    var x1, y1, x2, y2, xf, yf, texto;
    //seno
    x1 = Math.sin(a)*Math.cosh(b);
    y1 = Math.cos(a)*Math.sinh(b);
    //coseno
    x2 = Math.cos(a)*Math.cosh(b);
    y2 = Math.sin(a)*Math.sinh(b)*(-1);
    array = dividir(x2,y2,x1,y1);
    yf = array.pop();
    xf = array.pop();
    texto =  xf + " + (" + yf;
    
    dibujar("cCtg", xf, yf);
    return texto;
}

function obtenerSec(a, b){
    var array = new Array;
    var x2, y2, xf, yf, texto;
    //coseno
    x2 = Math.cos(a)*Math.cosh(b);
    y2 = Math.sin(a)*Math.sinh(b)*(-1);
    array = dividir(1,0,x2,y2);
    yf = array.pop();
    xf = array.pop();
    texto =  xf + " + (" + yf;
    
    dibujar("cSec", xf, yf);
    return texto;
}

function obtenerCsc(a, b){
     var array = new Array;
    var x2, y2, xf, yf, texto;
    //coseno
    x2 = Math.sin(a)*Math.cosh(b);
    y2 = Math.cos(a)*Math.sinh(b);
    array = dividir(1,0,x2,y2);
    yf = array.pop();
    xf = array.pop();
    texto =  xf + " + (" + yf;
    
    dibujar("cCsc", xf, yf);
    return texto;
}

function obtenerCosh(a, b){
    var texto;
    var x, y;
    x = (1/2)*Math.cos(b)*(Math.exp(a) + Math.exp((-1)*a));
    y = (1/2)*Math.sin(b)*(Math.exp(a) - Math.exp((-1)*a));
    texto = x + " + (" + y;
    dibujar("cCosh", x, y);
    return texto;
}

function obtenerSenh(a, b){
    var texto;
    var x, y;
    x = (1/2)*Math.cos(b)*(Math.exp(a) - Math.exp((-1)*a));
    y = (1/2)*Math.sin(b)*(Math.exp(a) + Math.exp((-1)*a));
    texto = x + " + (" + y;
    dibujar("cSenh", x, y);
    return texto;
}

function obtenerAsen(a, b){
    var texto;
    var argumento;
    var z = math.complex(a, b);
    argumento = math.sqrt(math.add(1, math.multiply(-1, math.multiply(z, z))));
    argumento = math.add(argumento, math.multiply(math.complex(0,1), z)).toPolar();
    var resultado;
    resultado = math.complex(Math.log(argumento.r), argumento.phi);
    resultado = math.multiply(math.complex(0,-1), resultado); 
    texto = resultado.re + " + (" + resultado.im;
    dibujar("aSen", resultado.re, resultado.im);
    return texto;
}

function obtenerAcos(a, b){
    var texto;
    var argumento;
    var z = math.complex(a, b);
    argumento = math.sqrt(math.add(1, math.multiply(-1, math.multiply(z, z))));
    argumento = math.multiply(math.complex(0,1), argumento);
    argumento = math.add(argumento, z).toPolar();
    var resultado;
    resultado = math.complex(Math.log(argumento.r), argumento.phi);
    resultado = math.multiply(math.complex(0,-1), resultado); 
    texto = resultado.re + " + (" + resultado.im;
    dibujar("aCos", resultado.re, resultado.im);
    return texto;
}

function obtenerAtan(a, b){
    var texto;
    var argumento1, argumento2;
    var z = math.complex(a, b);
    var resultado;
    argumento1 = math.complex(math.add(1, math.multiply(math.complex(0,-1), z))).toPolar(); //naisu
    argumento2 = math.complex(math.add(1, math.multiply(math.complex(0,1), z))).toPolar();
    //a1 - a2
    resultado = math.complex(Math.log(argumento1.r) - Math.log(argumento2.r), argumento1.phi - argumento2.phi);
    resultado = math.complex(math.multiply(math.complex(0,0.5), resultado));
    texto = resultado.re + " + (" + resultado.im;
    dibujar("aTan", resultado.re, resultado.im);
    return texto;
}

function obtenerActg(a, b){
    var texto;
    var argumento1, argumento2;
    
    var array = new Array();
    array = dividir(1,0,a,b);
    var y = array.pop();
    var x = array.pop();
    
    var z = math.complex(x, y);
    var resultado;
    argumento1 = math.complex(math.add(1, math.multiply(math.complex(0,-1), z))).toPolar(); //naisu
    argumento2 = math.complex(math.add(1, math.multiply(math.complex(0,1), z))).toPolar();
    //a1 - a2
    resultado = math.complex(Math.log(argumento1.r) - Math.log(argumento2.r), argumento1.phi - argumento2.phi);
    resultado = math.complex(math.multiply(math.complex(0,0.5), resultado));
    texto = resultado.re + " + (" + resultado.im;
    dibujar("aCtg", resultado.re, resultado.im);
    return texto;
}

function obtenerAsec(a, b){
    var numero = new Array();
    numero = dividir(1,0,a,b);
    var y = numero.pop();
    var x = numero.pop();
    
    var texto;
    var argumento;
    var z = math.complex(x, y);
    argumento = math.sqrt(math.add(1, math.multiply(-1, math.multiply(z, z))));
    argumento = math.multiply(math.complex(0,1), argumento);
    argumento = math.add(argumento, z).toPolar();
    var resultado;
    resultado = math.complex(Math.log(argumento.r), argumento.phi);
    resultado = math.multiply(math.complex(0,-1), resultado); 
    texto = resultado.re + " + (" + resultado.im;
    dibujar("aSec", resultado.re, resultado.im);
    return texto;
}

function obtenerAcsc(a, b){
    var numero = new Array();
    numero = dividir(1,0,a,b);
    var y = numero.pop();
    var x = numero.pop();
    
    var texto;
    var argumento;
    var z = math.complex(x, y);
    argumento = math.sqrt(math.add(1, math.multiply(-1, math.multiply(z, z))));
    argumento = math.add(argumento, math.multiply(math.complex(0,1), z)).toPolar();
    var resultado;
    resultado = math.complex(Math.log(argumento.r), argumento.phi);
    resultado = math.multiply(math.complex(0,-1), resultado); 
    texto = resultado.re + " + (" + resultado.im;
    dibujar("aCsc", resultado.re, resultado.im);
    return texto;
}

function obtenerAsenh(a, b){
    var z = math.complex(a,b);
    var argumento = math.complex(math.sqrt(math.add(1,math.multiply(z,z))));
    argumento = math.complex(math.add(z,argumento)).toPolar();
    
    var resultado = math.complex(Math.log(argumento.r), argumento.phi);
    
    var texto = resultado.re + " + (" + resultado.im;
    dibujar("aSenh", resultado.re, resultado.im);
    return texto;
}

function obtenerAcosh(a, b){
    var z = math.complex(a,b);
    var argumento = math.complex(math.sqrt(math.add(z,1)))
    argumento = math.complex(math.multiply(argumento, math.sqrt(math.add(z,-1))));
    argumento = math.complex(math.add(z, argumento)).toPolar();
    
    var resultado = math.complex(Math.log(argumento.r), argumento.phi);
    
    var texto = resultado.re + " + (" + resultado.im;
    dibujar("aCosh", resultado.re, resultado.im);
    return texto;
}

function obtenerLn(a, b){
    var argumento = math.complex(a,b).toPolar();
    var resultado = math.complex(Math.log(argumento.r), argumento.phi);
    var texto = resultado.re + " + (" + resultado.im;
    dibujar("cLn", resultado.re, resultado.im);
    return texto;
}

function dividir(a, b, c, d){
    var texto = new Array;
    var af = ((a * c) + (b * d))/((c * c) + (d * d));
    var bf = ((b * c) - (d * a))/((c * c) + (d * d));
    texto.push(af);
    texto.push(bf);
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
    var texto = new Array;
    var af = Math.pow(r,n)*Math.cos(n*angulo);
    var bf = Math.pow(r,n)*Math.sin(n*angulo);
    
    if(Math.abs(af) < 0.000001){
        af = Math.round(af);
    }

    if(Math.abs(bf) < 0.000001){
        bf = Math.round(bf);
    }
    texto.push(af);
    texto.push(bf);
    return texto;
}

function sacarRaiz(x, y, n){
    var array = new Array();
    var i;
    var r = Math.pow(x, 2) + Math.pow(y, 2);
    r = Math.sqrt(r);
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
        
        array.push(af);
        array.push(bf);
        break;
    }

    return array;
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

function seleccionarTodoF(){
    var checkBox = document.getElementById("todoF");
	
	if (checkBox.checked){
            document.getElementById("sen").checked = 1;
            document.getElementById("cos").checked = 1;
            document.getElementById("tan").checked = 1;
            document.getElementById("ctg").checked = 1;
            document.getElementById("sec").checked = 1;
            document.getElementById("csc").checked = 1;
            document.getElementById("senh").checked = 1;
            document.getElementById("cosh").checked = 1;
            document.getElementById("e").checked = 1;
            document.getElementById("zz").checked = 1;
	} else {
	    document.getElementById("sen").checked = 0;
            document.getElementById("cos").checked = 0;
            document.getElementById("tan").checked = 0;
            document.getElementById("ctg").checked = 0;
            document.getElementById("sec").checked = 0;
            document.getElementById("csc").checked = 0;
            document.getElementById("senh").checked = 0;
            document.getElementById("cosh").checked = 0;
            document.getElementById("e").checked = 0;
            document.getElementById("zz").checked = 0;
	}	
}

function seleccionarTodoFI(){
    var checkBox = document.getElementById("todoFi");
	
	if (checkBox.checked){
            document.getElementById("asen").checked = 1;
            document.getElementById("acos").checked = 1;
            document.getElementById("atan").checked = 1;
            document.getElementById("actg").checked = 1;
            document.getElementById("asec").checked = 1;
            document.getElementById("acsc").checked = 1;
            document.getElementById("asenh").checked = 1;
            document.getElementById("acosh").checked = 1;
            document.getElementById("ln").checked = 1;
	} else {
	    document.getElementById("asen").checked = 0;
            document.getElementById("acos").checked = 0;
            document.getElementById("atan").checked = 0;
            document.getElementById("actg").checked = 0;
            document.getElementById("asec").checked = 0;
            document.getElementById("acsc").checked = 0;
            document.getElementById("asenh").checked = 0;
            document.getElementById("acosh").checked = 0;
            document.getElementById("ln").checked = 0;
	}	
}

//Fin