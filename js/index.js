const events = [
  {
    title: "Maratón Ciudad 2026",
    category: "running",
    date: "12 de octubre de 2026",
    location: "Madrid",
    icon: "🏃"
  },
  {
    title: "Torneo de Fútbol 7",
    category: "fútbol",
    date: "18 de octubre de 2026",
    location: "Barcelona",
    icon: "⚽"
  },
  {
    title: "Ruta Ciclista Sierra Norte",
    category: "ciclismo",
    date: "25 de octubre de 2026",
    location: "Segovia",
    icon: "🚴"
  },
  {
    title: "Carrera Solidaria 10K",
    category: "running",
    date: "2 de noviembre de 2026",
    location: "Valencia",
    icon: "🏅"
  }
];

const eventsContainer = document.querySelector("#events");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");

function renderEvents() {
  const search = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(search);
    const matchesCategory =
      category === "todos" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  eventsContainer.innerHTML = filteredEvents.length
    ? filteredEvents.map(event => `
        <article class="card">
          <div class="card-image">${event.icon}</div>
          <div class="card-content">
            <h2>${event.title}</h2>
            <p>📅 ${event.date}</p>
            <p>📍 ${event.location}</p>
            <p>🏷️ ${event.category}</p>
            <button onclick="registerEvent('${event.title}')">
              Inscribirme
            </button>
          </div>
        </article>
      `).join("")
    : `<p class="empty">No se encontraron eventos.</p>`;
}

function registerEvent(eventName) {
  alert(`Te has inscrito en: ${eventName}`);
}

searchInput.addEventListener("input", renderEvents);
categorySelect.addEventListener("change", renderEvents);

renderEvents();