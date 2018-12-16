//---------------------------------Objecte Joc---------------------------------

var Joc = {
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
    pesaActual: null,
    pesaSeguent: null,
    comptadorPesa: [0, 0, 0, 0, 0, 0, 0],
    interval: 1000,

    iniciarJoc: function () {
        this.taulerActual[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[11] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[14] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[15] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[16] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[18] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[19] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[20] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[21] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[22] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[23] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.taulerActual[24] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        var p1 = GeneraPesaAleatoria();
        var p2 = GeneraPesaAleatoria();
        this.pesaActual = new Pesa(p1[0], p1[1], 0, 3);
        this.pesaSeguent = new Pesa(p2[0], p2[1], 0, 3);
    },

    obtenirNovaPesa: function () {},
    tecla: function () {},
    movimentAuto: function (interval) {},

    pintar: function () {
        var pintarTauler = "<div>";
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.taulerActual[i][j] == 1) {
                    pintarTauler += "X";
                } else {
                    pintarTauler += "0";
                }
                pintarTauler += " ";
            }
            pintarTauler += "<br>";
        }
        pintarTauler += "</div>";
        return pintarTauler;
    },


    colisio: function () {
        var col = true;
        for (var i = 0; i < this.pesaActual.forma.length; i++) {
            for (var j = 0; j < this.pesaActual.forma[i].length; j++) {
                if (this.pesaActual.forma[i][j] != 0) {
                    if (this.taulerActual[this.pesaActual.x + i][this.pesaActual.y + j] != 0) {col = false;}
                    if (this.pesaActual.x + i < 0 || this.pesaActual.x + i > 24) {col = false;}
                    if (this.pesaActual.y + j < 0 || this.pesaActual.y + j > 9) {col = false;}
                }
            }
        }
        return col;
    },

}

var iterar;
var keyPress;


//---------------------------------Objecte Pesa-----------------------------------

var Pesa = function (forma, color, x, y) {
    this.forma = forma;
    this.color = color;
    this.x = x;
    this.y = y;
};

//---------------------------------Funcions Pesa---------------------------------

function GeneraPesaAleatoria() {
    var peces = [
                 [[[0, 0, 0, 0],
                   [0, 1, 1, 0],
                   [0, 1, 1, 0],
                   [0, 0, 0, 0]], "groc"],

                 [[[0, 1, 0, 0],
                   [0, 1, 0, 0],
                   [0, 1, 0, 0],
                   [0, 1, 0, 0]], "lila"],

                 [[[0, 0, 0, 0],
                   [0, 1, 1, 0],
                   [1, 1, 0, 0],
                   [0, 0, 0, 0]], "verd"],

                 [[[0, 0, 0, 0],
                   [0, 1, 1, 0],
                   [0, 0, 1, 1],
                   [0, 0, 0, 0]], "roig"],

                 [[[0, 1, 0, 0],
                   [0, 1, 0, 0],
                   [0, 1, 1, 0],
                   [0, 0, 0, 0]], "blau"],

                 [[[0, 1, 1, 0],
                   [0, 1, 0, 0],
                   [0, 1, 0, 0],
                   [0, 0, 0, 0]], "taronga"],

                 [[[0, 0, 0, 0],
                   [1, 1, 1, 0],
                   [0, 1, 0, 0],
                   [0, 0, 0, 0]], "morat"]];

    var numeroAleatori = Math.round(Math.random() * 6);
    return peces[numeroAleatori];
}

//Funcio que rep una pesa i la pinta en una taula
Pesa.prototype.pintarTaulaPesa = function () {
    var resultat = "<table border='1'>";
    for (var i = 0; i < this.forma.length; i++) {
        resultat += "<tr>";
        for (var j = 0; j < this.forma[i].length; j++) {
            resultat += "<td>";
            if (this.forma[i][j] == 1) {
                resultat += "X";
            } else {
                resultat += "-";
            }
            resultat += "</td>";
        }
        resultat += "</tr>";
    }
    resultat += "</table>";
    return resultat
};

//Funcio que pinta la pesa acual dins del tauler actual
Pesa.prototype.pintarPesaTauler = function (){
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (this.forma[i][j] == 1) {
                Joc.taulerActual[this.x + i][this.y + j] = "1";
            }
        }
    }
}



//---------------------------------Moviments pesa---------------------------------

//Funcio per moure una pesa cap a l'esquerra sempre que es pugui
Pesa.prototype.moureEsquerra = function () {
    if ((y - 1) > 0) {
        y--;
    }
};

//Funcio per moure una pesa cap a la dreta sempre que es pugui
Pesa.prototype.moureDreta = function () {
    if ((y + 1) < 9) {
        y++;
    }
};

//Funcio per moure una pesa cap a abaix sempre que es pugui
Pesa.prototype.moureAbaix = function () {
    if ((x + 1) <= 25) {
        x++;
    }
};

//Funcio per moure una pesa cap a abaix sempre que es pugui
Pesa.prototype.retornarAdalt = function () {
    if ((x - 1) >= 0) {
        x--;
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








//function fInterval() {
//    //var pesa = GeneraPesaAleatoria();
//    colocarPesaInici(pesa);
//
//    //var element = document.getElementById("all");
//	//document.onkeydown = dirKeyPress;
//    //comprovarDireccio(keyPress);
//    //mourePesa();
//
//    document.getElementById("tetris").innerHTML = Joc.pintar();
//    console.log(c);
//    c++;
//
//}
//
//function colocarPesaInici(pesa) {
//
//}
//
//window.onload = function() {
//
//    iterar = setInterval(fInterval, interval);
//
//}

window.onload = function () {
    colocarPesaInici(pesa1);
    document.getElementById("tetris").innerHTML = Joc.pintar();
    document.getElementById("pesaActual").innerHTML = Joc.pesa1.pintarTaulaPesa();
    document.getElementById("pesaSeguent").innerHTML = Joc.pesa2.pintarTaulaPesa();

}









//Funcio encarregada de moure el jugador
//- Comprovar que la direccio introduida sigui valida i assignarla a la pesa
//- En el cas de que no sigui valida, no es moura
function mourePesa(jugador) {

}

//Funcio encarregada de llegir la direccio introduida per teclat
//- Assigna la direccio introduida a una variable
function dirKeyPress(e) {
    var keyDown = document.all ? e.which : e.key;
    //La direccio a dalt i a baix estan invertides!
    if (keyDown == "ArrowDown") {
        keyPress = 1;
    }
    if (keyDown == "ArrowRight") {
        keyPress = 2;
    }
    if (keyDown == "ArrowLeft") {
        keyPress = 4;
    }
}
