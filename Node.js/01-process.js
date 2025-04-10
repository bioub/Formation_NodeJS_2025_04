import process from 'node:process';

console.log(process.arch); // Architecture de la machine (x64, arm64, etc.)
console.log(process.platform); // Plateforme (win32, linux, darwin, etc.)

console.log(process.cwd()); // Répertoire dans lequel se trouve le terminal (Current Working Directory)
process.chdir('../'); // Change le répertoire de travail
console.log(process.cwd()); // Répertoire parent du terminal

console.log(process.env.NODE_ENV); // Variable d'environnement NODE_ENV (development, production, etc.)
console.log(process.env); // Variables d'environnement (PATH, HOME, USER, etc.)

// Argv se manipule en général avec une blibliothèque comme yargs, commander, minimist
console.log(process.argv); // Arguments passés au script (argv[0] = node, argv[1] = script.js, argv[2] = argument)
// Exemple : node 01-process.js arg1 arg2


// Stream (clavier, terminal, errors)
// process.stdin // Stream d'entrée (clavier)
// process.stdout // Stream de sortie (terminal)
// process.stderr // Stream d'erreur (terminal)

console.log(process.version); // Node.js version

process.exit(0); // Quitte le script avec le code de sortie 0 (succès)
// process.exit(1); // Quitte le script avec le code de sortie 1 (erreur)
