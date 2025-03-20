function fibonacci(n) {
    let hasil = [0, 1];
    for (let i = 2; i <= n; i++) {
        let next = hasil[i - 1] + hasil[i - 2];
        if (next > n) break;
        hasil.push(next);
    }
    return hasil;
}

function cariFibonacci() {
    let batas = document.getElementById("angka").value;
    let hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = "";

    if (batas === "" || batas < 0) {
        hasilDiv.innerHTML = "Masukkan angka yang valid!";
        return;
    }

    batas = parseInt(batas);
    let deretFibonacci = fibonacci(batas);
    hasilDiv.innerHTML = "Bilangan Fibonacci: " + deretFibonacci.join(", ");
}