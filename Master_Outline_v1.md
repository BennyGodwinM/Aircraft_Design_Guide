
# Aircraft Design — Master Notebook Outline
### Comprehensive Edition · Informed by Full Study Library

> **Scope:** Aircraft design in its fullest sense — from blank-sheet requirements through hypersonic vehicles,
> advanced CFD, flight control systems, and digital manufacturing. Strictly aircraft-domain; no orbital mechanics
> or rocket propulsion except where directly relevant to aircraft propulsion or high-speed vehicle design.
>
> **How to read this outline:** Part I introduces the field. Part II is a set of nine crash courses — one for
> each major discipline — giving you enough working knowledge to understand *why* each deep-dive section matters
> before you get there. Parts III onward are those deep-dives.
>
> **Reference key:** Each section lists its primary textbooks from the Study library.
> All paths are relative to `C:\Users\benny\Desktop\Study`.

---

# PART I — FOUNDATIONS & CONTEXT

## Section 1 · Introduction to Aircraft Design & Vehicle Classification
*Primary refs: Anderson — Introduction to Flight 7th Ed; Raymer — Aircraft Design: A Conceptual Approach 6th Ed;
Leishman — Introduction to Aerospace Flight Vehicles; Quest for Performance (NASA)*

### 1.1 What Is Aircraft Design?
### 1.2 A History of Aircraft Design — From the Wright Flyer to the Present
### 1.3 Design Philosophy: Art, Science, and Engineering Judgement
### 1.4 The Three Design Phases: Conceptual, Preliminary, and Detail
### 1.5 The Interdisciplinary Nature of Aircraft Design — The V-Diagram and Design Spiral
### 1.6 Vehicle Classification Taxonomy
- Fixed-wing: transport, fighter, general aviation, agricultural, maritime patrol
- Rotorcraft: single-main-rotor, tandem, coaxial, tiltrotor
- Multirotor UAVs and eVTOL
- Blended wing body and unconventional configurations
### 1.7 Common Hurdles, Trade-offs, and the "No Free Lunch" Reality
### 1.8 Summary and Guiding Questions

---

## Section 2 · Stakeholders, Requirements & Systems Engineering
*Primary refs: NASA Systems Engineering Handbook; Systems Engineering for Aerospace (Sheng);
The Mechanical Design Process (Ullman); Raymer Ch. 2; Sadraey — Aircraft Design: A Systems Engineering Approach*

### 2.1 Stakeholder Identification and Analysis
### 2.2 Needs, Goals, and Objectives — Translating Customer Voice to Technical Language
### 2.3 Requirements Engineering
- Functional vs. non-functional requirements
- Requirements traceability matrix (RTM)
- MIL-STD-961 and DO-178C/DO-254 overview
### 2.4 Mission Profiles and Design Drivers
### 2.5 Figures of Merit, Weighted Decision Matrices, and Trade Studies
### 2.6 Systems Engineering Process — Concurrent Engineering and IPT Structure
### 2.7 The Design Review Cycle: SRR, PDR, CDR, TRR

---

## Section 3 · Regulations, Airworthiness & Certification
*Primary refs: AIAA Aerospace Design Engineers Guide; Aviation Mechanic Handbook (Crane);
NASA Systems Engineering Handbook; Understanding Air France 447; The Crash Detectives (Negroni)*

### 3.1 Regulatory Bodies and Jurisdictions — FAA, EASA, ICAO, CAAC, military MIL-SPEC
### 3.2 Certification Basis and the Type Certificate Process
### 3.3 Airworthiness Categories
- FAR/CS Part 23 — Normal, Utility, Acrobatic, Commuter
- FAR/CS Part 25 — Transport Category
- FAR/CS Part 27 and 29 — Rotorcraft
- FAR Part 107 and EASA SC-VTOL — Drones and eVTOL
### 3.4 Safety Philosophy: Failure Modes, FTA, and Certification by Analysis
### 3.5 Environmental and Noise Regulations — ICAO Annex 16, Stage standards
### 3.6 Case Studies in Certification Failure — Air France 447, Boeing 737 MAX

---

# PART II — PREREQUISITE CRASH COURSES

> These nine sections are the on-ramp to the rest of the series. Each one gives you the working
> intuition and vocabulary of a major discipline before the full treatment begins. They are deliberately
> applied — every concept is introduced in the context of what it means for an aircraft — and
> deliberately brief. You are not expected to master these topics here; you are expected to *recognise*
> them when they appear in Parts III onward.

---

## Section 4 · The Aircraft Designer's Mindset & Engineering Philosophy
*Primary refs: The Mechanical Design Process (Ullman); Structures — Or Why Things Don't Fall Down (Gordon);
NASA Systems Engineering Handbook; Projects of Skunk Works (Pace)*

### 4.1 First-Principles Thinking vs. Rules of Thumb
- When to trust a textbook formula and when to derive it from scratch
- How Skunk Works used a small team to outpace programmes ten times its size
- Kelly Johnson's 14 rules and the "best technical solution" ethos
### 4.2 Order-of-Magnitude Estimation — the Back-of-Envelope as a Design Tool
- Fermi problems in aerospace: estimating MTOW before you have any data
- Why being wrong by 10% early beats being paralysed by false precision
- Example: estimating fuel fraction for a transatlantic airliner in five lines of algebra
### 4.3 The Design Spiral — Iteration as Method, Not Failure
- Why no aircraft was ever designed in a straight line
- Convergence criteria: when do you stop iterating?
- Managing design freeze vs. design creep on a programme schedule
### 4.4 Trade-offs and the Constraint Landscape
- Every improvement costs something — nothing is free in aerospace
- The weight snowball: how 1 kg of structure costs 3–5 kg of MTOW
- Visualising the design space: Pareto fronts and feasible regions
### 4.5 Reading Technical Literature as a Designer
- How to extract what you need from a textbook chapter quickly
- Using handbooks (Raymer, Roskam, DATCOM) vs. deriving from first principles
- Building a personal design notebook — capturing assumptions and decisions
### 4.6 Failure as a Teacher — Learning from Accidents and Design Errors
- The Comet: fatigue cracks from square windows — the birth of damage tolerance
- The DC-10 cargo door: a system integration failure that killed 346 people
- The 737 MAX: software masking an aerodynamic problem — and what it means for FCS design
- Pattern recognition: what every major aircraft accident has in common

---

## Section 5 · Aerodynamics Crash Course
*Primary refs: Fundamentals of Aerodynamics 6th Ed (Anderson);
Introduction to Flight 7th Ed (Anderson);
Aerodynamics for Engineers 5th Ed (Bertin, Cummings);
Introduction to the Aerodynamics of Flight (Talay, NASA)*

### 5.1 The Atmosphere as a Working Fluid
- Air as a compressible gas: density, pressure, temperature, viscosity
- The International Standard Atmosphere (ISA) — why it matters for every design calculation
- How air properties change with altitude: the designer's most-used table
### 5.2 The Four Forces — A First Look
- Lift, drag, thrust, weight: what each one is and who produces it
- Steady level flight as a force balance: L = W and T = D
- Why this simple picture breaks down in manoeuvre, climb, and acceleration
### 5.3 How Lift Is Generated
- The Bernoulli explanation: pressure difference across a cambered airfoil
- The Newton/circulation explanation: downwash and reaction force
- Why both explanations are correct and what each one tells you
- Angle of attack: the primary control variable for lift
- Cl vs. α — the lift curve, its slope, and where it ends (stall)
### 5.4 Drag — the Designer's Enemy
- Profile drag (pressure + skin friction): what shape and surface finish actually do
- Induced drag: the unavoidable price of generating lift with a finite wing
- Wave drag: the compressibility penalty above Mcrit
- The drag polar — Cl vs. Cd — as the aircraft's aerodynamic fingerprint
- L/D: the single most important efficiency ratio in fixed-wing design
### 5.5 The Wing — Translating Airfoil Into Three Dimensions
- How a 2D airfoil becomes a 3D wing: span, chord, taper, and sweep
- Aspect ratio: why gliders have long thin wings and fighters have short fat ones
- Downwash and its effect on the tail: the induced angle of attack
- Wingtip effects: tip vortices, winglets, and why they work
### 5.6 Viscosity and the Boundary Layer — Where Drag Lives
- The no-slip condition: velocity goes to zero at the wall
- Laminar vs. turbulent boundary layers: friction levels and what triggers transition
- Separation: what it looks like, what causes it, and why it matters for stall
### 5.7 Compressibility — What Happens When the Air Can't Get Out of the Way
- Speed of sound as a physical limit on information propagation in a fluid
- Mach number: subsonic, transonic, supersonic, hypersonic — where each regime begins
- Shock waves: the abrupt pressure jump that creates wave drag
- The area rule: why the F-102 needed a waist before it could go supersonic
### 5.8 Rotors and Propellers — Aerodynamics in Rotation
- Actuator disk theory: the momentum change that creates thrust or lift
- Why disk loading (T/A) governs hover efficiency
- Blade element theory: the rotor blade as a wing in rotation
- Retreating blade stall: the Mach/velocity asymmetry that limits rotorcraft top speed
### 5.9 Key Numbers Every Designer Carries in Their Head
- A 737-800 cruises at L/D ≈ 17; a sailplane reaches L/D ≈ 50
- Stall speed scales as √(W/S): doubling wing loading raises Vs by 41%
- Induced drag: CDi = CL²/(π·AR·e) — the finite-wing penalty written out
- Skin friction Cf ≈ 0.003 on a typical transport wing — where that number comes from

