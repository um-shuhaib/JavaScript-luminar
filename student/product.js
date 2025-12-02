// need to create a card of all prodeuct 

promise = fetch('https://fakestoreapi.com/products')  // fetch is an asynchrounius and its result always a promise

promise.then((res)=>(res.json()).then((result)=>{
    console.log(result); // print all products
    product = result 

    data = ''
    product.forEach((product)=>{
        data +=`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    })

    
}))

