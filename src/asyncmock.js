const products = [
    {
        id: '1',
        name: 'Xbox One',
        price: 1200000,
        category: 'consolas',
        img: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/148296-games-review-xbox-one-s-all-digital-edition-product-shots-image1-xct4hs5njv.jpg',
        stock: 10,
        Description: 'Descripción del xbox one'
    },
    {
        id: '2',
        name: 'Xbox Series X',
        price: 2500000,
        category: 'consolas',
        img: 'https://cdn.mos.cms.futurecdn.net/uFicTu3Ti56psJpsTGQ64C.jpg',
        stock: 10,
        Description: 'Descripción del xbox series x'
    },
    {
        id: '3',
        name: 'Play Station 4',
        price: 1500000,
        category: 'consolas',
        img: 'https://www.ekosnegocios.com/image/posts/January2022/j3D4ROEbhsYYtCvk3nRz.jpg',
        stock: 10,
        Description: 'Descripción del PS4'
    },
    {
        id: '4',
        name: 'Play Station 5',
        price: 3500000,
        category: 'consolas',
        img: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/11/analisis-ps5-computerhoy-2140441.jpg?itok=3O0gb1ee',
        stock: 10,
        Description: 'Descripción del PS5'
    },
    {
        id: '5',
        name: 'Nintendo Switch',
        price: 900000,
        category: 'consolas',
        img: 'https://www.cnet.com/a/img/resize/b1a74f6ae6560a7ba93c4943e2fe1769f30a96e9/hub/2017/02/23/5bf20b56-a1a7-4587-868f-f9f848dbc7bf/nintendo-switch-console-4923.jpg?auto=webp&width=768',
        stock: 10,
        Description: 'Descripción del Nintendo Switch'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    }) 
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    }) 
}