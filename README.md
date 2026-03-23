<div align="center">

# Aircraft Design Guide

**A comprehensive, open-source Jupyter Book covering the full aircraft design cycle —<br>from mission definition and configuration selection through to manufacturing, sustainment, and future trends.**

[![Live Site](https://img.shields.io/badge/Read%20Online-GitHub%20Pages-blue?style=flat-square&logo=github)](https://bennygodwinm.github.io/Aircraft_Design_Guide)
[![Build Status](https://img.shields.io/github/actions/workflow/status/BennyGodwinM/Aircraft_Design_Guide/deploy.yml?branch=main&style=flat-square&label=Build)](https://github.com/BennyGodwinM/Aircraft_Design_Guide/actions)
[![License](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey?style=flat-square)](LICENSE)
[![Jupyter Book](https://img.shields.io/badge/built%20with-Jupyter%20Book-orange?style=flat-square&logo=jupyter)](https://jupyterbook.org)

*Fixed-Wing Aircraft · Rotorcraft · Multirotor UAVs · Tiltrotors · Fighter Jets · Hybrid VTOL*

</div>

---

## About

This guide is an open, engineer-first reference on aircraft design — not a textbook, but a structured attempt to articulate *why* design decisions are made the way they are, alongside the theory and Python implementations that back them up.

Each section is a Jupyter notebook. The markdown cells contain theory, physical reasoning, and discussion; the code cells contain Python implementations of key relationships and produce figures that are referenced in the text. The approach mirrors the real design process: start broad, make educated assumptions, and refine progressively through iteration.

The primary references are Raymer, Torenbeek, and Anderson. Where those sources are drawn from they are cited in-text. Where content draws on hands-on practice — from leading AIAA Design-Build-Fly and competitive aircraft design programmes, structural analysis at NIAR, and flight-data research — that is noted too.

> **→ [Read the guide online](https://bennygodwinm.github.io/Aircraft_Design_Guide)**

---

## Contents

The guide is structured across **11 parts** and **26 sections**. Sections marked are published; sections marked have folder structure and outline in place and are under active development.

<details open>
<summary><strong>Part I — Foundations & Context</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 1 | [Introduction to Aircraft Design & Vehicle Classification](https://bennygodwinm.github.io/Aircraft_Design_Guide/01_Overview/index.html) — *What is design as a discipline, and what is the full landscape of aerial vehicles?* | Published |
| 2 | Stakeholders, Requirements & System Specifications — *Who has a stake in this vehicle and how do their needs become engineering requirements?* | In progress |
| 3 | Regulations, Airworthiness & Certification — *What legal and safety frameworks govern design, manufacture, and operation?* | In progress |

</details>

<details>
<summary><strong>Part II — Mission Analysis & Conceptual Design</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 4 | Mission Analysis & Top-Level Aircraft Requirements (TLARs) — *How does an operator's need become precise numbers engineers can design to?* | In progress |
| 5 | Conceptual Design & Configuration Selection — *What does the vehicle look like at the broadest level, and why?* | In progress |
| 6 | Preliminary Sizing & Weight Estimation — *How big and how heavy will it be before we know its detailed shape?* | In progress |

</details>

<details>
<summary><strong>Part III — Aerodynamics</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 7 | Aerodynamic Fundamentals — *What physical principles govern the generation of lift, drag, and moments?* | In progress |
| 8 | Wing & Airfoil Design — *How do we design the lifting surface to meet efficiency, structural, and handling requirements simultaneously?* | In progress |
| 9 | Fuselage & Body Aerodynamics — *How does the fuselage contribute to, and detract from, aerodynamic performance?* | In progress |
| 10 | Stability & Control — Aerodynamic Aspects — *How do the forces and moments produced by the vehicle shape determine its intrinsic stability?* | In progress |

</details>

<details>
<summary><strong>Part IV — Propulsion Systems</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 11 | Propulsion Overview & Selection — *What propulsion technology propels the vehicle, and how is the right one chosen?* | In progress |

</details>

<details>
<summary><strong>Part V — Structural Design & Materials</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 12 | Structural Concepts & Load Paths — *How does the structure carry loads from aerodynamic surfaces to a safe, efficient load path?* | In progress |
| 13 | Materials Selection — *Which materials carry loads most efficiently, and how do manufacturing and certification constrain that choice?* | In progress |
| 14 | Aircraft Systems Design — *What systems must be integrated to make the vehicle function, and how do they interact?* | In progress |

</details>

<details>
<summary><strong>Part VI — Performance Analysis</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 15 | Fixed-Wing Aircraft Performance — *What can this aircraft do, and how do design parameters determine the performance numbers?* | In progress |
| 16 | Rotorcraft & Multirotor Performance — *How does the performance of rotary-wing vehicles differ fundamentally from fixed-wing?* | In progress |

</details>

<details>
<summary><strong>Part VII — Stability & Control</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 17 | Static & Dynamic Stability — *How does the vehicle respond to disturbances, and what makes it naturally stable or unstable?* | In progress |

</details>

<details>
<summary><strong>Part VIII — Detailed Design</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 18 | Structural Analysis & Sizing — *Given the load cases and material properties, how do we size the structural members?* | In progress |
| 19 | Thermal & Acoustic Design — *How do thermal and acoustic environments affect the vehicle and how do we design against them?* | In progress |

</details>

<details>
<summary><strong>Part IX — CAD, Digital Design & Engineering Tools</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 20 | CAD Framework & Digital Design Environment — *What tools and workflows are used to turn analytical definitions into a full 3D digital description?* | In progress |
| 21 | Interference Checks & Clearance Analysis — *How do we ensure all components fit together with no unintended clashes and appropriate clearances?* | In progress |
| 22 | Tolerancing, GD&T & Dimensional Management — *How do we specify allowable variation to ensure parts fit, function, and are manufacturable?* | In progress |

</details>

<details>
<summary><strong>Part X — Manufacturing & Build Considerations</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 23 | Manufacturing Processes & Design for Manufacturing — *How are aircraft components made, and how should design decisions account for manufacturing feasibility and cost?* | In progress |
| 24 | Quality Control, Inspection & Airworthiness of Manufacture — *How do we verify that what has been built matches what was designed and meets required standards?* | In progress |

</details>

<details>
<summary><strong>Part XI — Operations, Sustainment & Lifecycle</strong></summary>

| # | Section | Status |
|---|---------|--------|
| 25 | Maintainability, Reliability & Supportability — *How is the aircraft designed to be maintained efficiently over its operational life?* | In progress |
| 26 | Environmental Sustainability & Future Trends — *Where is aircraft design heading, and how must the industry change to address climate and technological challenges?* | In progress |

</details>

---

## Reading the Guide

The easiest way to read the guide is online at **[bennygodwinm.github.io/Aircraft_Design_Guide](https://bennygodwinm.github.io/Aircraft_Design_Guide)**. No installation required.

The site supports **light and dark mode** (toggle in the top-right), includes a **table of contents** sidebar on every page, and allows downloading notebooks directly for local use.

---

## Running Locally

To build and run the book on your own machine:

```bash
# 1. Clone the repository
git clone https://github.com/BennyGodwinM/Aircraft_Design_Guide.git
cd Aircraft_Design_Guide

# 2. Install Python dependencies (Python 3.10+ recommended)
pip install -r requirements.txt

# 3. Build the book
jupyter-book build .

# 4. Open in your browser
open _build/html/index.html # macOS
xdg-open _build/html/index.html # Linux
start _build/html/index.html # Windows
```

To re-build after changes:

```bash
jupyter-book build . --all # force rebuild of all notebooks
```

---

## Repository Structure

```
Aircraft_Design_Guide/
│
├── _config.yml # Jupyter Book configuration
├── _toc.yml # Table of contents (controls what is published)
├── intro.md # Landing page
├── preface.md # Author preface
├── references.bib # Shared bibliography (BibTeX)
│
├── _static/
│ ├── custom.css # Theme customisations (dark mode, layout)
│ └── custom.js # Theme toggle and UI behaviour
│
├── 01_Overview/ # Section 1 — Introduction to Aircraft Design
│ ├── index.md
│ ├── 01_what_is_design.ipynb
│ ├── 02_philosophy.ipynb
│ ├── 03_design_phases.ipynb
│ ├── 04_interdisciplinary.ipynb
│ ├── 05_hurdles.ipynb
│ └── 06_summary.ipynb
│
├── 02_Requirements/ # Section 2 — Stakeholders & Requirements
├── 03_Regulations/ # Section 3 — Regulations & Certification
├── 04_Mission_Analysis/ # Section 4 — Mission Analysis & TLARs
├── 05_Configuration/ # Section 5 — Configuration Selection
├── 06_Sizing/ # Section 6 — Preliminary Sizing
├── 07_Aerodynamics/ # Section 7 — Aerodynamic Fundamentals
├── 08_Wing_Airfoil/ # Section 8 — Wing & Airfoil Design
├── 09_Fuselage/ # Section 9 — Fuselage Aerodynamics
├── 10_Stability_Aero/ # Section 10 — Stability (Aerodynamic)
├── 11_Propulsion/ # Section 11 — Propulsion Systems
├── 12_Structures/ # Section 12 — Structural Concepts
├── 13_Materials/ # Section 13 — Materials Selection
├── 14_Systems/ # Section 14 — Aircraft Systems
├── 15_Performance_Fixed_Wing/ # Section 15 — Fixed-Wing Performance
├── 16_Performance_Rotorcraft/ # Section 16 — Rotorcraft Performance
├── 17_Stability_Control/ # Section 17 — Static & Dynamic Stability
├── 18_Structural_Analysis/ # Section 18 — Structural Analysis & Sizing
├── 19_Thermal_Acoustic/ # Section 19 — Thermal & Acoustic Design
├── 20_CAD/ # Section 20 — CAD & Digital Design
├── 21_Interference/ # Section 21 — Interference & Clearance
├── 22_Tolerancing/ # Section 22 — Tolerancing & GD&T
├── 23_Manufacturing/ # Section 23 — Manufacturing Processes
├── 24_Quality/ # Section 24 — Quality Control & Inspection
├── 25_Sustainment/ # Section 25 — Maintainability & Reliability
└── 26_Future_Trends/ # Section 26 — Sustainability & Future Trends
```

Each section folder contains an `index.md` (chapter overview) and numbered `.ipynb` notebooks (one per subsection).

**Publishing a section:** Edit `_toc.yml` and uncomment the relevant block. The GitHub Actions workflow builds and deploys automatically on every push to `main`.

---

## Deployment

The guide is deployed automatically via **GitHub Actions** on every push to `main`. The workflow:

1. Checks out the repository
2. Installs dependencies from `requirements.txt`
3. Runs `jupyter-book build .` — executing notebooks and building HTML
4. Deploys `_build/html/` to GitHub Pages

The workflow file is at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## Contributing

Contributions, corrections, and suggestions are welcome.

- **Found an error or unclear explanation?** [Open an issue](https://github.com/BennyGodwinM/Aircraft_Design_Guide/issues)
- **Want to contribute a section or improvement?** Fork the repo, make changes in a branch, and open a pull request
- **Citation format:** All references should be added to `references.bib` and cited in-text using `{cite}key`

Please keep contributions consistent with the existing style: theory-first prose in markdown cells, Python code cells for implementations and figures, and a bibliography block at the end of each notebook.

---

## Primary References

| Reference | Used for |
|-----------|----------|
| Raymer, D. P. *Aircraft Design: A Conceptual Approach*, 6th ed. AIAA, 2018. | Conceptual design methodology, weight estimation, configuration selection |
| Torenbeek, E. *Advanced Aircraft Design*. Wiley, 2013. | Advanced optimization, civil transport methodology |
| Anderson, J. D. *Introduction to Flight*, 7th ed. McGraw-Hill, 2012. | Aerodynamic foundations, introductory definitions |
| Nicolai, L. M. *Estimating R/C Model Aerodynamics and Performance*. Lockheed Martin, 2002. | Drag estimation, small aircraft performance |
| Sadraey, M. H. *Aircraft Design: A Systems Engineering Approach*. Wiley, 2012. | Systems engineering perspective, requirements |
| GabeFPV. *Engineering a UAV — Part 1*. YouTube, Feb. 2026. | Practical UAV design walkthrough, mission requirements, constraint analysis |

Full bibliography entries are in [`references.bib`](references.bib).

---

## Author

**Benny Godwin Manoharan**
Aerospace Engineer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/bennygodwin/)
[![GitHub](https://img.shields.io/badge/GitHub-BennyGodwinM-black?style=flat-square&logo=github)](https://github.com/BennyGodwinM)

---

<div align="center">

© 2026 Benny Godwin Manoharan · Built with [Jupyter Book](https://jupyterbook.org) · Hosted on [GitHub Pages](https://pages.github.com)

</div>
