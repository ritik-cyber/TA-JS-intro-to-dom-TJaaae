let people = got.houses.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);
console.log(people);

let person = document.querySelector(".person");
let ul = document.createElement("ul");
people.forEach((char) => {
  let li = document.createElement("li");
  li.classList.add("box-1");
  li.classList.add("flex-30");
  let div = document.createElement("div");
  div.classList.add("flex-1");
  let img = document.createElement("img");
  img.src = char.image;
  let h4 = document.createElement("h4");
  h4.innerText = char.name;
  div.append(img, h4);
  let p = document.createElement("p");
  p.classList.add("tool");
  p.innerText = char.description;
  let a = document.createElement("a");
  a.href = char.wikiLink;
  a.innerText = "Learn More!";
  a.classList.add("btn");
  ul.classList.add("flex");
  ul.classList.add("wrap");
  li.append(div, p, a);
  ul.append(li);
  person.append(ul);

  //   console.log(got);
});
