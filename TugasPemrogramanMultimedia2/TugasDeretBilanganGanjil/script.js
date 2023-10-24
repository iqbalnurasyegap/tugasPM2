function deretGanjil() {
    const inputN = document.getElementById("angka").value;
    const hasil = document.getElementById("hasil");

    if (isNaN(inputN)) {
        hasil.innerHTML = "Input bukan bilangan.";
    } else {
        const N = parseInt(inputN);
        let deretGanjil = "";

        for (let i = 1; i <= N; i++) {
            if (i % 2 !== 0) {
                if (deretGanjil !== "") {
                    deretGanjil += " ";
                }
                deretGanjil += i;
            }
        }

        hasil.innerHTML = "Deret bilangan ganjil hingga " + N + " adalah: " + deretGanjil;
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