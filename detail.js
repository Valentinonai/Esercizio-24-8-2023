window.onload = () => {
  const url = "https://api.pexels.com/v1/photos/" + new URLSearchParams(window.location.search).get("photographerId");
  fetch(url, {
    Method: "GET",
    headers: {
      Authorization: "UR2PYG533HUF2r2TrdELZg9seltpdfQmBNZuqCirdr06o5mplnDhOlvH",
      "Content-Type": "application/json",
    },
  })
    .then((ris) => ris.json())
    .then((risp) => {
      document.querySelector("h1").innerText = risp.photographer;
      document.querySelector("a").innerText = risp.photographer_url;
      document.querySelector("img").setAttribute("src", risp.src.landscape);
      document.body.style.backgroundColor = risp.avg_color;
    });
};
