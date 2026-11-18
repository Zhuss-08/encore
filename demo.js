// A live, silent demo of Encore's lock screen: three made-up songs with original cover art
// (drawn here) and original lyrics, so nothing copyrighted is used.
(function () {
  const root = document.getElementById("demo");
  if (!root) return;

  // ---- Songs -------------------------------------------------------------------------------
  const L = (t, s) => ({ t, s });
  const songs = [
    { title: "Golden Hour Drive", artist: "Mara Sol", length: 66, accent: "#f43f7a",
      colours: ["#fb923c", "#f43f7a", "#6d28d9"], draw: drawGolden,
      lyrics: [L(0, "♪"), L(4, "Windows down on the coast road"), L(8, "Sun is melting into gold"), L(12, "Every song we ever loved"),
               L(16, "Playing louder than we're told"), L(20, "♪"), L(24, "Hold on, hold on to the light"), L(28, "We can chase it through the night"),
               L(32, "Hold on, hold on, don't look back"), L(36, "Golden hour on the track"), L(40, "♪"), L(44, "Mile by mile the sky turns pink"),
               L(48, "Further than we dare to think"), L(52, "Hold on, hold on to the light"), L(56, "Golden hour, burning bright"), L(61, "♪")] },
    { title: "Static Hearts", artist: "NOVA K", length: 64, accent: "#22d3ee",
      colours: ["#ec4899", "#22d3ee", "#2e1065"], draw: drawStatic,
      lyrics: [L(0, "♪"), L(3, "City lights in stereo"), L(7, "Pulse is running on a loop"), L(11, "Neon rain on every window"),
               L(15, "I keep falling back to you"), L(19, "♪"), L(22, "Static hearts, we're on the same frequency"), L(27, "Turn it up until it's all that we can see"),
               L(32, "Static hearts, don't let the signal fade"), L(37, "Every beat's a promise that we made"), L(42, "♪"), L(45, "Midnight trains and borrowed time"),
               L(49, "Your voice cuts through the noise"), L(53, "Static hearts, on the same frequency"), L(58, "Turn it up for you and me"), L(61, "♪")] },
    { title: "Low Tide", artist: "The Harbour", length: 66, accent: "#38bdf8",
      colours: ["#1e3a8a", "#0ea5e9", "#0b1026"], draw: drawTide,
      lyrics: [L(0, "♪"), L(4, "Moonlight on the water"), L(8, "Footprints in the sand"), L(12, "Quiet like the evening"),
               L(16, "Waiting where we stand"), L(20, "♪"), L(24, "Low tide, take me slowly"), L(28, "Back to where I'm from"),
               L(32, "Low tide, carry me home"), L(36, "Till the morning comes"), L(40, "♪"), L(44, "Shells and silver shadows"),
               L(48, "Lanterns on the pier"), L(52, "Low tide, take me slowly"), L(56, "Home is always here"), L(61, "♪")] },
  ];

  // ---- Cover art (original, drawn on a canvas) ----------------------------------------------
  function cover(draw) {
    const c = document.createElement("canvas"); c.width = c.height = 600;
    const g = c.getContext("2d"); draw(g, 600);
    return c.toDataURL("image/jpeg", 0.9);
  }
  function drawGolden(g, n) {
    const sky = g.createLinearGradient(0, 0, 0, n);
    sky.addColorStop(0, "#5b21b6"); sky.addColorStop(0.45, "#f43f7a"); sky.addColorStop(0.75, "#fb923c"); sky.addColorStop(1, "#fde68a");
    g.fillStyle = sky; g.fillRect(0, 0, n, n);
    const sun = g.createRadialGradient(n * .5, n * .62, 10, n * .5, n * .62, n * .26);
    sun.addColorStop(0, "#fff7d6"); sun.addColorStop(0.55, "#fdba74"); sun.addColorStop(1, "rgba(253,186,116,0)");
    g.fillStyle = sun; g.beginPath(); g.arc(n * .5, n * .62, n * .26, 0, 7); g.fill();
    [["#7c2d4f", .7], ["#4a1d4a", .78], ["#25103a", .88]].forEach(([col, y], i) => {
      g.fillStyle = col; g.beginPath(); g.moveTo(0, n);
      for (let x = 0; x <= n; x += 10) g.lineTo(x, n * y + Math.sin(x / (70 + i * 25) + i * 2) * (18 - i * 3));
      g.lineTo(n, n); g.fill();
    });
    g.strokeStyle = "rgba(255,230,180,.7)"; g.lineWidth = 4; g.setLineDash([22, 18]);
    g.beginPath(); g.moveTo(n * .5, n); g.lineTo(n * .5, n * .9); g.stroke(); g.setLineDash([]);
    label(g, n, "GOLDEN HOUR", "#fff7ed");
  }
  function drawStatic(g, n) {
    const bg = g.createLinearGradient(0, 0, 0, n); bg.addColorStop(0, "#12002b"); bg.addColorStop(1, "#3b0764");
    g.fillStyle = bg; g.fillRect(0, 0, n, n);
    g.strokeStyle = "rgba(236,72,153,.55)"; g.lineWidth = 2;
    for (let i = -10; i <= 10; i++) { g.beginPath(); g.moveTo(n / 2 + i * 14, n * .55); g.lineTo(n / 2 + i * 90, n); g.stroke(); }
    for (let k = 0; k < 9; k++) { const y = n * .55 + Math.pow(k / 8, 2) * n * .45; g.beginPath(); g.moveTo(0, y); g.lineTo(n, y); g.stroke(); }
    g.save(); g.translate(n / 2, n * .36); g.shadowColor = "#22d3ee"; g.shadowBlur = 30; g.strokeStyle = "#67e8f9"; g.lineWidth = 9;
    g.beginPath(); g.moveTo(0, 60); g.bezierCurveTo(-120, -20, -60, -110, 0, -45); g.bezierCurveTo(60, -110, 120, -20, 0, 60); g.stroke(); g.restore();
    g.fillStyle = "rgba(255,255,255,.04)"; for (let y = 0; y < n; y += 4) g.fillRect(0, y, n, 1);
    label(g, n, "STATIC HEARTS", "#f0abfc");
  }
  function drawTide(g, n) {
    const sky = g.createLinearGradient(0, 0, 0, n * .6); sky.addColorStop(0, "#020617"); sky.addColorStop(1, "#1e3a8a");
    g.fillStyle = sky; g.fillRect(0, 0, n, n);
    g.fillStyle = "#fff"; for (let i = 0; i < 70; i++) { const x = (i * 97) % n, y = (i * 53) % (n * .5); g.globalAlpha = .3 + (i % 5) / 8; g.fillRect(x, y, 2, 2); }
    g.globalAlpha = 1;
    const glow = g.createRadialGradient(n * .68, n * .24, 20, n * .68, n * .24, 140); glow.addColorStop(0, "rgba(224,242,254,.55)"); glow.addColorStop(1, "rgba(224,242,254,0)");
    g.fillStyle = glow; g.fillRect(0, 0, n, n);
    g.fillStyle = "#f1f5f9"; g.beginPath(); g.arc(n * .68, n * .24, 46, 0, 7); g.fill();
    const sea = g.createLinearGradient(0, n * .6, 0, n); sea.addColorStop(0, "#0c4a6e"); sea.addColorStop(1, "#020617");
    g.fillStyle = sea; g.fillRect(0, n * .6, n, n * .4);
    for (let i = 0; i < 24; i++) { const y = n * .62 + i * 9, w = 120 - i * 3; g.fillStyle = `rgba(224,242,254,${.45 - i * .017})`; g.fillRect(n * .68 - w / 2 + Math.sin(i) * 8, y, w, 2); }
    label(g, n, "LOW TIDE", "#e0f2fe");
  }
  function label(g, n, text, col) {
    g.fillStyle = col; g.font = "700 30px -apple-system, Helvetica, Arial"; g.globalAlpha = .9; g.fillText(text, 34, 58); g.globalAlpha = 1;
  }
  songs.forEach(s => s.art = cover(s.draw));

  // ---- Icons --------------------------------------------------------------------------------
  const ic = {
    play: '<svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24"><path d="M6 4h4.5v16H6zM13.5 4H18v16h-4.5z"/></svg>',
    prev: '<svg viewBox="0 0 24 24"><path d="M11 12l9-6v12zM2 12l9-6v12z"/></svg>',
    next: '<svg viewBox="0 0 24 24"><path d="M13 12L4 6v12zM22 12l-9-6v12z"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><path d="M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zm-7 9h2a5 5 0 0010 0h2a7 7 0 01-6 6.9V22h-2v-3.1A7 7 0 015 12z"/></svg>',
    wave: '<svg viewBox="0 0 24 24"><path d="M3 10h2v4H3zM7 6h2v12H7zM11 3h2v18h-2zM15 7h2v10h-2zM19 10h2v4h-2z"/></svg>',
    photo: '<svg viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm1 12h14l-4.5-6-3.5 4.5-2.5-3z"/></svg>',
  };

  // ---- Build the screen ---------------------------------------------------------------------
  root.innerHTML = `
    <div class="mac"><div class="mac-lid"><div class="viewport"><div class="scr">
      <div class="layer wallpaper"></div>
      <div class="layer colours"></div>
      <div class="layer artbg"></div>
      <div class="layer shade"></div>
      <div class="layer lyricshade"></div>
      <div class="catch" title="Click to show or hide the background"></div>
      <canvas class="viz" width="1000" height="120"></canvas>
      <div class="clock"><div class="date"></div><div class="time"></div></div>
      <div class="side">
        <button data-act="lyrics" title="Lyrics">${ic.mic}</button>
        <button data-act="viz" title="Visualiser">${ic.wave}</button>
        <button data-act="style" title="Blurred album art or album colours">${ic.photo}</button>
      </div>
      <div class="art" title="Enlarge"></div>
      <div class="glass">
        <div class="row"><div style="flex:1;min-width:0"><div class="t"></div><div class="a"></div></div></div>
        <div class="row" style="margin:6px 0 2px"><span class="times cur">0:00</span><div class="bar"><div class="fill"></div></div><span class="times left" style="text-align:right">-0:00</span></div>
        <div class="ctl"><button data-act="prev">${ic.prev}</button><button class="pp" data-act="play"></button><button data-act="next">${ic.next}</button></div>
      </div>
      <div class="lyrics"><div class="track"></div></div>
      <div class="island">
        <div class="mini"></div><div class="minibars"><i></i><i></i><i></i><i></i></div>
        <div class="full"><div class="art2 art" style="position:static;width:70px;height:70px;box-shadow:none;cursor:default"></div>
          <div class="info"><div class="t"></div><div class="a"></div><div class="l"></div></div>
          <div class="ctl"><button data-act="prev">${ic.prev}</button><button class="pp" data-act="play"></button><button data-act="next">${ic.next}</button></div></div>
      </div>
    </div></div></div><div class="mac-base"></div></div>
    <p class="demo-hint"><b>Try it:</b> click a lyric, skip a song, hover over or tap the notch, or click the background.</p>`;

  const $ = s => root.querySelector(s), $$ = s => root.querySelectorAll(s);
  const scr = $(".scr"), viewport = $(".viewport");

  // Scale the 1000×625 screen to fit.
  function fit() { const k = viewport.clientWidth / 1000; scr.style.transform = `scale(${k})`; viewport.style.height = 625 * k + "px"; }
  new ResizeObserver(fit).observe(viewport); fit();

  // ---- State --------------------------------------------------------------------------------
  const st = { song: 0, pos: 0, playing: true, mode: "lyrics", bg: true, style: "art", viz: true };
  const layout = {
    widget:   { art: [346, 422, 56, 56, 10], glass: [330, 400, 340, 100] },
    expanded: { art: [380, 172, 240, 240, 18], glass: [370, 428, 260, 104] },
    lyrics:   { art: [150, 168, 250, 250, 18], glass: [145, 434, 260, 104] },
  };

  function fmt(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); }
  function song() { return songs[st.song]; }
  function lineIndex() { const ls = song().lyrics; let i = 0; ls.forEach((l, k) => { if (st.pos >= l.t) i = k; }); return i; }

  function render() {
    const s = song(), m = layout[st.mode];
    scr.style.setProperty("--accent", s.accent);
    const [ax, ay, aw, ah, ar] = m.art, art = $(".scr > .art");
    Object.assign(art.style, { left: ax + "px", top: ay + "px", width: aw + "px", height: ah + "px", borderRadius: ar + "px", backgroundImage: `url(${s.art})` });
    if (st.mode === "widget") {
      // Small widget: the art sits inside the glass card, next to the song.
      Object.assign($(".glass").style, { left: m.glass[0] + "px", top: m.glass[1] + "px", width: m.glass[2] + "px", height: m.glass[3] + "px", paddingLeft: "86px" });
    } else {
      Object.assign($(".glass").style, { left: m.glass[0] + "px", top: m.glass[1] + "px", width: m.glass[2] + "px", height: m.glass[3] + "px", paddingLeft: "16px" });
    }
    root.querySelectorAll(".t").forEach(e => e.textContent = s.title);
    root.querySelectorAll(".a:not(.art)").forEach(e => e.textContent = s.artist);
    $(".mini").style.backgroundImage = `url(${s.art})`; $(".art2").style.backgroundImage = `url(${s.art})`;
    $(".minibars").style.color = s.accent;

    const showBg = st.mode !== "widget" && st.bg;
    $(".artbg").style.backgroundImage = `url(${s.art})`;
    $(".colours").style.background = `radial-gradient(70% 80% at 85% 10%, ${s.colours[1]}, transparent 70%), linear-gradient(135deg, ${s.colours[0]}, ${s.colours[2]})`;
    $(".artbg").style.opacity = showBg && st.style === "art" ? 1 : 0;
    $(".colours").style.opacity = showBg && st.style === "colours" ? .9 : 0;
    $(".lyricshade").style.opacity = st.mode === "lyrics" && showBg ? 1 : 0;
    $(".lyrics").style.opacity = st.mode === "lyrics" ? 1 : 0;
    $(".lyrics").style.pointerEvents = st.mode === "lyrics" ? "auto" : "none";
    $(".catch").style.display = st.mode === "widget" ? "none" : "block";
    $$(".pp").forEach(b => b.innerHTML = st.playing ? ic.pause : ic.play);
    $$('[data-act="lyrics"]').forEach(b => b.classList.toggle("on", st.mode === "lyrics"));
    $$('[data-act="viz"]').forEach(b => b.classList.toggle("on", st.viz));
    $$('[data-act="style"]').forEach(b => b.classList.toggle("on", st.style === "art"));
    $(".track").innerHTML = s.lyrics.map((l, i) => `<p data-i="${i}">${l.s}</p>`).join("");
    tick(true);
  }

  // ---- Clock, progress and lyrics, every frame ------------------------------------------------
  let last = performance.now(), lastLine = -1;
  function tick(force) {
    const s = song();
    const now = new Date();
    $(".date").textContent = now.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" });
    $(".time").textContent = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }).replace(/\s?[AP]M/i, "");
    $(".fill").style.width = (st.pos / s.length * 100) + "%";
    $(".cur").textContent = fmt(st.pos); $(".left").textContent = "-" + fmt(s.length - st.pos);
    const i = lineIndex();
    if (i !== lastLine || force) {
      lastLine = i;
      root.querySelectorAll(".lyrics p").forEach((p, k) => p.classList.toggle("now", k === i));
      const p = root.querySelector(`.lyrics p[data-i="${i}"]`);
      if (p) $(".track").style.transform = `translateY(${170 - p.offsetTop}px)`;
      $(".island .l").textContent = s.lyrics[i].s;
    }
  }

  // Visualiser: bars that bounce to a beat, taller while the background is showing.
  const viz = $(".viz"), vg = viz.getContext("2d"), bars = new Array(56).fill(0);
  let height = 50;
  function drawViz(t) {
    const on = st.viz && st.mode !== "widget";
    viz.style.opacity = on ? 1 : 0;
    const target = st.bg ? 110 : 46;
    height += (target - height) * 0.06;
    vg.clearRect(0, 0, 1000, 120);
    const s = song(), beat = Math.pow(Math.max(0, Math.sin(t / 1000 * Math.PI * 2 * 1.6)), 6);
    const grad = vg.createLinearGradient(0, 0, 1000, 0);
    grad.addColorStop(0, s.colours[0]); grad.addColorStop(.5, s.colours[1]); grad.addColorStop(1, s.colours[0]);
    vg.fillStyle = grad;
    const w = 1000 / bars.length;
    for (let i = 0; i < bars.length; i++) {
      const centre = 1 - Math.abs(i / (bars.length - 1) - .5) * 1.2;
      const wobble = (Math.sin(t / 230 + i * 1.7) + Math.sin(t / 370 + i * .9) + 2) / 4;
      const want = st.playing ? (0.15 + wobble * 0.55 + beat * 0.3) * centre : 0.04;
      bars[i] += (want - bars[i]) * 0.25;
      const h = Math.max(3, bars[i] * height);
      vg.globalAlpha = .85;
      vg.beginPath(); vg.roundRect ? vg.roundRect(i * w + 2, 120 - h, w - 4, h, 3) : vg.rect(i * w + 2, 120 - h, w - 4, h); vg.fill();
    }
    // Island mini bars.
    root.querySelectorAll(".minibars i").forEach((b, k) => b.style.height = (st.playing ? 3 + bars[k * 9 + 10] * 14 : 3) + "px");
  }

  function frame(t) {
    const dt = Math.min(0.1, (t - last) / 1000); last = t;
    if (st.playing) {
      st.pos += dt;
      if (st.pos >= song().length) { st.song = (st.song + 1) % songs.length; st.pos = 0; render(); }
    }
    tick(false); drawViz(t);
    requestAnimationFrame(frame);
  }

  // ---- Interactions ---------------------------------------------------------------------------
  root.addEventListener("click", e => {
    const b = e.target.closest("[data-act]");
    if (b) {
      e.stopPropagation();
      const a = b.dataset.act;
      if (a === "play") st.playing = !st.playing;
      if (a === "next") { st.song = (st.song + 1) % songs.length; st.pos = 0; st.playing = true; }
      if (a === "prev") { if (st.pos > 3) st.pos = 0; else { st.song = (st.song + songs.length - 1) % songs.length; st.pos = 0; } }
      if (a === "lyrics") st.mode = st.mode === "lyrics" ? "expanded" : "lyrics";
      if (a === "viz") st.viz = !st.viz;
      if (a === "style") st.style = st.style === "art" ? "colours" : "art";
      render(); return;
    }
    const p = e.target.closest(".lyrics p");
    if (p) { st.pos = song().lyrics[+p.dataset.i].t + 0.01; st.playing = true; render(); return; }
    if (e.target.closest(".scr > .art")) { st.mode = st.mode === "widget" ? "expanded" : "widget"; render(); return; }
    if (e.target.closest(".bar")) {
      const r = e.target.closest(".bar").getBoundingClientRect();
      st.pos = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * song().length; render(); return;
    }
    if (e.target.closest(".catch")) { st.bg = !st.bg; render(); return; }
    if (e.target.closest(".island")) { $(".island").classList.add("open"); }
  });
  const island = $(".island");
  island.addEventListener("mouseenter", () => island.classList.add("open"));
  island.addEventListener("mouseleave", () => island.classList.remove("open"));
  document.addEventListener("click", e => { if (!e.target.closest(".island")) island.classList.remove("open"); });

  render();
  requestAnimationFrame(frame);
})();
