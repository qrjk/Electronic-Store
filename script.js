// Volt Store - simple cart-less buy demo
function buy(name, price){
  alert('Thank you! You selected: ' + name + '\nPrice: $' + price + '\n\nWe will contact you to complete the order.');
}

function sendMessage(e){
  e.preventDefault();
  const f = e.target;
  alert('Thanks ' + f.name.value + '! Your message has been sent.');
  f.reset();
  return false;
}

// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
});
