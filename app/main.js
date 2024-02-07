let indiceActual = 0
let listica = []
let re = false
function realizarOperacion() {
    valorLinea1 = document.getElementById("linea1").value;
    console.log(valorLinea1);
    valorLinea2 = document.getElementById("linea2").value;
    console.log(valorLinea2);
    operacion = document.getElementById("opciones").value;
    console.log(operacion);

    switch (operacion) {
        case "Suma":
            let mSuma = matriz(valorLinea1, valorLinea2);
            let listaSuma;
            let o = 0;
            listaSuma = explicacionsf(mSuma, o, 2);
            if (listaSuma !== undefined) {
                mostrarLista(listaSuma, operacion);
            }
            break;
        case "Resta":
            let mResta = matriz(valorLinea1, valorLinea2);
            let listaResta;
            listaResta = explicacionr(mResta);
            if (listaResta !== undefined) {
                mostrarLista(listaResta, operacion);
            }
            break;

        case "Multiplicacion":
            let mMultiplicacion = matrizm(valorLinea1, valorLinea2);
            let listaMultiplicacion;
            listaMultiplicacion = explicacionm(mMultiplicacion, valorLinea1, valorLinea2);
            if (listaMultiplicacion !== undefined) {
                mostrarLista(listaMultiplicacion, operacion);

            }
            break;

        case "Division":
            let mDivision = matrizd(valorLinea1, valorLinea2);
            let listaDivision;
            listaDivision = explicaciond(mDivision);
            if (listaDivision !== undefined) {
                mostrarLista(listaDivision, operacion);
            }
            break;

    }
}




function matriz(a, b) {
    let c = 0;
    let my;
    let mr;
    let r;
    let carac;
    let con;
    let long1 = a.length;
    let long2 = b.length;
    let n;
    if (long1 >= long2) {
        n = long1;
        con = 1;
        my = long1;
        mr = long2;
    } else {

        if (long2 > long1) {
            n = long2;
            con = 2;
            my = long2;
            mr = long1;
        }
    }
    r = my - mr;
    let m = [];

    for (let i = 0; i < 4; i++) {
        let fila = [];
        for (let j = 0; j < n + 1; j++) {
            fila.push(0);
        }
        m.push(fila);
    }

    for (let i = 1; i < 3; i++) {
        carac = 0;
        for (let j = 1; j < n + 1; j++) {

            if (con == 1 && i == 1) {
                m[i][j] = parseInt(a.substring(carac, carac + 1), 10);
                carac = carac + 1;
            } else {
                if (con == 1 && i == 2 && c == r) {
                    m[i][j] = parseInt(b.substring(carac, carac + 1), 10);
                    carac = carac + 1;

                } else {
                    if (con == 2 && i == 2) {
                        m[i][j] = parseInt(b.substring(carac, carac + 1), 10);
                        carac = carac + 1;

                    } else {
                        if (con == 2 && i == 1 && c == r) {
                            m[i][j] = parseInt(a.substring(carac, carac + 1), 10);
                            carac = carac + 1;
                        } else {
                            c++
                        }
                    }
                }
            }

        }
    }
    return m;
}
//matrizm y matrizms van ligadas a multiplicacion
function matrizm(a, b) {
    let c = 0;
    let my;
    let mr;
    let r;
    let carac;
    let con;
    let long1 = a.length;
    let long2 = b.length;
    let n;
    if (long1 >= long2) {
        n = long1;
        con = 1;
        my = long1;
        mr = long2;
    } else {
        if (long2 > long1) {
            n = long2;
            con = 2;
            my = long2;
            mr = long1;
        }
    }
    r = my - mr;
    let m = [];
    for (let i = 0; i < 2 + long2; i++) {
        let fila = [];
        for (let j = 0; j < n + (long2 - 1); j++) {
            fila.push(0);
        }
        m.push(fila);
    }

    for (let i = 0; i < 2; i++) {
        carac = 0;
        for (let j = (long2 - 1); j < n + (long2 - 1); j++) {

            if (con == 1 && i == 0) {
                m[i][j] = parseInt(a.substring(carac, carac + 1), 10);
                carac = carac + 1;
            } else {
                if (con == 1 && i == 1 && c == r) {
                    m[i][j] = parseInt(b.substring(carac, carac + 1), 10);
                    carac = carac + 1;

                } else {
                    if (con == 2 && i == 1) {
                        m[i][j] = parseInt(b.substring(carac, carac + 1), 10);
                        carac = carac + 1;

                    } else {
                        if (con == 2 && i == 0 && c == r) {
                            m[i][j] = parseInt(a.substring(carac, carac + 1), 10);
                            carac = carac + 1;
                        } else {
                            c++
                        }
                    }
                }
            }

        }
    }
    return m
}

