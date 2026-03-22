function calculate() {
    const { DateTime } = luxon;
    const input = document.getElementById('birthdate').value;
    const errorDiv = document.getElementById('error-msg');
    const resultDiv = document.getElementById('result');

    errorDiv.innerText = "";
    resultDiv.style.display = 'none';

    if (!input) {
        errorDiv.innerText = "Please select a date";
        return;
    }

    const now = DateTime.now();
    const birthday = DateTime.fromISO(input);
    const diff = now.diff(birthday, ['years', 'months', 'days']).toObject();

    document.getElementById('res-years').innerText = Math.floor(diff.years);
    document.getElementById('res-months').innerText = Math.floor(diff.months);
    document.getElementById('res-days').innerText = Math.floor(diff.days);

    resultDiv.style.display = "grid";
}