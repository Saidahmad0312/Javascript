// 1. Product nomli object yaratish
const Product = {
    name: "",
    quantity: 0,
    price: 0,
  
    // 2. productInfo getter metodi
    get productInfo() {
      return `Mahsulot: ${this.name}, Miqdori: ${this.quantity}, Narxi: ${this.price}`;
    },
  
    // 3. setPrice setter metodi
    set setPrice(newPrice) {
      if (typeof newPrice === "number" && newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log("Narxni o'zgartirishda xatolik!");
      }
    }
  };
  
  // 4. Tovar nomli object yaratish
  const productCopy = Object.create(Product);
  
  // Tovar narxini o'zgartirish
  productCopy.setPrice = 50;
  
  // 5. Ekran chiqarish funksiyasi
  function printInfo(product, tovar) {
    console.log("Product Info:");
    console.log(product.productInfo);
    console.log("Tovar Info:");
    console.log(tovar.productInfo);
  }
  
  // Test qilish
  productCopy.name = "Telefon";
  productCopy.quantity = 10;
  
  const tovar = Object.create(productCopy);
  tovar.name = "Monitor";
  tovar.quantity = 5;
  
  printInfo(productCopy, tovar);
  