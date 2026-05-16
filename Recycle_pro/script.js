const productsData = [
    {
        id: 1,
        category: "KITCHEN APPLIANCES",
        title: "Electric Hand Blender, 150 Watts",
        price: "$47",
        oldPrice: null,
        badge: "new",
        imgUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300" 
    },
    {
        id: 2,
        category: "KITCHEN APPLIANCES",
        title: "2 Door Fridge and Freezer, Double",
        price: "$950",
        oldPrice: null,
        badge: null,
        imgUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300" 
    },
    {
        id: 3,
        category: "HOME APPLIANCES",
        title: "1700W Iron with Thermostat Dial",
        price: "$65",
        oldPrice: null,
        badge: null,
        imgUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300" 
    },
    {
        id: 4,
        category: "KITCHEN APPLIANCES",
        title: "Ultra Power Juicer, 1.5L, 500W",
        price: "$80",
        oldPrice: null,
        badge: null,
        imgUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300" 
    },
    {
        id: 5,
        category: "HOME APPLIANCES",
        title: "BGA 1400 Spin Washing Machine",
        price: "$185",
        oldPrice: "$230",
        badge: "sale",
        imgUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300" 
    }
];


function renderProducts() {
    const gridContainer = document.getElementById('products-grid');
    gridContainer.innerHTML = ""; 


    productsData.forEach(product => {
        

        let badgeHTML = "";
        if(product.badge === "new") {
            badgeHTML = `<span class="badge new">New</span>`;
        } else if(product.badge === "sale") {
            badgeHTML = `<span class="badge sale">Sale</span>`;
        }

        let oldPriceHTML = product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : "";


        const cardHTML = `
            <div class="product-card">
                <div class="card-top-actions">
                    <i class="fa-regular fa-heart action-icon"></i>
                    <i class="fa-solid fa-arrows-rotate action-icon"></i>
                </div>

                <div class="product-category">${product.category}</div>
                
                <div class="product-img-wrapper">
                    <img src="${product.imgUrl}" alt="${product.title}">
                </div>
                
                ${badgeHTML}

                <div class="product-title">${product.title}</div>

                <div class="card-bottom">
                    <div class="price-container">
                        <span class="current-price">${product.price}</span>
                        ${oldPriceHTML}
                    </div>
                    <button class="cart-btn">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });
}


document.addEventListener("DOMContentLoaded", renderProducts);




const homepageListsData = {
    featured: [
        { id: 101, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$80", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150" },
        { id: 102, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$25", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150" },
        { id: 103, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$63", img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150" }
    ],
    topselling: [
        { id: 201, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$146", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150" },
        { id: 202, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$75", img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150" },
        { id: 203, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$50", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=150" }
    ],
    newreleases: [
        { id: 301, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$940", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=150" },
        { id: 302, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$95", img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150" },
        { id: 303, title: "Lorem IpsumLorem IpsumLorem Ipsum", price: "$330", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=150" }
    ]
};

// Multi-Column Product Lists Script
function generateRowLists() {
    const featuredContainer = document.getElementById('featured-list');
    homepageListsData.featured.forEach(item => {
        featuredContainer.innerHTML += createProductRowHTML(item);
    });
    const topSellingContainer = document.getElementById('topselling-list');
    homepageListsData.topselling.forEach(item => {
        topSellingContainer.innerHTML += createProductRowHTML(item);
    });
    const newReleasesContainer = document.getElementById('newreleases-list');
    homepageListsData.newreleases.forEach(item => {
        newReleasesContainer.innerHTML += createProductRowHTML(item);
    });
}
function createProductRowHTML(product) {
    return `
        <div class="row-product-card">
            <div class="row-img-box">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="row-info-box">
                <h4>${product.title}</h4>
                <span class="row-price">${product.price}</span>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", generateRowLists);
