function realizarOperacion(){
    valorLinea1 = document.getElementById("linea1").value;
    console.log(valorLinea1);
    valorLinea2 = document.getElementById("linea2").value;
    console.log(valorLinea2);
    operacion = document.getElementById("opciones").value;
    console.log(operacion);

    switch (operacion) {
        case "Suma":
            let  mSuma = matriz(valorLinea1, valorLinea2);
            let listaSuma;
            let o = 0;
            listaSuma = explicacionsf(mSuma,o, 2);  
            if (listaSuma !== undefined) {
                mostrarLista(listaSuma, operacion);
            } 
            break;
        case "Resta":
            let  mResta = matriz(valorLinea1, valorLinea2);
            let listaResta;
            listaResta = explicacionr(mResta); 
            if (listaResta !== undefined) {
                mostrarLista(listaResta, operacion);
            }
            break;

        case "Multiplicacion":
            let  mMultiplicacion = matriz(valorLinea1, valorLinea2);
            let listaMultiplicacion;
            listaMultiplicacion = explicacionr(mMultiplicacion); 
            if (listaMultiplicacion !== undefined) {
                mostrarLista(listaMultiplicacion, operacion);
            }
            break;
        
        case "Division":
            let  mDivision = matrizd(valorLinea1, valorLinea2);
            let listaDivision;
            listaDivision = explicaciond(mDivision, operacion); 
            if (listaDivision !== undefined) {
                mostrarLista(listaDivision);
            }
            break;
        
    }
  }

  

 //Para la suma
    //No es importante en el html
 function matriz(a,b) {//Función para crear la matriz basica donde se va hacer operaciones como suma de dos numeros y resta de dos numeros
        let c = 0;
        let my;//Esta variable va tomar la cantidad de digitos del numero que tenga mas
        let mr;//Esta variable va tomar la cantidad de digitos del numero que tenga menos
        let r;//Este va tomar la resta entre my y mr
        let carac;
        let con;
        let long1 = a.length;//Long1 obtiene la cantidad de digitos de a, que es el numero que va arriba en la operación
        let long2 = b.length;//Long2 obtiene la cantidad de digitos de b, que es el numero que va abajo en la operación
        let n;
        if (long1 >= long2) {//Condicional en el caso de que a tenga mas o igual cantidad de caracteres que b
            n = long1;//n toma el valor de long
            con = 1;//Con toma el valor de 1, esto para saber mas tarde que a tenia mas o igual cantidad de cifras que b
            my = long1;//my toma el valor del que tenia mayor cantidad de cifras 
            mr = long2;//my toma el valor del que tenia menor cantidad de cifras 
        } else {
            //En el siguiente condional sucede lo mismo solo que se cambian los papeles
            if (long2 > long1) {
                n = long2;
                con = 2;
                my = long2;
                mr = long1;
            }
        }
        r = my - mr;//r toma el valor de la resta entre la mayor cantidad de cifras menos la menor cantidad de cifras
        let m = [];
    
        for (let i = 0; i < 4; i++) {//Creamos la matriz con 4 filas, donde la primera es donde van a ir los acarreos, la segunda donde va ir a, al tercera fila b y cuarta fila la respuesta, ademas inicialmente, la matriz va estar conformada de 0
            let fila = [];
            for (let j = 0; j < n + 1; j++) {//La cantidad de columnas de la matriz va ser de la cantidad de cifras que tenga el numero con mayor cantidad de cifras, ademas de le añadira otra columna, por si al final de la operación se le añade otro acarreo
                fila.push(0);
            }
            m.push(fila);
        }
        //aca se llenara la matriz como se dijo anteriormente, donde las unicas dos filas que van a cambiar van hacer las dos del medio, estos dos for van a estar llenando la matriz llendo por cada columna de la respectiva fila
        for (let i = 1; i < 3; i++) {
            carac = 0;
            for (let j = 1; j < n + 1; j++) {
    
                if (con == 1 && i == 1) {//Se entra a este condicional si a es el numero con mayor cantidad de cifras y estamos en la fila de indice 1, donde se llenara el espacio de la matriz con el digito correspondiente del numero, llenando cada espacio de la fila con un caracter del numero
                    m[i][j] = parseInt(a.substring(carac, carac + 1), 10);
                    carac = carac + 1;
                } else {
                    if (con == 1 && i == 2 && c == r) {//Se entra a este condicional si a es el numero con mayor cantidad de cifras, estamos en la fila de indice 2 y ademas de que este c igual a r, esto es para al momento de sumar ambos numero en la matriz, queden aliniados de forma correcta para poder hacer las operaciones, en caso contrario, estaria corrido a la derecha
                        m[i][j] = parseInt(b.substring(carac, carac + 1), 10);
                        carac = carac + 1;
    
                    } else {
                        //Los siguientes dos condicionales funcionan de la misma manera que los anteriores dos, con la diferencia que el numero con mayor cantidad de cifras ya no es a sino b, esto se deja indicado con la variable con
                        if (con == 2 && i == 2) {
                            m[i][j] = parseInt(b.substring(carac, carac + 1), 10);
                            carac = carac + 1;
    
                        } else {
                            if (con == 2 && i == 1 && c == r) {
                                m[i][j] = parseInt(a.substring(carac, carac + 1), 10);
                                carac = carac + 1;
                            } else {
                                c++//en el caso de que no fuera ninguno de los condicionales, a c se le sumaria un 1 a si mismo, esto hasta llegar a ser del mismo valor que r
                            }
                        }
                    }
                }
    
            }
        }
        return m;//retornamos la matriz
    }

    function matrizd(a, b) {
        let my;
        let mr;
        let carac;
        let long1 = a.length;
        let m = [];
        for (let i = 0; i < (long1 * 2) + 1; i++) {
            let fila = [];
            for (let j = 0; j < (long1 * 2) + 1; j++) {
                fila.push(" ");
            }
            m.push(fila);
        }
    
    
        carac = 0;
        for (let j = 0; j < (long1 * 2) + 1; j++) {
            if (j < long1) {
                m[0][j] = a.substring(carac, carac + 1);
                carac = carac + 1;
            } else {
                if (j == long1) {
                    carac = 0;
                } else {
                    if (long1 + 1 == j) {
                        m[0][j] = b.substring(carac, b.length);
                        carac = carac + 1;
                    }
                }
            }
    
        }
        return m
    }

  function  explicacionsf(m, o, f) { //f es la cantidad de numeros que esta sumando
        let pri = 0;
        let aux = 0;
        let col = m[0].length;
        let miLista = [];
        let fil = m.length;
        let r = (fil - 1) - f;
        let iaux = r;
        let iaux1 = r;
        let j
        for (j = col - 1; j >= 0; j--) {
            miLista[j] = ""
            for (let i = 0; i < fil - 2; i++) {
                if (i < r && pri === 0) {
                    if (m[i][j] === 1) {
                        pri = 1;
                        if (m[i][j] === 1 && m[i + 1][j] === 0 && aux === 0) {
                            miLista[j] = miLista[j] + "\n"
                            miLista[j] = miLista[j] + "1+0=1"
                            aux = 1;
                        } else {
                            if (m[i][j] === 1 && m[i + 1][j] === 1 && aux === 0) {
                                miLista[j] = miLista[j] + "\n"
                                miLista[j] = miLista[j] + "1+1=0"
                                miLista[j] = miLista[j] + "\n"
                                miLista[j] = miLista[j] + "Llevamos 1"
                                iaux--;
                                aux = 0;
                                m[iaux][j - 1] = 1;
                            }
                        }
                    }
                } else {
                    if (pri === 1) {
                        if (m[i + 1][j] === 0 && aux === 0) {
                            miLista[j] = miLista[j] + "\n"
                            miLista[j] = miLista[j] + "0+0=0"
                            aux = 0;
                        } else {
                            if (m[i + 1][j] === 1 && aux === 1) {
                                miLista[j] = miLista[j] + "\n"
                                miLista[j] = miLista[j] + "1+1=0"
                                miLista[j] = miLista[j] + "\n"
                                miLista[j] = miLista[j] + "Llevamos 1"
                                iaux--;
                                aux = 0;
                                m[iaux][j - 1] = 1;
                            } else {
                                if (m[i + 1][j] === 1 && aux === 0) {
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "0+1=1"
                                    aux = 1;
                                } else {
                                    if (m[i + 1][j] === 0 && aux === 1) {
                                        miLista[j] = miLista[j] + "\n"
                                        miLista[j] = miLista[j] + "1+0=1"
                                        aux = 1;
                                    }
                                }
                            }
                        }
                    } else {
                        if (i <= r && iaux1 > r && pri === 0) {
                            pri = 1;
                            if (m[i][j] === 1 && m[i + 1][j] === 0 && aux === 0) {
                                miLista[j] = miLista[j] + "\n"
                                miLista[j] = miLista[j] + "1+0=1"
                                aux = 1;
                            } else {
                                if (m[i][j] === 1 && m[i + 1][j] === 1 && aux === 0) {
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "1+1=0"
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "Llevamos 1"
                                    aux = 0;
                                    iaux--;
                                    m[iaux][j - 1] = 1;
                                }
                            }
                        } else {
                            if (i >= r && pri === 0) {
                                pri = 1;
                                if (m[i][j] === 1 && m[i + 1][j] === 0 && aux === 0) {
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "1+0=1"
                                    aux = 1;
                                } else {
                                    if (m[i][j] === 1 && m[i + 1][j] === 1 && aux === 0) {
                                        miLista[j] = miLista[j] + "\n"
                                        miLista[j] = miLista[j] + "1+1=0"
                                        miLista[j] = miLista[j] + "\n"
                                        miLista[j] = miLista[j] + "Llevamos 1"
                                        iaux--;
                                        aux = 0;
                                        m[iaux][j - 1] = 1;
                                    } else {
                                        if (m[i][j] === 0 && m[i + 1][j] === 1 && aux === 0) {
                                            miLista[j] = miLista[j] + "\n"
                                            miLista[j] = miLista[j] + "0+1=1"
                                            aux = 1;
                                        } else {
                                            if (m[i][j] === 0 && m[i + 1][j] === 0 && aux === 0) {
                                                miLista[j] = miLista[j] + "\n"
                                                miLista[j] = miLista[j] + "0+0=0"
                                                aux = 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } m[fil - 1][j] = aux
            console.log("\n");
            miLista[j] = miLista[j] + "\n"
            miLista[j] = miLista[j] + m.map(row => row.join(' ')).join('\n');
            console.log(miLista[j]);
            r = iaux;
            iaux = iaux1;
            pri = 0;
            aux = 0;
        }
    
        let rta = m[fil - 1];
        let rta1 = "";
        for (let i = 0; i < rta.length; i++) {
            if (i === 0) {
                rta1 = String.fromCharCode(rta[i] + 48);
            } else {
                rta1 = rta1 + rta[i];
            }
        }
    
        if (o === "0") {
            console.log(rta1);
        } else {
            console.log("El resultado final de la suma es el resultado de la resta, solamente que se le aÃ±ade un - ya que es negativo, quedando de esta manera:");
            rta1 = "-" + rta1;
            console.log(rta1);
        }
       
        return miLista;
        }

        function explicacionr(m) {
            let j
            let i
            let filaTemporal = m[0];
            m[0] = m[1];
            m[1] = filaTemporal;
            let col = m[0].length;
            let miLista = [];
            let miLista1 = ""
            for (j = col; j > 0; j--) {
                miLista[j] = ""
                if (m[1][j] == 1 & m[2][j] == 1 & m[0][j] == 0) {
                    miLista[j] = miLista[j] + "\n"
                    miLista[j] = miLista[j] + "0-1=1 -> 1-1=0"
                    miLista[j] = miLista[j] + "\n"
                    miLista[j] = miLista[j] + "Llevamos 1"
                    m[1][j - 1] = 1
                    m[3][j] = 0
                } else {
                    if (m[1][j] == 0 & m[2][j] == 0 & m[0][j] == 1) {
                        miLista[j] = miLista[j] + "\n"
                        miLista[j] = miLista[j] + "1-0=1"
                        m[3][j] = 1
                    } else {
                        if (m[1][j] == 0 & m[2][j] == 0 & m[0][j] == 0 | m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 1 | m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 1) {
                            if (m[1][j] == 0 & m[2][j] == 0 & m[0][j] == 0) {
                                miLista[j] = miLista[j] + "\n"
                                miLista[j] = miLista[j] + "0-0=0"
                            } else {
                                if (m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 1) {
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "1-1=0 -> 0-0=0"
                                } else {
                                    if (m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 1) {
                                        miLista[j] = miLista[j] + "\n"
                                        miLista[j] = miLista[j] + "1-1=0"
                                    }
                                }
                            }
                            m[3][j] = 0
                        } else {
                            if (m[1][j] == 1 & m[2][j] == 1 & m[0][j] == 1 | m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 0 | m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 0) {
                                if (m[1][j] == 1 & m[2][j] == 1 & m[0][j] == 1) {
        
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "1-1=0 -> 0-1=1"
                                    miLista[j] = miLista[j] + "\n"
                                    miLista[j] = miLista[j] + "Levamos 1"
                                } else {
                                    if (m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 0) {
                                        miLista[j] = miLista[j] + "\n"
                                        miLista[j] = miLista[j] + "0-1=1"
                                        miLista[j] = miLista[j] + "\n"
                                        miLista[j] = miLista[j] + "Levamos 1"
                                    } else {
                                        if (m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 0) {
                                            miLista[j] = miLista[j] + "\n"
                                            miLista[j] = miLista[j] + "0-1=1 -> 1-0=1"
                                            miLista[j] = miLista[j] + "\n"
                                            miLista[j] = miLista[j] + "Levamos 1"
                                        }
                                    }
                                }
                                m[1][j - 1] = 1
                                m[3][j] = 1
                            }
                        }
                    }
                }
                miLista[j] = miLista[j] + "\n"
                miLista[j] = miLista[j] + "\n"
                miLista[j] = miLista[j] + m.map(row => row.join(' ')).join('\n');
                miLista[j] = miLista[j] + "\n"
                console.log(miLista[j]);
            }
            j = j + 1
            //console.log(miLista1);
            miLista[j] = ""
            miLista[j] = miLista[j] + "Se revisa al terminar la resta si queda un acarreo de 1 para verifivar si el resultado de la resta da un binario negativo o no:\n"
            //console.log("Se revisa al terminar la resta si queda un acarreo de 1 para verifivar si el resultado de la resta da un binario negativo o no:\n")
            if (m[1][0] == 1 & m[2][0] == 0 & m[0][0] == 0) {
                miLista[j] = miLista[j] + "En este caso si quedo un acarreo de 1, esto significa que el resultado de esta operaci贸n es un binario negativo y aun no se ha terminado el proceso de la resta, para poder seguir resolviendo toca hacer los siguientes pasos: \n"
                //console.log("En este caso si quedo un acarreo de 1, esto significa que el resultado de esta operaci贸n es un binario negativo y aun no se ha terminado el proceso de la resta, para poder seguir resolviendo toca hacer los siguientes pasos: \n")
                miLista[j] = miLista[j] + "-En la posici贸n donde esta el acarreo se baja el 1 al resultado, de esta manera:\n"
                //console.log("-En la posici贸n donde esta el acarreo se baja el 1 al resultado, de esta manera:\n")
                m[3][0] = 1
                miLista[j] = miLista[j] + "\n"
                miLista[j] = miLista[j] + "\n"
                miLista[j] = miLista[j] + m.map(row => row.join(' ')).join('\n');
                miLista[j] = miLista[j] + "\n"
                console.log(miLista[j])
               // console.log(m)
        
                m = rnegativo(m)
            } else {
                miLista[j] = miLista[j] +"En este caso no quedo un acarreo de 1, dejandolo asi, siendo este el resultado:\n"
                //console.log("En este caso no quedo un acarreo de 1, dejandolo asi, siendo este el resultado: ")
                let rta = m[3];
                let rta1
                let i = 0;
                for (i = 0; i < rta.length; i++) {
                    if (i == 0) {
                        rta1 = String.fromCharCode(rta[i] + 48)
                    } else {
                        rta1 = rta1 + rta[i]
                    }
                }
                miLista[j] = miLista[j]+rta1
                console.log(miLista[j])
                return miLista;
                //console.log(rta1)
            }
        }

        function explicaciond(m) {
            let rta = m[0];
            let rta1
            let rta2
            let i = 0;
            let iaux2
            let carac
            let iaux3
            let miLista = [];
            let miLista1 = ""
            for (i = 0; i < rta.length; i++) {
                if (i == 0) {
                    rta1 = rta[i]
                } else {
                    if (rta[i] == " ") {
                        rta2 = rta[i + 1]
                        iaux2 = i + 1
                        iaux3 = iaux2
                        break;
                    } else {
                        rta1 = rta1 + rta[i]
                    }
                }
            }
            let aux = rta[0]
            let iaux = 0
            for (i = 0; i < rta1.length; i++) {
                miLista[i] = ""
                miLista[i]  = miLista[i]  + "\n"
                miLista[i]  = miLista[i]  + "Revisamos si " + rta2 + " cabe en " + aux
                //console.log("Revisamos si " + rta2 + " cabe en " + aux)
                if (parseInt(rta2) > parseInt(aux)) {
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + rta2 + " no cabe en " + aux + " por lo que toca multiplicarlo por 0 y restar el resultado a " + aux
                    //console.log(rta2 + " no cabe en " + aux + " por lo que toca multiplicarlo por 0 y restar el resultado a " + aux)
                    m[1][iaux2] = "0"
                    aux = (parseInt(aux, 2) - parseInt("0", 2)).toString(2);
                    m[iaux + 1][i] = "0";
                    carac = aux.length
                    for (let i1 = i; i1 >= (i - (aux.length - 1)); i1--) {
                        m[iaux + 2][i] = aux.substring(carac - 1, carac);
                        carac = carac - 1;
                    }
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + "Resolvemos la resta quedando de esta manera:"
                    //console.log("Resolvemos la resta quedando de esta manera:")
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + m.map(row => row.join(' ')).join('\n');
        
                    miLista[i] = miLista[i] + "\n"
                    //console.log(m);
                } else {
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + rta2 + " cabe en " + aux + " por lo que toca multiplicarlo por 1 y restar el resultado a " + aux
                    //console.log(rta2 + " cabe en " + aux + " por lo que toca multiplicarlo por 1 y restar el resultado a " + aux)
                    m[1][iaux2] = "1"
                    aux = (parseInt(aux, 2) - parseInt(rta2, 2)).toString(2);
                    carac = rta2.length
                    for (let i1 = i; i1 >= (i - (rta2.length - 1)); i1--) {
                        m[iaux + 1][i1] = rta2.substring(carac - 1, carac);
                        carac = carac - 1;
                    }
                    carac = aux.length
                    for (let i1 = i; i1 >= (i - (aux.length - 1)); i1--) {
                        m[iaux + 2][i] = aux.substring(carac - 1, carac);
                        carac = carac - 1;
                    }
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + "Resolvemos la resta quedando de esta manera:"
                    //console.log("Resolvemos la resta quedando de esta manera:")
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + m.map(row => row.join(' ')).join('\n');
        
                    miLista[i] = miLista[i] + "\n"
                    //console.log(m);
                }
                if (rta[i + 1] != "") {
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + "Bajamos el siguiente numero, el cual en este caso es: " + rta[i + 1]
                    //console.log("Bajamos el siguiente numero, el cual en este caso es: " + rta[i + 1])
                    m[iaux + 2][i + 1] = rta[i + 1]
                }
        
                aux = aux + rta[i + 1]
                iaux = iaux + 2
                iaux2 = iaux2 + 1
                miLista[i] = miLista[i] + "\n"
                miLista[i] = miLista[i] + "\n"
                miLista[i] = miLista[i] + m.map(row => row.join('  ')).join('\n');
        
                miLista[i] = miLista[i] + "\n"
                //console.log(m);
                console.log(miLista[i]);
            }
            //
            rta = m[1];
            let rta1aux = rta1
            rta1 = ""
            for (i = iaux3; i < rta1aux.length + iaux3; i++) {
                if (i == iaux3) {
                    rta1 = rta[i]
        
                } else {
                    rta1 = rta1 + rta[i]
                }
        
            }
            console.log(rta1)
            return miLista;
        }
        function rnegativo(m) {
            let m1
            let rta = m[3];
            let rta1
            let rtao
            let i = 0;
            for (i = 0; i < rta.length; i++) {
                if (i == 0) {
                    rtao = String.fromCharCode(rta[i] + 48)
                } else {
                    rtao = rtao + rta[i]
                }
            }
            for (i = 0; i < rta.length; i++) {
                if (rta[i] === 0) {
                    rta[i] = 1;
                } else {
                    if (rta[i] === 1) {
                        rta[i] = 0;
                    }
                }
            }
            for (i = 0; i < rta.length; i++) {
                if (i == 0) {
                    rta1 = String.fromCharCode(rta[i] + 48)
                } else {
                    rta1 = rta1 + rta[i]
                }
        
            }
            console.log("-Sacamos el componente a 2 al resultado, esto se divide en 2 pasos, los cuales son los siguientes: \n")
            console.log("1)Sacamos el componente a 1 al resultado, esto consiste en cambiar los 0 por 1 y los 1 por 0, quedando asi:\n")
            console.log(rtao + "->" + rta1 + "\n")
            m1 = matriz(rta1, "1")
            console.log("2)El resultado se le suma 1:")
            m1 = explicacionsf(m1, 1, 2)
            return m1
        }


       function mostrarLista(Lista, operacion){
            let divMostrar = document.getElementById("pasosDiv"); // Reemplaza "tuDivId" con el ID de tu div
            divMostrar.innerHTML = "";
            if(operacion == "Suma" || operacion == "Resta"){
                Lista.reverse();
            }
            for (let i = 0; i < Lista.length; i++) {
              let parrafo = document.createElement("pre");
              parrafo.innerText = Lista[i];
              divMostrar.appendChild(parrafo);
            }

        }
          