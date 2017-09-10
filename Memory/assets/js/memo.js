var precedent =-2;
var attente =0;
var img;
var imgp;

/*Fonction qui cache les cartes*/

function hide() {
    img.style.visibility = 'hidden';
    imgp.style.visibility = 'hidden';
    attente = 0;
}


function clic(n) {
    if (attente != 1)

    {
        img = document.getElementById('img' + n);
        img.style.visibility = 'visible';

        if (precedent < 0) {
            precedent = n;
        } else {
            imgp = document.getElementById('img' + precedent);


            if (imgp.src == img.src) {
                
            }else {
                 attente = 1;
                  setTimeout('hide();', 1000); }
            precedent = -1;
        }
    }
}


function initgame() {
    for (var i = 1; i <= 200; i++) {
         var n1 = Math.ceil(12 * Math.random());
         var n2 = Math.ceil(12 * Math.random());
         var img1 = document.getElementById('img' + n1);
         var img2 = document.getElementById('img' + n2);
         var src1 = img1.src;
         var src2 = img2.src;
         img1.src = src2;
         img2.src = src1;
          }
    }
        
