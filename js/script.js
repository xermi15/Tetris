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
    max: 0,
    comptadorPeces: 0,

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
                if ((this.taulerActual[i][j] != 0) && (this.taulerActual[i][j] != 10)) { this.taulerActual[i][j] = 0 }
            }
        }

        //i comprovem si xoca
        if (!this.posicioValida()) {
            //tornem la pesa a la posicio original abans de la posicio no valida
            this.pesaActual.retornarAdalt();
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            //convertim l'antiga en pila de peces
            for (var i = this.taulerActual.length - 1; i >= 0; i--) {
                for (var j = this.taulerActual[i].length - 1; j >= 0; j--) {
                    if ((this.taulerActual[i][j] != 10) && (this.taulerActual[i][j] != 0)) {
                        this.taulerActual[i][j] = 10; 
                    }
                }
            }
            //convertim la pesa actual en la seguent que teniem preparada
            this.pesaActual = this.pesaSeguent;
            //i la pintem al tauler
            this.pesaActual.pintarPesaTauler();
            //i generem una nova pesa per despres
            var p2 = GeneraPesaAleatoria();
            this.pesaSeguent = new Pesa(p2[0], p2[1], 0, 3);
            Joc.actualitzarPuntuacio();
            Joc.pintar();
        }
        else { 
            this.pesaActual.pintarPesaTauler();
            Joc.pintar(); 
        }
    },
    
    movimentDreta: function () {
        this.pesaActual.moureDreta();

        //un cop hem mogut la pesa pintem el mapa sense la pesa
        for (var i = this.taulerActual.length - 1; i >= 0; i--) {
            for (var j = this.taulerActual[i].length - 1; j >= 0; j--) {
                if ((this.taulerActual[i][j] != 0) && (this.taulerActual[i][j] != 10)) { this.taulerActual[i][j] = 0 }
            }
        }

        //i comprovem si xoca
        if (!this.posicioValida()) {

            //tornem la pesa a la posicio original abans de la posicio no valida
            this.pesaActual.moureEsquerra();
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            Joc.pintar();
        }
        else { 
            this.pesaActual.pintarPesaTauler();
            Joc.pintar(); 
        }
    },

    movimentEsquerra: function () {
        this.pesaActual.moureEsquerra();

        //un cop hem mogut la pesa pintem el mapa sense la pesa
        for (var i = this.taulerActual.length - 1; i >= 0; i--) {
            for (var j = this.taulerActual[i].length - 1; j >= 0; j--) {
                if ((this.taulerActual[i][j] != 0) && (this.taulerActual[i][j] != 10)) { this.taulerActual[i][j] = 0 }
            }
        }

        //i comprovem si xoca
        if (!this.posicioValida()) {

            //tornem la pesa a la posicio original abans de la posicio no valida
            this.pesaActual.moureDreta();
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            Joc.pintar();
        }
        else { 
            this.pesaActual.pintarPesaTauler();
            Joc.pintar(); 
        }
    },

    rotar: function () {
        this.pesaActual.rotarDreta();

        //un cop hem mogut la pesa pintem el mapa sense la pesa
        for (var i = this.taulerActual.length - 1; i >= 0; i--) {
            for (var j = this.taulerActual[i].length - 1; j >= 0; j--) {
                if ((this.taulerActual[i][j] != 0) && (this.taulerActual[i][j] != 10)) { this.taulerActual[i][j] = 0 }
            }
        }

        if(this.descolocatRotacio() == 'dreta'){
            //tornem la pesa a la posicio original abans de la posicio no valida
            for (var i = 0; i < Joc.max; i++) {
                this.pesaActual.moureEsquerra();
            }
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            Joc.pintar();
        }

        if(this.descolocatRotacio() == 'esquerra'){
            //tornem la pesa a la posicio original abans de la posicio no valida
            for (var i = 0; i < Joc.max; i++) {
                this.pesaActual.moureDreta();
            }
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            Joc.pintar();
        }
        
        //i comprovem si xoca
        if (!this.posicioValida()) {

            //tornem la pesa a la posicio original abans de la posicio no valida
            this.pesaActual.rotarEsquerra();
            //la tornem a pintar al tauler
            this.pesaActual.pintarPesaTauler();
            Joc.pintar();
        }
        else { 
            this.pesaActual.pintarPesaTauler();
            Joc.pintar(); 
        }
    },

    descolocatRotacio: function(){
        var col = 'nop';
        var comptador = 0;
        Joc.max = 0;
        for (var i = 0; i < this.pesaActual.forma.length; i++) {
            for (var j = 0; j < this.pesaActual.forma[i].length; j++) {
                if (this.pesaActual.forma[i][j] != 0) {
                    if (this.pesaActual.y + j < 0)  { col = 'esquerra'; comptador++; }
                    if (this.pesaActual.y + j > 9) { col = 'dreta'; comptador++; }
                }
            }
            if(Joc.max < comptador) {Joc.max = comptador}
        }
        return col;
    },

    posicioValida: function () {
        var col = true;
        for (var i = 0; i < this.pesaActual.forma.length; i++) {
            for (var j = 0; j < this.pesaActual.forma[i].length; j++) {
                if (this.pesaActual.forma[i][j] != 0) {
                    if ((this.pesaActual.x + i < 0) || (this.pesaActual.x + i > 24)) { col = false; }
                    else if ((this.pesaActual.y + j < 0) || (this.pesaActual.y + j > 9)) { col = false; }
                    else if ((this.taulerActual[this.pesaActual.x + i][this.pesaActual.y + j]) != 0) { 
                        console.log(this.pesaActual);
                        if ((this.pesaActual.x == 1) && (this.pesaActual.y == 3)) {
                            Joc.finalJoc();
                        } else {
                            col = false; 
                        }
                    } 
                    else{}
                }
            }
        }
        return col;
    },

    actualitzarPuntuacio: function () {
        //Modifiquem la puntuacio quan aconseguim una pesa nova
        Joc.comptadorPeces++;
        //mirem si hem pujat de nivell
        if (Joc.comptadorPeces % 10 == 0) {
            clearInterval(iterar);
            Joc.interval *= 0.9;
            Joc.puntuacio += 20;
            console.log("Level up");
            console.log(Joc.interval);
            iterar = setInterval(iteracio, Joc.interval);
        }
        Joc.puntuacio += 10;
    },

    finalJoc: function() {
        clearInterval(iterar); 
        //tornem la pesa a la posicio original abans de la posicio no valida
        this.pesaActual.retornarAdalt();
        //la tornem a pintar al tauler
        this.pesaActual.pintarPesaTauler();
        console.log("finale");
        document.getElementById("final").innerHTML = "Game Over";
        
    },

    pintar: function () {
        //var pintarTauler = "<div>";
        var canvas = document.getElementById("tetris");
        var ctx = canvas.getContext('2d');
        var img = new Image();
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 10; j++) {

                if (this.taulerActual[i][j] == 0) { img = document.getElementById("negre") }
                if (this.taulerActual[i][j] == 1) { img = document.getElementById("groc") }
                if (this.taulerActual[i][j] == 2) { img = document.getElementById("lila") }
                if (this.taulerActual[i][j] == 3) { img = document.getElementById("verd") }
                if (this.taulerActual[i][j] == 4) { img = document.getElementById("roig") }
                if (this.taulerActual[i][j] == 5) { img = document.getElementById("blau") }
                if (this.taulerActual[i][j] == 6) { img = document.getElementById("taronja") }
                if (this.taulerActual[i][j] == 7) { img = document.getElementById("morat") }
                if (this.taulerActual[i][j] == 10) { img = document.getElementById("blanc") }
                
                ctx.drawImage(img, j*20, i*20, 20, 20);
            }
        }
        document.getElementById("puntuacio").innerHTML = Joc.puntuacio;
        //document.getElementById("pesaActual").innerHTML = Joc.pesaActual.pintarTaulaPesa();
        document.getElementById("pesaSeguent").innerHTML = Joc.pesaSeguent.pintarTaulaPesa();
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
            if (this.forma[i][j] == 1) { 
                //Joc.taulerActual[this.x + i][this.y + j] = 1;
                if(this.color == "groc"){ Joc.taulerActual[this.x + i][this.y + j] = 1 }
                if(this.color == "lila"){ Joc.taulerActual[this.x + i][this.y + j] = 2 }
                if(this.color == "verd"){ Joc.taulerActual[this.x + i][this.y + j] = 3 }
                if(this.color == "roig"){ Joc.taulerActual[this.x + i][this.y + j] = 4 }
                if(this.color == "blau"){ Joc.taulerActual[this.x + i][this.y + j] = 5 }
                if(this.color == "taronja"){ Joc.taulerActual[this.x + i][this.y + j] = 6 }
                if(this.color == "morat"){ Joc.taulerActual[this.x + i][this.y + j] = 7 }
            }
        }
    }
};



