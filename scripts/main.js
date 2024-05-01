// Tracer program to fetch IP-related information
// Author: Faisal Shahzad
// GitHub: https://github.com/FHacKKer

console.clear(); // Clear the console for a cleaner output

const button = document.querySelector('#trace-button');

button.addEventListener('click', () => {
    button.innerText = 'Tracing...';

    const ipField = document.getElementById('ip-input');
    const ipInput = ipField.value.trim();

    if (ipInput === '') {
        button.innerText = 'Trace IP';
        return;
    }

    const apiUrl = `https://ipapi.co/${ipInput}/json/`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            document.getElementById('ip-table').classList.remove('hidden');

            document.getElementById('ip-field').innerText = data.ip;
            document.getElementById('city-field').innerText = data.city;
            document.getElementById('region-field').innerText = data.region;
            document.getElementById('region-code-field').innerText = data.region_code;
            document.getElementById('country-field').innerText = `${data.country_name} (${data.country})`;
            document.getElementById('country-code-field').innerText = data.country_code;
            document.getElementById('country-capital-field').innerText = data.country_capital;
            document.getElementById('postal-field').innerText = data.postal;
            document.getElementById('coords-field').innerText = `${data.latitude}, ${data.longitude}`;
            document.getElementById('timezone-field').innerText = data.timezone;
            document.getElementById('utc-offset-field').innerText = data.utc_offset;
            document.getElementById('org-field').innerText = data.org;
            document.getElementById('asn-field').innerText = data.asn;
            document.getElementById('currency-field').innerText = data.currency;
            document.getElementById('currency-name-field').innerText = data.currency_name;
            document.getElementById('country-calling-code-field').innerText = data.country_calling_code;
            document.getElementById('languages-field').innerText = data.languages;
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {
            button.innerText = 'Trace IP';
        });
});
