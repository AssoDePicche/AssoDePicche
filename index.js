function prepareColumns(items, start, end) {
  let columns = [];

  while (start < end) {
    const item = items[start];

    let a = document.createElement("a");

    a.classList = ['btn flex flex--center mb-3'];

    a.target = "_blank";

    a.rel = "noopener noreferrer";

    a.href = item.href;

    let i = document.createElement("i");

    i.classList = [`${item.brand}`];

    a.append(`${item.name}`, i);

    let column = document.createElement("div");

    column.append(a);

    columns.push(column);

    ++start;
  }

  return columns;
}

export const items = [
  {
    name: "Duolingo",
    href: "https://www.duolingo.com/profile/assodipicche",
    brand: "fa-solid fa-language"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/samuel.do.prado.rodrigues/",
    brand: "fa-brands fa-facebook"
  },
  {
    name: "GitHub",
    href: "https://github.com/AssoDePicche",
    brand: "fa-brands fa-github"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/assodepicche/",
    brand: "fa-brands fa-instagram"
  },
  {
    name: "Lattes",
    href: "https://lattes.cnpq.br/0506034609919899",
    brand: "fa-regular fa-address-card"
  },
  {
    name: "Letterboxd",
    href: "https://letterboxd.com/assodepicche/",
    brand: "fa-brands fa-letterboxd"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-do-prado-rodrigues/",
    brand: "fa-brands fa-linkedin"
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Samuel-Rodrigues-26",
    brand: "fa-brands fa-researchgate",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/user/6flhz983p72i174tjdvshpnhs?si=268ddd24d3ad4bec",
    brand: "fa-brands fa-spotify",
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/assodepicche/",
    brand: "fa-brands fa-steam",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/samuel_do_prado",
    brand: "fa-brands fa-x-twitter",
  },
    {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UC3rLLXS3YjUUT2uys4j4bPw",
    brand: "fa-brands fa-youtube",
  }
];
