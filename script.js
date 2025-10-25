const input = document.getElementById("destinationInput");
const dropdown = document.getElementById("dropdown");
const countryList = document.getElementById("countryList");
const selectedDestinations = document.getElementById("selectedDestinations");
const arrowIcon = document.getElementById("arrowIcon");
const countries = [
  "Australia",
  "Austria",
  "Bali (Indonesia)",
  "Canada",
  "Dubai (UAE)",
  "France",
  "Germany",
  "India",
  "Japan",
  "New Zealand",
  "Singapore",
  "United States",
  "United Kingdom",
  "Italy",
  "Spain",
  "Switzerland",
  "Thailand",
  "Malaysia",
  "Maldives",
  "Turkey",
  "Greece",
  "Portugal",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Iceland",
  "Czech Republic",
  "Hungary",
  "Poland",
  "Croatia",
  "Morocco",
  "South Africa",
  "Egypt",
  "Qatar",
  "Saudi Arabia",
  "China",
  "Hong Kong",
  "Vietnam",
  "Philippines",
  "Indonesia",
  "Sri Lanka",
  "Nepal",
  "Pakistan",
  "Bangladesh",
  "Mexico",
  "Brazil",
  "Argentina",
  "Chile",
  "Peru",
  "Costa Rica",
  "Dominican Republic",
  "Jamaica",
  "Cuba",
  "Canada",
  "USA",
  "Ireland",
  "Scotland",
  "Wales",
  "New Caledonia",
  "Fiji",
  "Tahiti",
  "South Korea",
  "Taiwan",
  "Cambodia",
  "Laos",
  "Kenya",
  "Tanzania",
  "Zimbabwe",
];
let selected = [];
function renderList(filter = "") {
  countryList.innerHTML = "";
  const filtered = countries.filter((c) =>
    c.toLowerCase().includes(filter.toLowerCase())
  );
  const heading = dropdown.querySelector("h4");
  const line = dropdown.querySelector("hr");
  if (filtered.length === 0) {
    heading.style.display = "none";
    line.style.display = "none";
    const li = document.createElement("li");
    li.textContent = "Destination not found";
    li.classList.add("not-found");
    countryList.appendChild(li);
    return;
  }
  heading.style.display = "block";
  line.style.display = "block";
  filtered.forEach((country) => {
    const li = document.createElement("li");
    li.textContent = country;
    li.addEventListener("click", () => addTag(country));
    countryList.appendChild(li);
  });
}
function addTag(country) {
  if (selected.includes(country)) return;
  selected.push(country);
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = country;
  const removeBtn = document.createElement("span");
  removeBtn.textContent = "×";
  removeBtn.addEventListener("click", () => {
    selected = selected.filter((c) => c !== country);
    tag.remove();
  });
  tag.appendChild(removeBtn);
  selectedDestinations.appendChild(tag);
  dropdown.classList.add("hidden");
  arrowIcon.innerHTML = "&#9662;";
}
input.addEventListener("focus", () => {
  dropdown.classList.remove("hidden");
  arrowIcon.innerHTML = "&#9652;";
  renderList(input.value);
});
input.addEventListener("blur", () => {
  setTimeout(() => {
    dropdown.classList.add("hidden");
    arrowIcon.innerHTML = "&#9662;";
  }, 200);
});
input.addEventListener("input", (e) => {
  renderList(e.target.value);
});
arrowIcon.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
  arrowIcon.innerHTML = dropdown.classList.contains("hidden")
    ? "&#9662;"
    : "&#9652;";
  renderList(input.value);
});
renderList();
const travelToggle = document.getElementById("travelToggle");
const travelSection = document.getElementById("travelSection");
const header = document.getElementById("mainHeader");
const overlay = document.getElementById("overlay");
overlay.addEventListener("click", () => {
  travelSection.classList.remove("active");
  travelToggle.classList.remove("active");
  header.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("dimmed");
});
const logo = document.getElementById("mainLogo");
travelToggle.addEventListener("click", () => {
  const isActive = travelSection.classList.toggle("active");
  travelToggle.classList.toggle("active", isActive);
  header.classList.toggle("active", isActive);
  overlay.classList.toggle("active", isActive);
  document.body.classList.toggle("dimmed", isActive);
  // Change logo version
  if (isActive) {
    // logo.src = "./assets/images/logo white.png";
  } else {
    // logo.src = "./assets/images/logo-6.png";
  }
});
function choosePlan(planName) {
  alert("You have selected the " + planName + " plan!");
}
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlays = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");
const travelLink = document.querySelector("#sidebar a");
const dropdownIcon = document.getElementById("mobileDropdownIcon");
const mobileSubmenu = document.getElementById("mobileSubmenu");
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlays.classList.add("active");
});
overlays.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlays.classList.remove("active");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlays.classList.remove("active");
});
dropdownIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileSubmenu.classList.toggle("active");
  dropdownIcon.classList.toggle("fa-rotate-180");
});
