    // Configuraciones
const TELEFONO = "528118939426";

// Escuchamos los clics en todo el documento
document.addEventListener('click', function (event) {
    // Si el elemento clickeado tiene la clase 'btn-cotizar'
    if (event.target.classList.contains('btn-cotizar')) {

        const nombrePastel = event.target.getAttribute('data-nombre');
        const mensaje = `Hola! Me interesa una cotización para el ${nombrePastel}`;

        // Creamos la URL final
        const url = `https://wa.me/${TELEFONO}?text=${encodeURIComponent(mensaje)}`;

        // Abrimos en una pestaña nueva
        window.open(url, '_blank');
    }
});

    // descanso visual
     document.addEventListener("DOMContentLoaded", () => {
    const toggleModo = document.getElementById("modo-toggle");

if (toggleModo) {

  // Estado inicial
  if (localStorage.getItem("modo") === "descanso") {
    document.body.classList.add("descanso");
    toggleModo.textContent = "☀️";
  } else {
    toggleModo.textContent = "🌙";
  }

  toggleModo.addEventListener("click", () => {

    document.body.classList.toggle("descanso");

    if (document.body.classList.contains("descanso")) {
      localStorage.setItem("modo", "descanso");
      toggleModo.textContent = "☀️";
    } else {
      localStorage.removeItem("modo");
      toggleModo.textContent = "🌙";
    }

  });
}

  // Lightbox
  document.querySelectorAll('.postre img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightbox-img').src = img.src;
      document.getElementById('lightbox').style.display = 'flex';
    });
  });
  document.getElementById('lightbox')?.addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
  });

  // Toggle descripción
  document.querySelectorAll('.toggle-desc').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.postre').classList.toggle('abierto');
    });
  });

  // Likes
  document.querySelectorAll('.postre').forEach((postre, i) => {
    const btn = postre.querySelector('.like');
    if (!btn) return;

    if (localStorage.getItem('like_' + i) === '1') {
      btn.classList.add('activo');
      btn.textContent = '❤️';
    }

    btn.addEventListener('click', () => {
      btn.classList.toggle('activo');
      const activo = btn.classList.contains('activo');
      btn.textContent = activo ? '❤️' : '🤍';
      localStorage.setItem('like_' + i, activo ? '1' : '0');
    });
  });

  // Bienvenida
const bienvenida = document.getElementById("bienvenida");
const btnAbrir = document.getElementById("btn-abrir");

if (bienvenida && btnAbrir) {
document.body.style.overflow = "hidden";

btnAbrir.addEventListener("click", () => {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 120,
      spread: 70,
      colors: ['#ffb703', '#e11d48', '#ffd6e7', '#c97a2b'],
      origin: { y: 0.2 }
    });
  }

  bienvenida.classList.add("cerrando");

  setTimeout(() => {
    bienvenida.style.display = "none";
    document.body.style.overflow = "auto";

    const contenedor = document.querySelector('.grid-postres');
    contenedor.classList.remove('oculto-inicial');

    document.querySelector('.filtro[data-filtro="todos"]')?.click();

    const cards = document.querySelectorAll(".postre");

   
// Reinicia estado
cards.forEach(card => {
  card.classList.remove("mostrar");
});

// Cascada más notoria
cards.forEach((card, i) => {
  setTimeout(() => {
    card.classList.add("mostrar");
  }, i * 200);
});
   }, 700);
    });
  }

  // Filtros + contador
  const filtros = document.querySelectorAll(".filtro");
  const postres = document.querySelectorAll(".postre");
  const contadorWrap = document.getElementById("contador-resultados");
  const contadorNum = document.getElementById("contador-num");

  filtros.forEach(btn => {
    btn.addEventListener("click", () => {
    filtros.forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");

      const filtro = btn.dataset.filtro;
      let visibles = 0;

      let orden = 0;

postres.forEach(postre => {
  const categoria = postre.dataset.category;

  if (filtro === "todos" || categoria === filtro) {
    postre.style.display = "block";
    postre.classList.remove("oculto");
    postre.classList.remove("mostrar");

    // cascada real solo para visibles
    setTimeout(() => {
      postre.classList.add("mostrar");
    }, orden * 280);

    orden++;
    visibles++;
  } else {
    postre.classList.remove("mostrar");
    postre.classList.add("oculto");
    setTimeout(() => postre.style.display = "none", 300);
  }
});

      if (contadorNum && contadorWrap) {
        contadorNum.textContent = visibles;
        contadorWrap.classList.remove("animar");
        void contadorWrap.offsetWidth;
        contadorWrap.classList.add("animar");
      }
    });
  });

});

// ✅ FIX centrado bienvenida en Android
window.addEventListener("load", () => {
  const bienvenida = document.getElementById("bienvenida");
  if (!bienvenida) return;

  bienvenida.style.transform = "translateZ(0)";
});

         window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const bienvenida = document.getElementById("bienvenida");

  // Si la bienvenida está visible, no activar blur
  if (bienvenida && window.getComputedStyle(bienvenida).display !== "none") {
    header.classList.remove("scrolled");
    return;
  }

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// banner
document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("promo-text");
  const closeBtn = document.getElementById("close-btn");
  const banner = document.getElementById("promo-banner");

  const mensajes = [
    "Producción semanal limitada. El menú varía cada semana según disponibilidad.",
    "Tu pastel merece cariño y dedicación. Agenda con anticipación.",
    "Disponibilidad limitada cada semana. Asegura tu pedido con tiempo."
  ];

  let index = 0;

  // mostrar primer mensaje
  text.textContent = mensajes[0];

  function cambiarMensaje() {
    text.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % mensajes.length;
      text.textContent = mensajes[index];
      text.style.opacity = 1;
    }, 300);
  }

  // cambiar cada 7 segundos
  setInterval(cambiarMensaje, 7000);

  // cerrar banner
  closeBtn.addEventListener("click", () => {
    banner.style.display = "none";
  });
});

   function toggleHistoria() {
  const seccion = document.getElementById('seccion-historia');
  if (seccion) {
    // Esto añade o quita la clase que hace que el CSS se active
    seccion.classList.toggle('historia-visible');
  }
}

// buscador
document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('input-busqueda');
    const tarjetas = document.querySelectorAll('.postre');
    const contadorNum = document.getElementById('contador-num');
    const contenedorMensaje = document.getElementById('mensaje-ia');

    if (!buscador) return; // Seguridad

    buscador.addEventListener('input', () => {
        const termino = buscador.value.toLowerCase().trim();
        let visibles = 0;

        tarjetas.forEach(tarjeta => {
            const nombre = tarjeta.querySelector('h3').textContent.toLowerCase();
            const tags = tarjeta.getAttribute('data-tags') || "";
            
            // Unimos nombre y tags para buscar en ambos al mismo tiempo
            const contenidoCompleto = nombre + " " + tags.toLowerCase();

            if (contenidoCompleto.includes(termino)) {
                tarjeta.style.display = "flex";
                visibles++;
            } else {
                tarjeta.style.display = "none";
            }
        });

        if (contadorNum) contadorNum.textContent = visibles;

        // Manejo del mensaje de "No encontrado"
        if (visibles === 0 && termino.length > 0) {
            contenedorMensaje.textContent = "¡Uy! No encontré ese postre, intenta con otra palabra.";
        } else {
            contenedorMensaje.textContent = "";
        }
    });
});
