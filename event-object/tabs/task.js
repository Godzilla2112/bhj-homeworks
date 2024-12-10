const tabContainers = document.querySelectorAll('.tab__navigation');

tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('tab_active'));
            this.classList.add('tab_active');

            contents.forEach(content => content.classList.remove('tab__content_active'));
            contents[index].classList.add('tab__content_active');
        });
    });
});
