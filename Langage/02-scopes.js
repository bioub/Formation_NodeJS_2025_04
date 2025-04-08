globalThis.globalVar = "globalVar"; // Variable globale

// En JavaScript une variable définie
// à la racine du fichier est visible
// selon la plateforme :
// - Node.js : visible dans tout le module
// - Navigateur : visible dans tout le module ou dans tous les fichiers
const fileVar = "fileVar";

function externe() {
  const closureVar = "closureVar"; // Variable de fermeture
  function interne() {
    const localVar = "localVar"; // Variable locale
    if (true) {
      const blockVar = "blockVar"; // Variable de bloc
      console.log("Block", blockVar);
      console.log("Local", localVar);
      console.log("Closure", closureVar);
      console.log("File", fileVar);
      console.log("Global", globalVar);
    }
  }
  interne();
}
externe();
// interne(); // ReferenceError: interne is not defined
