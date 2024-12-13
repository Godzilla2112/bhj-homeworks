const fontSizeLinks = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizeLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 

        fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));

        link.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = link.dataset.size;
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    });
});
