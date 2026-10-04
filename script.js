// DAM Website — JavaScript extracted from the original HTML.

// Form WhatsApp
function kirimPendaftaran(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const pendidikan = document.getElementById('pendidikan').value;
    const program = document.getElementById('programPilihan').value;

    // Form WhatsApp
function kirimPendaftaran(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const wa = document.getElementById('wa').value.trim();
    const pendidikan = document.getElementById('pendidikan').value;
    const program = document.getElementById('programPilihan').value;

    // Menyesuaikan nilai pendidikan agar tampil lebih lengkap di WhatsApp
    const pendidikanTampil = pendidikan === 'SMA/SMK'
        ? 'SMA / SMK / Sederajat'
        : pendidikan;

    const pesan =
    `Halo LPK Diposa Abhyakta Mandiri, saya ingin mendaftar diklat:\n\n` +
    `*Nama:* ${nama}\n` +
    `*No. WhatsApp:* ${wa}\n` +
    `*Pendidikan Terakhir:* ${pendidikanTampil}\n` +
    `*Program Diklat:* ${program}`;

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
