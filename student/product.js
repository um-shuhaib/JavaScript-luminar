// need to create a card of all prodeuct 

promise = fetch('https://fakestoreapi.com/products')  // fetch is an asynchrounius and its result always a promise

promise.then((res)=>(res.json()).then((result)=>{
    console.log(result); // print all products
    product = result 

    data = ''
    product.forEach((product)=>{
        data +=`<div class="col">
        <div class="card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="Product Image" />
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="fw-bold">Price: ₹ ${product.price}</p>
                        <p>Category: ${product.category}</p>
                        <div class="d-flex align-items-center">
                            <span class="me-2">Rating: ⭐ ${product.rating.rate}</span>
                            <small class="text-muted">(${product.rating.count} reviews)</small>
                        </div>
                    </div>
                    </div>
                </div>`
    });

    
    document.getElementById("pdata").innerHTML = data
}));

