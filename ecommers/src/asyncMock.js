const products = [
    { id: "1", name: "Funda reforzada trasparente", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT203?wid=532&hei=582&fmt=png-alpha&.v=1693247981397", price: 30, category: "Accesorios", description: "", stock: 10 },
    { id: "2", name: "Funda MagSafe", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT4J3?wid=532&hei=582&fmt=png-alpha&.v=1693594197616", price: 50, category: "Accesorios", description: "", stock: 10 },
    { id: "3", name: "IPhone 13", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1692912410963", price: 650, category: "IPhone", description: "128GB/100%", stock: 10 },
    { id: "4", name: "IPhone 14", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290654", price: 790, category: "IPhone", description: "128GB/100%", stock: 10 },
    { id: "5", name: "IPhone 15", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290559", price: 900, category: "IPhone", description: "128GB/100%", stock: 10 },
    { id: "6", name: "IPhone 15 Pro", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312", price: 1000, category: "IPhone", description: "256GB/100%", stock: 10 },
    { id: "7", name: "IPhone 15 Pro Max", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1693086290312", price: 1500, category: "IPhone", description: "512GB/100%", stock: 10 },
    { id: "8", name: "Cartera de trenzado fino con MagSafe para el iPhone - Azul pacífico", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT263?wid=532&hei=582&fmt=png-alpha&.v=1699475074951", price: 70, category: "Accesorios", description: "", stock: 10 },
    { id: "10", name: "AirPods (3.ª generación) con estuche de carga Lightning", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000", price: 190, category: "Accesorios", description: "", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };