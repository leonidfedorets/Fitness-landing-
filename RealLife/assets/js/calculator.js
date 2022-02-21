 // Calculator

 const result = document.querySelector('.calculating__result span');
 let sex = 'female',
     height, weight, age,rate
     ratio = 70;

 function calcTotal() {
     if (!sex || !height || !weight || !age || !ratio || !rate) {
         result.textContent = '____'; // Можете придумать что угодно
         return;
     }
     if (sex === 'female') {
         result.textContent = Math.round((height*ratio*age)*rate-(3.3*weight*24));
     } else {
         result.textContent = Math.round(((height*ratio*age)*rate*30.4)-(3.3*weight*24*30.4));
     }
 }

 calcTotal();

 function getStaticInformation(parentSelector, activeClass) {
     const elements = document.querySelectorAll(`${parentSelector} div`);

     elements.forEach(elem => {
         elem.addEventListener('click', (e) => {
             if (e.target.getAttribute('data-ratio')) {
                 ratio = +e.target.getAttribute('data-ratio');
             } else {
                 sex = e.target.getAttribute('id');
             }
 
             elements.forEach(elem => {
                 elem.classList.remove(activeClass);
             });
 
             e.target.classList.add(activeClass);
 
             calcTotal();
         });
     });
 }

 getStaticInformation('#gender', 'calculating__choose-item_active');
 getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

 function getDynamicInformation(selector) {
     const input = document.querySelector(selector);

     input.addEventListener('input', () => {
        if (input.value.match(/\D/g)) {
            input.style.border = "1px solid red";
        } else {
            input.style.border = 'none';
        }
         switch(input.getAttribute('id')) {
             case "height":
                 height = +input.value;
                 break;
             case "weight":
                 weight = +input.value;
                 break;
             case "age":
                 age = +input.value;
                 break;
                 
                 case "rate":
                 rate = +input.value;
                 break;
         }

         calcTotal();
     });
 }

 getDynamicInformation('#height');
 getDynamicInformation('#weight');
 getDynamicInformation('#age');
 getDynamicInformation('#rate');