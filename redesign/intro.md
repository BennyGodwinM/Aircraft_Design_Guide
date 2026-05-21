---
html_meta:
  description: "An open, engineer-first reference on aircraft design — theory, trade-offs, and Python implementations across 27 chapters."
---

```{raw} html
<div class="ag-hero">
  <div class="ag-hero__inner">

    <div class="ag-hero__eyebrow">Aircraft Design Guide</div>

    <h1 class="ag-hero__title">
      Fixed-wing design,<br>
      <span class="ag-dim">from first principles.</span>
    </h1>

    <p class="ag-hero__subtitle">
      An open, engineer-first reference covering the full design cycle —
      requirements through sustainment — with theory, physical reasoning,
      and Python implementations in every chapter.
    </p>

    <div class="ag-hero__cta">
      <a class="ag-btn ag-btn--primary" href="preface.html">Read the preface</a>
      <a class="ag-btn ag-btn--secondary" href="01_Overview/overview.html">Start chapter 1</a>
    </div>

    <div class="ag-hero__stats">
      <div class="ag-stat">
        <span class="ag-stat__value">27</span>
        <span class="ag-stat__label">Chapters</span>
      </div>
      <div class="ag-stat">
        <span class="ag-stat__value">Python</span>
        <span class="ag-stat__label">Implementations</span>
      </div>
      <div class="ag-stat">
        <span class="ag-stat__value">Open</span>
        <span class="ag-stat__label">Source</span>
      </div>
    </div>

  </div>
</div>
```

```{raw} html
<div class="ag-section-sep"><span class="ag-section-sep__label">What this covers</span></div>
```

These notes cover the fundamentals of fixed-wing aircraft design from first principles through
to the trade-off methods used in real-world practice.
The structure mirrors the way a practising engineer actually approaches a new design:
start broad, make educated assumptions, and refine progressively through iteration.

Each chapter is a self-contained Jupyter notebook. The markdown cells contain theory and physical
reasoning; the code cells contain Python implementations of key relationships and produce figures
referenced directly in the text.

```{raw} html
<div class="ag-section-sep"><span class="ag-section-sep__label">Chapters</span></div>

<div class="ag-grid">

  <a class="ag-card" href="01_Overview/overview.html">
    <div class="ag-card__num">01</div>
    <div class="ag-card__title">Overview</div>
    <div class="ag-card__desc">The design cycle and engineering philosophy</div>
  </a>

  <a class="ag-card" href="02_Requirements/requirements.html">
    <div class="ag-card__num">02</div>
    <div class="ag-card__title">Requirements</div>
    <div class="ag-card__desc">Deriving and structuring design requirements</div>
  </a>

  <a class="ag-card" href="03_Regulations/regulations.html">
    <div class="ag-card__num">03</div>
    <div class="ag-card__title">Regulations</div>
    <div class="ag-card__desc">Certification basis and airworthiness standards</div>
  </a>

  <a class="ag-card" href="04_Mission_Analysis/mission_analysis.html">
    <div class="ag-card__num">04</div>
    <div class="ag-card__title">Mission Analysis</div>
    <div class="ag-card__desc">Payload-range, mission profile, and trades</div>
  </a>

  <a class="ag-card" href="05_Configuration/configuration.html">
    <div class="ag-card__num">05</div>
    <div class="ag-card__title">Configuration</div>
    <div class="ag-card__desc">Layout selection and concept comparison</div>
  </a>

  <a class="ag-card" href="06_Sizing/sizing.html">
    <div class="ag-card__num">06</div>
    <div class="ag-card__title">Sizing</div>
    <div class="ag-card__desc">Constraint analysis and wing/thrust loading</div>
  </a>

  <a class="ag-card" href="07_Aerodynamics/aerodynamics.html">
    <div class="ag-card__num">07</div>
    <div class="ag-card__title">Aerodynamics</div>
    <div class="ag-card__desc">Lift, drag, and aerodynamic efficiency</div>
  </a>

  <a class="ag-card" href="08_Wing_Airfoil/wing_airfoil.html">
    <div class="ag-card__num">08</div>
    <div class="ag-card__title">Wing & Airfoil</div>
    <div class="ag-card__desc">Planform design and airfoil selection</div>
  </a>

  <a class="ag-card" href="09_Fuselage/fuselage.html">
    <div class="ag-card__num">09</div>
    <div class="ag-card__title">Fuselage</div>
    <div class="ag-card__desc">Cross-section, layout, and structural form</div>
  </a>

  <a class="ag-card" href="10_Stability_Aero/stability_aero.html">
    <div class="ag-card__num">10</div>
    <div class="ag-card__title">Static Stability</div>
    <div class="ag-card__desc">Longitudinal and lateral-directional stability</div>
  </a>

  <a class="ag-card" href="11_Propulsion/propulsion.html">
    <div class="ag-card__num">11</div>
    <div class="ag-card__title">Propulsion</div>
    <div class="ag-card__desc">Engine selection, sizing, and integration</div>
  </a>

  <a class="ag-card" href="12_Structures/structures.html">
    <div class="ag-card__num">12</div>
    <div class="ag-card__title">Structures</div>
    <div class="ag-card__desc">Load paths, wing box, and fuselage frames</div>
  </a>

  <a class="ag-card" href="13_Materials/materials.html">
    <div class="ag-card__num">13</div>
    <div class="ag-card__title">Materials</div>
    <div class="ag-card__desc">Metals, composites, and material selection</div>
  </a>

  <a class="ag-card" href="14_Systems/systems.html">
    <div class="ag-card__num">14</div>
    <div class="ag-card__title">Systems</div>
    <div class="ag-card__desc">Avionics, hydraulics, and aircraft systems</div>
  </a>

  <a class="ag-card" href="15_Performance_Fixed_Wing/performance_fixed_wing.html">
    <div class="ag-card__num">15</div>
    <div class="ag-card__title">Performance</div>
    <div class="ag-card__desc">Take-off, climb, cruise, and range equations</div>
  </a>

  <a class="ag-card" href="16_Performance_Rotorcraft/performance_rotorcraft.html">
    <div class="ag-card__num">16</div>
    <div class="ag-card__title">Rotorcraft</div>
    <div class="ag-card__desc">Hover, forward flight, and autorotation</div>
  </a>

  <a class="ag-card" href="17_Stability_Control/stability_control.html">
    <div class="ag-card__num">17</div>
    <div class="ag-card__title">Flight Dynamics</div>
    <div class="ag-card__desc">Dynamic modes and control surface sizing</div>
  </a>

  <a class="ag-card" href="18_Structural_Analysis/structural_analysis.html">
    <div class="ag-card__num">18</div>
    <div class="ag-card__title">Structural Analysis</div>
    <div class="ag-card__desc">V-n diagrams, loads, and stress analysis</div>
  </a>

  <a class="ag-card" href="19_Thermal_Acoustic/thermal_acoustic.html">
    <div class="ag-card__num">19</div>
    <div class="ag-card__title">Thermal & Acoustic</div>
    <div class="ag-card__desc">Thermal management and noise mitigation</div>
  </a>

  <a class="ag-card" href="20_CAD/cad.html">
    <div class="ag-card__num">20</div>
    <div class="ag-card__title">CAD</div>
    <div class="ag-card__desc">Geometry definition and CAD workflow</div>
  </a>

  <a class="ag-card" href="21_Interference/interference.html">
    <div class="ag-card__num">21</div>
    <div class="ag-card__title">Interference</div>
    <div class="ag-card__desc">Aerodynamic interference effects</div>
  </a>

  <a class="ag-card" href="22_Tolerancing/tolerancing.html">
    <div class="ag-card__num">22</div>
    <div class="ag-card__title">Tolerancing</div>
    <div class="ag-card__desc">GD&T and stack-up analysis</div>
  </a>

  <a class="ag-card" href="23_Manufacturing/manufacturing.html">
    <div class="ag-card__num">23</div>
    <div class="ag-card__title">Manufacturing</div>
    <div class="ag-card__desc">DFM, processes, and production planning</div>
  </a>

  <a class="ag-card" href="24_Quality/quality.html">
    <div class="ag-card__num">24</div>
    <div class="ag-card__title">Quality</div>
    <div class="ag-card__desc">Inspection, testing, and quality assurance</div>
  </a>

  <a class="ag-card" href="25_Sustainment/sustainment.html">
    <div class="ag-card__num">25</div>
    <div class="ag-card__title">Sustainment</div>
    <div class="ag-card__desc">Reliability, maintainability, and life-cycle cost</div>
  </a>

  <a class="ag-card" href="26_Future_Trends/future_trends.html">
    <div class="ag-card__num">26</div>
    <div class="ag-card__title">Future Trends</div>
    <div class="ag-card__desc">eVTOL, hydrogen, and emerging configurations</div>
  </a>

  <a class="ag-card" href="27_Special_Topics/special_topics.html">
    <div class="ag-card__num">27</div>
    <div class="ag-card__title">Special Topics</div>
    <div class="ag-card__desc">UAVs, stealth, and non-standard design problems</div>
  </a>

</div>
```

