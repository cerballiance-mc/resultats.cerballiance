function submitForm() {
    const dossier = document.getElementById("dossier").value.trim();
    const dob = document.getElementById("dob").value.trim();

    const dossierValide = "a";
    const dobValide = "a";

    if (dossier === dossierValide && dob === dobValide) {
        // Ouvre le fichier PDF dans un nouvel onglet
        window.open("RESULT_MATTEO.pdf", "_blank");
    } else {
        alert("Numéro de dossier ou date de naissance incorrects.");
    }
}