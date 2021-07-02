got.houses.forEach((char) => {
  let img = document.createElement("img");
  img.src = char.image;
  let h3 = document.createElement("h3");
  h3 = char.name;
  let p = document.createElement("p");
  p = char.description;
  let button = document.createElement("button");
  button = char.wikiLink;
  button.innerText = "Learn More!";
  div.append(img, h3);
  article.append(div, p, button);
});
