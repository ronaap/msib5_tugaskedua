document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('gradeForm');
  const resultTableBody = document.querySelector('#resultTable tbody');

  const hitungButton = document.getElementById('button');
  hitungButton.addEventListener('click', function () {
    //nilai dari input
    const nama = form.nama.value;
    const matkul = form.matkul.value;
    const grade = form.grade.value;

    //cek kondisi nama matkul ga boleh kosong
    if (nama && matkul) {
      let nilai;
      //grade jadi nilai
      switch (grade) {
        case 'A':
          nilai = 4;
          break;
        case 'B':
          nilai = 3;
          break;
        case 'C':
          nilai = 2;
          break;
        case 'D':
          nilai = 1;
          break;
        case 'E':
          nilai = 0;
          break;
      }

      const rataRata = nilai;

      // buat elemen baru untuk baris
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
      <td>${nama}</td>
      <td>${matkul}</td>
      <td>${grade}</td>
      <td>${rataRata}</td>
    `;
      // tambah baris baru ke tabel
      resultTableBody.appendChild(newRow);

      form.reset();
    } else {
      alert('Semua data harus disi');
    }
  });
});
