const form = document.getElementById('contact-form');
const responseMsg = document.getElementById('response');

// ✅ Make sure this is your actual Google Apps Script web app URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzbhEQtDNv69IQ5mfNZfmGgF-wUd_Hf0kmfdWwmx4v8gw-Xqb31-lKnXtfJucc7qxH6/exec';

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(res => {
    responseMsg.textContent = 'Form submitted successfully!';
    form.reset();
  })
  .catch(err => {
    console.error("Fetch Error:", err);
    responseMsg.textContent = 'Something went wrong.';
  });
});