---

## Section 6 · Propulsion Crash Course
*Primary refs: Gas Turbine Performance (Walsh, Fletcher);
Jet Engines and Propulsion Systems for Engineers (Fowler);
Introduction to Flight 7th Ed (Anderson);
Thermodynamics: An Engineering Approach (Çengel, Boles)*

### 6.1 The Thrust Equation — Where the Force Comes From
- Newton's second law applied to a moving fluid: F = ṁ·Δv
- Jet vs. propeller: trading high Δv for low ṁ against low Δv for high ṁ
- Why propulsive efficiency rises as exhaust velocity approaches flight velocity
- The bypass ratio as the dial between "pure jet" and "propeller"
### 6.2 The Piston Engine — Baseline for Understanding Everything Else
- The four-stroke cycle: intake, compression, power, exhaust
- Power, torque, and BSFC: what the engine delivers and what it costs
- Altitude effects: why normally aspirated engines lose power with height
- Turbocharging and supercharging: restoring sea-level power at altitude
- The propeller as a rotating wing: efficiency, pitch, and advance ratio
### 6.3 The Gas Turbine — the Machine That Changed Aviation
- The Brayton cycle: compression → combustion → expansion
- The turbojet: simple, powerful, and thirsty
- The turbofan: the bypass ratio revolution and why all modern airliners use it
- The turboprop: when to use a gearbox and propeller instead of a nozzle
- The turboshaft: the turbofan's cousin, built for rotorcraft
- Thrust Specific Fuel Consumption (TSFC): the engine's primary efficiency metric
### 6.4 Engine Performance Across the Flight Envelope
- How thrust varies with altitude: the lapse rate problem
- How thrust varies with Mach number: ram recovery vs. inlet losses
- Throttle and partial-power operation: specific range optimisation
- Non-dimensional engine maps: how manufacturers specify performance
### 6.5 The Rubber Engine Concept — Sizing Propulsion to the Airframe
- Why you do not pick a catalogue engine in conceptual design
- Scaling thrust with MTOW: what the T/W ratio tells you
- Engine deck format: what data you get and how to use it in mission analysis
### 6.6 Ramjets, Scramjets, and Rocket-Assisted Propulsion
- The ram effect: why a ramjet has no moving compressor
- Scramjet: combustion in supersonic flow — the fundamental challenge
- Rocket assist for takeoff (RATO) and combined-cycle propulsion concepts
### 6.7 Electric and Hybrid Propulsion — the New Frontier
- Electric motor specific power: where it stands today and the trend line
- Battery energy density: the wall that limits all-electric range
- Series, parallel, and turboelectric hybrid architectures
- Why Distributed Electric Propulsion (DEP) changes the airframe design fundamentally
### 6.8 Propulsion-Airframe Integration
- Nacelle drag: you pay an aerodynamic penalty for every engine you hang on
- Inlet design: capturing the right amount of air at every flight condition
- Effect of engine placement on CG: why engine position is a stability decision

---

## Section 7 · Static Stability Crash Course
*Primary refs: Introduction to Flight 7th Ed (Anderson);
Airplane Performance, Stability and Control (Perkins, Hage);
Introduction to Aircraft Flight Mechanics (textbook)*

### 7.1 What Is Stability? — the Three Questions Every Designer Must Answer
- Stability vs. control: two different things, frequently confused
- Static stability: does the aircraft tend to return to equilibrium after a disturbance?
- Dynamic stability: does the return happen quickly, smoothly, and without oscillation?
- Positive, neutral, and negative static stability — and when each is actually desirable
### 7.2 Longitudinal Static Stability — Pitch
- The pitching moment: what creates it and what controls it
- Angle-of-attack stability: if the nose rises, does a restoring moment develop?
- The neutral point: the aerodynamic centre of the whole aircraft
- Static margin: the gap between CG and neutral point — the designer's primary dial
- Why a large static margin makes the aircraft stable but heavy to control
- Why fighters use Relaxed Static Stability (RSS) — and what RSS demands of the FCS
### 7.3 The Horizontal Tail — Its Job and How It Does It
- Tail volume coefficient: the non-dimensional sizing parameter
- Tail efficiency and downwash: why the tail sees a different angle of attack from the wing
- Elevator power: how much moment can the tail generate per degree of deflection?
- Stick-fixed vs. stick-free neutral point
### 7.4 Directional Static Stability — Yaw
- Weathercock stability: why the vertical tail points the nose into the relative wind
- Cnβ: the directional stability derivative and what sets it
- Adverse yaw and the coupling between roll and yaw inputs
### 7.5 Lateral Static Stability — Roll
- Dihedral effect: why dihedral makes a wing self-levelling in a sideslip
- Sweep contribution to dihedral effect in high-speed aircraft
- Clβ: the lateral stability derivative — positive or negative, and why it matters
### 7.6 CG Travel and the Permissible CG Range
- How fuel burn moves the CG forward during a mission
- Loading configurations: full payload forward/aft, zero fuel weight
- The "CG potato" diagram: the permissible flight envelope on a CG-MTOW map
- Active CG control by fuel transfer: Concorde, A380
### 7.7 Stability vs. Controllability — the Designer's Central Tension
- More stable means harder to manoeuvre; less stable means easier to upset
- Fighter design: RSS gives manoeuvre performance; the FCS provides artificial stability
- Airliner design: modest positive margin provides safety with acceptable control forces

---

## Section 8 · Dynamic Stability Crash Course
*Primary refs: Airplane Performance, Stability and Control (Perkins, Hage);
Aircraft Dynamics — From Modeling to Simulation (Napolitano);
Introduction to Aircraft Flight Mechanics (textbook)*

### 8.1 From Static to Dynamic — Why the Aircraft Keeps Moving After a Disturbance
- Static analysis tells you the direction of the restoring force
- Dynamic analysis tells you how that force plays out over time
- The equation of motion for a disturbed aircraft: mass × acceleration = restoring moment
- Eigenvalues: the mathematical signature of a dynamic mode
### 8.2 The Longitudinal Modes
- Short-period mode: rapid pitch oscillation at high frequency, well-damped in good designs
  - What drives frequency: pitch stiffness (static margin × dynamic pressure × Sref)
  - What drives damping: the pitch damping derivative Cmq
  - Handling quality requirement: too slow feels sluggish; too fast feels twitchy
- Phugoid mode: slow speed/altitude exchange at low frequency, lightly damped
  - Physical mechanism: kinetic energy oscillates with potential energy
  - Why it barely affects handling but matters enormously for autopilot design
  - Approximate period: T ≈ π√2 V/g — grows with airspeed
### 8.3 The Lateral-Directional Modes
- Roll mode: first-order exponential roll response to aileron input
  - Roll time constant τ: what it means for pilot workload and MIL-HDBK-1797 limits
- Dutch roll: coupled yaw-roll oscillation
  - Physical mechanism: yaw creates sideslip, which creates roll, which restores yaw
  - Frequency and damping: the primary concern in large swept-wing transports
  - Yaw damper: the near-universal fix for poor Dutch roll — and why it is always needed
- Spiral mode: slow divergence or convergence in a banked turn
  - Divergent spiral is almost always present but slow enough for the pilot to correct
  - The fundamental trade-off: improving Dutch roll damping often makes spiral more divergent
### 8.4 Why Dynamic Stability Governs Handling Qualities — and FCS Design
- Cooper-Harper Rating (CHR): the scale from "excellent" (1) to "uncontrollable" (10)
- Level 1, 2, 3 handling qualities: what the military and civil regulations require
- A statically stable aircraft with poor dynamic modes is still an unacceptable design
- The FCS as a stability augmentation system: moving eigenvalues into the acceptable region
### 8.5 Rotorcraft Dynamic Instabilities — a Preview
- Ground resonance: the destructive coupling between rotor lag mode and fuselage roll
- Rotor flap-lag coupling: why articulated rotor hubs exist
- Why helicopters have inherently poor dynamic stability in forward flight

---

