    function many(state){
        document.getElementById('windows-many').style.display = state;	
        document.getElementById('many-gray').style.display = state; 		
	};


    function shop(state){
        document.getElementById('windows-shop').style.display = state;	
        document.getElementById('shop-gray').style.display = state; 		
	};

    function lend(state) {
        document.getElementById('windows-lend').style.display = state;	
        document.getElementById('lend-gray').style.display = state; 		
	};




    $(document).ready(function() {
        $('.menu__nawbar').click(function() {
            $('.menu__nawbar').toggleClass('open-menu');
        });
    });
    

    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('element-show');
          }
        });
      }
      
      let options = {
        threshold: [0.5] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll('.block-free__list li, .block-free__text, .text__link, ._title, .services__block, h3, .foot, .number-stages__nomber, .number-stages__title, .number-stages__body');
      
      for (let elm of elements) {
        observer.observe(elm);
      }
