
// Toggle dark mode
document.querySelector('.toggle-mode').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const modeIcon = document.querySelector('.toggle-mode');
    modeIcon.textContent = document.documentElement.classList.contains('dark') ? '🌙' : '🌞';
});

// Copy link to clipboard
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
    });
}

// Search function
function searchItems() {
    const query = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.link-card');
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
    });
}
