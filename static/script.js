function vypocitat() {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var operacia = document.getElementById('operacia').value;
    var vysledok;

    if (isNaN(a) || isNaN(b)) {
        vysledok = "Prosím, zadajte platné čísla.";
    } else {
        switch (operacia) {
            case 'scitanie':
                vysledok = a + b;
                break;
            case 'odcitanie':
                vysledok = a - b;
                break;
            case 'nasobenie':
                vysledok = a * b;
                break;
            case 'delenie':
                if (b === 0) {
                    vysledok = "Delenie nulou nie je povolené.";
                } else {
                    vysledok = a / b;
                }
                break;
            default:
                vysledok = "Neznáma operácia.";
        }
    }

    document.getElementById('vysledok').innerText = vysledok;
}

document.getElementById('vypocitatButton').addEventListener('click', vypocitat);