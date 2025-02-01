

// fetch('https://fakestoreapi.com/products')
//   .then(response => {
//     if (response.ok) {
//       const data = response.json();
//       return data;
//     } else {
//       throw new Error('API request failed');
//     }
//   })
//   .then(data => {
//     console.log("data", data); 
//     let products = data;
//     console.log("products", products);

   
//         const productList = document.getElementById('grid');
//         console.log("pri", productList);
//         for(const product of products){
//             const card = document.createElement('div');
//             card.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb-4');
//             card.innerHTML = `
//             <div class="card h-100">
//                 <img src="${product.image}" width="80px" class="card-img-top" alt="${product.name}">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text font-weight-bold">$${product.price.toFixed(2)}</p>
//                 </div>
//             </div>
//             `
//             productList.appendChild(card);
//         }
        
    
    
//   })
//   .catch(error => {
//     console.error(error); 
//   });



  // callback
//   function fetchDataCallback(url, callback){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true); // true means asyn call
//     xhr.onload = function(){
//         if(xhr.status >= 200 && xhr.status <300){
//             callback(null, JSON.parse(xhr.responseText));
//         }else{
//             console.log("he");
//             callback(xhr.statusText, null);
//         }
//     };
//     xhr.onerror = function () {
//         callback(xhr.statusText, null);
//     }
//     xhr.send();
//   }



//promises
//   function fetchDataWithCallbackBasedPromise(url){
//     return new Promise((resolve, reject) => {
//         fetchDataCallback(url, (error, data) => {
//             if(error){
//                 reject(error);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
//   }

//   fetchDataCallback("https://fakestoreapi.com/products", (error, data) => {
//     if(error){
//         console.error("error feching", error);
//         return;
//     }
//     console.log("products", data);
//   })


 


//   function fetchProducts() {

//     return fetch("https://fakestoreapi.com/products?limit=10")

//         .then(response => {

//             if (!response.ok) throw new Error("Failed to fetch products");

//             return response.json();

//         })

//         .then(products => {

//             return JSON.stringify(products);

//         });

// }

// Fetch and store products

// fetchProducts()

//     .then(products => console.log(products))

//     .catch(error => console.error(error));

// async function fetchDataAsync(url){
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error("Network response was not ok" + response.statusText);
//         }
//         const data = await response.json();
//         return data;
//     }catch(error){
//         console.error("error fetching products with async/await ", error);
//         throw error;
//     }
// }