## Section 9 · Flight Control Crash Course
*Primary refs: Aircraft Control and Simulation (Stevens, Lewis);
Automatic Control of Aircraft and Missiles (Blakelock);
Flight Control Systems — Practical Issues in Design and Implementation (Pratt);
Control System Design (Friedland)*

### 9.1 What Flight Control Actually Does
- The pilot's job: generating the moments needed to follow a desired trajectory
- The FCS's job: turning pilot intent into actuator commands while protecting the aircraft
- Why modern aircraft cannot be flown without the FCS — relaxed static stability means the open-loop aircraft diverges in seconds without correction
### 9.2 Control Surfaces — the Physical Actuators
- Elevator: pitch moment — authority, hinge moment, and sizing
- Ailerons: roll moment — differential deflection, adverse yaw, reversal speed
- Rudder: yaw moment — directional control, crosswind landing, engine-out authority
- Secondary surfaces: spoilers, flaperons, elevons, canards
- Limits on control authority: aerodynamic hinge moment vs. actuator output force
### 9.3 Classical Control — Feedback Loops and Why They Work
- The feedback loop: sensor → controller → actuator → plant → sensor
- Proportional, Integral, and Derivative (PID) action — what each term does
  - P: stiffness — reduces error but cannot eliminate steady-state offset
  - I: steady-state accuracy — eliminates offset but can cause integrator windup
  - D: damping — resists rapid change but amplifies sensor noise
- Gain and phase margin: the two metrics that tell you how close to instability you are
- Root locus: a graphical tool for placing closed-loop poles
### 9.4 Stability Augmentation Systems — the First FCS Layer
- Pitch rate feedback (Cmq augmentation): adding artificial short-period damping
- Yaw damper: the first automatic flight system on swept-wing jets — still on every transport
- Roll rate limiter: preventing structural overload in fighters
### 9.5 Autopilot Modes — the Second FCS Layer
- Attitude hold: the inner loop that every other autopilot mode rests on
- Altitude hold and altitude select: baroaltimeter in the loop
- Heading hold and LNAV: navigation guidance in the loop
- ILS approach: glideslope and localizer tracking — a tightly regulated outer loop
### 9.6 Fly-By-Wire — Why Digital FCS Architecture Replaced Mechanical Systems
- Why wire: lighter, faster, no mechanical runs, enables envelope protection
- Redundancy: triplex and quadruplex voting — majority logic against hardware failure
- Dissimilar software: different teams, different languages — against common-mode bugs
- Flight envelope protection: AoA limiting, g limiting, bank angle limiting
### 9.7 The Control Law Design Process — from Derivatives to Certified Software
- Linear analysis: derive A, B, C, D matrices; check eigenvalue placement
- LQR/LQG: trading control effort against tracking error
- H∞ and μ-synthesis: robust performance with uncertain aerodynamic coefficients
- Gain scheduling: stitching controllers across the entire flight envelope
### 9.8 Handling Qualities Assessment — the Pilot's Final Verdict
- How the control law is evaluated against MIL-HDBK-1797 and ADS-33
- The bandwidth-phase delay diagram: the primary HQ specification tool
- Pilot-Induced Oscillation (PIO): what it is, why it happens, and how to prevent it

---

## Section 10 · Performance & Efficiency Crash Course
*Primary refs: Airplane Performance, Stability and Control (Perkins, Hage);
Introduction to Aircraft Flight Mechanics (textbook);
Raymer — Aircraft Design: A Conceptual Approach 6th Ed;
Fundamentals of Aircraft and Airship Design Vol. 1 (Nicolai, Carichner)*

### 10.1 The Drag Polar as a Performance Map
- Writing the drag polar: CD = CD0 + k·CL²
- The minimum-drag point: where CD0 = CDi — this is where (L/D)max lives
- The minimum-power point: slightly below (L/D)max — used for maximum endurance
- How the drag polar shifts with Mach number, configuration (gear down, flaps), and icing
### 10.2 Specific Excess Power — the Designer's Unified Currency
- Ps = (T − D)·V / W: what is left over after overcoming drag at a given speed
- Ps > 0: the aircraft can climb, accelerate, or both
- Ps = 0: the ceiling — maximum continuous level flight condition
- Energy-manoeuvre (EM) theory: combat aircraft are designed to Ps maps, not to T/W alone
- Why Ps is more useful than thrust-to-weight ratio in isolation
### 10.3 Climb Performance
- Angle of climb: γ = arcsin(Ps/V) — maximised at Vbest angle of climb
- Rate of climb: ROC = Ps evaluated at Vbest rate — a different speed from angle climb
- Service ceiling: where ROC drops to 100 ft/min; absolute ceiling where ROC = 0
- Time-to-climb: the integral of dh/ROC from h₁ to h₂
### 10.4 Range and Endurance — the Breguet Equations
- Deriving the jet Breguet range equation from first principles:
  R = (V/g) · (L/D) · (1/TSFC) · ln(Wi/Wf)
- The three levers: aerodynamic efficiency (L/D), propulsive efficiency (1/TSFC), structural efficiency (Wi/Wf)
- Why cruise altitude matters: the trade between true airspeed and air density
- Step-climb cruise: why airlines climb during the flight and the fuel saving this produces
- Endurance: maximum time aloft — requires a different optimum speed from maximum range
### 10.5 Turn Performance and the V-n Diagram
- Load factor n = L/W: what it means physically and what limits it
- Instantaneous turn rate (ITR): limited by maximum lift (stall boundary)
- Sustained turn rate (STR): limited by excess power (Ps = 0 in the turn)
- Corner speed V*: where ITR equals STR — the most efficient combat manoeuvre speed
- The V-n diagram: structural and aerodynamic limits on the complete operating envelope
- Gust loads: the regulatory gust envelope and its direct effect on wing structural sizing
### 10.6 Takeoff and Landing Performance
- The takeoff ground roll: accelerating to V1 (decision speed), rotation at VR
- Balanced Field Length (BFL): the critical engine failure case that sizes most transport runways
- Climb-out gradient: FAR 25 net gradient requirements after an engine failure
- Landing: approach at 1.3·Vso, threshold crossing height, flare, rollout, and stopping distance
### 10.7 The Efficiency Cascade — How Every Design Choice Touches Fuel Burn
- Structural weight fraction: lighter structure means more fuel for payload
- Aerodynamic efficiency: higher L/D means less thrust required at every flight condition
- Engine TSFC: lower fuel flow per unit thrust means less fuel burned per nautical mile
- The Breguet sensitivity: a 1% improvement in L/D saves approximately 0.7% fuel burn
- Weight snowball: 1 kg of structure growth costs 3–5 kg of MTOW at a fixed payload
- The Breguet equation as the system integrator — every discipline appears in it
### 10.8 Rotorcraft Performance
- Hover efficiency: figure of merit FM = ideal induced power / actual total power
- Forward flight power components: induced, profile, and parasite — the V-shaped power curve
- The minimum power speed Vmp and minimum drag speed Vmd
- Autorotation: descending without engine power, using stored rotor kinetic energy

---

## Section 11 · Structures & Manufacturing Crash Course
*Primary refs: Aircraft Structures 4th Ed (Megson);
Structures — Or Why Things Don't Fall Down (Gordon);
Analysis and Design of Flight Vehicle Structures (Bruhn);
Airframe Structural Design (Niu);
Mechanics of Composite Materials (Jones);
Fundamentals of Materials Science and Engineering (Callister)*

