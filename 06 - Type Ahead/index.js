const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const textArea = document.querySelector(".search");
const list = document.querySelector(".suggestions");
textArea.addEventListener("input", updateList);

const cityList = [];

fetch(endpoint)
  .then((res) => res.json())
  .then((content) => cityList.push(...content));

function findMatches(key, cityList) {
  return cityList.filter((el) => {
    const regex = new RegExp(key, "gi");
    return el.city.match(regex) || el.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateList() {
  const matches = findMatches(this.value, cityList);

  const html = matches
    .map((el) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = el.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = el.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(el.population)}</span>
      </li>
    `;
    })
    .join("");

  list.innerHTML = html;
}
