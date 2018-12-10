var jocActual = {
    taulerActual: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],

    estatTauler: 1,
    puntuacio: 0,
    puntuacioMax: 0,
    pesaActual: "new Object",
    pesaSeguent: "new Object",
    comptadorPesa: new Array(7),
    interval: 1000,

    iniciarJoc: function () {
    this.taulerActual[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[11] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[14] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[15] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[16] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[18] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[19] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[20] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[21] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[22] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[23] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    this.taulerActual[24] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
//    obtenirNovaPesa: function () {}
//    tecla: function () {}
//    movimentAuto: function (interval) {}
    pintar : function(){
        var pintarTauler = "<table border='1'>";
        for (var i = 0; i < 25; i++) {
            pintarTauler += "<tr>";
            for (var j = 0; j < 10; j++) {
                pintarTauler += "<td>";
                if (this.taulerActual[i][j] == 1) {
                    pintarTauler += "X";
                } else {
                    pintarTauler += "0";
                }
                pintarTauler += "</td>";
            }
            pintarTauler += "</tr>";
        }
        pintarTauler += "</table>";
        return pintarTauler;
    }
}

var Pesa = function (forma, color /*, x, y*/ ) {
    this.forma = forma;
    this.color = color;
    //this.x = x;
    //this.y = y;
};

function GeneraPesaAleatoria() {
    var peces = [
                 [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]], "groc"],
                 [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]], "lila"],
                 [[[0, 0, 0, 0], [0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0]], "verd"],
                 [[[0, 0, 0, 0], [0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 0, 0]], "roig"],
                 [[[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0]], "blau"],
                 [[[0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]], "taronga"],
                 [[[0, 0, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]], "morat"]]
    var numeroAleatori = Math.round(Math.random() * 6);
    return peces[numeroAleatori];
}

console.log(GeneraPesaAleatoria());

//Funcio que rep una pesa i la pinta en una taula
Pesa.prototype.pintar = function () {
    var resultat = "<table border='1'>";
    for (var i = 0; i < this.forma.length; i++) {
        resultat += "<tr>"
        for (var j = 0; j < this.forma[i].length; j++) {
            resultat += "<td>";
            if (this.forma[i][j] == 1) {
                resultat += "X"
            } else {
                resultat += "-"
            };
            resultat += "</td>";
        }
        resultat += "</tr>";
    }
    resultat += "</table>";
    return resultat
};

//Funcio per moure una pesa cap a l'esquerra sempre que es pugui
Pesa.prototype.moureEsquerra = function () {
    if ((x - 1) > 0) {
        x--;
        return true;
    } else {
        return false;
    }
};

//Funcio per moure una pesa cap a la dreta sempre que es pugui
Pesa.prototype.moureDreta = function () {
    if ((x + 1) < 10) {
        x++;
        return true;
    } else {
        return false;
    }
};

//Funcio per girar una pesa a la dreta
Pesa.prototype.rotarDreta = function () {
    var formaNova = new Array();
    for (var i = 0; i < this.forma.length; i++) {
        formaNova[i] = new Array();
        for (var j = 0; j < this.forma[i].length; j++) {
            formaNova[i][j] = this.forma[this.forma[i].length - 1 - j][i];
        }
    }
    this.forma = formaNova;
}

//Funcio per girar una pesa a l'esquerra -> la girem tres vegades a la dreta
Pesa.prototype.rotarEsquerra = function () {
    Pesa.rotarDreta;
    Pesa.rotarDreta;
    Pesa.rotarDreta;
}

var pa = GeneraPesaAleatoria();
var p = new Pesa(pa[0], pa[1]);
//document.write(p.pintar());


window.onload = function() {

    document.getElementById("pesa1").innerHTML = p.pintar();
    p.rotarDreta();
    document.getElementById("pesa2").innerHTML = p.pintar();
    p.rotarEsquerra();
    document.getElementById("pesa3").innerHTML = p.pintar();

    document.getElementById("tetris").innerHTML = jocActual.pintar();
}