### 11.1 Why Aircraft Structure Is an Engineering Masterclass in Doing More with Less
- A Boeing 747 has an MTOW of 178,800 kg — its airframe weighs about 82,000 kg
- Structural weight fraction: the fraction of MTOW consumed by structure alone
- The central paradox: lighter structure means more payload, but less safety margin
- How engineers resolve this tension: stress analysis, material selection, damage tolerance
### 11.2 Stress and Strain — the Language of Structural Analysis
- Normal stress σ = F/A: force per unit area, measured in MPa
- Shear stress τ: force acting parallel to a surface
- Strain ε = δL/L: deformation as a fraction of the original dimension
- Hooke's law: σ = E·ε in the elastic range — the spring analogy for solid material
- Yield strength vs. ultimate strength: the two lines the designer must never cross
- Safety factors: limit load (no permanent deformation) and ultimate load (no fracture)
### 11.3 The Loads the Airframe Must Survive
- Aerodynamic pressure distributed over every surface at every flight condition
- Inertia loads: manoeuvre g-forces and gust loads
- Ground loads: landing impact, hard braking, towing, jacking
- Thermal loads in sustained high-speed flight
- The V-n diagram revisited: the structural consequence of every point in the flight envelope
### 11.4 How the Airframe Carries Load — Primary Structural Concepts
- Monocoque: the skin carries everything — efficient but intolerant of damage
- Semi-monocoque: skin + stringers + ribs/frames — the dominant aircraft architecture since the 1930s
- Spars, ribs, stringers, and frames: each member's specific structural job
- Shear flow in thin-walled sections: how torque distributes through a closed box section
- The wing box as a torque tube: why it is the primary structural element of the wing
### 11.5 Buckling — the Structural Engineer's Constant Concern
- A thin panel under compression does not yield — it buckles, at a far lower load
- Euler column buckling: critical load scales with EI/L² — long thin columns buckle easily
- Skin buckling in aircraft panels: allowed to occur at limit load if post-buckled strength exists
- Stringers and ribs as buckling suppressors: this is partly why they exist
### 11.6 Materials — the Other Side of the Weight Equation
- Aluminium: light, workable, fatigue-sensitive — the dominant airframe material for 70 years
- Steel: heavy but very strong — reserved for fittings, landing gear, and high-load joints
- Titanium: excellent strength-to-weight ratio and corrosion resistance — expensive to machine
- Carbon fibre composites (CFRP): the highest specific stiffness available — but anisotropic
- The composites trade: lighter and stiffer than aluminium, but more expensive and harder to repair
- Material selection is always a trade between specific strength, cost, and producibility
### 11.7 Fatigue and Damage Tolerance — Why Aircraft Have Finite Lives
- Fatigue: a crack can grow to failure at stresses far below the yield strength
- S-N curves: stress amplitude vs. cycles to failure — the experimental basis for fatigue design
- Crack growth: the Paris Law da/dN = C·(ΔK)^m — the tool for setting inspection intervals
- Safe-life philosophy: retire the part before the crack can ever grow to critical size
- Damage-tolerance philosophy: inspect regularly and catch the crack while it is still small
- The de Havilland Comet disaster: the first and most instructive lesson in pressurised fuselage fatigue
### 11.8 Manufacturing — Where Design Meets Reality
- The fundamental manufacturing constraint: what shapes can actually be produced?
- Sheet metal forming: excellent for skins, ribs, and brackets — limited to developable surfaces
- Machining (CNC milling): complex internal features and high precision — removes material
- Composite layup: near-net shape, tailorable stiffness — requires autoclave or oven cure
- Automated Fibre Placement (AFP): computer-controlled composite layup for large surfaces
- Additive manufacturing: complex internal geometries — still emerging for primary structure
### 11.9 The Design-for-Manufacturing Mindset
- Every geometric feature you add is a manufacturing operation someone must perform
- Tolerances cost money: tightening by 0.01 mm can double the inspection burden
- Assembly sequence: parts must fit together in the order they are physically built
- Producibility trade-off: the best aerodynamic shape is not always the best manufactured shape
- Design freeze: why you cannot keep changing the drawing once tooling has been cut
### 11.10 Structural Testing — from Coupon to Full Article
- The building-block approach: test coupons → elements → subcomponents → full article
- Static test: load to 150% of limit load (ultimate) — the aircraft must not fail
- Fatigue test: two lifetimes of spectrum loading without detectable crack growth
- Drop test for landing gear: absorbed energy must meet FAR 25.723 energy requirements

---

## Section 12 · Mathematics & Computational Tools Primer
*Primary refs: Mathematical Methods for Physics and Engineering 3rd Ed (Riley, Hobson, Bence);
Advanced Engineering Mathematics (Zill); Numerical Methods for Engineers (Chapra, Canale);
Numerical Methods in Engineering with Python (Kiusalaas);
Python for Mechanical and Aerospace Engineering (Kenan); Numerical Python (Johansson)*

### 12.1 The Mathematics You Will Actually Use in Aircraft Design
- This section is a road map, not a full course — it tells you what you need and where to find it
- Calculus (single and multivariable): rates of change, integrals in performance equations
- Vectors and coordinate transforms: body frame, wind frame, Earth frame — why three frames are needed
- Ordinary differential equations: every dynamic system in flight mechanics is described by ODEs
- Linear algebra: state-space models, FEM stiffness matrices, eigenvalue problems
- Partial differential equations: the Navier-Stokes equations are PDEs; so is the heat equation
### 12.2 The Three Core Computational Skills for Aircraft Design
- Numerical integration: Runge-Kutta for trajectory simulation and mission analysis
- Root-finding: Newton-Raphson for trim, constraint diagram intersections, and sizing loops
- Linear system solvers: direct (LU decomposition) and iterative — for FEM and CFD
### 12.3 Python for Aircraft Design — the Working Toolbox
- NumPy: arrays, matrix operations, eigenvalue routines
- SciPy: ODE integrators (solve_ivp), optimisers (minimize), signal processing tools
- Matplotlib: drag polars, V-n diagrams, performance envelopes, Bode plots
- Jupyter notebooks: the engineering lab book — calculations, plots, and explanation in one document
### 12.4 Writing an Aircraft Performance Calculator in Python — Worked Example
- ISA atmosphere model: T(h), P(h), ρ(h), a(h) as Python functions
- Drag polar: CD(CL) for a given aircraft configuration
- Rate of climb: ROC(h, V) for a given throttle setting
- Mission simulation: fuel burn from brake release to engine shutdown, segment by segment
### 12.5 Working with Aerodynamic Data
- Interpolating aerodynamic tables: bilinear and cubic spline interpolation
- Fitting drag polars to flight test data: least-squares regression
- Handling DATCOM and AVL output in Python workflows
### 12.6 Optimisation in Aircraft Design
- Constrained optimisation: scipy.optimize for constraint diagram intersections
- Sensitivity analysis: how a 1% change in CD0 changes mission fuel burn
- Multi-disciplinary optimisation (MDO): introduction to OpenMDAO architecture

---

# PART III — MISSION ANALYSIS & CONCEPTUAL DESIGN

## Section 13 · Mission Analysis & Top-Level Aircraft Requirements (TLARs)
*Primary refs: Raymer Ch. 3; Torenbeek — Advanced Aircraft Design;
Fundamentals of Aircraft and Airship Design Vol. 1 (Nicolai, Carichner)*

### 13.1 Deriving TLARs from the Mission Statement
### 13.2 Mission Fuel Fraction Method — Breguet Range Equation (derivation and application)
### 13.3 Constraint Analysis — the Thrust-to-Weight vs. Wing-Loading Diagram
- Takeoff, climb-rate, cruise, turn performance, and landing constraints
### 13.4 Mission Profiles for Different Aircraft Categories
- Commercial transport, military hi-lo-hi, UAV loiter, eVTOL urban trip
### 13.5 Trade Studies at Mission Level — Payload-Range Diagram and MTOW Sensitivity

---

## Section 14 · Conceptual Design & Configuration Selection
*Primary refs: Raymer Ch. 4–6; Fundamentals of Aircraft and Airship Design Vol. 1;
Basics of RC Model Aircraft Design (Lennon); Unmanned Aircraft Systems (Austin);
Aircraft Aerodynamic Design — Geometry and Optimization*

### 14.1 Configuration Options for Fixed-Wing Aircraft
### 14.2 Configuration Options for Rotorcraft
### 14.3 Configuration Options for Multirotor UAVs
### 14.4 Tiltrotor, Tiltwing, and Hybrid VTOL Configurations
### 14.5 Fighter and Tactical Aircraft Configurations — Delta, LO Shaping, Forward-Swept Wing
### 14.6 Qualitative Configuration Trade Study — Pugh Matrix and TRL Constraints

---

## Section 15 · Preliminary Sizing & Weight Estimation
*Primary refs: Raymer Ch. 6–7; Torenbeek; Roskam — Airplane Design Parts I–III;
Fundamentals of Aircraft and Airship Design Vol. 1 & 2*

### 15.1 First-Order Weight Estimation — Statistical Method (Raymer)
### 15.2 Fuel-Fraction Method: Segment-by-Segment MTOW Build-Up
### 15.3 Class I Weight Estimation — Historical Fraction Approach
### 15.4 Class II Weight Estimation — Component Build-Up
- Wing, fuselage, empennage, propulsion, gear, systems, payload, fuel
### 15.5 CG Estimation, CG Travel, and the CG Potato Diagram
### 15.6 Wing Loading and Aspect Ratio Selection
### 15.7 First-Cut Geometry: Wing, Fuselage Layout, Empennage Sizing

---

# PART IV — AERODYNAMICS

## Section 16 · Aerodynamic Fundamentals — Full Treatment
*Primary refs: Fundamentals of Aerodynamics 6th Ed (Anderson);
Aerodynamics for Engineers 5th Ed (Bertin, Cummings);
Foundations of Aerodynamics 5th Ed (Kuethe, Chow);
Principles of Ideal-Fluid Aerodynamics (Karamcheti)*

