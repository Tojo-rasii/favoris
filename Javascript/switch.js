function switchView(view) {
    const descFavoris = document.getElementById('desc-favoris');
    const columnTab = document.getElementById('column-tabs');
    const rowTab = document.getElementById('row-tabs');

    if (view === 'column') {
        descFavoris.classList.remove('row-view');
        descFavoris.classList.add('column-view');
        columnTab.classList.add('active');
        rowTab.classList.remove('active');
    } else if (view === 'row') {
        descFavoris.classList.remove('column-view');
        descFavoris.classList.add('row-view');
        rowTab.classList.add('active');
        columnTab.classList.remove('active');
    }
}
