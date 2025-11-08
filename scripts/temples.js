const mainnav = document.querySelector('.navigation');
const hambbutton = document.querySelector('#menu');

    //toggle betwee hamburger ≡ and close x
    hambbutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');

        hambbutton.classList.toggle('show');
    });

