 // Tabs
    
 let tabs = document.querySelectorAll('.nav-item'),
 tabsParent = document.querySelector('.nav-header');

 function hideTabContent() {
        
    tabs.forEach(item => {
        item.classList.remove('current');
    });
}

function showTabContent(i = 0) {
    
    tabs[i].classList.add('current');
}

hideTabContent();
showTabContent();
tabsParent.addEventListener('click', function(event) {
 const target = event.target;
 if(target && target.classList.contains('nav-item')) {
     tabs.forEach((item, i) => {
         if (target == item) {
             hideTabContent();
             showTabContent(i);
         }
     });
 }
});