 // Tabs
    
 let tabs = document.querySelectorAll('.nav-item'),
 tabsParent = document.querySelector('.nav-header'),
 tabsContent = document.querySelectorAll('.tabcontent');

 function hideTabContent() {
        
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

        
    tabs.forEach(item => {
        item.classList.remove('current');
    });
}

function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
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