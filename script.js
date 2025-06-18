// Puedes agregar lógica para scroll, popups, sliders, etc.
console.log("Landing page de Xquisito cargada");

// Alternar giro del logo derecha/izquierda cada 4s
window.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  let left = false;
  setInterval(() => {
    if (!logo) return;
    left = !left;
    if (left) {
      logo.classList.add('spin-left');
    } else {
      logo.classList.remove('spin-left');
    }
  }, 4000);

  // Modal demo
  const openModal = document.getElementById('open-modal');
  const modal = document.getElementById('modal-demo');
  const closeModal = document.querySelector('.close-modal');
  const form = document.getElementById('demo-form');

  if (openModal && modal && closeModal && form) {
    openModal.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add('active');
    });
    closeModal.addEventListener('click', function() {
      modal.classList.remove('active');
    });
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') modal.classList.remove('active');
    });
    modal.addEventListener('click', function(e) {
      if (e.target === modal) modal.classList.remove('active');
    });
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;
      const subject = encodeURIComponent('Solicitud de demo Xquisito');
      const body = encodeURIComponent(
        `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
      );
      window.location.href = `mailto:adriansalazar@xquisito.ai?subject=${subject}&body=${body}`;
      modal.classList.remove('active');
    });
  }
});

// Animación de brasas/llamas color del logo (#23474B)
const canvas = document.getElementById('embers');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);

  // Configuración de brasas
  const emberCount = 60;
  const embers = [];
  const emberColor = 'rgba(35, 71, 75, 0.7)'; // #23474B con alpha
  for (let i = 0; i < emberCount; i++) {
    embers.push({
      x: Math.random() * width,
      y: height - Math.random() * 100,
      radius: Math.random() * 12 + 8, // Más grandes: entre 8 y 20 px
      speed: Math.random() * 0.7 + 0.3,
      alpha: Math.random() * 0.5 + 0.5,
      color: emberColor,
      drift: (Math.random() - 0.5) * 0.5
    });
  }

  function drawEmbers() {
    ctx.clearRect(0, 0, width, height);
    for (let ember of embers) {
      ctx.beginPath();
      ctx.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
      ctx.fillStyle = ember.color;
      ctx.globalAlpha = ember.alpha;
      ctx.shadowColor = ember.color;
      ctx.shadowBlur = 32;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      // Movimiento
      ember.y -= ember.speed;
      ember.x += ember.drift;
      ember.alpha -= 0.001 + Math.random() * 0.002;
      if (ember.y < height * 0.3 || ember.alpha <= 0) {
        // Reiniciar brasa
        ember.x = Math.random() * width;
        ember.y = height - Math.random() * 40;
        ember.radius = Math.random() * 12 + 8; // Más grandes
        ember.speed = Math.random() * 0.7 + 0.3;
        ember.alpha = Math.random() * 0.5 + 0.5;
        ember.color = emberColor;
        ember.drift = (Math.random() - 0.5) * 0.5;
      }
    }
    requestAnimationFrame(drawEmbers);
  }
  drawEmbers();
}
