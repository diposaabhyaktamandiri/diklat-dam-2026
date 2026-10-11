// DAM Website — JavaScript extracted from the original HTML.

// Form WhatsApp
function kirimPendaftaran(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const wa = document.getElementById('wa').value.trim();
    const pendidikan = document.getElementById('pendidikan').value;
    const program = document.getElementById('programPilihan').value;

    // Menyesuaikan nilai pendidikan agar tampil lebih lengkap di WhatsApp
    const pendidikanMap = {
    'SMA/SMK': 'SMA / SMK / Sederajat',
    'D3': 'Diploma (D3)',
    'S1/D4': 'Sarjana (S1 / D4)',
    'S2': 'Magister (S2)',
    'S3': 'Doktor (S3)',
    'Lainnya': 'Lainnya'
};

const pendidikanTampil = pendidikanMap[pendidikan] || pendidikan;


    const pesan =
`Halo, Admin LPK Diposa Abhyakta Mandiri.

Saya ingin mendaftar program Diklat K3 melalui website resmi DAM.

*DATA CALON PESERTA*
*Nama Lengkap:* ${nama}
*Nomor WhatsApp:* ${wa}
*Pendidikan Terakhir:* ${pendidikanTampil}
*Program Diklat:* ${program}

Mohon informasi lebih lanjut mengenai prosedur pendaftaran, jadwal pelaksanaan, dan biaya diklat.

Terima kasih.`;

    const url = `https://wa.me/6287839549439?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
}
// Accordion FAQ
function toggleFaq(id) {
    const content = document.getElementById(`faq-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}
