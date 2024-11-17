let number = 1;

async function addTitleAndPrice() {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/${number}`);
    let data = await response.json();
    let p = document.createElement("p");
    p.textContent = `სახელი ${data.title}, ფასი ${data.price}`;
    document.body.appendChild(p);
    number++;
  } catch (error) {
    let p1 = document.createElement("p");
    p1.textContent = "გაგვითავდა ძმა";
    document.body.appendChild(p1);
  }
}
document.getElementById("btn").addEventListener("click", addTitleAndPrice);
