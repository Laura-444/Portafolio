document.addEventListener('DOMContentLoaded', function () {
    var imageUpSrc = './img-slide-up/slide.png';
    var imageDownSrc = './img-slide-up/slide-down.png';

    var accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(function (button) {
        button.addEventListener('click', function () {

            this.classList.toggle('active');
            var directionIconImage = this.getElementsByTagName ("img")[0];
            var accordionContent = this.getElementsByClassName ("accordion-content")[0];

            // If it's not collapsed
            if (accordionContent.style.display === "block") {
                accordionContent.style.display = "none";
                directionIconImage.src = imageDownSrc;
            } else {
                document.querySelectorAll (".accordion-item").forEach (function (item) {
                    item.getElementsByTagName ("img")[0].src = imageDownSrc;
                    item.getElementsByClassName ("accordion-content")[0].style.display = "none";;
                });

                accordionContent.style.display = "block";
                directionIconImage.src = imageUpSrc;
            } 
        });

    });
});