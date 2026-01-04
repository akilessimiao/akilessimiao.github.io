// Toggle menu mobile
document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('mainNav').classList.toggle('active');
});

// Formulário → WhatsApp
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let msg = `Olá! Meu nome é ${nome}.`;
  if (whatsapp) msg += ` Meu WhatsApp é: ${whatsapp}.`;
  if (mensagem) msg += ` Mensagem: ${mensagem}`;

  // Substitua SEUNUMERO pelo número real no formato: 5584999999999
  const url = `https://wa.me/5584987192094?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
});
