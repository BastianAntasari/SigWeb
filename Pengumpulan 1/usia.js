function klik() {
    var nama, umur;
    nama = document.getElementById("nama").value;
    umur = document.getElementById("umur").value;
    if (nama.trim() === "") {
        alert('isikan nama!!');
        return;
    }

    if (umur > 0 && umur <= 5) {
        var txt = "Anda masih bayi";
    }
    else if (umur >= 6 && umur <= 15) {
        var txt = "Anda masih anak-anak";
    }
    else if (umur >= 16 && umur <= 30) {
        var txt = "Anda masih remaja";
    }
    else if (umur >= 31 && umur <= 60) {
        var txt = "Anda sudah dewasa";
    }
    else if (umur > 60) {
        var txt = "Anda sudah tua";
    }
    else {
        var txt = "Anda Game Over"
    }
    document.getElementById("hasil").innerHTML = txt;
}