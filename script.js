function showCategory(categoryId) {
    const categories = document.querySelectorAll('.project-details');
    categories.forEach(category => {
        category.classList.remove('active');
    });

    const selectedCategory = document.getElementById(categoryId);
    selectedCategory.classList.add('active');
}
