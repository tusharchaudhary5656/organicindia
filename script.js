const products = [
    {
      name: "Jaggery",
      image: "Organic-Jaggery-Powder-800g_4-scaled_1680x.jpg",
      price: 100
    },
    {
      name: "Daal",
      image: "arhar-dal-1533119024-4156986.jpeg",
      price: 300
    },
    {
      name: "Gud",
      image: "marwar-gurjaggery-gud-cubes-chemical-free-organic-no-preservatives-added-gur-cube-pack-1kg-product-images-orvlyq67jx4-p596324533-2-202212131247.jpg",
      price: 150
    },
    {
      name: "Mustard Oil",
      image: "yellow-organic-mustard-oil-1000x1000.jpg",
      price: 300
    }
  ];
  
  const productsList = document.getElementById("products-list");
  
  function displayProducts(products) {
    productsList.innerHTML = products.map(product => {
      return `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>Price: ₹${product.price}/kg</p>
          <button>Add to Cart</button>
        </div>
      `;
    }).join('');
  }
  
  displayProducts(products);
  