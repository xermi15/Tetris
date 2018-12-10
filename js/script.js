var estatActual = function () {
    taulerActual = new Array(25);
    taulerActual[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[11] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[13] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[14] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[15] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[16] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[18] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[19] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[20] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[21] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[22] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[23] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    taulerActual[24] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    estatTauler: 1;
    puntuacio: 0;
    puntuacioMax: 0;
    pesaActual: "new Object";
    pesaSeguent: "new Object";
    comptadorPesa: new Array(7);
    interval: 1000;

    iniciarJoc: function () {}
    obtenirNovaPesa: function () {}
    tecla: function () {}
    movimentAuto: function (interval) {}
}

var tetris = {
    pecesQueVanSorgint: new Array()
}

var Pesa = function (forma, color /*, x, y*/ ) {
    this.forma = forma;
    this.color = color;
    //this.x = x;
    //this.y = y;
};

Pesa.prototype.moureDreta = function () {
    if ((x - 1) > 0) {
        x--;
        return true;
    } else {
        return false;
    }
};

Pesa.prototype.moureEsquerra = function () {
    if ((x + 1) < 14) {
        x++;
        return true;
    } else {
        return false;
    }
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
console.log(GeneraPesaAleatoria());
console.log(GeneraPesaAleatoria());
console.log(GeneraPesaAleatoria());
console.log(GeneraPesaAleatoria());
console.log(GeneraPesaAleatoria());


Pesa.prototype.pintar = function () {
    var resultat = "<table border='1'>";
    for (var i = 0; i < this.forma.length; i++) {
        resultat = resultat + "<tr>"
        for (var j = 0; j < this.forma[i].length; j++) {
            resultat = resultat + "<td>";
            if (this.forma[i][j] == 1) {
                resultat = resultat + "X"
            } else {
                resultat = resultat + "-"
            };
            resultat = resultat + "</td>";
        }
        resultat = resultat + "</tr>";
    }
    resultat = resultat + "</table>";
    return resultat
};

var pa = GeneraPesaAleatoria();
var p = new Pesa(pa[0], pa[1]);
//document.write(p.pintar());
document.getElementById("original").innerHTML = p.pintar();

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
p.rotarDreta();

document.getElementById("girada").innerHTML = p.pintar();
