function tambah() {
    let a1 = Number(document.getElementById("angka1").value);
    let a2 = Number(document.getElementById("angka2").value);
    let hasil = a1 + a2;
    let s = document.getElementById("hasil")
    s.innerHTML = hasil;
    s.style.fontWeight = "bold";
    s.style.fontSize = "2rem";
}

function kurang() {
    let a1 = Number(document.getElementById("angka1").value);
    let a2 = Number(document.getElementById("angka2").value);
    let hasil = a1 - a2;
    let s = document.getElementById("hasil")
    s.innerHTML = hasil;
    s.style.fontWeight = "bold";
    s.style.fontSize = "2rem";
}

function kali() {
    let a1 = Number(document.getElementById("angka1").value);
    let a2 = Number(document.getElementById("angka2").value);
    let hasil = a1 * a2;
    let s = document.getElementById("hasil")
    s.innerHTML = hasil;
    s.style.fontWeight = "bold";
    s.style.fontSize = "2rem";
}

function bagi() {
    let a1 = Number(document.getElementById("angka1").value);
    let a2 = Number(document.getElementById("angka2").value);
    if (a2 !== 0){
        let hasil = a1 / a2;
        let s = document.getElementById("hasil")
        s.innerHTML = hasil;
        s.style.fontWeight = "bold";
        s.style.fontSize = "2rem";
}   else {
    alert("Tidak dapat membagi dengan nol.");
}
}

function hasilBagi() {
    let a1 = Number(document.getElementById("angka1").value);
    let a2 = Number(document.getElementById("angka2").value);
    if (a2 !== 0) {
        let hasil = a1 % a2;
        let s = document.getElementById("hasil")
        s.innerHTML = hasil;
        s.style.fontWeight = "bold";
        s.style.fontSize = "2rem";
    } else {
        alert("Tidak dapat menghitung modulus dengan nol")
    }
    let hasil = a1 % a2;
    let s = document.getElementById("hasil")
    s.innerHTML = hasil;
    s.style.fontWeight = "bold";
    s.style.fontSize = "2rem";
};