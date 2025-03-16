function cekPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function cariPrima() {
    let batas = document.getElementById("angka").value;
    let hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = "";

    if (batas === "" || batas < 1) {
        hasilDiv.innerHTML = "Masukkan angka yang valid!";
        return;
    }

    batas = parseInt(batas);
    let bilanganPrima = [];

    for (let i = 1; i <= batas; i++) {
        if (cekPrima(i)) {
            bilanganPrima.push(i);
        }
    }

    hasilDiv.innerHTML = "Bilangan prima: " + bilanganPrima.join(", ");
}