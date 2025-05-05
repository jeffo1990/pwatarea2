const colores = [
  'lightblue', 'lightgreen', 'lightcoral',
  'khaki', 'plum', 'orange',
  'turquoise', 'tomato'
];
console.log('Colores disponibles:', colores);

function cambiarColor() {
  const caja = document.getElementById('caja');
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  console.log('Color seleccionado:', colorAleatorio);
  caja.style.backgroundColor = colorAleatorio;
  console.log('Color cambiado con éxito');
}
