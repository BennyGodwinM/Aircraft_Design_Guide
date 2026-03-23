# Preface

*Who wrote this, and why*

---

I'll be honest up front: I'm not a professor, and this isn't a textbook in the traditional sense.
I'm Benny Godwin Manoharan — an aerospace engineering senior at Wichita State University, graduating in May 2025.
What I am is someone who has spent the last few years deeply embedded in the practice of aircraft design,
and who finds the subject compelling enough to want to write it down clearly.

The immediate motivation came from running two student design programmes simultaneously —
the AIAA Design-Build-Fly team and the Bronze Propeller competition team — both as Chief Engineer.
Leading eight subsystems across two concurrent projects, writing requirement traceability matrices,
standing in front of flight-readiness reviews, watching a design you've iterated for months either fly or not:
that experience builds a particular kind of intuition about aircraft design that classroom derivations alone don't convey.
This resource is an attempt to articulate that intuition alongside the theory.

Beyond the student competitions, I've had the chance to work at the National Institute of Aviation Research
on structural analysis and MBSE-based requirement flow-down, and as a research assistant on flight-data analysis
across platforms from the MD-87 to the C-130.
Those roles confirmed something I kept noticing: the gap between knowing the equations and knowing *why* the equations matter
— why a particular trade-off is made, why a constraint bites in an unexpected place — is where most of the real learning happens.
These notes are my attempt to close that gap.

## What this resource is

These notes cover the fundamentals of fixed-wing aircraft design from first principles through to trade-off methods.
The structure mirrors the way a practising engineer actually approaches a new design: start broad, make educated assumptions,
and refine progressively through iteration.
Each section is a Jupyter notebook — theory and discussion in the text, Python implementations of key relationships in the code cells.

The primary references are Raymer, Torenbeek, and Anderson.
Where I draw on those sources I cite them; where I'm synthesising from hands-on experience I try to say so.

## A note on scope

Aircraft design is genuinely interdisciplinary — aerodynamics, structures, propulsion, systems, and operations
are all coupled, and no single discipline can be resolved in isolation.
These notes try to honour that complexity without pretending to be comprehensive.
The goal is not to replace a four-year degree or a shelf of textbooks,
but to give an honest, engineer's-eye account of how the pieces fit together.

If something is unclear, or if you spot an error, the repository is open and issues are welcome.

---

*Benny Godwin Manoharan*
*Wichita State University, Department of Aerospace Engineering*
*[linkedin.com/in/bennygodwin](https://www.linkedin.com/in/bennygodwin/)*
