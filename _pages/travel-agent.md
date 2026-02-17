---
layout: page
title: City Break Optimiser — Nil Quantum Travel Agent (Beta)
permalink: /ai-experiment-lab/travel-agent/
---

Build a simple 1–3 day city break itinerary.  
*Tip: keep inputs short for best results.*

---

<form id="tripForm" style="display:grid; gap:12px; max-width:720px;">
  <label>
    City (or nearest major city)
    <input name="city" required placeholder="e.g., Lyon" style="width:100%; padding:10px;" />
  </label>

  <label>
    Dates (or number of days)
    <input name="dates" required placeholder="e.g., 2 days (Sat–Sun)" style="width:100%; padding:10px;" />
  </label>

  <label>
    Vibe / interests
    <input name="interests" placeholder="e.g., food, museums, scenic walks" style="width:100%; padding:10px;" />
  </label>

  <label>
    Budget
    <select name="budget" style="width:100%; padding:10px;">
      <option value="low">Low</option>
      <option value="mid" selected>Mid</option>
      <option value="high">High</option>
    </select>
  </label>

  <label>
    Pace
    <select name="pace" style="width:100%; padding:10px;">
      <option value="relaxed">Relaxed</option>
      <option value="balanced" selected>Balanced</option>
      <option value="packed">Packed</option>
    </select>
  </label>

  <button type="submit" style="padding:12px 14px; cursor:pointer;">
    Generate itinerary
  </button>
</form>

<div id="status" style="margin-top:16px;"></div>
<pre id="output" style="white-space:pre-wrap; margin-top:12px;"></pre>

<script src="/js/travel-agent.js"></script>
