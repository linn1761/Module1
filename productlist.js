





const url ="https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        handleProductList(data); 
    })

function handleProductList (data){
    // console.log(data); <-- Check that 10 items are there
    data.forEach(showProduct);
}





function showProduct(product){
    console.log(product);
    // Soldout Sale




    // grab the template
    const template = document.querySelector("#ProductTemplate").content;


    // clone it 
    const copy = template.cloneNode(true);

    // change content 

    copy.querySelector("a").setAttribute("href", `product.html?id=${product.id}`)



    copy.querySelector(".subtle").textContent = `${product.articletype} | ${product.brandname}`; 

    copy.querySelector("h3").textContent = product.productdisplayname;

    if(product.soldout){
        copy.querySelector("article").classList.add("Soldout");
    }

    if(product.discount){
        copy.querySelector("article").classList.add("Sale");
    }

    copy.querySelector(".price").textContent = "DKK" + product.price + ",-";
    copy.querySelector(".newPrice").textContent = "DKK" + Math.round(`${product.price - (product.price / 100) * product.discount}`) + ",-";

    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    



    // grab parent 
    const parent = document.querySelector("main");

     // append
     parent.appendChild(copy);
}