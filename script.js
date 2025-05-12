document.addEventListener('DOMContentLoaded', function() {
    // Selecciona tots els botons que són capçaleres d'acordió
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Per a cada capçalera...
    accordionHeaders.forEach(header => {
        // Afegeix un 'escoltador' d'esdeveniments per al clic
        header.addEventListener('click', function() {
            // Selecciona el div del contingut just després d'aquesta capçalera
            const content = this.nextElementSibling; // this es refereix al botó clicat

            // --- Funcionalitat opcional: Tanca altres seccions obertes ---
            // Busca totes les capçaleres per tancar les actives excepte la clicada
            accordionHeaders.forEach(otherHeader => {
                // Si la capçalera no és la que acabem de clicar...
                if (otherHeader !== this) {
                    // I si té la classe 'active' (està oberta)...
                    if (otherHeader.classList.contains('active')) {
                         // Treu la classe 'active' de la capçalera
                        otherHeader.classList.remove('active');
                        // Treu la classe 'show' del seu contingut
                        otherHeader.nextElementSibling.classList.remove('show');
                        // Reseteja el max-height per amagar-lo amb transició
                        otherHeader.nextElementSibling.style.maxHeight = null;
                    }
                }
            });
            // --- Final funcionalitat opcional ---


            // --- Funcionalitat per obrir/tancar la secció clicada ---
            // Alterna la classe 'active' a la capçalera clicada
            this.classList.toggle('active');

            // Alterna la classe 'show' al contingut d'aquesta capçalera
            content.classList.toggle('show');

            // Ajusta el max-height del contingut per permetre la transició CSS
            if (content.classList.contains('show')) {
                // Si té la classe 'show', posa un max-height prou gran
                // Usa scrollHeight si vols la mida exacta, però 1000px sol ser suficient i evita salts
                // content.style.maxHeight = content.scrollHeight + "px";
                 content.style.maxHeight = '1000px'; // Valor gran
            } else {
                // Si no té la classe 'show', reseteja el max-height per amagar-lo
                content.style.maxHeight = null; // O '0px'
            }
            // --- Final funcionalitat obrir/tancar ---

        });
    });
});
