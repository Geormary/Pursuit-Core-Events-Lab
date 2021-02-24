document.addEventListener("DOMContentLoaded", () => {
  let submit = document.querySelector("button");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    let list = document.querySelector("ul");
    let text = String(document.querySelector("input").value);
    addListItem(list, text);
  });
});

const addListItem = (list, text) => {
  let p = document.querySelector("p");
  p.textContent = "";
  if (text === "") {
    p.textContent = "Error. Todo cannot be empty";
  } else {
    let li = document.createElement("li");
    li.textContent += text;
    list.appendChild(li);
    li.addEventListener("click", (e)=>{
        e.target.style.textDecoration = "line-through"
    })
  }
};
