const cars = [
  {
    model: "audi",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivtNFhFnyPvrT1VgCMEMn5k3vNj0oDW2mpw&s",
    speed: 290,
  },
  {
    model: "bmw",
    photo:
      "https://www.bmw.kg/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
    speed: 310,
  },
  {
    model: "tesla",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tesla_Model_Y_1X7A6211.jpg/960px-Tesla_Model_Y_1X7A6211.jpg",
    speed: 280,
  },
  {
    model: "porsche",
    photo:
      "https://assets.porsche.com/ua/lviv/-/media/Project/DealerWebsites/Ukraine/Lviv/News/T-Hybrid-for-significantly-enhanced-performance/S24_0161_-38401600-(7).jpg?rev=1e196f154939409e871c9c54bdfa3f77",
    speed: 300,
  },
  {
    model: "volkswagen",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCUjCe9UB0k_H-MefvFOjsJlMmRHolqbuvQ&s",
    speed: 280,
  },
  {
    model: "lamborghini",
    photo:
      "https://vip-car.com.ua/sites/default/files/styles/pan/public/pi/11246/2024-11246-3138583.jpeg?itok=2RF7XSoC",
    speed: 350,
  },
  {
    model: "maserati",
    photo:
      "https://maserati.scene7.com/is/image/maserati/maserati/international/Models/default/2024/granturismo/versions/granturismo-folgore.jpg?$800x2000$&fit=constrain",
    speed: 320,
  },
  {
    model: "opel",
    photo:
      "https://www.opel.ua/content/dam/opel/ukraine/home/16x9/new-grandland-home-16x9.jpg?imwidth=768",
    speed: 210,
  },
  {
    model: "fiat",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/1970_Fiat_500_L_--_2011_DC_1.jpg/1200px-1970_Fiat_500_L_--_2011_DC_1.jpg",
    speed: 90,
  },
  {
    model: "mercedes",
    photo:
          "https://img.mercedes-benz-kiev.com/data/lineup/mercedes-benz-e-class-w214/mercedes-benz-e-class-w214-5.jpg",
    
  },
];

const ListEl = document.createElement("ul");
const carMap = cars.map(({model, photo, speed = 0}) => {
const itemEl = `<li>
//         <h2>${model}</h2>
//         <img src="${photo}" width="500px alt="car.model">
//         <p>${speed}</p>
//     </li>`;
    return itemEl
})
const elementList = carMap.join("")
ListEl.insertAdjacentHTML("afterbegin", elementList)
document.querySelector("body").prepend(ListEl);

// cars.forEach(({model, photo, speed = 0}) => {
// ListEl.insertAdjacentHTML(
//   "beforeend",
//   `    <li>
//         <h2>${model}</h2>
//         <img src="${photo}" width="500px alt="car.model">
//         <p>${speed}</p>
//     </li>`
// );
// })
// document.querySelector("body").prepend(ListEl)
// console.log(ListEl);
