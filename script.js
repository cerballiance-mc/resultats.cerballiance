function submitForm() {
    const dossier = document.getElementById("dossier").value.trim();
    const dob = document.getElementById("dob").value.trim();

    const dossierValide = "008250801GA005800"; // ← attention : tu avais mis 800 plus tôt
    const dobValidFormats = ["16/05/2007", "16/5/2007", "16/05/07", "16/5/07"];

    if (dossier === dossierValide && dobValidFormats.includes(dob)) {
        // Ouvre le fichier PDF dans un nouvel onglet
        window.open("RESULT_MATTEO.pdf", "_blank");
    } else {
        alert("Numéro de dossier ou date de naissance incorrects.");
    }
}