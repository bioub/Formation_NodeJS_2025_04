import os from 'node:os';

console.log(os.arch()); // Architecture de la machine (x64, arm64, etc.)
console.log(os.platform()); // Plateforme (win32, linux, darwin, etc.)
console.log(os.cpus()); // Informations sur les CPU (modèle, vitesse, etc.)
console.log(os.cpus().length); // Nombre de CPU
console.log(os.availableParallelism()); // Nombre de CPU

console.log(os.networkInterfaces()); // Informations sur les interfaces réseau (adresse IP, MAC, etc.)