function matrizms(m, f) {
    m = m.slice(2);
    for (let i = 0; i < f; i++) {
        m.unshift(new Array(m[0].length).fill(0));
    }
    m.push(new Array(m[0].length).fill(0));
    for (let i = 0; i < m.length; i++) {
        m[i].unshift(0);
    }
    return m
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
                m[0][j] = "÷"
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


function explicacionsf(m, o, f) {
    let matrizCadenas = convertirMatrizACadenas(m);
    let pri = 0;
    let aux = 0;
    let col = m[0].length;
    let miLista = [];
    let fil = m.length;
    let r = (fil - 1) - f;
    let iaux = r;
    let iaux1 = r;
    let j
    let jaux = 0
    let ex = false
    let ico
    matrizCadenas = agregarLineaEnColumna(matrizCadenas, 0)
    matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, fil - 1, fil)
    matrizCadenas = agregarLinea(matrizCadenas, fil - 1)

    matrizCadenas[fil - 2][0] = "+"
    for (j = col - 1; j >= 0; j--) {
        console.log(j)

        for (let i = 0; i < fil - 2; i++) {
            miLista[jaux] = ""
            eliminarEtiquetas(matrizCadenas)
            if (i < r && pri === 0) {
                if (m[i][j] === 1) {
                    pri = 1;
                    if (m[i][j] === 1 && m[i + 1][j] === 0 && aux === 0) {
                        miLista[jaux] = miLista[jaux] + "\n"
                        miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+0=1" + '</span>'
                        matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                        matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                        aux = 1;
                        ex = true

                    } else {
                        if (m[i][j] === 1 && m[i + 1][j] === 1 && aux === 0) {

                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+1=0" + '</span>'
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                            iaux--;
                            aux = 0;
                            m[iaux][j - 1] = 1;
                            matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                            matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                            matrizCadenas[iaux][j] = '<span class="resaltado">' + "1" + '</span>';
                            ex = true

                        }
                    }
                }
            } else {
                if (pri === 1) {
                    if (m[i + 1][j] === 0 && aux === 0) {
                        miLista[jaux] = miLista[jaux] + "\nSumamos lo que nos dio la suma anterior con el siguiete numero:\n"
                        miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0+0=0" + '</span>'
                        matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                        aux = 0;
                        ex = true
                        console.log("AQUI TOY1")
                    } else {
                        if (m[i + 1][j] === 1 && aux === 1) {
                            miLista[jaux] = miLista[jaux] + "\nSumamos lo que nos dio la suma anterior con el siguiete numero:\n"
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+1=0" + '</span>'
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                            iaux--;
                            aux = 0;
                            m[iaux][j - 1] = 1;
                            matrizCadenas[iaux][j] = '<span class="resaltado">' + "1" + '</span>';
                            matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'

                            ex = true
                            console.log("AQUI TOY2")
                        } else {
                            if (m[i + 1][j] === 1 && aux === 0) {
                                miLista[jaux] = miLista[jaux] + "\nSumamos lo que nos dio la suma anterior con el siguiete numero:\n"
                                miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0+1=1" + '</span>'
                                matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                aux = 1;
                                ex = true
                                console.log("AQUI TOY3")
                            } else {
                                if (m[i + 1][j] === 0 && aux === 1) {
                                    miLista[jaux] = miLista[jaux] + "\nSumamos lo que nos dio la suma anterior con el siguiete numero:\n"
                                    miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+0=1" + '</span>'
                                    matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                    aux = 1;
                                    ex = true
                                    console.log("AQUI TOY4")
                                }
                            }
                        }
                    }
                } else {
                    if (i <= r && iaux1 > r && pri === 0) {
                        pri = 1;
                        if (m[i][j] === 1 && m[i + 1][j] === 0 /*&& aux === 0*/) {
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+0=1" + '</span>'
                            matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                            matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                            aux = 1;
                            ex = true
                            console.log("AQUI TOY5")
                        } else {
                            if (m[i][j] === 1 && m[i + 1][j] === 1 /*&& aux === 0*/) {

                                miLista[jaux] = miLista[jaux] + "\n"
                                miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+1=0" + '</span>'
                                miLista[jaux] = miLista[jaux] + "\n"
                                miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                                iaux--;
                                aux = 0;
                                m[iaux][j - 1] = 1;
                                matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                                matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                matrizCadenas[iaux][j] = '<span class="resaltado">' + "1" + '</span>';
                                ex = true
                                console.log("AQUI TOY6")
                            }
                        }
                    } else {
                        if (i >= r && pri === 0) {
                            pri = 1;
                            if (m[i][j] === 1 && m[i + 1][j] === 0 /*&& aux === 0*/) {
                                miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+0=1" + '</span>'
                                matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                                matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                aux = 1;
                                ex = true
                                console.log("AQUI TOY7")
                            } else {
                                if (m[i][j] === 1 && m[i + 1][j] === 1 /*&& aux === 0*/) {

                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1+1=0" + '</span>'
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                                    iaux--;
                                    aux = 0;
                                    m[iaux][j - 1] = 1;
                                    matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                                    matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                    matrizCadenas[iaux][j] = '<span class="resaltado">' + "1" + '</span>';
                                    ex = true
                                    console.log("AQUI TOY8")

                                } else {
                                    if (m[i][j] === 0 && m[i + 1][j] === 1 /*&& aux === 0*/) {
                                        miLista[jaux] = miLista[jaux] + "\n"
                                        miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0+1=1" + '</span>'
                                        matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                                        matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                        aux = 1;
                                        ex = true
                                        console.log("AQUI TOY9")
                                    } else {
                                        if (m[i][j] === 0 && m[i + 1][j] === 0 /*&& aux === 0*/) {
                                            miLista[jaux] = miLista[jaux] + "\n"
                                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0+0=0" + '</span>'
                                            matrizCadenas[i][j + 1] = '<span class="resaltado">' + matrizCadenas[i][j + 1] + '</span>'
                                            matrizCadenas[i + 1][j + 1] = '<span class="resaltado">' + matrizCadenas[i + 1][j + 1] + '</span>'
                                            aux = 0;
                                            ex = true
                                            console.log("AQUI TOY10")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (i + 1 != fil - 2 && ex == true) {
                matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 0, iaux1)
                miLista[jaux] = miLista[jaux] + "\n"
                //miLista[i] = miLista[i] + matrizCadenas.map(row => row.join('  ')).join('\n');
                miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                ex = false
                console.log("\n");
                console.log(miLista[j]);
                jaux = jaux + 1;
                //console.log(matrizCadenas)
            }
        }
        matrizCadenas[fil][j + 1] = '<span class="resaltado">' + aux.toString() + '</span>';

        matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 0, iaux1)
        m[fil - 1][j] = aux
        console.log("\n");
        miLista[jaux] = miLista[jaux] + "\n"
        //miLista[i] = miLista[i] + matrizCadenas.map(row => row.join('  ')).join('\n');
        miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
        console.log(miLista[j]);
        jaux = jaux + 1;
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
    miLista[jaux] = '<span class="resaltado">' + "" + '</span>'
    if (o === 0) {
        miLista[jaux] = miLista[jaux] + "\n"
        miLista[jaux] = miLista[jaux] + "El resultado es: "+rta1;
    } else {
        miLista[jaux] = miLista[jaux] + "\n"
        miLista[jaux] = miLista[jaux] + "El resultado final de la suma es el resultado de la resta, solamente que se le añade un - ya que es negativo, quedando de esta manera:\n"
        rta1 = "-" + rta1;
        miLista[jaux] = miLista[jaux] + rta1;
    }

    return miLista;
}

function explicacionr(m) {
    let fil = m.length;
    let dd = []
    let j
    let i
    let filaTemporal = m[0];
    m[0] = m[1];
    m[1] = filaTemporal;
    let col = m[0].length;
    let miLista = [];
    let miLista1 = ""
    let matrizCadenas = convertirMatrizACadenas(m);
    let jaux = 0
    matrizCadenas = agregarLineaEnColumna(matrizCadenas, 0)
    matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, fil - 1, fil)
    matrizCadenas = agregarLinea(matrizCadenas, 3)
    matrizCadenas[2][0] = "-"
    for (j = col; j > 0; j--) {
        miLista[jaux] = ""
        eliminarEtiquetas(matrizCadenas)
        if (m[1][j] == 1 & m[2][j] == 1 & m[0][j] == 0) {
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0-1=1" + '</span>'
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
            matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
            matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
            matrizCadenas[1][j] = '<span class="resaltado">' + "1" + '</span>'
            matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
            miLista[jaux] = miLista[jaux] + "\n"
            eliminarEtiquetas(matrizCadenas)
            jaux = jaux + 1
            miLista[jaux] = ""
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + "Restamos lo que nos dio la resta anterior al con el siguiente"
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1-1=0" + '</span>'
            miLista[jaux] = miLista[jaux] + "\n"
            matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
            matrizCadenas[4][j + 1] = '<span class="resaltado">' + "0" + '</span>'
            matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + "\n"
            miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
            miLista[jaux] = miLista[jaux] + "\n"
            jaux = jaux + 1
            miLista[jaux] = ""
            m[1][j - 1] = 1
            m[3][j] = 0
        } else {
            if (m[1][j] == 0 & m[2][j] == 0 & m[0][j] == 1) {
                miLista[jaux] = miLista[jaux] + "\n"
                miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1-0=1" + '</span>'
                m[3][j] = 1
                matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
                matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                matrizCadenas[4][j + 1] = '<span class="resaltado">' + "1" + '</span>'
                matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                miLista[jaux] = miLista[jaux] + "\n"
                miLista[jaux] = miLista[jaux] + "\n"
                miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                miLista[jaux] = miLista[jaux] + "\n"
                eliminarEtiquetas(matrizCadenas)
                jaux = jaux + 1
                miLista[jaux] = ""
            } else {
                if (m[1][j] == 0 & m[2][j] == 0 & m[0][j] == 0 | m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 1 | m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 1) {
                    if (m[1][j] == 0 & m[2][j] == 0 & m[0][j] == 0) {
                        miLista[jaux] = miLista[jaux] + "\n"
                        miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0-0=0" + '</span>'
                        matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
                        matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                        matrizCadenas[4][j + 1] = '<span class="resaltado">' + "0" + '</span>'
                        matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                        //miLista[jaux] = miLista[jaux] + "\n"
                        //miLista[jaux] = miLista[jaux] + "\n"
                        //miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                        //miLista[jaux] = miLista[jaux] + "\n"
                        //eliminarEtiquetas(matrizCadenas)
                        //jaux = jaux + 1
                    } else {
                        if (m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 1) {
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1-1=0" + '</span>'
                            matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
                            matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
                            matrizCadenas[4][j + 1] = '<span class="resaltado">' + "0" + '</span>'
                            matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                            miLista[jaux] = miLista[jaux] + "\n"
                            eliminarEtiquetas(matrizCadenas)
                            jaux = jaux + 1
                            miLista[jaux] = ""
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "Restamos lo que nos dio la resta anterior al con el siguiente"
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0-0=0" + '</span>'
                            miLista[jaux] = miLista[jaux] + "\n"
                            matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                            matrizCadenas[4][j + 1] = '<span class="resaltado">' + "0" + '</span>'
                            matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                            //miLista[jaux] = miLista[jaux] + "\n"
                            //miLista[jaux] = miLista[jaux] + "\n"
                            //miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                            //miLista[jaux] = miLista[jaux] + "\n"
                            //eliminarEtiquetas(matrizCadenas)
                            //jaux = jaux + 1
                        } else {
                            if (m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 1) {
                                miLista[jaux] = miLista[jaux] + "\n"
                                miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1-1=0" + '</span>'
                                matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
                                matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                                matrizCadenas[4][j + 1] = '<span class="resaltado">' + "0" + '</span>'
                                matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                                //miLista[jaux] = miLista[jaux] + "\n"
                                //miLista[jaux] = miLista[jaux] + "\n"
                                //miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                                //miLista[jaux] = miLista[jaux] + "\n"
                                //eliminarEtiquetas(matrizCadenas)
                                //jaux = jaux + 1
                            }
                        }
                    }
                    miLista[jaux] = miLista[jaux] + "\n"
                    miLista[jaux] = miLista[jaux] + "\n"
                    miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                    miLista[jaux] = miLista[jaux] + "\n"
                    eliminarEtiquetas(matrizCadenas)
                    jaux = jaux + 1
                    miLista[jaux] = ""
                    m[3][j] = 0
                } else {
                    if (m[1][j] == 1 & m[2][j] == 1 & m[0][j] == 1 | m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 0 | m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 0) {
                        if (m[1][j] == 1 & m[2][j] == 1 & m[0][j] == 1) {

                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1-1=0" + '</span>'
                            miLista[jaux] = miLista[jaux] + "\n"

                            matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
                            matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'

                            matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                            miLista[jaux] = miLista[jaux] + "\n"
                            eliminarEtiquetas(matrizCadenas)
                            jaux = jaux + 1
                            miLista[jaux] = ""
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "Restamos lo que nos dio la resta anterior al con el siguiente"
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0-1=1" + '</span>'
                            miLista[jaux] = miLista[jaux] + "\n"
                            miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                            matrizCadenas[1][j] = '<span class="resaltado">' + "1" + '</span>'
                            matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                            matrizCadenas[4][j + 1] = '<span class="resaltado">' + "1" + '</span>'
                            matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                            //miLista[jaux] = miLista[jaux] + "\n"
                            //miLista[jaux] = miLista[jaux] + "\n"
                            //miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                            //miLista[jaux] = miLista[jaux] + "\n"
                            //eliminarEtiquetas(matrizCadenas)
                            //jaux = jaux + 1
                        } else {
                            if (m[1][j] == 0 & m[2][j] == 1 & m[0][j] == 0) {
                                miLista[jaux] = miLista[jaux] + "\n"
                                miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0-1=1" + '</span>'
                                miLista[jaux] = miLista[jaux] + "\n"
                                miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                                matrizCadenas[1][j] = '<span class="resaltado">' + "1" + '</span>'
                                matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                                matrizCadenas[4][j + 1] = '<span class="resaltado">' + "1" + '</span>'
                                matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                            } else {
                                if (m[1][j] == 1 & m[2][j] == 0 & m[0][j] == 0) {
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "0-1=1" + '</span>'
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + "Llevamos 1 al otro lado"
                                    matrizCadenas[0][j + 1] = '<span class="resaltado">' + matrizCadenas[0][j + 1] + '</span>'
                                    matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
                                    matrizCadenas[1][j] = '<span class="resaltado">' + "1" + '</span>'
                                    matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    eliminarEtiquetas(matrizCadenas)
                                    jaux = jaux + 1
                                    miLista[jaux] = ""
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + "Restamos lo que nos dio la resta anterior al con el siguiente"
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    miLista[jaux] = miLista[jaux] + '<span class="resaltado">' + "1-0=1" + '</span>'
                                    miLista[jaux] = miLista[jaux] + "\n"
                                    matrizCadenas[2][j + 1] = '<span class="resaltado">' + matrizCadenas[2][j + 1] + '</span>'
                                    matrizCadenas[4][j + 1] = '<span class="resaltado">' + "1" + '</span>'
                                    matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
                                }
                            }
                        }

                        miLista[jaux] = miLista[jaux] + "\n"
                        miLista[jaux] = miLista[jaux] + "\n"
                        miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
                        miLista[jaux] = miLista[jaux] + "\n"
                        jaux = jaux + 1
                        miLista[jaux] = ""
                        m[1][j - 1] = 1
                        m[3][j] = 1
                    }
                }
            }
        }
        /* matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 1, 2)
         miLista[jaux] = miLista[jaux] + "\n"
         miLista[jaux] = miLista[jaux] + "\n"
         miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
         miLista[jaux] = miLista[jaux] + "\n"
         console.log(miLista[j]);
         console.log(j);
         jaux = jaux + 1*/
    }
    //j = j + 1
    //console.log(miLista1);
    eliminarEtiquetas(matrizCadenas)
    jaux = jaux + 1
    miLista[jaux] = '<span class="resaltado">' + "" + '</span>'
    miLista[jaux] = miLista[jaux] + "Se revisa al terminar la resta si queda un acarreo de 1 para verifivar si el resultado de la resta da un binario negativo o no:\n"
    //console.log("Se revisa al terminar la resta si queda un acarreo de 1 para verifivar si el resultado de la resta da un binario negativo o no:\n")
    if (m[1][0] == 1 & m[2][0] == 0 & m[0][0] == 0) {
        miLista[jaux] = miLista[jaux] + "En este caso si quedo un acarreo de 1, esto significa que el resultado de esta operaci贸n es un binario negativo y aun no se ha terminado el proceso de la resta, para poder seguir resolviendo toca hacer los siguientes pasos: \n"
        //console.log("En este caso si quedo un acarreo de 1, esto significa que el resultado de esta operaci贸n es un binario negativo y aun no se ha terminado el proceso de la resta, para poder seguir resolviendo toca hacer los siguientes pasos: \n")
        miLista[jaux] = miLista[jaux] + "-En la posición donde esta el acarreo se baja el 1 al resultado, de esta manera:\n"
        //console.log("-En la posici贸n donde esta el acarreo se baja el 1 al resultado, de esta manera:\n")
        m[3][0] = 1
        matrizCadenas[4][1] = '<span class="resaltado">' + "1" + '</span>'
        matrizCadenas[1][1] = '<span class="resaltado">' + "1" + '</span>'
        miLista[jaux] = miLista[jaux] + "\n"
        miLista[jaux] = miLista[jaux] + "\n"
        miLista[jaux] = miLista[jaux] + matrizCadenas.map(row => row.join('  ')).join('\n');
        miLista[jaux] = miLista[jaux] + "\n"
        console.log(miLista[j])
        // console.log(m)

        let d = rnegativo(m)
        miLista[jaux] = miLista[jaux] + "\n"
        miLista = miLista.concat(d);
    } else {
        miLista[jaux] = miLista[jaux] + "En este caso no quedo un acarreo de 1, dejandolo asi, siendo este el resultado:\n"
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
        miLista[jaux] = miLista[jaux] + rta1
        console.log(miLista[j])
        //console.log(rta1)
    }
    return miLista;
}

function explicacionm(m, a, b) {
    let long1 = a.length;
    let long2 = b.length;
    let col = m[0].length;
    let fil = m.length;
    let iaux = 2
    let mr
    let my
    let n
    let i = 0
    let j
    let colaux = col - 1
    let jaux
    let con = 0
    let miLista = [];
    let carac
    if (long1 >= long2) {
        n = long1;
        my = long1;
        mr = long2;
    } else {
        if (long2 > long1) {
            n = long2;
            my = long2;
            mr = long1;
        }
    }
    let matrizCadenas = convertirMatrizACadenas(m);
    matrizCadenas = agregarLineaEnColumna(matrizCadenas, 0)
    matrizCadenas = cambiarCerosPorEspacios(matrizCadenas, 2, fil)
    matrizCadenas = cambiarCerosPorEspaciosEnColumnas(matrizCadenas, 0, col - my)
    matrizCadenas = agregarLinea(matrizCadenas, 2)
    matrizCadenas[1][0] = "x"
    for (j = col - 1; j > col - 1 - b.length; j--) {
        miLista[i] = '<span class="resaltado">' + "" + '</span>'
        carac = a.length
        con++;
        if (m[1][j] == 0 && con == 1) {
            miLista[i] = miLista[i] + "\n"
            miLista[i] = miLista[i] + "- Debido a que el bit #" + con + " de derecha a izquierda del multiplicador es 0, el resultado de toda la multiplicación es 0, quedando de esta manera:"
            matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
            for (jaux = colaux; jaux > colaux - long1; jaux--) {
                matrizCadenas[iaux + 1][jaux + 1] = '<span class="resaltado">' + "0" + '</span>'
            }

        } else {
            if (m[1][j] == 1 && con == 1) {

                miLista[i] = miLista[i] + "\n"
                miLista[i] = miLista[i] + "- Debido a que el bit #" + con + " de derecha a izquierda del multiplicador es 1, el resultado de toda la multiplicación es igual al multiplicando, quedando de esta manera:"
                //console.log("- Debido a que el bit #" + con + " de derecha a izquierda del multiplicador es 1, el resultado de toda la multiplicación es igual al multiplicando, quedando de esta manera:")
                matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
                for (jaux = colaux; jaux > colaux - long1; jaux--) {
                    m[iaux][jaux] = parseInt(a.substring(carac - 1, carac), 10);
                    if (parseInt(a.substring(carac - 1, carac), 10)) {
                        matrizCadenas[iaux + 1][jaux + 1] = ""
                    }
                    matrizCadenas[iaux + 1][jaux + 1] = matrizCadenas[iaux + 1][jaux + 1] + '<span class="resaltado">' + a.substring(carac - 1, carac); + '</span>'
                    carac--
                }
            } else {
                if (m[1][j] == 0 && con != 1) {
                    miLista[i] = miLista[i] + "\n"
                    miLista[i] = miLista[i] + "- Debido a que el bit #" + con + " de derecha a izquierda del multiplicador es 0, el resultado de toda la multiplicación es 0, quedando de esta manera:"
                    matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
                    for (jaux = colaux; jaux > colaux - long1; jaux--) {
                        matrizCadenas[iaux + 1][jaux + 1] = '<span class="resaltado">' + "0" + '</span>'
                    }
                } else {
                    if (m[1][j] == 1 && con != 1) {
                        miLista[i] = miLista[i] + "\n"
                        miLista[i] = miLista[i] + "- Debido a que el bit #" + con + " de derecha a izquierda del multiplicador es 1, el resultado de toda la multiplicación es igual al multiplicando, poniendo el resultado una fila mas abajo que el anterior, y corrido un lugar a la izquierda, poniendo 0 en su lugar, quedando de esta manera:"
                        //console.log("- Debido a que el bit #" + con + " de derecha a izquierda del multiplicador es 1, el resultado de toda la multiplicación es igual al multiplicando, poniendo el resultado una fila mas abajo que el anterior, y corrido un lugar a la izquierda, poniendo 0 en su lugar, quedando de esta manera:")
                        matrizCadenas[1][j + 1] = '<span class="resaltado">' + matrizCadenas[1][j + 1] + '</span>'
                        for (jaux = colaux; jaux > colaux - long1; jaux--) {
                            m[iaux][jaux] = parseInt(a.substring(carac - 1, carac), 10);
                            if (parseInt(a.substring(carac - 1, carac), 10)) {
                                matrizCadenas[iaux + 1][jaux + 1] = ""
                            }
                            matrizCadenas[iaux + 1][jaux + 1] = matrizCadenas[iaux + 1][jaux + 1] + '<span class="resaltado">' + a.substring(carac - 1, carac); + '</span>'
                            carac--
                        }
                    }
                }
            }
        }
        iaux++
        colaux--
        miLista[i] = miLista[i] + "\n"
        miLista[i] = miLista[i] + "\n"

        miLista[i] = miLista[i] + matrizCadenas.map(row => row.join(' ')).join('\n');

        miLista[i] = miLista[i] + "\n"

        console.log(miLista[i])
        i++
        eliminarEtiquetas(matrizCadenas)
    }
    miLista[i] = '<span class="resaltado">' + "" + '</span>'
    miLista[i] = miLista[i] + "\n"
    miLista[i] = miLista[i] + "Ahora se sumara todas las respuestas para que nos den el resultado final: "
    console.log(miLista[i])
    //console.log("Ahora se sumara todas las respuestas para que nos den el resultado final: ")
    let nm = matrizms(m, long2 - 1)
    let sumaMultipliacion = explicacionsf(nm, 0, long2)
    miLista[i] = miLista[i] + "\n";
    //sumaMultipliacion.reverse();
    let dd = miLista.concat(sumaMultipliacion);
    return dd;
}

function explicaciond(m) {
    let rta = m[0];
    let rta1
    let rta2
    let i = 0;
    let ii = 0
    let iaux2
    let carac
    let iaux3
    let miLista = [];
    let miLista1 = ""
    for (i = 0; i < rta.length; i++) {
        if (i == 0) {
            rta1 = rta[i]
        } else {
            if (rta[i] == "÷") {
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
        miLista[ii] = ""
        miLista[ii] = miLista[ii] + "\n"
        miLista[ii] = miLista[ii] + "Revisamos si " + rta2 + " cabe en " + aux
        //console.log("Revisamos si " + rta2 + " cabe en " + aux)
        console.log("rta2" + rta2)
        console.log("aux" + aux)
        if (parseInt(rta2) > parseInt(aux)) {
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + rta2 + " no cabe en " + aux + " por lo que toca multiplicarlo por 0 y restar el resultado a " + aux
            //console.log(rta2 + " no cabe en " + aux + " por lo que toca multiplicarlo por 0 y restar el resultado a " + aux)
            m[1][iaux2] = '<span class="resaltado">' + "0" + '</span>'
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + m.map(row => row.join(' ')).join('\n');
            miLista[ii] = miLista[ii] + "\n"
            ii++
            miLista[ii] = '<span class="resaltado">' + "" + '</span>';
            eliminarEtiquetas(m)
            aux = (parseInt(aux, 2) - parseInt("0", 2)).toString(2);
            m[iaux + 1][i] = '<span class="resaltado">' + "0" + '</span>';
            carac = aux.length
            for (let i1 = i; i1 >= (i - (aux.length - 1)); i1--) {
                m[iaux + 2][i] = '<span class="resaltado">' + aux.substring(carac - 1, carac) + '</span>';
                carac = carac - 1;
            }
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "Resolvemos la resta quedando de esta manera:"
            //console.log("Resolvemos la resta quedando de esta manera:")
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + m.map(row => row.join(' ')).join('\n');

            miLista[ii] = miLista[ii] + "\n"
            ii++
            miLista[ii] = '<span class="resaltado">' + "" + '</span>';
            eliminarEtiquetas(m)
            //console.log(m);
        } else {
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + rta2 + " cabe en " + aux + " por lo que toca multiplicarlo por 1 y restar el resultado a " + aux
            //console.log(rta2 + " cabe en " + aux + " por lo que toca multiplicarlo por 1 y restar el resultado a " + aux)
            m[1][iaux2] = '<span class="resaltado">' + "1" + '</span>';
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + m.map(row => row.join(' ')).join('\n');
            miLista[ii] = miLista[ii] + "\n"
            ii++
            miLista[ii] = '<span class="resaltado">' + "" + '</span>';
            eliminarEtiquetas(m)
            aux = (parseInt(aux, 2) - parseInt(rta2, 2)).toString(2);
            carac = rta2.length
            for (let i1 = i; i1 >= (i - (rta2.length - 1)); i1--) {
                m[iaux + 1][i1] = rta2.substring(carac - 1, carac);
                carac = carac - 1;
            }
            carac = aux.length
            for (let i1 = i; i1 >= (i - (aux.length - 1)); i1--) {
                m[iaux + 2][i] = '<span class="resaltado">' + aux.substring(carac - 1, carac) + '</span>';
                carac = carac - 1;
            }
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "Resolvemos la resta quedando de esta manera:"
            //console.log("Resolvemos la resta quedando de esta manera:")
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + m.map(row => row.join(' ')).join('\n');
            miLista[ii] = miLista[ii] + "\n"
            ii++
            eliminarEtiquetas(m)
            //console.log(m);
        }
        if (rta[i + 1] != "÷") {
            miLista[ii] = '<span class="resaltado">' + "" + '</span>';
            miLista[ii] = miLista[ii] + "\n"
            miLista[ii] = miLista[ii] + "Bajamos el siguiente numero, el cual en este caso es: " + rta[i + 1]
            //console.log("Bajamos el siguiente numero, el cual en este caso es: " + rta[i + 1])
            m[0][i + 1] = '<span class="resaltado">' + m[0][i + 1] + '</span>';
            m[iaux + 2][i + 1] = rta[i + 1]
        }

        iaux = iaux + 2
        iaux2 = iaux2 + 1
        miLista[ii] = miLista[ii] + "\n"
        miLista[ii] = miLista[ii] + "\n"
        miLista[ii] = miLista[ii] + m.map(row => row.join('  ')).join('\n');
        eliminarEtiquetas(m)
        aux = aux + rta[i + 1]
        miLista[ii] = miLista[ii] + "\n"
        ii++
        eliminarEtiquetas(m)
        miLista[ii] = '<span class="resaltado">' + "" + '</span>';
    }
    //
    miLista[ii] = '<span class="resaltado">' + "" + '</span>';
    let iauxxxxx = i - 1
    rta = m[1];
    let rta1aux = rta1
    rta1 = ""

    for (i = iaux3; i < rta1aux.length + iaux3; i++) {
        if (i == iaux3) {
            rta1 = rta[i]
            console.log(rta1)
        } else {
            rta1 = rta1 + rta[i]
        }

    }
    console.log(miLista)
    console.log(rta1)
    miLista[ii] = miLista[ii] + "La respuesta de la divisón es: " + rta1;
    return miLista;
}


function rnegativo(m) {

    let miLista = []
    let m1
    let rta = m[3];
    let rta1
    let rtao
    let i = 0;
    miLista[0] = '<span class="resaltado">' + "" + '</span>'
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

    miLista[0] = miLista[0] + "\n"
    console.log("h")
    miLista[0] = miLista[0] + "-Sacamos el componente a 2 al resultado, esto se divide en 2 pasos, los cuales son los siguientes:"
    miLista[0] = miLista[0] + "\n"
    miLista[0] = miLista[0] + "1)Sacamos el componente a 1 al resultado, esto consiste en cambiar los 0 por 1 y los 1 por 0, quedando asi:\n"
    miLista[0] = miLista[0] + rtao + "->" + rta1 + "\n"
    m1 = matriz(rta1, "1")
    miLista[0] = miLista[0] + "2)El resultado se le suma 1:"

    let d = explicacionsf(m1, 1, 2)
    miLista[0] = miLista[0] + "\n"
    let dd = miLista.concat(d);
    console.log(d)
    return dd
}




function mostrarLista(Lista, operacion) {
    console.log(Lista);
    let divMostrar = document.getElementById("pasosDiv");
    divMostrar.innerHTML = "";
    Lista = filtrarResaltados(Lista);
    Lista = limpiarLista(Lista)
    listica = Lista
    mostrarElemento(listica, divMostrar, 0);


indiceActual=0
    divMostrar.style.whiteSpace = "nowrap";
    divMostrar.style.overflowX = "auto";
}

function mostrarElemento(elemento, contenedor, indice) {
    let parrafo = document.createElement("pre");
    parrafo.innerHTML = elemento[indice];
    parrafo.style.fontFamily = "'Courier New', monospace";
    parrafo.style.fontSize = "TuTamaño";
    contenedor.appendChild(parrafo);
    console.log(parrafo);
}
function mostrarSiguiente() {
    let divMostrar = document.getElementById("pasosDiv");
    divMostrar.innerHTML = "";
    // Verifica que haya elementos en la lista y que no estemos en la última posición
    if (indiceActual < listica.length - 1) {
        indiceActual++;
        mostrarElemento(listica, divMostrar, indiceActual);
    }
}

function mostrarAnterior() {
    let divMostrar = document.getElementById("pasosDiv");
    divMostrar.innerHTML = "";
    // Verifica que haya elementos en la lista y que no estemos en la primera posición
    if (indiceActual > 0) {
        indiceActual--;
        mostrarElemento(listica, divMostrar, indiceActual);
    }
}
//utilidad

function convertirMatrizACadenas(matrizEnteros) {
    return matrizEnteros.map(fila => fila.map(num => num.toString()));
}
function cambiarCerosPorEspacios(matriz, filainicial, filaFinal) {
    for (let i = filainicial; i < filaFinal; i++) {
        matriz[i] = matriz[i].map(valor => valor === '0' ? ' ' : valor);

    }
    return matriz
}
function cambiarCerosPorEspaciosEnColumnas(matriz, colinicial, colFinal) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = colinicial; j < colFinal; j++) {
            matriz[i][j] = matriz[i][j] === '0' ? ' ' : matriz[i][j];
        }
    }
    return matriz
}
function agregarLinea(matriz, fila) {
    // Verificar si la fila especificada es válida
    if (fila >= 0 && fila < matriz.length) {
        // Crear una nueva línea llena de "-"
        const nuevaLinea = Array(matriz[0].length).fill('-');

        // Insertar la nueva línea en la posición especificada
        matriz.splice(fila, 0, nuevaLinea);

    } else {
        console.log('Fila no válida. La matriz no ha sido modificada.');
    }
    return matriz
}
function agregarLineaEnColumna(matriz, columna) {
    // Verificar si la columna especificada es válida
    if (columna >= 0 && columna < matriz[0].length) {
        // Crear una nueva línea llena de "-"
        const nuevaLinea = Array(matriz.length).fill(' ');

        // Insertar la nueva línea en la columna especificada
        for (let i = 0; i < matriz.length; i++) {
            matriz[i].splice(columna, 0, nuevaLinea[i]);
        }
    } else {
        console.log('Columna no válida. La matriz no ha sido modificada.');
    }
    return matriz
}
function eliminarEtiquetas(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = matriz[i][j].replace(/<\/?span(?:[^>"']|"[^"]*"|'[^']*')*>/g, '');
        }
    }
} function filtrarResaltados(lista) {
    // Filtrar los elementos que contienen '<span class="resaltado">'
    const listaFiltrada = lista.filter(elemento => elemento.includes('<span class="resaltado">'));

    return listaFiltrada;
}
function limpiarLista(lista) {
    return lista.filter(elemento => elemento !== undefined);
}
function validarBinario(input) {
    let valor = input.value;
    let esBinario = /^[01]+$/.test(valor);

    let alerta = document.getElementById("alertaBinaria");

    if (!esBinario) {
        alerta.style.display = "block";
        setTimeout(function () {
            alerta.style.display = "none";
        }, 3000); // Ocultar la alerta después de 3 segundos

        input.value = "";  // Limpiar el campo si no es binario
    }
}

