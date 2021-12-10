function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  export async function getItems() {
    const items = [
        {id: 1,stock: 10,title: "Chocolate Amargo con sal",price: "150",imageUrl: "data:image/jpeg;base64,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",description: "Ver detalle del producto"},
        {id: 2,stock: 10,title: "Chocolate Amargo con te",price: "150",imageUrl: "https://sahisaludable.com/1/wp-content/uploads/2020/06/fenix-32901-c6dd68acdb17c6027615644986418176-640-0.jpg",description: "Ver detalle del producto"},
        {id: 3,stock: 10,title: "Chocolate Amargo sin azucar",price: "150",imageUrl: "https://w2m3n7x8.stackpathcdn.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/b/a/barra-de-chocolate-amargo-get-real-x-70-g-80--sin-azucar.jpg",description: "Ver detalle del producto"},
        {id: 4,stock: 10,title: "Chocolate Blanco",price: "150",imageUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/017/967/products/fenix-32631-e9ddb5961aeb4f70db15644991513515-640-0.jpg",description: "Ver detalle del producto",}

  
  
  
  
  ];
    var x = await resolveAfter2Seconds(items);
    return x;
  }