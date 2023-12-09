//IMPORTE DE FUNCIONES

const typed = new Typed('.typed', {
   strings: ['ALFREDO ARDILA'],
   typeSpeed: 75,
   cursorChar: '|',
   loop: true
});

var indice = 0;
// Función para cambiar la imagen cada 5 segundos
function cambiarImagen() {
  // Obtén el elemento con el ID "perfil"
  const perfil = document.getElementById('imagen-perfil');
  indice++;
  if(indice > 3){
    indice = 0;
  }
  // Cambia la imagen usando el índice actual
  perfil.src = `./img/${indice}.jpg`;
}

// Llama a la función cada 5 segundos
setInterval(cambiarImagen, 5000);

//BOTONES CAPTURADOS

const investigaciones = document.getElementById('investigaciones');
const publicaciones = document.getElementById('publicaciones');
const importancia = document.getElementById('importancia');
const referencias = document.getElementById('referencias');
const historia = document.getElementById('historia');

//TEXTOS INFORMATIVOS
const investigacionesTexto = 'APORTES TEORICOS E INVESTIGATIVOS:<br><br>1.	Neuropsicología Cultural: Exploró cómo los factores culturales afectan la expresión y evaluación de las funciones cognitivas. Su trabajo destaca la importancia de considerar la diversidad cultural al evaluar las funciones cerebrales. <br><br>2.	Lateralización Cerebral: Investigó y escribió sobre la lateralización cerebral, es decir, cómo distintas funciones cognitivas están distribuidas en los hemisferios cerebrales. Sus estudios han contribuido a la comprensión de las diferencias entre los hemisferios y su impacto en las funciones mentales.<br><br>3.	Afasias y Trastornos del Lenguaje: Dedicó parte de su carrera al estudio de afasias y otros trastornos del lenguaje, investigando las bases neurológicas de estos problemas y contribuyendo al conocimiento de cómo el daño cerebral puede afectar la comunicación verbal.<br><br>4.	Evaluación Neuropsicológica: Trabajó en el desarrollo de herramientas y métodos para la evaluación neuropsicológica, buscando mejorar la precisión en la identificación de alteraciones cognitivas asociadas con enfermedades neurológicas.<br>';

const publicacionesTexto = 'PUBLICACIONES MAS RELEVANTES: <br><br>•	Ardila A. (2020). Gerstmann Syndrome. Current neurology and neuroscience reports, 20(11), 48. https://doi.org/10.1007/s11910-020-01069-9<br><br>•	Ardila, A., & Ostrosky, F. (2022). What do neuropsychological tests assess?. Applied neuropsychology. Adult, 29(1), 1–9. https://doi.org/10.1080/23279095.2019.1699099<br><br>•	Gonzalez, R., Rojas, M., Rosselli, M., & Ardila, A. (2021). Acalculia in Aphasia. Archives of clinical neuropsychology : the official journal of the National Academy of Neuropsychologists, 36(4), 455–464. https://doi.org/10.1093/arclin/acaa072<br><br>•	Ardila, A., & Rosselli, M. (2019). Cognitive Rehabilitation of Acquired Calculation Disturbances. Behavioural neurology, 2019, 3151092. https://doi.org/10.1155/2019/3151092<br><br>•	Lahiri, D., & Ardila, A. (2020). COVID-19 Pandemic: A Neurological Perspective. Cureus, 12(4), e7889. https://doi.org/10.7759/cureus.7889<br><br>•	Ardila, A., & Rosselli, M. (2002). Acalculia and dyscalculia. Neuropsychology review, 12(4), 179–231. https://doi.org/10.1023/a:1021343508573<br><br>•	Ardila A. (2019). Psychiatric disorders associated with acquired brain pathology. Applied neuropsychology. Adult, 26(6), 591–597. https://doi.org/10.1080/23279095.2018.1463224<br><br>';

