let products = [];

module.exports = {
  init() {
        products.push({
                    title: "Товар 1",
                    img: "https://www.codery.school/content/course/lesson3-task-img.png",
                    description: "Краткое описание первого товара",
                    price: 1000,
                    slug: "Товар-1",
                    key: 123,
                    
                    
                },
                {
                    title: "Товар 2",
                    img: "https://www.codery.school/content/course/lesson3-task-img.png",
                    description: "Краткое описание второго товара",
                    price: 1500,
                    slug: "Товар-2",
                    key: 124
                }
                );  
      
  },
  
  getProducts() {
    return products;
    },
    
  getProductByKey(key){
    return products.find(elem => elem.key == key);
  }
}