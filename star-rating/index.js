// 별 스타일.css 추가
export const addStarStyle = () => {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'star-rating/theme.css';
    head.appendChild(link);
}

//별 개수 불러와서 받아서 별 생성
export const starRating = $container => {
    const statNum = $container.getAttribute('data-max-rating')

    const items = document.createElement("div")
    items.classList.add("star-rating-container");

    for (let i = 0; i < statNum; i++) {
        const item = document.createElement("i")
        item.className = 'bx bxs-star'
        items.appendChild(item)
    }
    return items
}