### 16.1 Fluid Mechanics Foundations
- Continuity, momentum, and energy equations — integral and differential forms
- Navier-Stokes equations: derivation and physical interpretation
- Potential flow: Laplace equation, superposition principle
- Vorticity, circulation, and Kelvin's theorem
### 16.2 Lift and Drag — Subsonic Incompressible Flow
- Kutta-Joukowski theorem
- Thin airfoil theory: lift slope, pitching moment, camber line analysis
- Prandtl lifting-line theory and finite-wing effects
- Induced drag: Oswald efficiency factor, optimum span loading
### 16.3 Complete Drag Polar Construction
- Zero-lift drag: flat-plate skin friction, form factor, interference factor
- Component drag build-up: wing, fuselage, nacelles
- Wave drag contribution at transonic conditions
### 16.4 Viscous Effects and Boundary Layers — Full Treatment
- Boundary layer equations: Blasius solution, Thwaites integral method
- Transition: natural, forced, bypass mechanisms
- Turbulent boundary layers: log-law, skin-friction correlations
- Separation and stall: physical mechanisms and prediction methods
### 16.5 Compressibility Effects — Transonic Aerodynamics
- Critical Mach number, drag divergence, Whitcomb area rule
- Supercritical airfoils: design philosophy and geometry
- Normal and oblique shocks on wings
### 16.6 Rotor and Propeller Aerodynamics — Full Derivation
- Actuator disk: momentum theory in hover and axial flight
- Blade Element Momentum Theory (BEMT)
- Tip loss, swirl, and wake contraction corrections

---

## Section 17 · Wing & Airfoil Design
*Primary refs: Low-Speed Aerodynamics — Wing Theory to Panel Methods (Katz, Plotkin);
Aerodynamics of Wings and Bodies (Ashley, Landahl);
Aircraft Aerodynamic Design — Geometry and Optimization;
An Approach to Constrained Aerodynamic Design*

### 17.1 Airfoil Selection and Design — NACA Families, Supercritical, Inverse Design, XFOIL
### 17.2 Wing Planform Design — Sweep, Taper, Twist, Aspect Ratio, Winglets
### 17.3 High-Lift Systems — Flaps, Slats, Maximum Lift Prediction, Noise
### 17.4 Control Surfaces — Ailerons, Spoilers, Flaperons, Elevons — Sizing and Hinge Moments

---

## Section 18 · Fuselage, Empennage & Body Aerodynamics
*Primary refs: Aerodynamics for Engineers (Bertin); Fundamentals of Aerodynamics (Anderson);
Aircraft Aerodynamic Design — Geometry and Optimization; Aeronautical Engineer's Data Book*

### 18.1 Fuselage Aerodynamics: Fineness Ratio, Form Drag, Aft-Body Separation
### 18.2 Wing-Body Interference: Fillets, Fairings, and Root Lift
### 18.3 Nacelle and Pod Aerodynamics: Inlet Design, Spillage Drag, Pressure Recovery
### 18.4 Empennage Aerodynamics: T-tail Deep-Stall, Tail Drag, Volume Coefficients
### 18.5 Rotorcraft Pods, Booms, and Fairings
### 18.6 Landing Gear Interference and Retraction Aerodynamics

---

## Section 19 · Stability Aerodynamics — Derivatives and Prediction Methods
*Primary refs: Aerodynamics for Engineers (Bertin); Fundamentals of Aerodynamics (Anderson);
Introduction to Aircraft Flight Mechanics (textbook)*

### 19.1 Longitudinal Stability Derivatives: Cmα, CLα, Cmδe
### 19.2 Neutral Point and Static Margin — Stick-Fixed and Stick-Free
### 19.3 Directional Stability Derivatives: Cnβ, Cnδr
### 19.4 Lateral Stability Derivatives: Clβ, Clδa
### 19.5 Dynamic Derivatives: Cmq, Cmα̇, Clp, Cnr
### 19.6 Rotorcraft Aerodynamic Stability: Flap-Lag-Torsion Coupling

---

## Section 20 · Experimental Aerodynamics & Wind Tunnel Testing
*Primary refs: Low-Speed Wind Tunnel Testing (Barlow, Rae, Pope);
An Album of Fluid Motion (Van Dyke); Aeronautical Engineer's Data Book*

### 20.1 The Role of Wind Tunnel Testing in the Design Process
### 20.2 Wind Tunnel Types: Subsonic, Transonic, Supersonic, Hypersonic
### 20.3 Model Design: Geometric Similarity, Reynolds Matching, Six-Component Balances
### 20.4 Flow Visualisation: Tufts, Oil Film, PSP, PIV, Schlieren
### 20.5 Test Data Reduction and Tunnel Corrections: Blockage, Lift Interference, Streamline Curvature
### 20.6 Dynamic Testing: Forced Oscillation and Free-to-Roll
### 20.7 Correlation of Wind Tunnel Results with CFD and Flight Test

---

# PART V — COMPUTATIONAL AERODYNAMICS & CFD

## Section 21 · CFD Fundamentals for Aircraft Design
*Primary refs: CFD — The Basics with Applications (Anderson);
CFD: A Practical Approach (Tu, Yeoh, Liu);
Introduction to CFD (Sharma); MIT CFD Notes;
Numerical Computation of Internal and External Flows Vol. 1 (Hirsch)*

### 21.1 Role of CFD in the Aircraft Design Process
### 21.2 Governing Equations: Euler, RANS, LES, DNS — Hierarchy and Computational Cost
### 21.3 Discretisation Methods: Finite Difference, Finite Volume, Finite Element
### 21.4 Grid Generation: Structured vs. Unstructured, Boundary Layer Meshing, y+ Requirements
### 21.5 Boundary Conditions for External Aerodynamics
### 21.6 Time Integration: Steady Pseudo-Time Stepping and Dual-Time URANS

---

## Section 22 · Turbulence Modelling in CFD
*Primary refs: CFD — Principles and Applications (Blazek);
Computational Methods for Fluid Dynamics (Ferziger, Perić);
CFD — The Finite Volume Method 2nd Ed (Versteeg, Malalasekera);
Navier-Stokes Equations and Turbulence (Foias et al.);
Lecture Notes on Viscous Flows and Turbulence (Smits)*

### 22.1 RANS Philosophy — Reynolds Averaging
### 22.2 Spalart-Allmaras and Baldwin-Lomax One-Equation Models
### 22.3 k-ε and k-ω SST Two-Equation Models — Theory and Practical Guidance
### 22.4 Reynolds Stress Models and Their Limitations
### 22.5 Detached Eddy Simulation (DES) and Hybrid RANS-LES
### 22.6 Wall Functions vs. Low-Reynolds Treatment
### 22.7 Turbulence Modelling for Separated Flow and High AoA
### 22.8 Transition Modelling (γ-Reθ) for Natural Laminar Flow Aircraft

---

## Section 23 · Applied CFD for Aircraft Components
*Primary refs: Applied Computational Aerodynamics (Mason);
Applied CFD Techniques (Löhner);
Fundamentals of Verification and Validation (Roache);
CFD — Principles and Applications (Blazek)*

### 23.1 Panel Methods and Vortex Lattice Method (VLM) — AVL Workflow
### 23.2 Full-Configuration RANS: Wing-Body-Nacelle-Pylon Simulation
### 23.3 High-Lift CFD: Multi-Element Airfoil and 3D High-Lift System Validation
### 23.4 Rotor Aerodynamics CFD: Hover and Forward Flight, BVI Prediction
### 23.5 Propeller Slipstream and Engine-Airframe Interaction
### 23.6 Verification and Validation — AIAA Standards, NASA DPW and HiLiftPW Benchmarks

---

# PART VI — PROPULSION SYSTEMS

## Section 24 · Gas Turbine Fundamentals — Full Treatment
*Primary refs: Gas Turbine Performance (Walsh, Fletcher);
Jet Engines and Propulsion Systems for Engineers (Fowler);
Gas Turbine Handbook (Giampaolo);
Thermodynamics: An Engineering Approach (Çengel, Boles);
Fundamentals of Engineering Thermodynamics (Moran, Shapiro)*

### 24.1 Propulsion System Taxonomy — Full Detail
### 24.2 Gas Turbine Thermodynamic Cycle Analysis
- Ideal Brayton cycle: T-s diagram, work and efficiency derivations
- Component efficiencies: intake, compressor, combustor, turbine, nozzle
- Specific thrust and TSFC derivation for turbojet and turbofan
- Non-dimensional performance maps
### 24.3 Engine Matching and Rubber-Engine Concept — Deck Format and Mission Use
### 24.4 Turbofan Bypass Ratio Optimisation — FPR Trade, Nacelle Drag, UHB, Open Rotor
### 24.5 Turboprop and Turboshaft for Rotorcraft — Power Turbine Matching
### 24.6 Compressor and Turbine Aerodynamics — Velocity Triangles, Reaction, Turbine Cooling

---

