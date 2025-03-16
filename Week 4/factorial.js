var nilai;

function baca(){
    nilai = document.getElementById('angka').value;
    return nilai;
}

function factorial(n){
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function display(){
    document.getElementById('hasil').innerHTML = "angka faktorial dari " + baca() + " adalah : " + factorial(baca());
}
