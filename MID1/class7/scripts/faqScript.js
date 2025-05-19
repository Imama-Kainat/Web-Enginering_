document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const isActive = parent.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(child => {
            child.classList.remove('active');
        });

        // Open clicked item if it was closed
        if (!isActive) {
            parent.classList.add('active');
        }
    });
});