## Section 25 · Advanced Propulsion & Electric Aircraft
*Primary refs: Gas Turbine Performance (Walsh, Fletcher);
Thermodynamics: An Engineering Approach (Çengel)*

### 25.1 Electric Propulsion: Battery Energy Density, Motor-ESC-Propeller Efficiency Chain
### 25.2 Hybrid-Electric Architectures: Series, Parallel, Turboelectric
### 25.3 Hydrogen Propulsion: Direct Combustion and Fuel Cell Approaches
### 25.4 Distributed Electric Propulsion (DEP) and Aero-Propulsive Coupling
### 25.5 Propulsion-Airframe Integration: BLI, Inlet Distortion, CG Effects of Engine Placement

---

# PART VII — STRUCTURAL DESIGN, MATERIALS & AEROELASTICITY

## Section 26 · Structural Concepts & Load Paths — Full Treatment
*Primary refs: Aircraft Structures 4th Ed (Megson);
Analysis and Design of Flight Vehicle Structures (Bruhn);
Airframe Structural Design (Niu); Airframe Stress Analysis and Sizing (Niu);
Stress Analysis in Aircraft Structures (Kuhn)*

### 26.1 Loads — Sources and Classification: V-n Diagram, Gust, Ground, Thermal
### 26.2 Structural Concepts for Fixed-Wing Aircraft: Spar, Rib, Stringer, Skin, Shear Flow
### 26.3 Structural Concepts for Rotorcraft: Hub Loads, Keel Beam, Crashworthiness
### 26.4 Structural Concepts for UAVs and Small Aircraft
### 26.5 Fail-Safe, Damage Tolerance, and Safe-Life Philosophy — FAR 25.571, MIL-A-83444

---

## Section 27 · Materials Selection
*Primary refs: Callister; Mechanics of Composite Materials (Jones);
Practical Analysis of Aircraft Composites; Materials Handbook (Brady)*

### 27.1 Metallic Materials: Al 2xxx/7xxx, Steel, Titanium, Nickel Superalloys
### 27.2 Composite Materials: Fibres, Matrices, CLT, Failure Criteria, Delamination
### 27.3 Sandwich Structures: Honeycomb, Foam Core, Face Sheet Design
### 27.4 Certification of Composites: Building-Block Approach, Environmental Conditioning
### 27.5 Advanced Materials: C/SiC, MMC, SMA, Piezoelectric

---

## Section 28 · Stress Analysis and Structural Sizing
*Primary refs: Bruhn; Airframe Stress Analysis and Sizing (Niu);
Roark's Formulas for Stress and Strain (Young);
Practical Stress Analysis for Design Engineers (Flabel)*

### 28.1 Classical Stress Analysis: Bending, Shear, Torsion, Open and Closed Thin-Wall Sections
### 28.2 Buckling: Column, Panel, Shear — Euler, Johnson, Post-Buckled Strength
### 28.3 Finite Element Analysis: Stiffness Method, Shell and Solid Elements, Nastran/Abaqus
### 28.4 Structural Optimisation: Minimum Weight Under Stress, Stiffness, and Buckling Constraints
### 28.5 Joint and Fastener Analysis: Bearing, Shear-Out, Volkersen Bonded Joint
### 28.6 Fatigue and Damage Tolerance: Fracture Mechanics, Paris Law, Miner's Rule, Inspection Intervals

---

## Section 29 · Aeroelasticity
*Primary refs: Introduction to Aircraft Aeroelasticity and Loads (Wright, Cooper);
Structural Dynamics for Aeronautical Engineers (Bismarck)*

### 29.1 The Aeroelastic Triangle: Aerodynamics, Elasticity, Inertia
### 29.2 Static Aeroelasticity: Divergence Speed, Control Reversal, Bending-Torsion Coupling
### 29.3 Flutter — Theodorsen Unsteady Theory, V-g Method, Panel Flutter, FAR 25.629
### 29.4 Gust and Buffet Response: Pratt Discrete Gust, PSD Continuous Turbulence Method
### 29.5 Aeroelastic Tailoring: Composite Wash-Out, Forward-Swept Wing
### 29.6 Limit Cycle Oscillation (LCO) and Non-linear Aeroelastic Effects
### 29.7 Ground Vibration Test (GVT) and Flutter Certification

---

## Section 30 · Aircraft Systems Design
*Primary refs: Raymer Ch. 9; Sadraey Ch. 9–12;
AIAA Aerospace Design Engineers Guide; Aviation Mechanic Handbook (Crane)*

### 30.1 Flight Control Systems: Mechanical, Power-Assisted, FBW, FBL
### 30.2 Hydraulic and Pneumatic Systems
### 30.3 Electrical Power Systems and More-Electric Aircraft Architecture
### 30.4 Avionics, Navigation, and Communication
### 30.5 Environmental Control System (ECS): Bleed vs. Bleedless Architecture
### 30.6 Fuel Systems: Tanks, Transfer, Jettison, CG Management
### 30.7 Landing Gear: Configuration, Tip-Over Criteria, Oleo Sizing, Retraction Kinematics

---

# PART VIII — PERFORMANCE ANALYSIS

## Section 31 · Fixed-Wing Aircraft Performance — Full Treatment
*Primary refs: Perkins & Hage; Introduction to Aircraft Flight Mechanics;
Raymer Ch. 17; Fundamentals of Aircraft and Airship Design Vol. 1*

### 31.1 Equations of Motion — Point Mass Model
### 31.2 Level Flight: Thrust Required, Minimum Power, Maximum Speed
### 31.3 Climb Performance: ROC, Angle, Service Ceiling, Energy Height, Ps
### 31.4 Range and Endurance — Breguet Derivation and Full Sensitivity Analysis
### 31.5 Manoeuvre Performance: STR, ITR, V-n Diagram, EM Theory for Fighter Sizing
### 31.6 Takeoff and Landing: BFL, FAR 25 Net Climb Gradient
### 31.7 Mission Performance Simulation in Python: Segment-by-Segment Fuel Burn

---

## Section 32 · Rotorcraft & Multirotor Performance
*Primary refs: Basic Helicopter Aerodynamics; Raymer Ch. 18;
Fundamentals of Aircraft and Airship Design Vol. 2*

### 32.1 Hover Performance — Figure of Merit and Induced Power
### 32.2 Blade Loading, Disk Loading, and Design Trade-offs
### 32.3 Forward Flight: Power Components, Vne, Retreating Blade Stall, Autorotation
### 32.4 Multirotor UAV Performance: Motor-Prop Sizing, Endurance Budget
### 32.5 Tiltrotor and Hybrid VTOL: Conversion Corridor and Download Penalty

---

# PART IX — FLIGHT DYNAMICS & STABILITY

## Section 33 · Static & Dynamic Stability — Full Analytical Treatment
*Primary refs: Perkins & Hage; Napolitano — Aircraft Dynamics;
Introduction to Aircraft Flight Mechanics;
Atmospheric and Space Flight Dynamics (Tewari)*

### 33.1 Longitudinal Static Stability: Stick-Fixed and Stick-Free — Full Derivation
### 33.2 Neutral Point, Aerodynamic Centre, and Static Margin
### 33.3 Tail Sizing for Static Stability: HT Volume Coefficient
### 33.4 Equations of Motion — 6-DOF Rigid Body and Linearised Perturbation Forms
### 33.5 Longitudinal Dynamic Modes: Short-Period and Phugoid — Full Analytical Derivations
### 33.6 Lateral-Directional Modes: Roll, Dutch Roll, Spiral — Derivatives and Criteria
### 33.7 Handling Qualities Assessment: Cooper-Harper, MIL-HDBK-1797 Level 1/2/3
### 33.8 Rotorcraft Dynamic Stability: Flapping, Lead-Lag, Ground Resonance

---

## Section 34 · State-Space Modelling & Frequency Domain Analysis
*Primary refs: Napolitano — Aircraft Dynamics; Stevens & Lewis — Aircraft Control and Simulation;
Atmospheric and Space Flight Dynamics (Tewari); Control System Design (Friedland)*

### 34.1 State-Space Formulation: A, B, C, D Matrices from Stability Derivatives
### 34.2 Eigenvalue Analysis — Mode Shapes and Participation Factors
### 34.3 Transfer Functions from State-Space: θ/δe, φ/δa, ψ/δr
### 34.4 Frequency Response: Bode and Nichols Plots, Bandwidth and Phase Delay (ADS-33)
### 34.5 Nonlinear 6-DOF Simulation with Aerodynamic Database and Engine Model

---

# PART X — FLIGHT CONTROL SYSTEMS

## Section 35 · Classical and Modern Control Theory for Aircraft
*Primary refs: Aircraft Control and Simulation (Stevens, Lewis);
Automatic Control of Aircraft and Missiles (Blakelock);
Control System Design (Friedland); Flight Control Systems (Pratt)*

