function hitungGaji() {
    const namaKaryawan = document.getElementById("nama").value;
    const gajiPokok = parseFloat(document.getElementById("gaji").value);

    // tunjangan adalah 20% dari gaji pokok dan pajak adalah 15% dari gaji pokok
    const tunjangan = 0.2 * gajiPokok;
    const pajak = 0.15 * gajiPokok;

    const gajiBersih = gajiPokok - (tunjangan + pajak);

    const hasilText = `${namaKaryawan}<br>Rp ${gajiBersih}`;
    document.getElementById("hasil").innerHTML = hasilText;
}