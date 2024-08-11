function showCategory(category) {
    const categories = document.querySelectorAll('.project-category');
    categories.forEach(cat => cat.style.display = 'none');
    document.getElementById(category).style.display = 'block';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the first category by default
document.addEventListener('DOMContentLoaded', () => {
    showCategory('powerbi');
});