### 35.1 Classical Inner Loop Design: PID, Root Locus, Gain-Phase Margin Requirements
### 35.2 Stability Augmentation Systems: Pitch Rate Feedback, Yaw Damper, Roll Rate Limiter
### 35.3 Modern Control: Full State Feedback (Pole Placement), LQR, LQG/LTR
### 35.4 Robust Control: H∞ and μ-Synthesis for Aerodynamically Uncertain Plants
### 35.5 Nonlinear Flight Control: Gain Scheduling, Feedback Linearisation, NDI

---

## Section 36 · Fly-By-Wire Systems & Digital Flight Control
*Primary refs: Flight Control Systems (Pratt); Stevens & Lewis;
Advanced Control of Aircraft, Spacecraft and Rockets (Tewari)*

### 36.1 FBW Architecture: Analogue vs. Digital, Triplex/Quad Redundancy, Dissimilar Software
### 36.2 Flight Envelope Protection: AoA Limit, g Limit, Bank Angle and Pitch Protection
### 36.3 Airbus NORMAL and DIRECT Control Law Architecture
### 36.4 Software Design Assurance: DO-178C Levels A through E, Formal Methods
### 36.5 Actuator FDI and Control Reconfiguration
### 36.6 PIO Prevention: Biodynamic Coupling, MIL-STD-1797 Gain-Phase Criteria

---

## Section 37 · Autopilot, Autonomous Systems & UAV Flight Control
*Primary refs: Stevens & Lewis; Unmanned Aircraft Systems (Austin);
Data-Driven Science and Engineering (Brunton, Kutz)*

### 37.1 Classical Autopilot Modes: Heading Hold, Altitude Hold, Speed Hold, ILS Approach
### 37.2 UAV Flight Controller Architecture: Inner and Outer Loops, PX4 and ArduPilot
### 37.3 Path Planning and Trajectory Optimisation: Dubins Paths, Waypoint Sequencing, DAA
### 37.4 Sensor Fusion and State Estimation: EKF, AHRS (Mahony, Madgwick)
### 37.5 Machine Learning in Flight Control: RL for Adaptive Autopilots, NN-Based SysID

---

# PART XI — HIGH-SPEED & HYPERSONIC AIRCRAFT

## Section 38 · Transonic and Supersonic Aircraft Design
*Primary refs: Fundamentals of Aerodynamics (Anderson);
Fighter Combat — Tactics and Maneuvering (Shaw);
F-22 Raptor (Pace); Lockheed SR-71 Blackbird (Crickmore);
Projects of Skunk Works (Pace)*

### 38.1 Supersonic Aerodynamics: MOC, Ackeret-Busemann Theory, Wave Drag, Area Rule
### 38.2 Delta Wing Aerodynamics: Vortex Lift, Polhamus Analogy
### 38.3 Supersonic Inlet Design: Compression Types, Buzz, Unstart, Variable Geometry
### 38.4 Supersonic Nozzle Design: C-D Geometry, Afterburner, Variable A8
### 38.5 Supersonic Fighter Design: Wing Selection, LO Shaping, RCS, EM Performance
### 38.6 Sonic Boom: N-Wave Formation and Shaped Boom Approaches

---

## Section 39 · Hypersonic Vehicle Design & Aerothermodynamics
*Primary refs: Hypersonic and High-Temperature Gas Dynamics (Anderson);
Hypersonic Aerothermodynamics (Bertin);
Advances in Hypersonics Vol. 1 (Bertin et al.);
Selected Aerothermodynamic Design Problems (Hirschel, Weiland);
Hypersonic Airbreathing Propulsion (Heiser, Pratt, Daley, Mehta);
Hypersonics Before the Shuttle (Jenkins)*

### 39.1 Hypersonic Flow Regimes — Thin Shock Layers, High-Temperature Gas Effects, Newtonian Flow
### 39.2 Aerothermodynamic Heating: Fay-Riddell, Reference Temperature, SBLI
### 39.3 Stability and Control at High Mach: AC Migration, Elevon/Body Flap Authority, RCS
### 39.4 Thermal Protection System Design: Ablative, Metallic, Ceramic TPS — Sizing Procedure
### 39.5 Hypersonic Airbreathing Propulsion: DMRJ Operation, Inlet, Isolator, Combustor, Nozzle
### 39.6 Hypersonic Vehicle Shapes: Waveriders, Lifting Bodies, Integrated Airframe-Inlet
### 39.7 Flight Test Vehicles: X-15, X-43A, X-51A Waverider, HTV-2

---

# PART XII — DETAILED STRUCTURAL & THERMAL DESIGN

## Section 40 · Advanced Structural Analysis and Sizing
*Primary refs: Bruhn; Airframe Stress Analysis and Sizing (Niu);
Roark's Formulas (Young); Structural Dynamics for Aeronautical Engineers (Bismarck)*

### 40.1 Wing Box Sizing: Critical Load Cases, Panel Buckling Allowables, Spar Web Tension Field
### 40.2 Fuselage Pressurisation: Hoop Stress, P+M Interaction, Frame Spacing, Fatigue Life
### 40.3 Empennage Structural Design: Torsion, Bending, Shear, Actuator Load Introduction
### 40.4 Landing Gear Structural Analysis: Drop Test Requirements, Oleo Sizing, Drag/Side Loads
### 40.5 Structural Dynamic Analysis: Normal Modes, Frequency Response, Transient, Acoustic Fatigue

---

## Section 41 · Thermal Design and Acoustic Management
*Primary refs: Heat Transfer in Single and Multiphase Systems (Naterer);
Thermodynamics: An Engineering Approach (Çengel);
Hypersonic Aerothermodynamics (Bertin)*

### 41.1 Thermal Environment Mapping: Solar, Aerodynamic, Engine Bay Heat Loads
### 41.2 Thermal Analysis Methods: 1D Lumped-Mass, 2D Finite Difference, Coupled FEA
### 41.3 Engine Nacelle Thermal Management and Fire Zone Design (FAR 25.1185)
### 41.4 Aircraft Acoustic Design: Noise Sources, ANOPP Prediction, Acoustic Treatment
### 41.5 Interior Cabin Noise and Vibration: Transmission Loss, ANVC Systems

---

# PART XIII — CAD, DIGITAL DESIGN & ENGINEERING TOOLS

## Section 42 · CAD Framework and Digital Design Environment
*Primary refs: AIAA Aerospace Design Engineers Guide;
NASA Systems Engineering Handbook;
Aircraft Aerodynamic Design — Geometry and Optimization*

### 42.1 CAD Tools in Aerospace: CATIA V5/V6, NX, Creo, SolidWorks, OpenVSP
### 42.2 Parametric and Feature-Based Modelling — Master Geometry and Associativity
### 42.3 Surface Modelling and Class-A Aerodynamic Surfaces — NURBS, Lofts, G2 Continuity
### 42.4 Assembly Modelling and Product Structure: EBOM vs. MBOM
### 42.5 Digital Twin and MBSE: SysML, DODAF, Parametric Model Linking Aero and Structural Analyses
### 42.6 Configuration Management and PDM/PLM

---

## Section 43 · Interference Checks & Clearance Analysis
### 43.1 Types of Interference and Clearance Requirements
### 43.2 Clash Detection in CAD: CATIA/NX DMU Workflows
### 43.3 Systems Routing and Clash Management: Hydraulic, Fuel, Bleed Air, Electrical
### 43.4 Mass Properties and CG Verification in CAD
### 43.5 Jig-Shape vs. Loaded Shape Compensation (Jig Twist)

---

## Section 44 · Tolerancing, GD&T & Dimensional Management
### 44.1 Tolerancing Fundamentals: Bilateral, Unilateral, Limit Dimensions
### 44.2 GD&T — ASME Y14.5-2018: DRF, Feature Control Frames, Position, Profile, Runout
### 44.3 Dimensional Management: RSS vs. Worst-Case Statistical Tolerance Analysis
### 44.4 Key Characteristics (KC): Aerodynamic Contour, Fastener Hole
### 44.5 Tolerance Specification for Composites: Layup Variability, Gap and Shim Requirements

---

# PART XIV — MANUFACTURING & BUILD CONSIDERATIONS

## Section 45 · Manufacturing Processes & Design for Manufacturing
*Primary refs: AIAA Aerospace Design Engineers Guide;
Mechanics of Composite Materials (Jones);
Fundamentals of Materials Science and Engineering (Callister)*

### 45.1 DFM and DFA Principles — Every Feature Is a Manufacturing Operation
### 45.2 Metallic Processes: Sheet Metal, CNC Machining, Investment Casting, Forging, Extrusions
### 45.3 Composite Processes: Hand Layup, Autoclave, RTM, VARTM, AFP, ATL, OoA Prepreg
### 45.4 Additive Manufacturing: SLM/DMLS for Brackets, FFF for Tooling, Certification Challenges
### 45.5 Assembly and Integration: Determinant Assembly, Automated Drilling, Shimming Philosophy

