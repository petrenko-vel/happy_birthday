function show(state)
	{
	document.getElementById('window').style.display = state;	
	document.getElementById('gray').style.display = state; 		
	}

    $(document).ready(function() {
        $('.menu__nawbar').click(function() {
            $('.menu__nawbar').toggleClass('open-menu');
        });
    })

//    "use strict"

//    window.onload = function () {
//     const parallax = document.querySelector('.paralax');

//     if (parallax) {
//         const content = document.querySelector('main');
//         const clouds = document.querySelector('.images-paralax__clouds');
//         const mountain = document.querySelector('.images-paralax__mountain');
        
//         const forClouds = 40;
//         const forMontains = 20;

//         const speed = 0.05;

//         let positionX = 0, positionY = 0;
//         let coordXprocent = 0, coordYprocent = 0;

//         function setMouseParallaxStyle() {
//             const distX = coordXprocent - positionX;
//             const distY = coordYprocent - positionY;

//             positionX = positionX + (distX * speed);
//             positionY = positionY + (distY * speed);

//             clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
//             mountain.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
        
//             requestAnimationFrame(setMouseParallaxStyle);
//         }
//         setMouseParallaxStyle();

//         parallax.addEventListener("mousemove", function (e) {

//             const parallaxWidth = parallax.offsetWidth;
//             const parallaxHeight = parallax.offseteight;

//             const coordX = e.pageX - parallaxWidth / 2;
//             const coordY = e.pageY - parallaxHeight / 2;

//             coordXprocent = coordX / parallaxWidth * 100;
//             coordYprocent = coordY / parallaxHeight * 100;
//         });
//     }
// }