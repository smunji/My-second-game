let currentPage = 1;
const totalPages = 5;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.jokji');
    pages.forEach(jokji => {
        jokji.classList.remove('on');
    });
    document.getElementById(`intro${pageNumber}`).classList.add('on');
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

showPage(currentPage)