```{raw} html
<div class="ag-section-sep" style="margin-top: 3.5rem;"><span class="ag-section-sep__label">How to use these notes</span></div>
```

Each chapter is a self-contained Jupyter notebook. Read them in order for a structured walkthrough,
or jump directly to the chapter relevant to your current problem — each one is written to stand alone.
The code cells are not decoration: run them, modify the parameters, and observe how the output changes.
That interaction is where most of the learning happens.

```{raw} html
<div class="ag-section-sep"><span class="ag-section-sep__label">Primary references</span></div>

<ul class="ag-ref-list">
  <li data-num="R1"><em>Aircraft Design: A Conceptual Approach</em> — Raymer (2018)</li>
  <li data-num="R2"><em>Advanced Aircraft Design</em> — Torenbeek (2013)</li>
  <li data-num="R3"><em>Introduction to Flight</em> — Anderson (2012)</li>
  <li data-num="R4"><em>Fundamentals of Aircraft and Airship Design</em> — Nicolai & Carichner (2010)</li>
  <li data-num="R5"><em>Aircraft Design: A Systems Engineering Approach</em> — Sadraey (2012)</li>
</ul>
```

```{raw} html
<div class="ag-section-sep"><span class="ag-section-sep__label">Author</span></div>

<div class="ag-about">
  <div class="ag-about__name">Benny Godwin Manoharan</div>
  <div class="ag-about__role">Aerospace Engineer</div>
  <p class="ag-about__bio">
    These notes grew out of leading two concurrent student design programmes — AIAA Design-Build-Fly
    and the Bronze Propeller competition — as Chief Engineer, alongside structural analysis work at
    the National Institute for Aviation Research and flight-data research across platforms from the
    MD-87 to the C-130. The goal is to close the gap between knowing the equations and knowing why
    they matter.
  </p>
  <div class="ag-links">
    <a class="ag-link-pill" href="https://www.linkedin.com/in/bennygodwin/" target="_blank" rel="noopener">
      LinkedIn
    </a>
    <a class="ag-link-pill" href="https://github.com/BennyGodwinM" target="_blank" rel="noopener">
      GitHub
    </a>
    <a class="ag-link-pill" href="https://github.com/BennyGodwinM/Aircraft_Design_Guide" target="_blank" rel="noopener">
      Repository
    </a>
  </div>
</div>
```

```{bibliography}
:filter: docname in docnames
```
