document.getElementById("mojObrazec").addEventListener("submit", function(event) {
    var ime = document.getElementById("ime").value;
    var priimek = document.getElementById("priimek").value;
    var teleph = document.getElementById("teleph").value;
    var dav = document.getElementById("dav").value;
    var birthday = document.getElementById("birthday").value;
    var spol = document.getElementById("spol").value;
    var eposta = document.getElementById("eposta").value;

    if (!ime || !priimek || !teleph || !dav || !birthday || spol === "select" || !eposta || !uporabnisko_ime || !geslo) {
        Swal.fire({
            title: 'Opozorilo',
            text: 'Prosimo, zapolnite vsa obvezna polja obrazca.',
            icon: 'error',
            confirmButtonText: 'V redu'
        });
        event.preventDefault();
    } else {
        if (!preveriTelefonskoStevilko(teleph)) {
            alert("Telefonska številka ni pravilno oblikovana.");
            event.preventDefault();
        }
        if (!preveriDavcnoStevilko(dav)) {
            alert("Davčna številka ni pravilno oblikovana.");
            event.preventDefault();
		}
		if (!preveriEpostniNAslov(eposta)) {
            alert("Epostni naslov ni pravilno napisan.");
            event.preventDefault();
        } else {
            alert("Obrazec je bil uspešno oddan!");
        }
    }
});

function preveriTelefonskoStevilko(teleph) {
    var vzorec = /^\d{12}$/;
    return vzorec.test(teleph);
}

function preveriDavcnoStevilko(dav) {
    var vzorec = /^[A-Z]{2}\d{9}$/;
    return vzorec.test(dav);
}
function preveriEpostniNaslov(eposta){
	var vzorec = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
	return vzorec.test(eposta);
}
const birthdayInput = document.getElementById("birthday");

birthdayInput.addEventListener("change", function() {
    const selectedDate = new Date(birthdayInput.value);
    
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    
    birthdayInput.value = formattedDate;
});