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
