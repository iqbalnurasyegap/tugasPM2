function cekBilangan() {
    const inputBilangan = document.getElementById("bilangan").value;
    const hasil = document.getElementById("hasil");

    if (isNaN(inputBilangan)) {
        hasil.innerHTML = "Input bukan bilangan bulat.";
    } else {
        const bilangan = parseInt(inputBilangan);

        if (bilangan % 2 === 0) {
            hasil.innerHTML = "Bilangan " + bilangan + " adalah genap.";
        } else {
            hasil.innerHTML = "Bilangan " + bilangan + " adalah ganjil.";
        }
    }
}

const textContainer =
document.getElementById("judul");

let hue = 0;

setInterval(() => {
hue = (hue + 1) % 360;
const color = `hsl(${hue}, 100%, 50%)`;
textContainer.style.color = color;
}, 5); 