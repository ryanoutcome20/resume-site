document.addEventListener('DOMContentLoaded', function() {
    // Type manager.
    const strings = [
        ' Game Developer',
        ' GUI Developer',
        ' Web Developer',
        ' Cybersecurity Engineer',
        ' Reverse Engineer'
    ];

    let group = document.querySelectorAll('.typed')

    group.forEach((element) => {
        new Typed(element, {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: Boolean(element.getAttribute('data-cursor')),
            cursorChar: '|',
            smartBackspace: true
        });
    })

    // Confetti manager.
    var canvas = {
        target: 'confetti',
        max: 85,
        size: 2,
        props: ['square', 'triangle', 'line'],
        colors: [[80,80,80]],
        clock: 16
    };
    
    var gen = new ConfettiGenerator(canvas);
    gen.render();

    // Image clicker.
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
});
