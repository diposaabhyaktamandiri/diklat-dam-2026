// DAM Website — JavaScript extracted from the original HTML.

// Form WhatsApp
function kirimPendaftaran(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const wa = document.getElementById('wa').value;
    const pendidikan = document.getElementById('pendidikan').value;
    const program = document.getElementById('programPilihan').value;

    const pesan = `Halo%20LPK%20Diposa%20Abhyakta%20Mandiri,%20saya%20ingin%20mendaftar%20diklat:%0A%0A` +
                  `*Nama:*%20${encodeURIComponent(nama)}%0A` +
                  `*No%20WA:*%20${encodeURIComponent(wa)}%0A` +
                  `*Pendidikan:*%20${encodeURIComponent(pendidikan)}%0A` +
                  `*Program:*%20${encodeURIComponent(program)}`;

    window.open(`https://wa.me/6287839549439?text=${pesan}`, '_blank');
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
