document.querySelectorAll('.edit-icon').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const row = icon.closest('tr');
        const fields = Array.from(row.children).map(cell => cell.textContent.trim());

        // Populate the form with row data
        document.getElementById('sno').value = fields[0];
        document.getElementById('username').value = fields[1];
        document.getElementById('hallticket').value = fields[2];
        document.getElementById('email').value = fields[3];
        document.getElementById('password').value = fields[4];
        document.getElementById('dept').value = fields[5];
        document.getElementById('innovations').value = fields[6];
        document.getElementById('grants').value = fields[7];
        document.getElementById('awards').value = fields[8];
        document.getElementById('startups').value = fields[9];

        // Show the popup
        document.getElementById('edit-form-popup').classList.remove('hidden');
    });
});

document.getElementById('edit-form-popup').addEventListener('click', event => {
    if (event.target.id === 'edit-form-popup') {
        document.getElementById('edit-form-popup').classList.add('hidden');
    }
});
