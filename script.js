document.getElementById('searchButton').addEventListener('click', function() {
  const countryCode = document.getElementById('countryCode').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  if (phoneNumber === "") {
    alert("Please enter a phone number.");
    return;
  }

  const fullNumber = `+${countryCode}${phoneNumber}`;
  const whatsappLink = `https://wa.me/${countryCode}${phoneNumber}`;

  // Display the result
  const resultDiv = document.getElementById('result');
  const linkElement = document.getElementById('whatsappLink');
  linkElement.href = whatsappLink;
  linkElement.textContent = fullNumber;
  resultDiv.style.display = 'block';
});
