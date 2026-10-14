const form = document.querySelector('#contact-form');
const status = document.querySelector('#status');
const button = form.querySelector('button');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  button.disabled = true;
  status.textContent = 'Guardando…';
  status.className = '';
  try {
    const response = await fetch('/api/contactos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'No se pudieron guardar los datos.');
    status.textContent = result.message;
    status.className = 'success';
    form.reset();
  } catch (error) {
    status.textContent = error.message || 'Revisá la conexión e intentá de nuevo.';
    status.className = 'error';
  } finally {
    button.disabled = false;
  }
});
