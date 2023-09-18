const validateform = () => {

    const checkemail = () => {

        let field = document.querySelector('.main__form__email');
        let email = document.querySelector('.main__form__email').value;
        let regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let message = document.querySelector('.main__form__message');

        if (email.match(regEx)) {
            
            field.value = '';

            message.textContent = 'Thank you!';
            message.classList.add('main__form__message--success');

            setTimeout(() => {
                message.classList.remove('main__form__message--success');
            }, 2000);

            return true;
        }

        if (!email) {
            
            message.textContent = 'Oops! Please add your email';
            message.classList.add('main__form__message--error');

            setTimeout(() => {
                message.classList.remove('main__form__message--error');
            }, 2500);

            return false;
        }

        message.textContent = 'Oops! Please check your email';
        message.classList.add('main__form__message--error');

        setTimeout(() => {
            message.classList.remove('main__form__message--error');
        }, 2500);

        return false;
    }

    let main__form__button = document.querySelector('.main__form__button');

    main__form__button.addEventListener('click', function (event) {
        event.preventDefault();
        checkemail();
    })

}

validateform();

