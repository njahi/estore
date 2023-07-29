const productsArray = [
  {
    id: "price_1NPQjPJbAgbNl0fnZszqAOp4",
    name: "Lamborghini",
    price: 45.9,
    image: "lamb.jpg",
  },
  {
    id: "price_1NPQknJbAgbNl0fngeNN8XWa",
    name: "Mercedes Truck",
    price: 30.9,
    image: "truck.jpg",
  },
  {
    id: "price_1NPQliJbAgbNl0fnDxYH8MD2",
    name: "Demon",
    price: 520.2,
    image: "srt.jpg",
  },
  {
    id: "price_1NPQmoJbAgbNl0fnVh3cLsOs",
    name: "Rolls Royce",
    price: 780.5,
    image: "rolls royce.jpg",
  },
  {
    id: "price_1NPQoIJbAgbNl0fnukMNoeMv",
    name: "G-wagon",
    price: 350,
    image: "Gwagon.jpg",
  },
  {
    id: "price_1NPQp7JbAgbNl0fndSTqE6Mv",
    name: "BMW",
    price: 654.76,
    image: "BMW.jpg",
  },
  {
    id: "price_1NPQq1JbAgbNl0fnJL69eaZK",
    name: "Audi R8",
    price: 1197.5,
    image: "Audi R8.jpg",
  },
  {
    id: "price_1NPQqqJbAgbNl0fn6lwvFGXq",
    name: "Ferrari",
    price: 478.34,
    image: "ferrari.jpg",
  },
  {
    id: "price_1NPQrWJbAgbNl0fnO1eIcpEc",
    name: "Mercedes Benz",
    price: 530.54,
    image: "benz.jpg",
  },
  {
    id: "price_1NPQsLJbAgbNl0fnQLrS31I8",
    name: "corrolla",
    price: 890.87,
    image: "corolla.jpg",
  },
];
function getproductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data does not exist for Id" + id);
    return undefined;
  }
  return productData;
}
export { productsArray, getproductData };
