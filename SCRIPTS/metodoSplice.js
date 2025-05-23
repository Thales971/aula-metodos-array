let playlist = ["Funk","hip-hop","pop","Rock","Jazz",];

console.log("Antes do splice:");
console.table(playlist);

// Removendo 2 elementos a partir de índice 2

let elementosRemovidos = playlist.splice(2, 2);

console.log("Depois do splice");
console.table(playlist);

console.log("Elementos removidos:",elementosRemovidos);




