const billValue = document.getElementById('billvalue');
const resetButton = document.getElementById('reset');
const tipButtonCustom = document.getElementById('tipcustom')
const numberButtons = document.querySelectorAll('[data-number]')



resetButton.addEventListener('click', function() {
    location.reload();
})