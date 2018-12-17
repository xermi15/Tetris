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
    interval: 100,

    iniciarJoc: function () {
        // this.taulerActual[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[11] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[14] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[15] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[16] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[18] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[19] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[20] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[21] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[22] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[23] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // this.taulerActual[24] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        var p1 = GeneraPesaAleatoria();
        this.pesaActual = new Pesa(p1[0], p1[1], 0, 3);

        p1 = GeneraPesaAleatoria();
        this.pesaSeguent = new Pesa(p1[0], p1[1], 0, 3);
    },

    //tecla: function () {},

    movimentAuto: function () {
        this.pesaActual.moureAbaix();

        //un cop hem mogut la pesa pintem el mapa sense la pesa
        for (var i = this.taulerActual.length - 1; i >= 0; i--) {
            for (var j = this.taulerActual[i].length - 1; j >= 0; j--) {
                if (this.taulerActual[i][j] == 1) { this.taulerActual[i][j] = 0 }
            }
        }

        //i comprovem si xoca
        if (this.colisio()) {

            //tornem la pesa a la posicio original abans de la colisio
            this.pesaActual.retornarAdalt();
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            //convertim la pesa actual en la seguent que teniem preparada
            this.pesaActual = this.pesaSeguent;
            //i generem una nova pesa per despres
            var p2 = GeneraPesaAleatoria();
            this.pesaSeguent = new Pesa(p2[0], p2[1], 0, 3);

            //abans de pintar la nova pesa al tauler, convertim l'antiga en pila de peces
            for (var i = this.taulerActual.length - 1; i >= 0; i--) {
                for (var j = this.taulerActual[i].length - 1; j >= 0; j--) {
                    if (this.taulerActual[i][j] == 1) { this.taulerActual[i][j] = 10 }
                }
            }
        }
        else { this.pesaActual.pintarPesaTauler() }
    },

    pintar: function () {
        var pintarTauler = "<div>";
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.taulerActual[i][j] == 1) { pintarTauler += "X" }
                else if (this.taulerActual[i][j] == 10) { pintarTauler += "M" }
                else { pintarTauler += "0" }
                pintarTauler += " ";
            }
            pintarTauler += "<br>";
        }
        pintarTauler += "</div>";
        document.getElementById("tetris").innerHTML = pintarTauler;
        //return pintarTauler;
    },

    colisio: function () {
        var col = false;
        for (var i = 0; i < this.pesaActual.forma.length; i++) {
            for (var j = 0; j < this.pesaActual.forma[i].length; j++) {
                if (this.pesaActual.forma[i][j] != 0) {
                    if ((this.pesaActual.x + i < 0) || (this.pesaActual.x + i > 24)) { col = true; }
                    if ((this.pesaActual.y + j < 0) || (this.pesaActual.y + j > 9)) { col = true; }
                    
                    //dona problemes el xoc
                    // if ((this.taulerActual[this.pesaActual.x + i][this.pesaActual.y + j]) != 0) { col = true; }
                }
            }
        }
        return col;
    }
}





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
                   [0, 0, 0, 0]], "taronja"],

                 [[[0, 0, 0, 0],
                   [1, 1, 1, 0],
                   [0, 1, 0, 0],
                   [0, 0, 0, 0]], "morat"]];

    var numeroAleatori = Math.round(Math.random() * 6);
    return peces[numeroAleatori];
};

//Funcio que rep una pesa i la pinta en una taula
Pesa.prototype.pintarTaulaPesa = function () {
    var resultat = "<table class='taula'>";
    for (var i = 0; i < this.forma.length; i++) {
        resultat += "<tr>";
        for (var j = 0; j < this.forma[i].length; j++) {
            resultat += "<td>";
            if (this.forma[i][j] == 1) { resultat += "X" }
            else {
                resultat += "&nbsp;";
            }
            resultat += "</td>";
        }
        resultat += "</tr>";
    }
    resultat += "</table>";
    return resultat
};

//Funcio que pinta la pesa acual dins del tauler actual
Pesa.prototype.pintarPesaTauler = function () {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (this.forma[i][j] == 1) { Joc.taulerActual[this.x + i][this.y + j] = 1 }
        }
    }
};



//---------------------------------Moviments pesa---------------------------------

//Funcio per moure una pesa cap a l'esquerra sempre que es pugui
Pesa.prototype.moureEsquerra = function () {
    if ((this.y - 1) > 0) { this.y-- }
};

//Funcio per moure una pesa cap a la dreta sempre que es pugui
Pesa.prototype.moureDreta = function () {
    if ((this.y + 1) < 9) { this.y++ }
};

//Funcio per moure una pesa cap a abaix sempre que es pugui
Pesa.prototype.moureAbaix = function () {
    if ((this.x + 1) <= 25) { this.x++ }
};

//Funcio per moure una pesa cap a abaix sempre que es pugui
Pesa.prototype.retornarAdalt = function () {
    if ((this.x - 1) >= 0) { this.x-- }
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
};

//Funcio per girar una pesa a l'esquerra -> la girem tres vegades a la dreta
Pesa.prototype.rotarEsquerra = function () {
    Pesa.rotarDreta;
    Pesa.rotarDreta;
    Pesa.rotarDreta;
};

//---------------------------------Inici i iteracions Joc---------------------------------

var iterar;
var keyPress;

function iteracio(){
    Joc.pintar();
    Joc.movimentAuto();
    document.getElementById("pesaActual").innerHTML = Joc.pesaActual.pintarTaulaPesa();
    document.getElementById("pesaSeguent").innerHTML = Joc.pesaSeguent.pintarTaulaPesa();
};

function start(){
    Joc.iniciarJoc();
    Joc.pesaActual.pintarPesaTauler();
    Joc.pintar();
    document.getElementById("pesaActual").innerHTML = Joc.pesaActual.pintarTaulaPesa();
    document.getElementById("pesaSeguent").innerHTML = Joc.pesaSeguent.pintarTaulaPesa();
    iterar = setInterval(iteracio, Joc.interval);
}



//Funcio encarregada de moure el jugador
//- Comprovar que la direccio introduida sigui valida i assignarla a la pesa
//- En el cas de que no sigui valida, no es moura

//function mourePesa(jugador) {

//}

//Funcio encarregada de llegir la direccio introduida per teclat
//- Assigna la direccio introduida a una variable

//function dirKeyPress(e) {
//    var keyDown = document.all ? e.which : e.key;
//    //La direccio a dalt i a baix estan invertides!
//    if (keyDown == "ArrowDown") {
//        keyPress = 1;
//    }
//    if (keyDown == "ArrowRight") {
//        keyPress = 2;
//    }
//    if (keyDown == "ArrowLeft") {
//        keyPress = 4;
//    }
//}
