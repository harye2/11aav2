const STUDENTS = [

    "Gisell Agresot", "Maria Arrieta", "Eilent Avila", "Leidy Borja",
    
    "Sarah Castellano", "Ricardo Ceballos", "Ramiro Diaz", "Valeria Espinosa",
    
    "Salome Esquivel", "Ximena Esquivel", "Maira Esquivel", "Daily Florez",
    
    "Sharol Garcia", "Walter Gomez", "Sharit Gonzalez", "Samuel Guerra",
    
    "Sharith Gutierrez", "Taliana Heredia", "Guadalupe Hernandez", "Maria Hoyos",
    
    "Belen Moncada", "Samuel Orozco", "Salome Pacheco", "Dayana Piñeres",
    
    "Anaylin Prisco", "Maria Quintero", "Sara Revilla", "Taliana Rodriguez",
    
    "Andrea Rojas", "Sara Romero", "Johanna Saldarriaga", "Linda Salgado",
    
    "Valery Samudio", "Daniseth Sandoval", "Salome Soto", "Danna Urrutia",
    
    "Yeraldin Usuga", "Sofia Vasquez", "Valery Vasquez", "Brenda Villa",
    
    "Valerie Villareal"

];

function populateStudentsDropdown() {
    const select = document.getElementById('player-name-input');
    if (!select) return;

    // Limpiar todas las opciones existentes excepto la primera ("Select your name...")
    while (select.options.length > 1) {
        select.remove(1);
    }

    // Agregar estudiantes de la lista plana
    STUDENTS.forEach(studentName => {
        const option = document.createElement('option');
        option.value = studentName;
        option.textContent = studentName;
        select.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', populateStudentsDropdown);