const importanciaTexto = 'Alfredo Ardila se destacó como una figura en el ámbito de la neuropsicología, habiendo desempeñado diversos roles que han contribuido significativamente al campo. A lo largo de su carrera, Ardila demostró ser una pieza fundamental en la promoción del conocimiento y la comprensión de la relación entre el cerebro y la conducta. Aquí hay algunas razones por las cuales se considera una figura importante: <br><br>1.	Profesor Excepcional: Como profesor, compartió su vasta experiencia y conocimientos con generaciones de estudiantes. Su dedicación a la educación ha influido en el desarrollo de profesionales en el campo de la neuropsicología, contribuyendo así al crecimiento y la evolución de la disciplina.<br><br>2.	Investigador Innovador: Ardila llevó a cabo investigaciones pioneras en diversos aspectos de la neuropsicología. Sus contribuciones abarcaron desde el estudio de la lateralización cerebral hasta la neuropsicología cultural, explorando la intersección entre la biología y la cultura en la expresión de las funciones cognitivas.<br><br>3.	Desarrollo de la Neuropsicología Cultural: Su papel como defensor de la neuropsicología cultural llevó a una mayor comprensión de cómo los factores culturales influyen en la cognición y la evaluación neuropsicológica. Este enfoque único ha enriquecido el campo al considerar la diversidad cultural en la comprensión de las funciones cerebrales.<br><br>En conjunto, la labor de Alfredo Ardila impactó significativamente en la forma en que comprendemos la relación entre el cerebro y la conducta. Su legado como profesor, investigador y defensor de la neuropsicología cultural deja una marca duradera en la disciplina, inspirando a otros a seguir explorando los misterios de la mente humana.';
const referenciasTexto = '<a href="https://aalfredoardila.wordpress.com/" target="_blank">https://aalfredoardila.wordpress.com/</a><br><br><a href="https://es.wikipedia.org/wiki/Alfredo_Ardila" target="_blank">https://es.wikipedia.org/wiki/Alfredo_Ardila</a><br><br><a href="https://scholar.google.com.ar/citations?user=zD2W1D0AAAAJ&hl=en&oi=ao" target="_blank">https://scholar.google.com.ar/citations?user=zD2W1D0AAAAJ&hl=en&oi=ao</a><br><br><a href="https://www.cnps.cl/index.php/cnps/article/view/439/509" target="_blank">https://www.cnps.cl/index.php/cnps/article/view/439/509</a><br><br><a href="https://revistaschilenas.uchile.cl/handle/2250/166934" target="_blank">https://revistaschilenas.uchile.cl/handle/2250/166934</a>';

const historiaFamiliar = 'Fue el tercer hijo de cinco hermanos, de una familia conservadora. <br>Se casó con la reconocida psicóloga Mónica Rosselli Cock, con quien realizó aportes muy importantes a la neuropsicología. Tuvo cuatro hijos: Sara Elena, Silvia, Adriana y Felipe. Era hermano del famoso psicólogo Rubén Ardila y del prestigioso endocrinólogo Enrique Ardila. <br> <br>Se formó inicialmente como psicólogo en la Universidad Nacional de Colombia y obtuvo un doctorado en neuropsicología en la Universidad Estatal de Moscú donde trabajó con Alexander R. Luria.';

//FUNCION CAMBIAR TEXTO

function cambiarTexto (texto){
  let pizarra = document.getElementById('aportes');
  pizarra.innerHTML = texto;
}


//AÑADIENDO LAS FUNCIONES
investigaciones.addEventListener('click', function() {
  cambiarTexto(investigacionesTexto)});

publicaciones.addEventListener('click', function() {
    cambiarTexto(publicacionesTexto)});

importancia.addEventListener('click', function() {
      cambiarTexto(importanciaTexto)});

referencias.addEventListener('click', function() {
  cambiarTexto(referenciasTexto)});

historia.addEventListener('click', function() {
  cambiarTexto(historiaFamiliar)});
