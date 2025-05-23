let playlist = ["Funk","hip-hop","pop"];

console.log
("Antes do Shift");
console.table(playlist);

// Removendo o primeiro estilo
let estiloRemovido = playlist.shift();

console.log("Depois do shift");
console.log(playlist);

console.log
("Estilo Removido:", estiloRemovido)