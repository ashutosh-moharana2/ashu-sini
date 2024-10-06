document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('story').classList.remove('hidden');
    
    this.style.display = 'none';
    showNextSection();
    
});

let currentSection = 0;


function showNextSection() {
    const sections = document.querySelectorAll('.story-section');

    if (currentSection < sections.length) {
        if (currentSection > 0) {
            sections[currentSection - 1].classList.add('hidden');
        }
        sections[currentSection].classList.remove('hidden');
        
        const currentSectionElement = sections[currentSection];
        const h2 = currentSectionElement.querySelector('h2');
        const paragraphs = currentSectionElement.querySelectorAll('p');

        // Create a GSAP timeline
        const tl = gsap.timeline();

        // Split h2 text into characters and animate
        const h2Chars = h2.textContent.split('');
        h2.textContent = '';
        h2Chars.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            h2.appendChild(span);
        });

        tl.from(h2.children, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.05
        });

        // Animate paragraphs after h2 animation
        paragraphs.forEach(paragraph => {
            // Split the text into individual characters
            const chars = paragraph.textContent.split('');
            paragraph.textContent = '';
            chars.forEach(char => {
                const span = document.createElement('span');
                span.textContent = char;
                paragraph.appendChild(span);
            });

            // Add paragraph animation to the timeline
            tl.from(paragraph.children, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.05
            }, ">");  // ">" means start after the previous animation
        });

        currentSection++;
    } else {
        alert("Thank you for being part of my love story! ❤️");
    }
}



let nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', () => {
    // Add button click animation
    gsap.to(nextButton, {
        scale: 0.95,
        duration: 0.1,
        onComplete: () => {
            gsap.to(nextButton, {
                scale: 1,
                duration: 0.1,
                onComplete: showNextSection
            });
        }
    });
});


// ... existing code ...

