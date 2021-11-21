const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list')

        console.log('goodsContainer = ', goodsContainer)
        goods.forEach(good => {
            console.log('good = ', good)
        })
    }

    const getData = (value, category) => {
        fetch('/db/db.json')
            .then((res) => res.json()
                .then((data) => {
                    const array = category ? data.filter((item) => item[category] === value) : data
                    localStorage.setItem('goods', JSON.stringify(array));

                    if (window.location.pathname !== "/goods.html") {
                        window.location.href = '/goods.html'
                    } else {
                        renderGoods(array)
                    }

                    console.log(window.location.href)
                })
            )
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const linkValue = link.textContent;
            const category = link.dataset.field;
            // console.log('linkValue = ', linkValue)
            // console.log('category = ', category)

            getData(linkValue, category);
        })

        if (localStorage.getItem('goods') && window.location.pathname === "/goods.html") {
            renderGoods(JSON.parse(localStorage.getItem('goods')))
        }
    })

    // localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4]));

    // console.log(localStorage.getItem('goods'));
    // const goods = JSON.parse(localStorage.getItem('goods'));
    // console.log('goods = ', goods);

    // console.log('localStorage1 = ', localStorage)
    // localStorage.removeItem('goods');
    // console.log(localStorage.getItem('goods'))
    // console.log('localStorage2 = ', localStorage)
}




getGoods();