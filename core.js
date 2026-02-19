// visibleCount টি গ্লোবাল রাখা হয়েছে যেন loadMore এটি আপডেট করতে পারে
let visibleCount = 20;

// প্রোডাক্ট রেন্ডার করার মেইন ফাংশন
function renderProducts(dataList) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const currentItems = dataList.slice(0, visibleCount);

    grid.innerHTML = currentItems.map(p => `
        <div class="product-card">
            ${p.discount ? `<span class="discount" style="position:absolute; top:10px; left:10px; background:#ff3d00; color:#fff; padding:2px 6px; border-radius:4px; font-size:11px;">-${p.discount}</span>` : ''}
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3 class="product-title" style="font-size:14px; margin:10px 0; height:40px; overflow:hidden;">${p.name}</h3>
            <div class="price">
                <span class="new-price">৳${p.price.toLocaleString()}</span>
                ${p.oldPrice ? `<span class="old-price" style="text-decoration:line-through; color:#999; font-size:12px; margin-left:5px;">৳${p.oldPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="buy-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');

    // Load More বাটন হ্যান্ডেলিং
    if (visibleCount < dataList.length) {
        grid.innerHTML += `
            <div style="grid-column: 1/-1; text-align: center; padding: 20px;">
                <button onclick="loadMore()" style="background:#333; color:#fff; padding:12px 30px; border:none; border-radius:25px; cursor:pointer;">
                    Show More (+${dataList.length - visibleCount} items)
                </button>
            </div>`;
    }
}

function loadMore() {
    visibleCount += 20;
    renderProducts(products); // products ভেরিয়েবলটি data/products.js থেকে আসবে
}

function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    visibleCount = 20; 
    renderProducts(filtered);
}

function addToCart(id) {
    alert("Product ID " + id + " added to cart!");
    // এখানে ভবিষ্যতে কার্ট লজিক যোগ করা যাবে
}