---

## Section 46 · Quality Control, Inspection & Airworthiness of Manufacture
*Primary refs: AIAA Aerospace Design Engineers Guide;
Aviation Mechanic Handbook (Crane); NASA Systems Engineering Handbook*

### 46.1 First Article Inspection (FAI) and AS9102
### 46.2 NDT/NDE Methods: Ultrasonic (PAUT), Radiography (CT), Eddy Current, Thermography
### 46.3 Statistical Process Control (SPC) in Aerospace Manufacturing
### 46.4 Acceptance Testing and Flight Test Envelope Expansion
### 46.5 AS9100 Quality Management System

---

# PART XV — OPERATIONS, SUSTAINMENT & LIFECYCLE

## Section 47 · Maintainability, Reliability & Supportability
*Primary refs: NASA Systems Engineering Handbook;
AIAA Aerospace Design Engineers Guide;
Aviation Mechanic Handbook (Crane)*

### 47.1 Reliability Fundamentals: MTBF, MTTR, Availability, Series/Parallel/k-out-of-n Models
### 47.2 FTA, FMEA, and FMECA in the Design Process
### 47.3 Maintainability Design: Access Panels, Modular LRUs, MSG-3 Logic
### 47.4 Corrosion Prevention and Control Programme (CPCP)
### 47.5 Structural Life Management and SLEP
### 47.6 MRO Cost Drivers in Design — DMC Metrics, CBM, Health Monitoring

---

## Section 48 · Environmental Sustainability and Future Trends
### 48.1 Aviation's Environmental Footprint: CO₂, NOx, Contrails, Community Noise
### 48.2 Sustainable Aviation Fuel (SAF): HEFA, PtL, Gasification Production Pathways
### 48.3 Future Vehicle Concepts: DEP (X-57), UHB/Open Fan (CFM RISE), BWB (X-48B, MAVERIC)
### 48.4 Digital Engineering and Virtual Certification: Model-Based Design, AI-Assisted Optimisation
### 48.5 Lifecycle Assessment (LCA): Cradle-to-Grave CO₂, Composite Recyclability

---

# PART XVI — SPECIAL TOPICS

## Section 49 · Autonomous & Uncrewed Systems (UAS)
*Primary refs: Unmanned Aircraft Systems (Austin); Stevens & Lewis*

### 49.1 UAS Classification and Regulatory Landscape: FAR 107, EASA Open/Specific/Certified
### 49.2 Low Reynolds Number Aerodynamics for Fixed-Wing UAS (Re = 10⁴–10⁶)
### 49.3 Multirotor UAS Design: Rotor Sizing, Frame Structure, Crash Load Compliance
### 49.4 Sense, Detect and Avoid (SDAA): ACAS-X and DAA Systems
### 49.5 UAS Communications: RF Link Budget, LOS vs. BLOS, SATCOM Latency
### 49.6 Counter-UAS (C-UAS) Technology Overview

---

## Section 50 · eVTOL and Urban Air Mobility
### 50.1 eVTOL Market and Use Cases
### 50.2 Configuration Trade Study: Multirotor, Lift+Cruise, Vectored Thrust, Compound
### 50.3 eVTOL Sizing: Hover vs. Cruise Power Balance, Battery Energy Requirements
### 50.4 Safety Architecture: N+2 Motor Redundancy, Ballistic Parachute, Autorotation Fallback
### 50.5 Certification: EASA SC-VTOL and FAA SFAR-103
### 50.6 Vertiport Design and Infrastructure Constraints

---

## Section 51 · Fighter Aircraft Design and Tactics
*Primary refs: Fighter Combat — Tactics and Maneuvering (Robert L. Shaw);
F-22 Raptor (Pace); Projects of Skunk Works (Pace);
Lockheed SR-71 Blackbird (Crickmore)*

### 51.1 Fighter Design Philosophy: Energy-Manoeuvre Theory, BVR vs. WVR
### 51.2 Low Observable (Stealth) Design: RCS, Shaping Rules, RAM Coatings, IRSS
### 51.3 Supermanoeuvre and High-AoA Flight: Thrust Vectoring, RSS, Post-Stall Manoeuvres
### 51.4 Air Combat Manoeuvring (ACM): Lag/Lead/Pure Pursuit, Scissors, Yo-Yo Manoeuvres, EM Diagram

---

## Section 52 · Novel and Unconventional Configurations
*Primary refs: Aircraft Aerodynamic Design — Geometry and Optimization;
Fundamentals of Aircraft and Airship Design Vol. 1 & 2*

### 52.1 Blended Wing Body (BWB): Aerodynamic Benefits, Structural Challenges, S&C Without a Tail
### 52.2 Box Wing and Joined Wing: Structural Topology Benefits, Interference Aerodynamics
### 52.3 Variable Geometry: Variable Sweep (F-111, Tornado), Morphing Wing, SMA Actuation
### 52.4 Solar-Powered HALE Aircraft: Energy Balance, Low-Re Wing Design at High Altitude
### 52.5 Flying Wing and Tailless Aircraft: Reflexed Airfoils, Vortex Lift, Pitch Control

---

# SUPPLEMENTARY RESOURCES

## SR.1 — The International Standard Atmosphere (ISA)
### ISA governing equations and layer structure
### Tabulated properties from 0 to 65,000 ft
### Four-panel plots: T, P, ρ, a vs. altitude
### Density altitude: definition, equations, and plots
### Non-standard atmospheres: ISA +15, ISA +35, ISA −15, tropical, polar
### Real-gas effects above 25 km

---

## SR.2 — Airfoil Data & NACA Series Reference
### NACA 4-digit, 5-digit, 6-series: geometry definitions and Cl, Cd, Cm tables
### Modern airfoil families: supercritical, natural laminar flow, rotor blade sections
### Airfoil data sources: UIUC database, NACA TN-1135, XFOIL usage guide

---

## SR.3 — Aerospace Material Properties Reference
### Aluminium, steel, titanium allowables from MMPDS
### Carbon fibre composite lamina properties: IM7/8552, T700/M21
### Temperature-dependent properties for elevated-temperature alloys
### Density and thermal properties summary table

---

## SR.4 — Propulsion Reference Data
### Turbofan deck data: thrust vs. Mach and altitude for representative engines
### SFC carpet plots: bypass ratio vs. OPR vs. TET
### Propeller efficiency charts: advance ratio and blade activity factor
### Electric motor specific power vs. year trend (Ragone-style chart)

---

## SR.5 — CFD Solver Reference and Quick-Start Guides
### OpenFOAM case setup for external aerodynamics (RANS, k-ω SST)
### SU2 adjoint optimisation workflow
### AVL: input format and output interpretation guide
### XFOIL batch analysis: polar sweep and transition analysis

---

## SR.6 — Key Design Standards and References
### FAR/CS Part 23, 25, 27, 29 — airworthiness standards
### MIL-HDBK-1797 — Flying Qualities of Piloted Aircraft
### ADS-33 — Handling Qualities Requirements for Military Rotorcraft
### MIL-A-8866, 8861, 8862 — structural load and fatigue requirements
### MMPDS-12 — metallic materials and elements properties data sheet
### AS9100, AS9102, AS7003 — quality and additive manufacturing standards
### DO-178C / DO-254 — software and electronic hardware certification
### ICAO Annex 16 — environmental protection standards

---

## SR.7 — Glossary, Acronyms, and Symbols
### Full acronym list organised by Part
### Symbol reference: aerodynamic, structural, propulsion, and flight control
### Unit conversions: SI ↔ Imperial for key aerospace quantities

---

# APPENDICES

## Appendix A · Guiding Questions Master Index
### One-liner guiding question for each section, cross-referenced by section number

## Appendix B · Bibliography and Citation Style Guide
### All references cited in the notebook series (BibTeX entries in references.bib)
### Citation rule: published works only; no course slide material

## Appendix C · Python / NumPy Code Snippet Library
### Reusable routines: ISA model, Breguet range, V-n diagram, trim solver, weight sizing

## Appendix D · Key Figures and Plots Master List
### Every matplotlib figure used across all notebooks, with source attribution

## Appendix E · Design Worked Examples
### E.1 — Commercial Turbofan Transport (737-class): full constraint and sizing walkthrough
### E.2 — Military Fighter (F-16-class): EM diagram and constraint analysis
### E.3 — Multirotor UAV (quadrotor inspection drone): battery and rotor sizing
### E.4 — Tiltrotor (V-22-class): conversion corridor and performance analysis

---

*End of Master Notebook Outline — Aircraft Design (Comprehensive Edition)*
