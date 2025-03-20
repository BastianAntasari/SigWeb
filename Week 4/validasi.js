function klik() {
    var nama, password, alamat;
    nama = document.getElementById("nama").value;
    password = document.getElementById("pass").value;
    alamat = document.getElementById("email").value;
    if (password !== 'sss') {
        alert('password salah');
        return;
    }
    var txt = "Hello " + nama + ", <br> alamat email anda adalah: " + alamat + "<br> Bagaimana kabarnya hari ini?";
    document.getElementById("hasil").innerHTML = txt;
}