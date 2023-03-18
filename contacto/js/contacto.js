$(document).ready(function () {
  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    const destinatario = 'lety.mtnez02@gmail.com';
    const subject = document.querySelector('#asunto').value;
    const message = document.querySelector('#mensaje').value;
    window.location.href = `mailto:${destinatario}?subject=${subject}&body=${message}`;
  });
});

