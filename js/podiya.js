// const butEl = document.querySelector("#btn")
// const textEl = document.querySelector("#output");
// const photo = document.querySelector("img")
// butEl.addEventListener("click", () => {
//     textEl.textContent = "hello"
//     textEl.style.color = "Red"
//     textEl.style.fontSize = "50px";
//     photo.src =
//         "https://tutservice.com.ua/wp-content/uploads/2025/01/x1200x800.jpg.pagespeed.ic._SmOtVTdQM.jpg";
//     document.querySelector("body").style.background = "green";
// })


// 2. Задача: Натискання додає елемент до списку
// const btnEl = document.querySelector("#add-item");
// const ListEl = document.querySelector("#list")
// btnEl.addEventListener("click", () => {
//     const liEl = document.createElement("li")
//     const textEl = document.createElement("p")
//     textEl.textContent = "New text"
//     liEl.append(textEl)
//     ListEl.append(liEl)
// })


// const inpEl = document.querySelector("#name-input");
// const textEl = document.querySelector("#greeting");
// inpEl.addEventListener("change", (event) => {
//     // console.log(event.currentTarget.value);
//     textEl.textContent = `Привіт ${event.currentTarget.value}`
// })



// const inpEl = document.querySelector("#color-picker");
// const divEl = document.querySelector("#color-box");
// inpEl.addEventListener("change", (event) => {
//     divEl.style.background = event.currentTarget.value;
// });

//<input id="username" placeholder="Ім’я користувача" />
//<p id="error-msg" style="color:red;"></p>

// const inpEl = document.querySelector("#username");
// const textEl = document.querySelector("#error-msg");
// inpEl.addEventListener("blur", (event) => {
//     if (event.currentTarget.value.length > 0) {
//           textEl.textContent = `${event.currentTarget.value}`
//           console.log(`Рядок не пустий. Ви написали: ${event.currentTarget.value}`);
//           textEl.style.color = "green"
//       } else {
//           console.log("Рядок пустий!");
//         textEl.textContent = "Рядок не може бути порожній";
//   }
//   });

// Задача: Автоматичне форматування email у нижній регістр
//<input id="email" placeholder="Введіть email" />;
// document.querySelector("#email").addEventListener("blur", (event) => {
//     event.currentTarget.value = event.currentTarget.value.toLowerCase()
// })

// апиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

// <form>
//   <p>Choose a color:</p>
//   <label>
//     <input type="radio" name="color" value="red" checked />
//     Red
//   </label>
//   <label>
//     <input type="radio" name="color" value="white" />
//     White
//   </label>
//   <label>
//     <input type="radio" name="color" value="green" />
//     Green
//   </label>
// </form>

// document.querySelectorAll('input[name="color"]').forEach((input) => {input.addEventListener("click", () => {
//     document.querySelector('body').style.background = input.value;
//     })
// })


// <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// <h1>Привіт, <span id="name-output">незнайомець</span>!</h1>

// document.querySelector('input[type="text"]').addEventListener("change", (event) => {
//     document.querySelector("#name-output").textContent = event.target.value;
//   });


// const inputEl = document.querySelector("#font-size-control");
// inputEl.addEventListener("input", () => {
//   document.querySelector("#text").style.fontSize = inputEl.value + "1px";
// });