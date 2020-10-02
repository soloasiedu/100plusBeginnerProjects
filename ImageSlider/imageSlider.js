( function(){
    const buttons = document.querySelectorAll('.btn');
    const imageSlider = document.querySelector('#slider');
    let count = 0;


    const pictures = ['doris.jpg', 'dorisDeckman.jpg', 'solo.jpg', 'solomon.jpg', 'solomonasiedu.jpg', 'stone.jpg'];

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(button.classList.contains('prevBtn')){
                count--;
                if( count < 0){
                    count = pictures.length - 1;
                }
                imageSlider.src = pictures[count];
                //console.log(pictures[count]);
                console.log('prevBtn');
            }else if(button.classList.contains('nextBtn')){
                count++;
                if(count > pictures.length - 1){
                    count = 0;
                }
                imageSlider.src = pictures[count];
                //console.log(pictures[count]);
                console.log('nextBtn');
            }
        })
    })
})();