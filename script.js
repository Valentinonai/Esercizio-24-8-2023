window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loadImg").addEventListener("click", caricaImgs);
  document.getElementById("secondLoadImg").addEventListener("click", caricaImgs2);
});
const mainUrl = "https://api.pexels.com/v1/search?query=nature";
const secondaryUrl = "https://api.pexels.com/v1/search?query=city";
const caricaImgs = async () => {
  try {
    const risp = await fetch(mainUrl, {
      Method: "GET",
      headers: {
        Authorization: "UR2PYG533HUF2r2TrdELZg9seltpdfQmBNZuqCirdr06o5mplnDhOlvH",
        "Content-Type": "application/json",
      },
    });
    const mainImgs = await risp.json();
    generaCard(mainImgs.photos);
  } catch (error) {
    console.log(error);
  }
};
const caricaImgs2 = async () => {
  try {
    const risp = await fetch(secondaryUrl, {
      Method: "GET",
      headers: {
        Authorization: "UR2PYG533HUF2r2TrdELZg9seltpdfQmBNZuqCirdr06o5mplnDhOlvH",
        "Content-Type": "application/json",
      },
    });
    const mainImgs = await risp.json();
    generaCard(mainImgs.photos);
  } catch (error) {
    console.log(error);
  }
};
const creaUrl = async () => {
  try {
    const customUrl = "https://api.pexels.com/v1/search?query=" + document.getElementById("ricerca").value;
    const risp = await fetch(customUrl, {
      Method: "GET",
      headers: {
        Authorization: "UR2PYG533HUF2r2TrdELZg9seltpdfQmBNZuqCirdr06o5mplnDhOlvH",
        "Content-Type": "application/json",
      },
    });
    const mainImgs = await risp.json();
    generaCard(mainImgs.photos);
  } catch (error) {
    console.log(error);
  }
};

const generaCard = (photos) => {
  console.log(photos);
  const tabella = document.getElementById("tabella");
  tabella.innerHTML = "";
  for (let i = 0; i < photos.length; i++) {
    const divCol = document.createElement("div");
    divCol.className = "col-md-4";
    const card = document.createElement("div");
    card.className = "card mb-4 shadow-sm";
    const img = document.createElement("img");
    img.className = "bd-placeholder-img card-img-top";
    img.setAttribute("src", photos[i].src.landscape);
    img.style = "cursor:pointer";
    img.addEventListener("click", () => {
      detailUrl = "./dettaglio.html?photographerId=" + photos[i].id;
      window.location.assign(detailUrl);
    });
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const h5 = document.createElement("h5");
    h5.innerText = photos[i].alt;
    h5.className = "card-title";
    h5.style = "cursor:pointer";
    h5.addEventListener("click", () => {
      detailUrl = "./dettaglio.html?photographerId=" + photos[i].id;
      window.location.assign(detailUrl);
    });
    const p = document.createElement("p");
    p.innerText = `${photos[i].photographer} \n${photos[i].photographer_url}`;
    p.className = "card-text";
    const divBtn = document.createElement("div");
    divBtn.className = "d-flex justify-content-between align-items-center";
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    const btn1 = document.createElement("button");
    btn1.innerText = "View";

    btn1.className = "btn btn-sm btn-outline-secondary";
    btn1.setAttribute("data-bs-toggle", "modal");
    btn1.setAttribute("data-bs-target", "#modalBody");
    btn1.setAttribute("type", "button");
    btn1.addEventListener("click", () => modale(photos[i].src.landscape));
    const btn2 = document.createElement("button");
    btn2.innerText = "Hide";
    btn2.addEventListener("click", (event) => hide(event));
    btn2.className = "btn btn-sm btn-outline-secondary";
    btn2.setAttribute("type", "button");
    const small = document.createElement("small");
    small.className = "text-muted";
    small.innerText = photos[i].photographer_id;
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    btnGroup.appendChild(btn1);
    btnGroup.appendChild(btn2);
    divBtn.appendChild(btnGroup);
    divBtn.appendChild(small);
    cardBody.appendChild(divBtn);
    card.appendChild(img);
    card.appendChild(cardBody);
    divCol.appendChild(card);
    tabella.appendChild(divCol);
  }
};

const hide = (event) => {
  event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
};
const modale = (photo) => {
  console.log(photo);
  document.getElementById("modale").setAttribute("src", photo);
};
