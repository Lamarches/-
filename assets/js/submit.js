
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameLabel = document.getElementById('label-name');
    const emailLabel = document.getElementById('label-email');
    const submitBtn = document.getElementById('submit');

    nameInput.addEventListener('input', validateInput);
    emailInput.addEventListener('input', validateInput);

    function validateInput() {
        if (!/^[а-яА-Яa-zA-Z\s]*$/.test(nameInput.value)) {
            nameLabel.classList.remove('hidden');
            nameInput.classList.add('input-error');
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#999';
            submitBtn.style.color = '#505050';
        }
        else if(!/^\S+@\S+\.\S+$/.test(emailInput.value)){
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#999';
            submitBtn.style.color = '#505050';
            emailInput.classList.add('input-error');
            emailLabel.classList.remove('hidden');
        }
        else if(!/^\S+@\S+\.\S+$/.test(emailInput.value) || !/^[а-яА-Яa-zA-Z\s]*$/.test(nameInput.value)){
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = '#999';
            submitBtn.style.color = '#505050';
            nameLabel.classList.remove('hidden');
            nameInput.classList.add('input-error');
            emailInput.classList.add('input-error');
            emailLabel.classList.remove('hidden');
        }
        else {
            nameLabel.classList.add('hidden');
            emailLabel.classList.add('hidden');
            nameInput.classList.remove('input-error');
            emailInput.classList.remove('input-error');
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = 'rgba(186, 226, 73, 1)';
            submitBtn.style.color = '#0B1919';
        }
    }

    const inputFields = document.querySelectorAll('.input');

    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            input.style.backgroundColor = 'rgba(137, 157, 157, 1)';
            input.style.color = 'black';
            input.style.fontWeight = 'bold';
        });

        input.addEventListener('blur', function() {
            input.style.backgroundColor = '';
            input.style.color = '';
            input.style.fontWeight = '';
            validateInput();
        });
    });

    const form = document.querySelector('.form');
    form.addEventListener('submit', function(event) {
        if (!/^[а-яА-Яa-zA-Z\s]*$/.test(nameInput.value) || !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            event.preventDefault();
        }
    });
 });