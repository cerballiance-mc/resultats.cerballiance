function submitForm() {
    const dossier = document.getElementById("dossier").value.trim();
    const dob = document.getElementById("dob").value.trim();

    const dossierValide = "008250801GA005800";
    const dobValide = "16/05/2007";

    if (dossier === dossierValide && dob === dobValide) {
        // Ouvre le fichier PDF dans un nouvel onglet
        window.open("RESULT_MATTEO.pdf", "_blank");
    } else {
        alert("Numéro de dossier ou date de naissance incorrects.");
    }
}