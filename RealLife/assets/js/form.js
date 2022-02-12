window.addEventListener('DOMContentLoaded', function() {

 // Forms

 const forms = document.querySelectorAll('form');
 const message = {
     loading: 'assets/css/images/spinner.svg',
     success: 'Спасибо! Скоро мы с вами свяжемся',
     failure: 'Что-то пошло не так...'
 };

 forms.forEach(item => {
     postData(item);
 });

 function postData(form) {
     form.addEventListener('submit', (e) => {
         e.preventDefault();

         let statusMessage = document.createElement('img');
         statusMessage.src = message.loading;
         statusMessage.style.cssText = `
             display: block;
             margin: 0 auto;
         `;
         form.insertAdjacentElement('afterend', statusMessage);
     
         const formData = new FormData(form);

         const object = {};
         formData.forEach(function(value, key){
             object[key] = value;
         });

         fetch('server.php', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(object)
         }).then(data => {
             console.log(data);
             showThanksModal(message.success);
             statusMessage.remove();
         }).catch(() => {
             showThanksModal(message.failure);
         }).finally(() => {
             form.reset();
         });
     });
 }

 function showThanksModal(message) {
     const prevModalDialog = document.querySelector('.modal__dialog');

     prevModalDialog.classList.add('hide');
     openModal();

     const thanksModal = document.createElement('div');
     thanksModal.classList.add('modal__dialog');
     thanksModal.innerHTML = `
         <div class="modal__content">
             <div class="modal__close" data-close>×</div>
             <div class="modal__title">${message}</div>
         </div>
     `;
     document.querySelector('.modal').append(thanksModal);
     setTimeout(() => {
         thanksModal.remove();
         prevModalDialog.classList.add('show');
         prevModalDialog.classList.remove('hide');
         closeModal();
     }, 4000);
 }
});