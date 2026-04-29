// ============================================
// FUNCIONALIDAD 1: BOTÓN "IR ARRIBA"
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    
    const btnTop = document.getElementById("btnTop");

    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    // Al hacer clic, subir suavemente
    btnTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ============================================
    // FUNCIONALIDAD 2: MODO OSCURO / CLARO
    // ============================================

    const btnTema = document.getElementById("btnTema");
    const body = document.body;

    // Verificar si hay tema guardado
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "oscuro") {
        body.classList.add("modo-oscuro");
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Oscuro";
    }

    // Cambiar tema al hacer clic
    btnTema.addEventListener("click", () => {
        body.classList.toggle("modo-oscuro");

        if (body.classList.contains("modo-oscuro")) {
            localStorage.setItem("tema", "oscuro");
            btnTema.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("tema", "claro");
            btnTema.textContent = "🌙 Modo Oscuro";
        }
    });

    // ============================================
    // FUNCIONALIDAD 3: RELOJ EN TIEMPO REAL
    // ============================================

    // Crear el contenedor del reloj si no existe
    if (!document.getElementById("reloj-tiempo-real")) {
        const relojHTML = `
            <div id="reloj-tiempo-real" style="
                position: fixed;
                bottom: 2rem;
                left: 2rem;
                background-color: var(--secundario);
                color: var(--blanco);
                padding: 1rem 1.5rem;
                border-radius: 1rem;
                font-size: 1.4rem;
                font-weight: bold;
                font-family: monospace;
                z-index: 99;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            ">
                <span id="fecha"></span><br>
                <span id="hora"></span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', relojHTML);
    }

    // Función para actualizar fecha y hora
    function actualizarReloj() {
        const ahora = new Date();
        
        const opcionesFecha = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        
        const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
        const fechaFormateada = fecha.charAt(0).toUpperCase() + fecha.slice(1);
        
        const hora = ahora.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const fechaElement = document.getElementById("fecha");
        const horaElement = document.getElementById("hora");
        
        if (fechaElement) fechaElement.textContent = fechaFormateada;
        if (horaElement) horaElement.textContent = hora;
    }
    
    actualizarReloj();
    setInterval(actualizarReloj, 1000);

});