//---------------------------------Moviments pesa---------------------------------

//Funcio per moure una pesa cap a l'esquerra sempre que es pugui
Pesa.prototype.moureEsquerra = function () {
    this.y--
};

//Funcio per moure una pesa cap a la dreta sempre que es pugui
Pesa.prototype.moureDreta = function () {
    this.y++
};

//Funcio per moure una pesa cap a abaix sempre que es pugui
Pesa.prototype.moureAbaix = function () {
    this.x++
};

//Funcio per moure una pesa cap a abaix sempre que es pugui
Pesa.prototype.retornarAdalt = function () {
    this.x--
};

//Funcio per girar una pesa a la dreta
Pesa.prototype.rotarDreta = function () {
    var formaNova = new Array();
    for (var i = 0; i < this.forma.length; i++) {
        formaNova[i] = new Array();
        for (var j = 0; j < this.forma[i].length; j++) {
            formaNova[i][j] = this.forma[this.forma[i].length - 1-j][i];
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
    Joc.movimentAuto();
};

function start(){
    Joc.iniciarJoc();
    Joc.pesaActual.pintarPesaTauler();
    Joc.pintar();
    iterar = setInterval(iteracio, Joc.interval);
}

var element = document.getElementById("all");
document.onkeydown = dirKeyPress;


//Funcio encarregada de llegir la direccio introduida per teclat
//- Assigna la direccio introduida a una variable
function dirKeyPress(e) {
   var keyDown = document.all ? e.which : e.key;
   //La direccio a dalt i a baix estan invertides!
   if (keyDown == "ArrowDown") {
        Joc.puntuacio++;
        Joc.movimentAuto();
   }
   if (keyDown == "ArrowRight") {
       Joc.movimentDreta();
   }
   if (keyDown == "ArrowLeft") {
       Joc.movimentEsquerra();
   }
   if (keyDown == "ArrowUp") {
       Joc.rotar();
   }
}
