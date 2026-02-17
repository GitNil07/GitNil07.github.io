// Temporary placeholder API (we'll replace after backend deploy)
const API_BASE = "https://example.com";

const form = document.getElementById("tripForm");
const statusEl = document.getElementById("status");
const outputEl = document.getElementById("output");

function setStatus(msg) {
  statusEl.textContent = msg;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  outputEl.textContent = "";
  setStatus("Generating…");

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const resp = await fetch(`${API_BASE}/api/itinerary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const text = await resp.text();

    if (!resp.ok) {
      throw new Error(`API error (${resp.status}): ${text}`);
    }

    setStatus("Done ✅");
    outputEl.textContent = text;
  } catch (err) {
    setStatus("Not connected yet (backend next) ⚙️");
    outputEl.textContent = String(err);
  }
});
