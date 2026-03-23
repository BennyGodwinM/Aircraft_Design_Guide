# Aircraft Design — Master Notebook Outline
**A Comprehensive Guide to the Design of Aerial Vehicles**
*Fixed-Wing Aircraft · Rotorcraft · Multirotor UAVs · Tiltrotors · Fighter Jets · Hybrid VTOL*

---

> **How to use this outline:**
> Each section contains a purpose statement, key topics, and a set of **guiding questions**. The guiding questions are not exercises — they define the *intellectual scope* of the section and should be answered, explicitly or implicitly, by the time the notebook for that section is complete.

---

# PART I — FOUNDATIONS & CONTEXT

---

## Section 1 · Introduction to Aircraft Design & Vehicle Classification ✅

> *What is aircraft design as a discipline, and what is the full landscape of aerial vehicles we are designing?*

### 1.1 What is Aircraft Design?
- The design process as an iterative, multi-disciplinary cycle
- Conceptual → Preliminary → Detailed design phases
- The role of systems engineering in aircraft design
- How design decisions cascade: early choices locking in late-stage constraints

**Guiding Questions:**
- What distinguishes aircraft design from other engineering disciplines?
- Why are early conceptual decisions disproportionately expensive to reverse?
- How do the three phases of design differ in fidelity, cost, and reversibility?
- What does a "frozen design" mean, and why does it matter?

### 1.2 Classification of Aerial Vehicles
- Fixed-wing: general aviation, commercial transport, military, supersonic
- Rotorcraft: single-main-rotor helicopters, tandem, coaxial, synchropter
- Multirotor UAVs: quadrotor, hexarotor, octorotor, coaxial multirotor
- Tiltrotor & tilt-wing: Bell V-22, Bell 525, emerging urban air mobility
- Lighter-than-air: blimps, hybrid airships
- Hybrid VTOL: lift+cruise, vectored thrust, compound helicopters
- Supersonic & hypersonic: fighters, interceptors, experimental vehicles
- Unmanned & autonomous: small UAVs, HALE, MALE, loitering munitions
- Electric & hydrogen-powered: eVTOL, eCTOL, H2 fuel cell concepts

**Guiding Questions:**
- What fundamental physics distinguishes each vehicle class in terms of lift generation?
- Why does a multirotor scale so poorly compared to a fixed-wing for long-range missions?
- What makes a tiltrotor design fundamentally more complex than either a helicopter or a turboprop?
- Where does the boundary between "UAV" and "autonomous aircraft" lie, and why does it matter for certification?

### 1.3 The Design Spiral & Convergence
- Iterative nature of design: the design spiral model
- Convergence criteria and tolerance thresholds
- How modern MDO (Multidisciplinary Design Optimization) replaces sequential iteration
- Design space, feasible region, and the Pareto front

**Guiding Questions:**
- When does the design spiral converge, and how do we know it has?
- What happens when two disciplines produce conflicting optima (e.g., structural weight vs. aerodynamic efficiency)?
- How does the introduction of MDO change the role of the individual disciplinary engineer?

---

## Section 2 · Stakeholders, Requirements & System Specifications

> *Who has a stake in this vehicle, what do they need, and how do those needs become engineering requirements?*

### 2.1 Stakeholder Identification & Analysis
- Primary stakeholders: operators, pilots, passengers, mission commanders
- Secondary stakeholders: maintainers, ground crews, air traffic control, regulators
- Tertiary stakeholders: communities (noise), insurers, financiers, the public
- Stakeholder mapping: power vs. interest matrices
- Conflicting stakeholder interests and how they are resolved
- The role of the customer vs. the role of the user (especially in military programs)

**Guiding Questions:**
- Who defines "success" for a given aerial vehicle program, and how might their definitions conflict?
- How does the stakeholder landscape differ between a commercial airliner, a military UAV, and a recreational drone?
- What mechanisms exist to resolve conflicts between a paying customer and a regulatory authority?
- Why are maintainers often the most neglected stakeholder in early design, and what are the consequences?

### 2.2 Needs, Goals & Objectives
- Distinguishing needs (what the stakeholder wants) from requirements (what the system must do)
- Operational Concept (CONOPS) development
- Missions profiles: primary, secondary, contingency
- Quantifying qualitative needs: turning "fast" into a specific speed requirement
- Goals vs. thresholds vs. objectives in defence acquisition (KPPs, KSAs, APAs)

**Guiding Questions:**
- How do you translate a pilot's statement "it must feel responsive" into a verifiable specification?
- What is an Operational Concept document (CONOPS) and why must it precede requirements?
- When is a requirement a threshold (minimum acceptable) vs. an objective (desired optimum)?
- How do you avoid writing requirements that inadvertently over-specify the solution?

### 2.3 Requirements Engineering
- Types of requirements: functional, performance, interface, physical, environmental, safety
- Requirements hierarchy: system → subsystem → component
- Requirements traceability matrix (RTM) and bidirectional traceability
- SMART requirements: Specific, Measurable, Achievable, Relevant, Time-bound
- Requirements conflicts and constraint relaxation
- Model-Based Systems Engineering (MBSE) and SysML requirements diagrams
- Tools: DOORS, Jama, Cameo, ReqIF standards

**Guiding Questions:**
- What makes a requirement "good"? Give examples of poorly written vs. well-written requirements.
- How does a requirements traceability matrix prevent scope creep?
- What is requirements creep, and how does it drive cost growth in aerospace programs?
- How does MBSE change the nature of requirements management compared to document-based approaches?
- When should a requirement be deleted rather than relaxed?

### 2.4 Mission Profiles & Design Drivers
- Mission segment definition: taxi, takeoff, climb, cruise, loiter, combat, descent, landing, reserve
- Payload-range diagrams and their implications for structural design
- Design mission vs. ferry mission vs. training mission
- Military mission profiles: CAP, CAS, interdiction, ISR, SEAD
- UAV missions: ISR, cargo delivery, swarm, autonomous combat
- Identifying the most demanding segment: which segment sizes the aircraft?

**Guiding Questions:**
- Why is the reserve fuel requirement often the single largest driver of aircraft size?
- How does a payload-range diagram physically represent design trade-offs?
- Why might a helicopter be sized by hover ceiling rather than cruise speed?
- How does an eVTOL's mission profile differ fundamentally from a traditional helicopter's?

### 2.5 Design Drivers & Figures of Merit
- What is a design driver vs. a design constraint?
- Cost drivers: recurring cost (unit flyaway) vs. non-recurring cost (development)
- Performance figures of merit: range, endurance, payload fraction, L/D, specific excess power
- Operability figures of merit: dispatch reliability, turnaround time, maintainability index
- Survivability & lethality (military): RCS, IR signature, maneuverability
- Sustainability: life-cycle cost, fuel efficiency, emissions (CO₂, NOₓ)

**Guiding Questions:**
- What is the difference between a design driver and a design constraint, and why does it matter which one an engineer treats a parameter as?
- How do military and civil design drivers fundamentally differ in what they optimise for?
- Why is life-cycle cost often a more important figure of merit than unit acquisition cost?

---

## Section 3 · Regulations, Airworthiness & Certification

> *What legal, safety, and regulatory frameworks govern the design, manufacture, and operation of aerial vehicles?*

### 3.1 Regulatory Bodies & Their Jurisdictions
- ICAO: international standards and recommended practices (SARPs), Annexes 1–19
- FAA (USA): Title 14 CFR, Part 21/23/25/27/29/33/35, UAS Parts 107/108
- EASA (Europe): CS-23, CS-25, CS-27, CS-29, CS-E, Special Conditions
- CAAC (China), TCCA (Canada), CASA (Australia), CAA (UK post-Brexit)
- Military airworthiness: MIL-HDBK-516, DEF STAN 00-970 (UK), JSP 553
- How bilateral agreements (BASA) allow mutual recognition of certifications
- Emerging frameworks: EASA SC-VTOL, FAA Part 23 revision (performance-based), UAS-specific rules

**Guiding Questions:**
- Why does ICAO publish standards but not enforce them, and who does?
- How does a bilateral airworthiness agreement reduce certification costs for manufacturers selling across borders?
- What regulatory gap exists for novel vehicles like eVTOLs and how are authorities addressing it?
- Why do military aircraft operate under different airworthiness rules than civil aircraft?

### 3.2 Certification Basis & Type Certificate
- The Type Certificate (TC) process: application, design approval, production approval
- Supplemental Type Certificate (STC) for modifications
- Certification Basis: applicable regulations at time of application
- Means of Compliance (MoC): analysis, test, inspection, similarity, engineering judgement
- Special Conditions for novel technologies (composite structures, fly-by-wire, lithium batteries)
- Equivalent Safety Findings and Exemptions
- Production Approval (PAH) and the Production Organisation Approval (POA) under EASA

**Guiding Questions:**
- Why does locking the certification basis early benefit manufacturers even if newer regulations are stricter?
- What triggers the need for a Special Condition rather than compliance with existing rules?
- How does an Equivalent Safety Finding allow innovation while maintaining safety?
- What is the difference between design approval and production approval, and why must both be obtained?

### 3.3 Airworthiness Categories & What They Demand
- **FAR Part 23 / CS-23:** Normal, Utility, Acrobatic, Commuter — up to 19 seats, ≤ 8,618 kg MTOW
- **FAR Part 25 / CS-25:** Transport category — large commercial aircraft
- **FAR Part 27 / CS-27:** Normal category rotorcraft — MTOW ≤ 3,175 kg
- **FAR Part 29 / CS-29:** Transport category rotorcraft
- **FAR Part 33 / CS-E:** Engines
- **FAR Part 35:** Propellers
- **EASA SC-VTOL:** Novel VTOL aircraft (eVTOL, urban air mobility)
- Military: MIL-SPEC, STANAG, DEF STAN equivalents
- UAS/RPAS: FAA Part 107 (small UAS), EASA OPEN/SPECIFIC/CERTIFIED categories
- Microlight / ultralight exemptions across different jurisdictions

**Guiding Questions:**
- What structural load factors are required under each certification category, and why do they differ?
- Why was FAR Part 23 rewritten as a performance-based standard in 2017 rather than a prescriptive one?
- How does the EASA OPEN/SPECIFIC/CERTIFIED UAS framework classify risk, and what does each category require?
- What are the key differences between Part 27 and Part 29 that make designing a transport helicopter so much harder?

### 3.4 Safety Philosophy & Design Assurance
- Deterministic vs. probabilistic safety approaches
- Failure classification: Catastrophic, Hazardous, Major, Minor, No Safety Effect
- Target probability levels: Catastrophic ≤ 1×10⁻⁹/flight hour
- Functional Hazard Analysis (FHA), Preliminary System Safety Assessment (PSSA), System Safety Assessment (SSA)
- Fault Tree Analysis (FTA) and Event Tree Analysis (ETA)
- Failure Modes & Effects Analysis (FMEA) and FMECA
- Common Cause Analysis (CCA): Common Mode Analysis, Zonal Safety Analysis, Particular Risk Analysis
- DO-178C (software), DO-254 (hardware), ARP4754A (system development), ARP4761 (safety assessment)
- Design Assurance Levels (DAL A–E) and their development cost implications

**Guiding Questions:**
- Why is 1×10⁻⁹ per flight hour the accepted target for catastrophic failures, and where does this number come from?
- How does an FHA differ from an FMEA in scope and purpose?
- What is a "common cause failure" and why do single-point failures survive redundancy?
- Why does DAL A software cost 10–100× more per line of code than DAL D software?
- How does safety assessment change for an autonomous UAV with no pilot?

### 3.5 Environmental & Noise Regulations
- ICAO Annex 16: noise standards for subsonic jets and propeller aircraft
- FAA FAR Part 36 and EASA CS-36 noise certification
- Chapter 14 noise limits and the cumulative noise metric (EPNdB)
- Emission standards: ICAO Annex 16 Vol II — CO, HC, NOₓ, smoke, nvPM
- CORSIA (Carbon Offsetting and Reduction Scheme for International Aviation)
- Supersonic boom regulations and their effect on overland supersonic flight
- Urban air mobility noise challenges: psychoacoustics, tonal noise, blade-vortex interaction
- EASA UAS geo-fencing and drone traffic management (UTM/U-space)

**Guiding Questions:**
- Why is cumulative noise (approach + sideline + flyover) used rather than a single measurement point?
- How does blade-vortex interaction noise make helicopter approach certification particularly challenging?
- What design features reduce combustor NOₓ and why do they sometimes conflict with reducing CO?
- Why are noise regulations particularly critical for eVTOL operators planning urban routes?

---

# PART II — MISSION ANALYSIS & CONCEPTUAL DESIGN

---

## Section 4 · Mission Analysis & Top-Level Aircraft Requirements (TLARs)

> *How does an operator's need become a set of precise numbers that engineers can design to?*

### 4.1 Deriving TLARs from the Mission
- Top-Level Aircraft Requirements (TLARs) defined
- Range, payload, speed, altitude, MTOW as primary TLARs
- Field performance requirements: takeoff and landing distance
- Hover ceiling (rotorcraft), loiter endurance (UAVs)
- The TLAR budget: how requirements compete for weight budget
- Sensitivity analysis: which TLAR drives size most?

**Guiding Questions:**
- How does a 10% increase in payload requirement propagate through the design to increase MTOW?
- Why is the range requirement often the single biggest driver of fuel fraction and therefore structural weight?
- How is hover ceiling (out-of-ground-effect, HOGE) translated into a power loading requirement?
- What is a "rubber aircraft" study, and why is it useful at the TLAR stage?

### 4.2 Mission Fuel Fraction Method (Breguet)
- Breguet range and endurance equations: fixed-wing derivation
- Mission segment weight fractions: Raymer's historical table approach
- Fuel fraction for each segment: warm-up, taxi, takeoff, climb, cruise, loiter, descent, landing, reserve
- Aggregate fuel fraction and takeoff weight estimation
- Adaptation for electric aircraft: energy fraction replaces fuel fraction
- Breguet-equivalent for helicopters: specific range and fuel consumption in hover vs. forward flight

**Guiding Questions:**
- How does the Breguet equation show the fundamental trade-off between aerodynamic efficiency (L/D) and propulsive efficiency (SFC)?
- Why do reserve requirements (typically 45 minutes loiter for FAR 91) add disproportionate weight for short-range aircraft?
- What is the specific range of a helicopter in forward flight, and why is it fundamentally lower than a fixed-wing at the same power?
- How does the energy fraction method differ from the Breguet approach for battery-electric aircraft, and what new constraints appear?

### 4.3 Constraint Analysis (Thrust-to-Weight vs. Wing Loading)
- The constraint diagram: T/W vs. W/S space
- Takeoff constraint, landing constraint, cruise constraint, climb gradient constraint, ceiling constraint
- The feasible design space and the design point selection
- Wing loading selection and its implications for gust response, stall speed, field length
- Rotorcraft disk loading: the equivalent of wing loading for helicopters and multirotor
- Constraint analysis for UAVs and eVTOL: adding hover power constraint

**Guiding Questions:**
- How does the constraint diagram visually reveal which mission segment sizes the aircraft?
- Why is a high wing loading good for cruise but bad for low-speed handling?
- What is disk loading and how does it control hover efficiency vs. forward flight speed for rotorcraft?
- Why does the feasible design space shrink when you add more mission constraints?
- Where should the design point be placed within the feasible region, and why not always at the optimum?

---

## Section 5 · Conceptual Design & Configuration Selection

> *What does the vehicle look like, at the broadest level, and why?*

### 5.1 Configuration Options for Fixed-Wing Aircraft
- Wing placement: high, mid, low wing — stability and structural implications
- Wing planform: straight, tapered, swept, delta, blended wing body, box wing, joined wing
- Tail configurations: conventional, T-tail, V-tail (Ruschmeyer), H-tail, canard, tailless
- Fuselage cross-section: circular, oval, double-bubble, blended
- Engine placement: podded under-wing, rear fuselage, buried (in fuselage or wing root), over-wing
- Canard vs. conventional: stability, trim drag, departure resistance

**Guiding Questions:**
- Why do commercial transports almost universally use swept, low-wing, podded-engine configurations?
- What are the structural and aerodynamic penalties of a T-tail, and when is it worth accepting them?
- Why does a blended wing body offer potentially transformative aerodynamic efficiency but face serious certification challenges?
- When is a canard configuration aerodynamically advantageous, and what stability trade-offs does it introduce?

### 5.2 Configuration Options for Rotorcraft
- Single main rotor + tail rotor (conventional): advantages and limitations
- Tandem rotor (Chinook): payload capacity, CG range, retreating blade limitations
- Coaxial rotor (Kamov): compactness, torque cancellation, ABC rotor potential
- Synchropter/intermeshing rotor (Kaman): simplicity, low torque reaction
- Tip-jet rotor (no torque reaction): mechanical complexity trade-offs
- Compound helicopter: auxiliary thrust (propeller) + auxiliary lift (stub wings)
- The retreating blade stall limit and why it caps conventional helicopter speed

**Guiding Questions:**
- Why does the single main rotor + tail rotor configuration dominate the market despite the tail rotor consuming ~10% of total power?
- What is retreating blade stall, and how do compound helicopters extend the speed envelope beyond it?
- How does a coaxial rotor achieve torque cancellation, and what are its disadvantages compared to conventional configurations?
- Why is the tandem configuration preferred for heavy-lift over single-main-rotor for the same reason low-wing aircraft are preferred for cargo?

### 5.3 Configuration Options for Multirotor UAVs
- Quadrotor (X, + configurations): redundancy vs. motor geometry
- Hexarotor and octorotor: failure tolerance and payload capacity
- Coaxial multirotor: compactness for given thrust
- Fixed vs. variable pitch multirotor: response bandwidth vs. mechanical complexity
- Tilt-rotor and tilt-body designs (e.g., Zipline Zara, Beta ALIA)
- Motor layout effects on controllability and response bandwidth

**Guiding Questions:**
- Why does a quadrotor have no structural redundancy in motor failure, while a hexarotor can survive one motor loss?
- What is the bandwidth limit of throttle-based (fixed-pitch) control, and why does variable pitch break through it?
- How does tilt-body vs. tilt-rotor affect the complexity and risk of transition to forward flight?
- Why do large multirotors become increasingly inefficient and why does this favour tiltrotors at larger scales?

### 5.4 Configuration Options for Tiltrotors & Hybrid VTOL
- Tiltrotor: rotor tilts from helicopter to fixed-wing mode (V-22, AW609)
- Tilt-wing: entire wing tilts (LTV XC-142, Canadair CL-84)
- Lift+cruise: dedicated lift rotors for VTOL + pusher/puller for cruise
- Vectored thrust: jet deflection (Harrier, F-35B)
- Compound helicopter as a hybrid
- eVTOL architecture taxonomy (Lilium jet, Joby S4, Archer Midnight, Wisk Aero)

**Guiding Questions:**
- What is the fundamental efficiency disadvantage of the lift+cruise architecture compared to the tiltrotor?
- Why does the V-22 tiltrotor have a conversion corridor rather than a single transition speed?
- What nacelle tilting rate is required for safe transition, and what structural loads does rapid tilting impose?
- How does the distributed electric propulsion (DEP) concept change the design freedom for hybrid VTOL?

### 5.5 Qualitative Configuration Trade Studies
- Pugh matrix / decision matrix for configuration selection
- Weighted criteria: aerodynamic efficiency, structural simplicity, certification risk, manufacturing cost, operational flexibility
- Technology Readiness Level (TRL) and its role in down-selecting configurations
- Configuration freezing: when is it too late to change?

**Guiding Questions:**
- How do you avoid bias in a Pugh matrix when the configuration has already been informally selected?
- What is TRL, how is it defined (NASA TRL scale 1–9), and why does a low-TRL component introduce program risk?
- What does "configuration freeze" mean in a programme context, and what are the consequences of violating it?

---

## Section 6 · Preliminary Sizing & Weight Estimation

> *How big and how heavy will the vehicle be, even before we know its detailed shape?*

### 6.1 First-Order Weight Estimation Methods
- Class I (statistical) weight estimation: Raymer's regression equations
- Raymer's MTOW sizing chart: range/endurance as a function of payload fraction
- Component weight fractions: wing, fuselage, empennage, landing gear, propulsion, systems
- Historical aircraft data: weight fraction trends for different vehicle classes
- Equivalent methods for helicopters: Tishchenko, Mil design bureau methods
- UAV weight estimation: distinct trends from manned aircraft

**Guiding Questions:**
- Why do statistical weight estimation methods work at all — what assumption underlies their accuracy?
- How does the empty weight fraction trend change from small general aviation aircraft to large transport jets, and why?
- Why are helicopter weight fractions fundamentally different from fixed-wing, and which component is most penalising?
- What are the limits of statistical methods when designing a truly novel vehicle configuration?

### 6.2 Class II Weight Estimation (Component Build-Up)
- Torenbeek method for structural component weights
- Roskam Class II method: analytical equations for each component
- Wing weight: structural vs. total, effect of aspect ratio, sweep, taper, thickness
- Fuselage weight: pressurised vs. unpressurised, effect of fuselage geometry
- Propulsion system weight: engine + accessories + fuel system
- Systems weight: avionics, ECS, hydraulics, electrical
- Iterative nature: weight estimate changes the design, which changes the weight

**Guiding Questions:**
- Why does increasing aspect ratio reduce induced drag but increase wing weight, and where is the optimum?
- How does cabin pressurisation add structural weight, and what does this imply for UAV design (no pressurisation)?
- How is the "snowball effect" in weight estimation managed — i.e., heavier structure requires more fuel, which requires a heavier structure?

### 6.3 Center of Gravity Estimation & CG Travel
- CG estimation from component weight and location
- CG travel with fuel burn, payload variation, passenger boarding
- Forward and aft CG limits: stability and control authority
- CG envelope diagram (loading diagram)
- Neutral point and static margin introduction
- Specific CG challenges for helicopters: rotor CG vs. aircraft CG
- Balancing tip: how aft CG loading differs between fixed-wing and rotorcraft

**Guiding Questions:**
- What defines the forward CG limit and what happens if it is exceeded?
- How does the CG travel from MTOW to OEW as fuel burns, and how must stability be maintained throughout?
- Why do helicopters have a much narrower CG envelope than fixed-wing aircraft?
- What is "CG margin" and how is it different from static margin?

---

# PART III — AERODYNAMICS

---

## Section 7 · Aerodynamic Fundamentals

> *What physical principles govern the generation of lift, drag, and moments on aerial vehicles?*

### 7.1 Fluid Mechanics Foundations
- Continuity equation and conservation of mass
- Euler equations: inviscid, irrotational flow
- Bernoulli's equation and its applicability limits
- Navier-Stokes equations: viscous, compressible form
- Boundary layer theory: laminar vs. turbulent, transition, separation
- Reynolds number: its role in scaling, laminar flow, and low-Re UAV aerodynamics

**Guiding Questions:**
- Why does Bernoulli's equation fail to explain all of the lift on a wing, and what is the correct explanation?
- What is the Reynolds number, and why does it change the fundamental character of the flow around UAVs at small scale?
- Why is boundary layer separation the central challenge in low-speed aerodynamics?
- At what Reynolds number range do laminar separation bubbles become dominant, and why does this matter for small drone wings?

### 7.2 Lift & Drag: Subsonic Flow
- Thin airfoil theory: Kutta-Joukowski theorem, circulation, lift curve slope
- Finite wing theory: Prandtl's lifting line, induced drag and span efficiency factor
- Drag polar: CD = CD0 + k·CL², Oswald efficiency, CDmin
- Lift-to-drag ratio and its relationship to range (Breguet)
- Ground effect: reduced induced drag near the ground
- Vortex lift on delta wings and strakes

**Guiding Questions:**
- Why is the theoretical 2D lift curve slope 2π/rad and why does a finite wing always have a lower value?
- What physically causes induced drag and why does it decrease as aspect ratio increases?
- Why is ground effect beneficial for takeoff and potentially dangerous for landing in some configurations?
- What is vortex lift and why does it allow delta wing fighters to sustain flight at angles of attack that would stall a conventional wing?

### 7.3 Compressibility Effects & High-Speed Aerodynamics
- Critical Mach number, drag divergence, and the transonic drag rise
- Area rule (Whitcomb) and its application to fuselage shaping
- Swept wing theory: delay of drag divergence
- Supercritical airfoils: how they manage shock strength
- Supersonic wave drag: Sears-Haack body, leading edge bluntness effects
- Sonic boom: near-field pressure signature and far-field N-wave
- Hypersonic aerodynamics: real-gas effects, dissociation, boundary layer heating (overview)

**Guiding Questions:**
- Why does sweep delay drag divergence and how does this allow efficient cruise at high Mach numbers?
- What is the area rule and how did it revolutionize transonic fighter design?
- Why do supersonic aircraft need thin, sharp leading edges at high speed but suffer from poor low-speed performance as a result?
- What is sonic boom minimization and why does it open the door for supersonic overland flight?

### 7.4 Rotor & Propeller Aerodynamics (Momentum Theory & Blade Element)
- Actuator disk model: momentum theory in hover and forward flight
- Figure of merit (FM) for rotors: ideal vs. actual hover efficiency
- Blade element theory: local angle of attack, twist, taper optimisation
- Combined BEMT (Blade Element Momentum Theory): the workhorse for rotor design
- Induced velocity distribution: uniform vs. non-uniform inflow
- Blade-vortex interaction (BVI): the source of impulsive noise and vibration
- Propeller efficiency vs. advance ratio (J); propeller vs. fan (ducted)

**Guiding Questions:**
- What is the figure of merit (FM) for a helicopter rotor and what values are typical for modern designs?
- How does BEMT differ from simple momentum theory and why is it necessary for blade design?
- Why does twist improve hover efficiency but potentially hurt autorotation performance?
- What is the physical mechanism of blade-vortex interaction and why is it so difficult to avoid in helicopter descents?
- Why does a ducted fan produce more thrust for the same diameter than an open rotor?

---

## Section 8 · Wing & Airfoil Design

> *How do we design the lifting surface(s) to meet aerodynamic efficiency, structural, and handling requirements simultaneously?*

### 8.1 Airfoil Selection & Design
- Airfoil nomenclature: NACA 4-digit, 5-digit, 6-series, supercritical
- Key airfoil parameters: camber, thickness, leading edge radius, trailing edge angle
- CL-max and stall character: gradual vs. abrupt; leading-edge vs. trailing-edge stall
- Laminar flow airfoils: NLF series, Reynolds sensitivity, surface finish requirements
- Rotor airfoils: OA209, NACA 63A series — hover vs. forward flight compromise
- UAV airfoils: low-Re considerations, Selig S-series
- Computational airfoil analysis: XFOIL, MSES, and their limitations

**Guiding Questions:**
- Why can a laminar airfoil lose its drag advantage entirely if the surface is contaminated with insects or rain?
- How does the NACA 6-series differ from the 4-series in terms of pressure distribution and what does this do for drag?
- Why must a rotor airfoil compromise between advancing blade (thin, low camber for high-Mach performance) and retreating blade (high CL capability) requirements?
- What happens aerodynamically below Reynolds numbers of ~100,000, and why does this make micro-drone wing design uniquely challenging?

### 8.2 Wing Planform Design
- Aspect ratio: induced drag vs. structural weight vs. span constraints
- Sweep: drag divergence delay vs. tip stall tendency vs. structural weight penalty
- Taper ratio: induced drag efficiency vs. root-to-tip CL distribution
- Twist (washout): stall sequencing, structural twist vs. aerodynamic twist
- Winglets & wing tip devices: induced drag reduction mechanisms, structural cost
- Variable sweep wings: F-111, F-14 — benefits and the mechanical cost
- Wing area selection from constraint diagram

**Guiding Questions:**
- Why do commercial airliners typically have aspect ratios of 9–12 while fighters have aspect ratios of 2–4?
- How does taper ratio affect the spanwise lift distribution, and why is an elliptical distribution ideal but rarely used?
- What is washout and why does it help prevent tip stall on swept wings?
- Why do winglets produce a drag reduction without increasing wingspan, and what is the structural trade-off?

### 8.3 High-Lift Systems
- Leading-edge devices: slats, Krueger flaps, droop nose — their effect on CLmax and stall angle
- Trailing-edge flaps: plain, split, slotted (single/double/triple), Fowler
- Fowler motion and its effect on wing area and camber
- Powered lift: boundary layer control (BLC), upper surface blowing (USB), externally blown flap (EBF)
- High-lift for short takeoff: STOL design features (C-17, STOL transports)
- Effect of high-lift on pitch trim and centre of pressure shift

**Guiding Questions:**
- Why does a Fowler flap increase CL more than a plain flap of the same chord?
- What is the slat gap optimisation problem and why is it different at takeoff vs. landing settings?
- How does boundary layer control (BLC) increase maximum lift and what are its power costs?
- Why does deploying high-lift devices shift the aerodynamic centre, and what does this require of the horizontal tail?

### 8.4 Control Surfaces: Ailerons, Spoilers, Flaperons
- Aileron design: location, chord ratio, span extent, differential deflection
- Roll control at low speed vs. high speed: reversal speed phenomenon
- Spoilers: roll control augmentation, lift dump on landing
- Flaperons: combined flap/aileron function — compromise and usage
- All-moving (stabilator) vs. conventional elevator: supersonic applications
- Aerodynamic and mass balance of control surfaces

**Guiding Questions:**
- What is aileron reversal and at what speed does it become a concern on flexible wings?
- Why do large transport aircraft use spoilers for high-speed roll control rather than ailerons?
- What is differential aileron deflection and why does it reduce adverse yaw?
- Why is mass balancing of a control surface required and what happens if it is insufficient?

---

## Section 9 · Fuselage & Body Aerodynamics

> *How does the fuselage contribute to, and detract from, aerodynamic performance?*

### 9.1 Fuselage Aerodynamics & Parasite Drag
- Fuselage drag components: skin friction, pressure (form) drag, interference drag
- Fineness ratio optimisation: length-to-diameter for minimum drag
- Afterbody design: boat-tail angle, separated flow penalties
- Cabin cross-section trade-offs: circular (pressure efficiency) vs. double-bubble
- Canopy and cockpit fairing design for fighters
- Interference drag at wing-fuselage junction: fillets and fairings

**Guiding Questions:**
- Why does a circular cross-section minimise structural weight for a pressurised fuselage while also being aerodynamically efficient?
- What is the boat-tail angle limit beyond which base drag rises rapidly?
- Why do military fighters use blended wing-fuselage designs and what aerodynamic benefit does it provide?
- What is interference drag and how are fillets used to reduce it?

### 9.2 Fuselage in Rotorcraft: Pods, Booms & Fairings
- Helicopter fuselage drag: download on rotor disk, empennage drag
- Tailboom design: diameter, length, tail rotor clearance
- Fenestron (shrouded tail rotor) aerodynamics vs. conventional tail rotor
- NOTAR (No Tail Rotor) system: circulation control and directional thruster
- UAV pod aerodynamics: payload integration, sensor window drag

**Guiding Questions:**
- Why is helicopter fuselage drag measured as an "equivalent flat plate area" rather than a drag coefficient?
- What is the tail rotor wake blockage problem and how does fenestron placement address it?
- How does the NOTAR system generate anti-torque without a tail rotor and what are its aerodynamic limitations?

---

## Section 10 · Stability & Control — Aerodynamic Aspects

> *How do the aerodynamic forces and moments produced by the vehicle shape determine its intrinsic stability?*

*(Note: Flight dynamics and control systems are covered in depth in Part IX — this section focuses on the aerodynamic contributions.)*

### 10.1 Longitudinal Static Stability
- Static margin: neutral point, CG, and the static margin percentage
- Stick-fixed vs. stick-free stability
- Contribution of wing, fuselage, and horizontal tail to Cmα
- Effect of downwash on tail effectiveness
- Canard: destabilising main surface, stabilising foreplane — net result
- Pitching moment at zero lift (Cm0) and trim requirements
- T-tail: deep stall susceptibility and why it is certification critical

**Guiding Questions:**
- Why does the fuselage almost always contribute destabilising pitching moments?
- What is the neutral point and why must the CG be forward of it for pitch stability?
- What is deep stall and why is a T-tail configuration particularly susceptible?
- How does downwash from the wing reduce the effective angle of attack seen by the horizontal tail?

### 10.2 Directional & Lateral Static Stability
- Cn,β: directional stability, contribution of vertical fin, fuselage, dorsal fin
- Cl,β: dihedral effect — wing dihedral, sweep, high vs. low wing position
- Roll-yaw coupling: Dutch roll, spiral, and how stability derivatives interact
- Keel effect and its contribution to lateral stability

**Guiding Questions:**
- Why does a high-wing configuration have inherently more dihedral effect than a low-wing, even with zero geometric dihedral?
- What is the Dutch roll mode and why is it an objectionable handling characteristic?
- How does wing sweep contribute to effective dihedral, and why does this create lateral-directional coupling?

---

# PART IV — PROPULSION SYSTEMS

---

## Section 11 · Propulsion Overview & Selection

> *What propulsion technology propels the vehicle, and how is the right one chosen?*

### 11.1 Propulsion System Taxonomy
- Piston engines: reciprocating — spark ignition (Avgas) and compression ignition (Diesel/Jet-A)
- Gas turbine engines: turbojet, turbofan (low and high bypass), turboprop, turboshaft
- Electric motors: BLDC, PMSM — with battery, fuel cell, or hybrid energy source
- Hybrid-electric: series, parallel, turbo-electric (NASA STARC-ABL concept)
- Rocket propulsion (ballistic/high-altitude): brief overview for completeness
- Ramjet / scramjet: applicable regime (M > 2.5 for ramjet, M > 5 for scramjet)

**Guiding Questions:**
- Why does turbofan bypass ratio dramatically affect specific fuel consumption and noise?
- What is the "power-to-weight" and "energy-to-weight" distinction, and why does it matter for electric aircraft?
- Why are turboshaft engines used in helicopters rather than turboprops or turbofans?
- What is the "turbo-electric" architecture and how does it differ from a hybrid-electric drivetrain in an automobile?

### 11.2 Engine Matching & Rubber Engine Concept
- Rubber engine sizing: scaling thrust with vehicle weight
- Sea level static thrust, installed thrust, lapse rate with altitude and speed
- Specific excess power (SEP) and its role in sizing military aircraft
- Power loading (W/P) for propeller-driven aircraft
- Engine-airframe matching: inlet compatibility, nozzle exit conditions
- Propulsive efficiency as a function of flight speed and propulsor type

**Guiding Questions:**
- What is a "rubber engine" and why is it used in conceptual design before a real engine exists?
- How does thrust lapse with altitude affect climb ceiling and what design choices compensate?
- Why is propulsive efficiency fundamentally higher for a large-diameter, low-speed propulsor?
- What is the specific excess power (SEP) chart and how is it used to specify fighter maneuver requirements?

### 11.3 Gas Turbine Engine Design Fundamentals
- Brayton cycle: thermal efficiency, pressure ratio, turbine inlet temperature
- Compressor: axial stages, polytropic efficiency, stall and surge margins
- Combustor: rich-quench-lean (RQL), lean-direct injection (LDI), emissions
- Turbine: cooling technology, thermal barrier coatings, creep life
- Turbofan architecture: fan, LPC, HPC, combustor, HPT, LPT, nozzle
- Engine control: FADEC (Full Authority Digital Engine Controller)
- Engine ratings: takeoff, max continuous, max climb, cruise

**Guiding Questions:**
- Why does increasing turbine inlet temperature (T4) improve thermal efficiency but challenge material life?
- What is compressor surge and how does the engine control system prevent it?
- Why does a two-spool engine handle a wider operating envelope more efficiently than a single-spool?
- Why is FADEC certification under DO-178C so important for engine safety?

### 11.4 Electric Propulsion & Energy Storage
- BLDC and PMSM motor fundamentals: torque, speed, power density
- Electronic speed controllers (ESC): switching frequency, efficiency
- Battery technology: Li-ion, LiPo, solid-state — specific energy, specific power, cycle life
- Fuel cells: PEMFC, SOFC — specific energy advantages over batteries
- Power electronics: inverters, converters, bus voltage architecture
- Thermal management: battery and motor cooling
- Electric propulsion for UAVs vs. for manned aircraft (scale effects)
- Certification challenges for electric aircraft: ARP4754A for novel architectures

**Guiding Questions:**
- Why is specific energy (Wh/kg) the dominant constraint for battery-electric range rather than motor power?
- What is the "energy density wall" and why does it prevent current batteries from competing with jet fuel on long-range missions?
- How does a fuel cell differ from a battery and why might it be preferred for long-endurance UAVs?
- Why must thermal management of high-power battery packs be treated as a safety-critical system?

---

# PART V — STRUCTURAL DESIGN & MATERIALS

---

## Section 12 · Structural Concepts & Load Paths

> *How does the structure carry loads from the aerodynamic surfaces and inertial sources to a safe, efficient load path?*

### 12.1 Loads — Sources & Classification
- Aerodynamic loads: lift distribution, pressure distribution, control surface hinge moments
- Inertial loads: weight, dynamic loads during maneuver, landing impact
- Ground loads: landing gear reactions, towing, jacking
- Thermal loads: thermal expansion, heat soak from aero-heating
- Acoustic loads: jet noise, propeller wake impingement
- Limit load vs. ultimate load: factor of safety 1.5 rationale
- V-n diagram: the flight envelope and gust envelope
- Dynamic loads: buffet, flutter, ground resonance (rotorcraft)

**Guiding Questions:**
- Why is the factor of safety for ultimate load 1.5 specifically, and not 2.0?
- What is the V-n diagram and which corner of the envelope drives the most demanding structural case?
- What is aeroelastic divergence and how does it differ from flutter?
- Why are ground resonance calculations critical for helicopter landing gear and skid design?

### 12.2 Structural Concepts for Fixed-Wing Aircraft
- Semi-monocoque construction: skin-stringer-rib-spar system
- Wing box: spar configuration (single, twin, multi-spar), cover panels with stringers
- Fuselage frames, longerons, skin panels, pressure vessels
- Load paths: bending, shear, torsion through the wing structure
- Fail-safe vs. safe-life vs. damage-tolerant design philosophy
- Crack growth, fracture mechanics, and inspection intervals (damage tolerance)
- Metallic vs. composite primary structure: different failure philosophies

**Guiding Questions:**
- What is the difference between a fail-safe and damage-tolerant structure, and which modern regulations require?
- Why must torsion and bending both be considered in wing box design, and which typically governs for a high-AR transport wing?
- What is the "stringer buckling" problem in skin-stringer panels and how is it managed?
- Why does a composite wing require a different damage tolerance philosophy than an aluminium one?

### 12.3 Structural Concepts for Rotorcraft
- Main rotor hub: articulated, semi-rigid (teetering), rigid, bearingless
- Rotor blade structure: D-spar, box spar, spar-skin construction
- Rotor blade fatigue: high-cycle (per revolution), spectrum loading
- Dynamic system: rotor head, swashplate, pitch links, lag dampers
- Tail boom: beam-column under combined bending and torsion
- Landing gear: skids vs. wheels, energy absorption, dynamic touchdown

**Guiding Questions:**
- What is an articulated rotor hub and why were the flapping and lead-lag hinges introduced?
- Why is rotor blade fatigue measured in cycles per flight hour rather than by load magnitude alone?
- What is ground resonance and how is it caused by the coupling of rotor lag mode with landing gear mode?
- How does a bearingless rotor eliminate mechanical bearings and what material enables this?

### 12.4 Structural Concepts for UAVs & Small Aircraft
- Low-scale structural challenges: skin buckling at thin gauges
- Composite monocoque: typical small UAV structure
- Printed/lattice structures: additive manufacturing considerations
- Internal volume constraints: payload, battery, avionics routing
- Crash-worthiness considerations for urban UAVs

**Guiding Questions:**
- Why do small UAVs almost universally use composite monocoque rather than semi-monocoque metallic construction?
- What new structural analysis challenges arise when additive manufacturing (3D printing) is used for primary structure?
- How does crash-worthiness design for a UAV operating over populated areas differ from traditional aircraft crashworthiness?

---

## Section 13 · Materials Selection

> *Which materials carry loads most efficiently, and how do manufacturing, cost, and certification constrain that choice?*

### 13.1 Metallic Materials
- Aluminium alloys: 2024, 7075, 7068 — strength, density, corrosion, fatigue
- Titanium alloys: Ti-6Al-4V — high strength, low density, high temp, cost
- Steel alloys: high-strength steels for landing gear, fittings
- Superalloys: Inconel, Waspaloy — turbine hot section applications
- Aluminium-lithium alloys: reduced density, improved stiffness
- Material temper and heat treatment: T6, T73, annealing effects

**Guiding Questions:**
- Why is 7075-T6 preferred over 2024-T3 for compression-critical structures but 2024-T3 for tension-fatigue?
- What is stress corrosion cracking (SCC) and why does it affect high-strength aluminium in certain tempers?
- Why is titanium used for fasteners in a carbon fibre composite structure even though titanium is expensive?
- What temperature limits the use of aluminium in hypersonic vehicles?

### 13.2 Composite Materials
- Carbon Fibre Reinforced Polymer (CFRP): fibres, matrix, lay-up
- Glass Fibre (GFRP) and Aramid (Kevlar/AFRP): application niches
- Unidirectional vs. woven vs. non-crimp fabrics (NCF)
- Laminate design: stacking sequence, symmetric/balanced requirements
- Failure modes: fibre fracture, matrix cracking, delamination, inter-fibre failure
- Barely Visible Impact Damage (BVID): the central design challenge for CFRP
- Moisture, temperature, UV exposure effects on matrix-dominated properties
- Open-hole and filled-hole compression knockdown factors

**Guiding Questions:**
- Why is delamination the most critical failure mode in CFRP and how does the lay-up sequence affect susceptibility?
- What is BVID and why does CFRP require a conservative knockdown factor compared to metals?
- Why must a symmetric and balanced laminate be used to avoid thermally induced warping?
- How does moisture absorption affect CFRP compression strength and how is this accounted for in design?

### 13.3 Advanced & Emerging Materials
- Metal matrix composites (MMC): Al/SiC for stiffness-critical applications
- Ceramic matrix composites (CMC): GE9X turbine blades — replacing superalloys
- Additive manufacturing: Ti-6Al-4V printed parts, qualification challenges
- Thermoplastic composites: PEEK, PEKK — repairability and recycling advantages
- Natural fibre composites: flax, hemp — sustainability drivers
- Nanomaterials: CNT-reinforced composites (research stage)

**Guiding Questions:**
- What specific advantage do CMC turbine blades offer over superalloy blades and what certification path was required?
- Why is qualification of additively manufactured (AM) parts for primary structure so challenging?
- What structural property advantages do thermoplastic matrix composites offer over thermoset, and what processing challenges remain?

---

## Section 14 · Aircraft Systems Design

> *Beyond structure and aerodynamics, what systems must be integrated to make the vehicle function, and how do they interact?*

### 14.1 Flight Control Systems (Mechanical, Fly-by-Wire, Fly-by-Light)
- Mechanical control: cables, pushrods, bellcranks — simplicity and failure modes
- Hydraulically boosted controls: feel simulation, artificial feel
- Fly-by-Wire (FBW): signalling, actuation, pilot inceptors
- Control laws: normal law, alternate law, direct law — Airbus vs. Boeing philosophy
- Redundancy architectures: triplex, quadruplex, dissimilar redundancy
- Fly-by-Light (FBL): optical signalling, EMI immunity
- Flight envelope protection: alpha protection, bank angle limiting, Vmo/Mmo
- UAV flight control: autopilot, GCS, communication links, lost-link behaviour
- Rotorcraft AFCS: SCAS (Stability and Control Augmentation System), autopilot modes

**Guiding Questions:**
- Why does FBW allow relaxed static stability (RSS) and what aerodynamic efficiency benefit does RSS provide?
- What is the difference between the Airbus and Boeing FBW control law philosophies, and which provides more departure resistance?
- What is dissimilar redundancy in a flight control computer and why is it preferred over identical redundant channels?
- What is a lost-link procedure for a UAV and how must it be designed to satisfy BVLOS regulations?

### 14.2 Hydraulic & Pneumatic Systems
- Hydraulic system architecture: reservoirs, pumps, accumulators, actuators
- System pressure: 3,000 psi vs. 5,000 psi — aircraft weight savings
- Redundancy: dual or triple hydraulic systems; interaction with FBW
- Pneumatic (bleed air) system: engine bleed, uses (anti-ice, pressurisation, starting)
- More-Electric Aircraft (MEA): replacing hydraulics and bleed air with electric power
- Hydraulic fluid types: petroleum (MIL-H-5606), phosphate ester (Skydrol)

**Guiding Questions:**
- Why is 5,000 psi becoming more common in modern aircraft and what is the weight saving?
- Why did the Boeing 787 move to an electro-hydraulic architecture with no bleed air extraction?
- What is the "More Electric Aircraft" concept and what systems does it affect beyond just flight controls?

### 14.3 Electrical Power Systems
- Primary power generation: engine-driven generators, APU, ram air turbine (RAT)
- AC vs. DC architecture: 115VAC/400Hz vs. 28VDC vs. 270VDC (MEA) vs. 540VDC (HVDC)
- Power distribution: busbars, contactors, protection (CBs, SSPCs)
- Emergency power: batteries, RAT
- Electrical load analysis and growth margins
- eVTOL all-electric power systems: high-voltage bus, motor controllers
- Lightning protection: zone classification, bonding, shielding

**Guiding Questions:**
- Why is 270VDC HVDC preferred for more-electric aircraft over 115VAC/400Hz?
- What is a Solid-State Power Controller (SSPC) and why is it replacing circuit breakers in modern aircraft?
- How is lightning strike protection designed into a carbon composite airframe, and why is it more complex than for a metallic aircraft?
- What is the Electrical Load Analysis (ELA) document and why must it be revisited repeatedly during design?

### 14.4 Avionics, Navigation & Communication
- Avionics architecture: federated vs. integrated modular avionics (IMA)
- IMA: ARINC 653, DO-178C partitioning, shared hardware for multiple functions
- Navigation: GPS/GNSS, INS, VOR/ILS/DME, ADS-B in/out, terrain awareness (TAWS)
- Communication: VHF/UHF, SATCOM, datalink (ACARS, VDL Mode 2, LDACS)
- Cockpit displays: PFD, ND, EICAS/ECAM, HUD, synthetic vision
- Sense-and-avoid (SAA) for UAS: ADS-B, TCAS, radar, optical
- Cybersecurity: DO-326A for airworthiness security process

**Guiding Questions:**
- What is Integrated Modular Avionics (IMA) and why does it offer weight, volume, and certification advantages over federated architectures?
- How does the ARINC 653 partitioning standard prevent a software failure in one application from propagating to others?
- What is ADS-B and why is it considered a prerequisite for BVLOS drone operations?
- Why is airworthiness cybersecurity (DO-326A) a relatively new concern and what threats does it address?

### 14.5 Environmental Control System (ECS) & Life Support
- Pressurisation: cabin altitude, pressure differential, FAR 25.841 requirements
- Air conditioning: PAC (Pack Air Conditioning), bleed air vs. electric sources
- Oxygen systems: chemical generators vs. gaseous vs. OBOGS (On-Board Oxygen Generating System)
- Thermal management for electronics: liquid cooling, heat exchangers
- Cabin humidity and air quality: recirculation filters, HEPA
- High-altitude and hypoxia considerations for unpressurised UAV ground control stations
- Pilot life support for fighters: OBOGS, G-suits, pressure breathing

**Guiding Questions:**
- Why is 8,000 ft (2,438 m) the maximum cabin altitude for a pressurised transport, and what drives this limit?
- Why is bleed air being replaced by electrically powered ECS in new designs and what are the benefits?
- What is OBOGS and why has it largely replaced gaseous oxygen systems in modern fighters?
- How is thermal management of avionics becoming a design driver for densely integrated cockpits?

### 14.6 Fuel Systems
- Fuel tank arrangement: integral wing tanks, fuselage tanks, tip tanks, external tanks
- Fuel management: sequence, CG control, transfer, crossfeed
- Refuelling: pressure refuelling, gravity fill, aerial refuelling
- Inerting systems: OBIGGS (On-Board Inert Gas Generation System), fuel vapour hazard
- Fuel system requirements: FAR 25.951–25.1001, crash safety
- Fuel for electric aircraft: battery management system, charging architecture

**Guiding Questions:**
- Why does fuel management sequence matter for CG control and what happens if fuel is burned from the wrong tank?
- What is an OBIGGS and why was it mandated after the TWA 800 accident?
- How does aerial refuelling capability change the operational concept and structural design of a military aircraft?
- What safety requirements apply to high-voltage battery packs analogous to conventional fuel system fire protection?

### 14.7 Landing Gear Systems
- Fixed vs. retractable: drag penalty trade-off and actuation system
- Tricycle vs. tailwheel vs. tandem configurations: ground stability, visibility
- Landing gear loads: vertical, spin-up, spring-back, turning, braking
- Energy absorption: oleo-pneumatic shock absorbers, leaf spring (light aircraft), skids
- Wheels, brakes, tires: brake energy capacity, anti-skid (ABS), carbon brakes
- Ground steering: nose-wheel steering, differential braking
- Arresting gear (carrier aircraft): hook, pendant, wire loads
- Skid gear for helicopters: ground resonance, run-on landings

**Guiding Questions:**
- Why is tricycle gear almost universal for modern aircraft (vs. tailwheel), and in which applications does tailwheel still dominate?
- What is the oleo shock absorber stroke calculation and how is sink rate at design landing used to size it?
- Why does an aircraft carrier arresting hook impose structural loads far exceeding the aircraft's in-flight limit loads?
- What is shimmy in nose gear and how is it suppressed?

---

# PART VI — PERFORMANCE ANALYSIS

---

## Section 15 · Fixed-Wing Aircraft Performance

> *What can this aircraft do, and how do its design parameters determine the performance numbers?*

### 15.1 Equations of Motion & Steady Flight
- Forces in steady level flight: lift = weight, thrust = drag
- Thrust required vs. thrust available curves
- Power required vs. power available: significance for propeller aircraft
- Minimum power speed vs. minimum drag speed: their relationship
- Stall speed: function of CLmax, wing loading, air density
- Maximum speed: thrust-limited vs. buffet-limited (transonic)

**Guiding Questions:**
- Why is minimum power speed always lower than minimum drag speed, and which is more relevant for endurance?
- How does density altitude affect both stall speed (IAS vs. TAS) and maximum speed in level flight?
- Why does a propeller-driven aircraft have better endurance at a lower speed than minimum drag speed?

### 15.2 Climb Performance
- Climb gradient and rate of climb: relationships
- Best rate of climb speed (Vy) and best angle of climb speed (Vx): why they differ
- Absolute ceiling, service ceiling, cruise ceiling
- Specific excess power (SEP) and its use in fighter climb performance
- Time-to-climb integration and energy-maneuverability theory (EM theory, John Boyd)
- Rotorcraft climb: vertical rate of climb, forward flight climb

**Guiding Questions:**
- Why does Vy (best rate of climb) decrease with altitude for a jet but stay roughly constant for a piston aircraft?
- What is the absolute ceiling and why is it not operationally useful?
- What is the energy-maneuverability (EM) theory and how did John Boyd use it to shape F-16 design?

### 15.3 Range & Endurance
- Breguet range equation: derivation and interpretation
- Effect of altitude on range: Mach-altitude trade for transport jets
- Long-range cruise (LRC) vs. max range cruise (MRC)
- Endurance: loiter at minimum power speed
- Range for electric aircraft: the energy fraction equation
- Effect of wind: optimum altitude for jet streams

**Guiding Questions:**
- Why does a jet achieve maximum range at a specific combination of altitude and Mach number, and how is this found?
- How does a headwind affect optimal cruise altitude for a transport jet?
- Why is the specific air range (SAR, nm/kg fuel) a more operationally useful metric than L/D?

### 15.4 Takeoff & Landing Performance
- Ground roll: balanced field length, accelerate-stop, accelerate-go
- Decision speed V1, rotation speed VR, takeoff safety speed V2
- Obstacle clearance: 35 ft screen height
- Landing: approach speed (1.3 × Vstall), flare, ground roll, stopping distance
- Effect of runway slope, density altitude, contamination (wet, snow, ice)
- STOL and VTOL transition performance
- Cat III approach and autoland

**Guiding Questions:**
- What is balanced field length and why is it a certification requirement rather than a design input?
- Why is V1 not simply the stall speed, and what happens if the decision to abort is made above V1?
- How does a 10°C above-standard temperature day affect takeoff performance at a high-elevation airport?

---

## Section 16 · Rotorcraft & Multirotor Performance

> *How does the performance of rotary-wing vehicles differ fundamentally from fixed-wing?*

### 16.1 Hover Performance
- Hover power required: momentum theory, ideal vs. induced vs. profile power
- Figure of merit and its sensitivity to disk loading
- Out-of-ground-effect (OGE) vs. in-ground-effect (IGE) hover: the wall effect
- Hover ceiling: density altitude limit for helicopter operations
- Power loading curves: effect of rotor speed, blade number, twist

**Guiding Questions:**
- Why does increasing disk loading (smaller rotor for same thrust) increase hover power so dramatically?
- What physical mechanism causes ground effect to reduce power required in hover?
- How is the hover ceiling (OGE) determined and what atmospheric conditions most severely limit it?

### 16.2 Forward Flight Performance (Rotorcraft)
- Power components in forward flight: induced, profile, parasite
- Power vs. speed curve: bucket shape — minimum power speed
- Maximum level flight speed: limited by retreating blade stall or structural loads
- Blade loads in forward flight: advancing blade Mach effects, retreating blade low-speed
- Autorotation: power-off descent, collective setting, landing flare
- Range and endurance for helicopters

**Guiding Questions:**
- Why does helicopter power first decrease as forward speed increases from hover, then rise again at high speed?
- What is autorotation and why is the ability to autorotate a key certification requirement for FAR 27/29?
- What fundamentally limits helicopter top speed and how do compound helicopter designs address this limit?

### 16.3 Multirotor UAV Performance
- Hover endurance: dominated by battery specific energy and motor/prop efficiency
- Forward flight: transition from hover to cruise, aerodynamic efficiency
- Payload-endurance trade-off for delivery drones
- Wind sensitivity: effect of gusty conditions on battery drain
- Discharge curves: capacity reduction at high C-rate

**Guiding Questions:**
- Why do quadrotors typically achieve only 20–30 minutes of hover endurance regardless of battery capacity increases?
- How does the advance ratio of a multirotor propeller change during transition to forward flight and what are the efficiency implications?
- What C-rate (discharge rate) is typical for a heavy-lift drone and why does it reduce available capacity?

---

# PART VII — STABILITY & CONTROL

---

## Section 17 · Static & Dynamic Stability

> *How does the vehicle respond to disturbances, and what makes it naturally stable or unstable?*

### 17.1 Longitudinal Static Stability (Detailed)
- CM vs. CL curve: slope must be negative for pitch stability
- Stick-fixed neutral point: aerodynamic centre of the complete aircraft
- Static margin: definition, recommended range for different aircraft types
- Pitch trim: elevator deflection required for trim at various speeds
- Forward and aft CG limits from trim and stability considerations

**Guiding Questions:**
- What is the physical meaning of the stick-fixed neutral point and why is it different from the aerodynamic centre of the wing?
- Why do fighter aircraft operate with negative static margin and how is this stabilised?
- How does static margin change with Mach number and why is Mach-tuck dangerous?

### 17.2 Dynamic Longitudinal Stability
- Short period mode: high frequency, pitch oscillation, requires adequate damping
- Phugoid mode: long period, altitude/speed exchange, lightly damped
- Short period frequency and damping requirements (MIL-SPEC, handling qualities)
- Cooper-Harper rating scale for handling qualities

**Guiding Questions:**
- Why is the short period mode more important for pilot workload than the phugoid?
- What damping ratio is considered adequate for the short period mode in a fighter vs. a transport?
- What does a Cooper-Harper rating of 6 mean operationally?

### 17.3 Lateral-Directional Dynamic Stability
- Dutch roll mode: combined yaw-roll oscillation
- Roll subsidence: first-order roll response
- Spiral mode: slow, often divergent — why civil aircraft are allowed weakly spiral unstable
- Yaw damper: suppressing Dutch roll for passenger comfort
- Coupling: dihedral effect, directional stability, and their interaction

**Guiding Questions:**
- Why is the Dutch roll mode objectionable even when it is technically stable?
- Why are transport aircraft permitted a weakly spiral-unstable mode under FAR 25?
- What does a yaw damper do to the Dutch roll eigenvalue, and how does it work physically?

### 17.4 Rotorcraft Stability
- Inherent instability of the single main rotor helicopter in hover
- Flapping response and its stabilising role
- Rotor speed stability (Rh derivation)
- SCAS (Stability and Control Augmentation System): rate damping, attitude hold
- Helicopter handling qualities: ADS-33 standard

**Guiding Questions:**
- Why is a helicopter hover inherently unstable in pitch, and what happens without an SCAS?
- What is ADS-33 and how does it define handling qualities for rotorcraft differently from fixed-wing standards?
- What is the "Long TCR" (time constant of roll) requirement in ADS-33 and what does it mean for pilot workload?

---

# PART VIII — DETAILED DESIGN

---

## Section 18 · Structural Analysis & Sizing

> *Given the load cases and material properties, how do we size the structural members?*

### 18.1 Structural Analysis Methods
- Hand calculations: classical beam theory, torsion box idealisation
- Finite Element Analysis (FEA): model building, load application, mesh convergence
- Linear vs. nonlinear FEA: geometric nonlinearity (large deformations), material nonlinearity
- Buckling analysis: Euler column buckling, plate buckling, stiffened panel buckling
- Dynamic analysis: natural frequency, modal shapes, forced response
- Fatigue analysis: S-N curves, rain-flow counting, Miner's rule, crack growth (LEFM)
- Composites analysis: CLT (Classical Lamination Theory), progressive failure analysis

**Guiding Questions:**
- When is a hand calculation appropriate and when must FEA be used for structural sizing?
- What is mesh convergence and why does it matter for the accuracy of stress results in FEA?
- What is the Miner's rule linear damage model and why does it sometimes under-predict fatigue life?
- How does Classical Lamination Theory predict laminate stiffness and first-ply failure?

### 18.2 Aeroelasticity
- Static aeroelasticity: divergence (torsional instability) and control reversal
- Dynamic aeroelasticity: flutter (bending-torsion coupling, wing-store flutter)
- Flutter speed prediction: Theodorsen method, p-k method, matched-point solution
- Structural damping and its role in flutter prediction accuracy
- Panel flutter for supersonic aircraft
- Ground vibration test (GVT) and flight flutter clearance
- Whirl flutter for propellers and tiltrotors

**Guiding Questions:**
- What is divergence and why does a forward-swept wing make it more critical?
- What is flutter and what structural coupling between bending and torsion modes is required for it to occur?
- Why must every new aircraft type be cleared for flutter before first flight?
- What is whirl flutter and why is it uniquely critical for tiltrotor aircraft?

---

## Section 19 · Thermal & Acoustic Design

> *How do thermal and acoustic environments affect the vehicle and its structure, and how do we design against them?*

### 19.1 Aerodynamic Heating (Supersonic & Hypersonic)
- Stagnation temperature: kinetic heating at high Mach
- Thermal management of leading edges and canopies at Mach 2+
- TPS (Thermal Protection System) for hypersonic vehicles: TUFI, SIRCA, ablatives
- Skin temperature distribution and its effect on aluminium vs. titanium vs. composite choice

**Guiding Questions:**
- At what Mach number does aerodynamic heating become a structural design constraint for a fighter?
- What TPS technology made the Space Shuttle reusable, and what were its limitations?

### 19.2 Engine Noise & Structural Acoustic Design
- Jet noise: mixing noise, turbomachinery tonal noise
- Propeller and rotor noise: thickness noise, loading noise, BVI noise
- Airframe noise: landing gear, leading-edge slats at approach
- Interior noise: transmission loss of fuselage panels, absorption treatment
- Vibration isolation: engine mounts, rotor head absorbers (helicopter)

**Guiding Questions:**
- What is the dominant noise source for a modern high-bypass turbofan at approach, and why has the challenge shifted to airframe noise?
- How do active vibration control systems in modern helicopters reduce cabin noise and vibration?

---

# PART IX — CAD, DIGITAL DESIGN & ENGINEERING TOOLS

---

## Section 20 · CAD Framework & Digital Design Environment

> *What tools, standards, and workflows are used to turn analytical definitions into a full 3D digital description of the vehicle?*

### 20.1 CAD Tools in Aerospace — Overview & Selection
- Parametric solid modelling: CATIA V5/V6, SIEMENS NX, PTC Creo, SolidWorks
- Mesh-based surface modelling: Rhino, Alias — for Class-A surfacing
- Open-source options: FreeCAD, OpenVSP (Vehicle Sketch Pad — NASA)
- CFD pre/post: ICEM CFD, Pointwise, ParaView
- FEA pre/post: MSC Nastran, ANSYS Mechanical, Abaqus
- Multi-physics platforms: ANSYS Workbench, Simulia
- MDO frameworks: OpenMDAO (NASA), MATLAB/Simulink, ModelCenter

**Guiding Questions:**
- Why is CATIA V5 dominant in aerospace despite its cost and steep learning curve?
- What is OpenVSP and why is it particularly useful at the conceptual and preliminary design stage?
- How does an MDO framework couple CAD geometry with aerodynamic and structural solvers?
- What is the difference between parametric modelling and direct modelling, and why does parametric dominate in aircraft design?

### 20.2 Parametric & Feature-Based Modelling
- Parametric models: design intent, parent-child relationships, feature trees
- Skeleton models: datum geometry driving the airframe
- Master model concept: single-source geometry for all downstream work
- Parameters and design tables: driving geometry through spreadsheets
- Robust modelling: features that do not fail under parameter changes
- Geometric constraints: fully constrained vs. underconstrained sketches

**Guiding Questions:**
- What is a skeleton model and why is it the recommended starting point for a new airframe in CATIA?
- What makes a parametric model "robust" and what causes a model to "break" when parameters change?
- How does the master model concept prevent geometry inconsistencies between disciplines?
- What is the difference between a weak (under-constrained) and strong (fully constrained) sketch, and which should be used in production models?

### 20.3 Surface Modelling & Class-A Aerodynamic Surfaces
- Class-A surfaces: curvature continuous (G2), tangency continuous (G1), positional (G0)
- NURBS: control points, knot vectors, degree — geometric meaning
- Surface quality analysis: zebra stripes, highlight lines, Gaussian curvature maps
- Loft features: cross-sections, guide curves, surface continuity options
- Fill surfaces: complex junction regions — fuselage-wing junctions
- Aerodynamic surface CAD: wing OML from airfoil definition to 3D model

**Guiding Questions:**
- What is the difference between G0, G1, and G2 continuity and why does aerodynamic performance require G2?
- What is a NURBS surface and how do control point weights affect surface curvature?
- How are zebra stripes and curvature maps used to identify surface quality defects?
- How is a wing outer mould line (OML) constructed from a set of airfoil sections and a spanwise twist/thickness distribution?

### 20.4 Assembly Modelling & Product Structure
- Top-down vs. bottom-up assembly modelling
- Product tree: vehicle → system → assembly → sub-assembly → part
- Assembly constraints: mate, align, offset, angular constraints
- Context modelling: designing parts in the context of the assembly
- Configuration management: variants, options, version control
- EBOM (Engineering Bill of Materials) vs. MBOM (Manufacturing Bill of Materials)
- Product Lifecycle Management (PLM): Windchill, Teamcenter, ENOVIA

**Guiding Questions:**
- What is top-down assembly design and why is it preferred for complex aircraft assemblies?
- What is the difference between an EBOM and MBOM, and at what stage of development does the MBOM become necessary?
- How does PLM software manage concurrent engineering when hundreds of engineers work on the same assembly?
- What is a "frozen" vs. "live" geometry link in assembly modelling and what are the trade-offs?

---

## Section 21 · Interference Checks & Clearance Analysis

> *How do we ensure that all components fit together correctly, with no unintended clashes, and appropriate clearances?*

### 21.1 Types of Interference & Clearance
- Hard interference (clash): two solid bodies occupying the same space — a design error
- Soft interference (near-miss): components within a minimum clearance envelope
- Functional clearance: clearance required for thermal expansion, vibration, installation
- Electrical clearance: high-voltage insulation distance requirements
- Clearance types: static, dynamic (under load/thermal), installation clearance

**Guiding Questions:**
- What is the difference between a hard and soft interference and which is more insidious in a complex assembly?
- Why is a static clearance check alone insufficient and when must dynamic clearance analysis be performed?
- What minimum clearance is typically required between hydraulic pipes and structural members to account for vibration?

### 21.2 Clash Detection Workflows in CAD
- Clash detection tools: CATIA DMU (Digital Mock-Up), NX Assembly Analyzer, Navisworks
- Static clash detection: all components in nominal position
- Dynamic clash detection: moving parts through their range of motion
- Clearance zones: "keep-out" volumes defined around components
- Managing clash reports: severity classification, owner assignment, resolution tracking
- Clash matrix: systematic pair-wise checking of all assembly subsets

**Guiding Questions:**
- What is a Digital Mock-Up (DMU) and how has it replaced physical mock-ups in modern aircraft development?
- How do you manage thousands of interference reports generated from a full aircraft DMU check?
- Why must dynamic clash detection simulate the full range of motion of every moving component?
- What is a "keep-out zone" and how is it used to protect sensitive equipment from other installations?

### 21.3 Systems Routing & Clash Management
- Pipe and tube routing: bend radii, support spacing, clamping
- Wire harness routing: bend radius, bundle diameter, minimum separation from hot zones
- Equipment zone layout: hydraulic, electrical, bleed air zones — segregation requirements
- Zone isolation for redundant systems: FAR 25.1309 separation requirements
- Thermal clearance: hot structures (exhaust ducts, APU) — minimum standoff from composites

**Guiding Questions:**
- What is the FAR 25.1309 zonal requirement for physically separating redundant system channels?
- Why must hydraulic pipes and fuel pipes never be routed in the same zone?
- What bend radius limits apply to hydraulic lines and what damage results from under-radius bends?
- Why are electrical wire harnesses near aircraft fuel tanks subject to special routing and shielding rules?

### 21.4 Mass Properties & CG Verification in CAD
- CAD-based mass properties: density assignment, material override
- CG calculation from component locations in assembly
- CG travel with configuration changes: gear up/down, flap settings, fuel burn simulation
- Mass properties documentation: weight statement, CG envelope
- CAD vs. actual weight: typical design-to-build weight growth and its management

**Guiding Questions:**
- How accurately can CAD-derived mass properties predict actual build weight, and where do discrepancies arise?
- Why is weight growth almost universal from PDR to manufacturing, and what process controls limit it?
- How does a CG envelope diagram help verify that no loading configuration violates stability limits?

---

## Section 22 · Tolerancing, GD&T & Dimensional Management

> *How do we specify allowable variation in dimensions to ensure parts fit, function, and are manufacturable?*

### 22.1 Tolerancing Fundamentals
- Why tolerances exist: manufacturing process variation, thermal expansion, wear
- Types of tolerances: bilateral, unilateral, limit dimensions
- Tolerance accumulation: worst-case (RSS) tolerance stack-up analysis
- Statistical tolerancing: assuming normal distribution of variation, Cpk
- Functional requirements driving tolerance selection: fits, clearances, interference fits
- Tolerance vs. cost: manufacturing difficulty and inspection cost as tolerance tightens

**Guiding Questions:**
- What is tolerance stack-up and why can a single tight joint tolerance propagate to a large assembly-level mismatch?
- When is worst-case analysis appropriate vs. statistical (RSS) tolerance analysis?
- How does a Process Capability Index (Cpk) relate a manufacturing process to a tolerance specification?
- Why is reducing tolerance always a cost driver and how do engineers balance function with manufacturability?

### 22.2 Geometric Dimensioning & Tolerancing (GD&T)
- GD&T standards: ASME Y14.5-2018, ISO 1101
- Datums: datum reference frames, primary-secondary-tertiary hierarchy
- Tolerance types: flatness, straightness, circularity, cylindricity (form)
- Perpendicularity, parallelism, angularity (orientation)
- Position, concentricity, symmetry (location)
- Profile of a surface, profile of a line (profile)
- Runout, total runout (runout)
- Maximum Material Condition (MMC), Least Material Condition (LMC), Regardless of Feature Size (RFS)
- Composite position tolerancing for aerospace hole patterns

**Guiding Questions:**
- Why is GD&T preferred over traditional ± tolerances for aerospace components?
- What is a datum reference frame and why does the order of datum precedence matter?
- When is Maximum Material Condition (MMC) modifier used and what does it allow the manufacturer to do?
- How does composite position tolerancing control both pattern location and individual feature location independently?

### 22.3 Dimensional Management in Aircraft Assembly
- Assembly variation analysis: sources of variation — part, fixture, process
- Key Characteristics (KCs): the dimensions that most affect safety, performance, or fit
- Key Product Characteristics (KPCs) and Key Control Characteristics (KCCs)
- Tolerance analysis tools: 3DCS, Variation Systems Analysis (VSA), CETOL
- Shim design: where shimming is planned vs. where it indicates a problem
- Net-shape assembly: drill-on-assembly (DOA), assembly without shimming
- Optical metrology: laser tracker, photogrammetry, structured light scanning for large assemblies

**Guiding Questions:**
- What is a Key Characteristic (KC) and how is the list of KCs derived during design?
- What is the difference between a planned shim and an emergency shim, and why does the latter indicate a design problem?
- How does Drill-on-Assembly (DOA) reduce assembly variation compared to pre-drilled parts, and what is the process challenge?
- Why has laser tracker metrology transformed the assembly of large aircraft structures like fuselage sections?

### 22.4 Tolerance Specification for Composites
- Composite part dimensional variation: spring-back, cure shrinkage, ply-drop offsets
- Tolerancing for CFRP parts: different from metals — no cold working, no spring-back correction
- Surface waviness and its aerodynamic effect on laminar flow
- Co-cured vs. co-bonded vs. secondary bonded assemblies: dimensional implications
- Tooling tolerances: CTE mismatch between tool and part

**Guiding Questions:**
- Why does a CFRP part spring back after release from the mould and how is this compensated in tooling design?
- What is ply drop-off and how is its dimensional effect on adjacent structure managed?
- Why is surface waviness critical for laminar flow wings and what tolerance limit is typically imposed?

---

# PART X — MANUFACTURING & BUILD CONSIDERATIONS

---

## Section 23 · Manufacturing Processes & Design for Manufacturing

> *How are aircraft components made, and how should design decisions account for manufacturing feasibility and cost?*

### 23.1 Design for Manufacturing (DFM) & Assembly (DFA)
- DFM principles: minimise part count, use standard processes, avoid tight tolerances
- DFA principles: unidirectional assembly, self-locating parts, accessibility
- Early Manufacturing Involvement (EMI): integrating manufacturing engineering in design
- Manufacturing readiness levels (MRL 1–10): parallel to TRL
- Design review gates: PDR, CDR, PRR — manufacturing readiness at each gate
- Build-to-package (BTP) and model-based definition (MBD)

**Guiding Questions:**
- What does "Design for Manufacturing" actually mean in practice and what are the most common violations?
- Why does involving manufacturing engineers at the conceptual design stage reduce programme cost?
- What is Model-Based Definition (MBD) and how does it replace 2D drawings?
- What is Manufacturing Readiness Level (MRL) and why must it be tracked alongside TRL?

### 23.2 Metallic Manufacturing Processes
- Machining: milling (3-axis, 5-axis), turning, EDM, grinding
- Sheet metal forming: stretch forming, press forming, hydroforming, Superplastic Forming (SPF)
- Forging: open-die, closed-die, isothermal — landing gear forgings
- Casting: investment casting for complex shapes (engine components)
- Extrusions: stringer profiles, fuselage frames
- Joining: riveting, welding (TIG, MIG, friction stir welding), bonding
- Surface treatment: anodising, chem-milling, shot-peening, corrosion protection

**Guiding Questions:**
- Why is 5-axis CNC machining preferred for complex spar fittings over casting or forging?
- What is Superplastic Forming (SPF) and what advantage does it offer over conventional forming for complex titanium parts?
- Why is friction stir welding (FSW) transformative for aluminium fuselage construction compared to fusion welding?
- What is chem-milling and why is it used to reduce weight of large aluminium skins?

### 23.3 Composite Manufacturing Processes
- Manual lay-up: wet lay-up, prepreg hand lay-up — quality and repeatability
- Automated Fibre Placement (AFP): robotic, ply-by-ply, controlled path
- Automated Tape Laying (ATL): flat and contoured panels
- Resin Transfer Moulding (RTM): closed mould, high fibre volume fraction
- Vacuum-Assisted RTM (VARTM): out-of-autoclave (OOA) alternative
- Autoclave cure: temperature-pressure cycle, consolidation, void content
- Out-of-autoclave prepreg: OOA prepreg systems (Cytec CYCOM 5320)
- Filament winding: cylindrical pressure vessels, COPV for hydraulics/oxygen
- Inspection: ultrasonic testing (UT), thermography, X-ray CT for composites

**Guiding Questions:**
- Why is automated fibre placement (AFP) preferred over manual lay-up for primary structure?
- What void content level is acceptable in a CFRP primary structure and how is it measured?
- What is the major advantage of Out-of-Autoclave (OOA) processes over autoclave cure, and what is the trade-off?
- How does Resin Transfer Moulding reduce manufacturing labour and improve dimensional accuracy?

### 23.4 Additive Manufacturing (AM) in Aerospace
- Process types: SLM/DMLS (metal powder bed fusion), DED (directed energy deposition), FDM (polymer)
- Materials: Ti-6Al-4V, Inconel 625/718, AlSi10Mg, polymer PLA/PEEK
- Applications: brackets, manifolds, heat exchangers, end-of-life spare parts, tooling inserts
- Design for AM: topology optimisation, lattice structures, internal channels
- Limitations: anisotropy, surface roughness, porosity, residual stress
- Qualification: MMPDS for AM properties, AMS standards, AS9100 for AM processes
- Post-processing: HIP (Hot Isostatic Pressing), heat treatment, surface finishing

**Guiding Questions:**
- What is topology optimisation and why does AM uniquely enable it for aerospace brackets?
- Why does metal AM (SLM) produce residual stresses and how is Hot Isostatic Pressing (HIP) used to address porosity?
- What are the current certification barriers to AM primary structure and how are they being addressed?
- For which aircraft applications is AM clearly cost-effective today, and for which is it still not?

### 23.5 Assembly & Integration Processes
- Assembly sequence planning: critical path, assembly jigs and fixtures
- Jig design: hard tooling vs. flexible tooling vs. tooling-free assembly
- Major joint design: wing-fuselage join, empennage join, engine pylon
- Fastening: Hi-Lok, Hi-Tigue, lockbolts, blind fasteners (Cherry, Huck)
- Sealing and corrosion protection during assembly: faying surface sealant, corrosion inhibiting primer
- FOD (Foreign Object Damage/Debris) control: procedures, inspections, FOD walks

**Guiding Questions:**
- What is a FOD control programme and why is it critical during assembly of aircraft with complex internal systems?
- Why must faying surfaces between aluminium and CFRP components be sealed even before fastening?
- What is a "flexible fixture" and how does it reduce tooling cost for low-rate production?
- Why is the wing-fuselage join the most dimensionally demanding assembly interface on a commercial aircraft?

---

## Section 24 · Quality Control, Inspection & Airworthiness of Manufacture

> *How do we verify that what has been built matches what was designed, and meets the required standards?*

### 24.1 First Article Inspection (FAI) & AS9102
- FAI purpose: verifying first production article against design documentation
- AS9102 requirements: dimensional verification, material verification, functional testing
- Balloon drawing: marking up all dimensions for inspection
- Non-conformance reporting (NCR): types, disposition (use-as-is, rework, reject)
- Production Organisation Approval (POA) / Production Approval Holder (PAH)

**Guiding Questions:**
- What is the purpose of First Article Inspection and when is it required?
- What is a non-conformance and what are the possible dispositions under AS9100?
- What is a "use-as-is" disposition and under what circumstances is it acceptable?

### 24.2 Non-Destructive Testing (NDT/NDE)
- Visual inspection (VT): borescopes, endoscopes
- Ultrasonic testing (UT): pulse-echo, phased array, immersion
- Radiographic testing (RT): X-ray, computed tomography (CT)
- Eddy current testing (ET): surface crack detection in metals
- Thermographic inspection (IRT): delamination detection in composites
- Acoustic emission (AE): structural health monitoring
- Digital radiography and its advantages over film

**Guiding Questions:**
- Why is phased array ultrasonic testing (PAUT) becoming the standard for CFRP inspection?
- What types of defects are detectable by thermographic inspection but not ultrasonic?
- What is Barely Visible Impact Damage (BVID) and why is it the critical defect for composite certification?
- What is Structural Health Monitoring (SHM) and how might it change inspection intervals in the future?

### 24.3 Acceptance Testing & Flight Test
- Ground testing: systems functional test, pressure testing, structural static test, fatigue test
- Iron bird: systems integration rig for avionics and flight control
- Structural test article vs. flight test aircraft
- Flight test programme phases: envelope expansion, performance, systems, certification
- Certification testing: flutter clearance, stall testing, one-engine-inoperative (OEI)
- Production acceptance flight test (PAFT): every aircraft before delivery
- UAV ground testing and operator acceptance procedures

**Guiding Questions:**
- What is an "iron bird" in aircraft development and what risk does it mitigate?
- Why does flutter clearance testing require flight test, not just analysis?
- What is the purpose of a production acceptance flight test and what does it verify?

---

# PART XI — OPERATIONS, SUSTAINMENT & LIFECYCLE

---

## Section 25 · Maintainability, Reliability & Supportability

> *How is the aircraft designed to be maintained efficiently over its operational life?*

### 25.1 Reliability Engineering
- Reliability basics: MTBF, MTTR, availability
- Failure rate models: constant failure rate (exponential), Weibull distribution
- Redundancy: active vs. standby, series vs. parallel configurations
- FMEA, FMECA: failure modes, effects, criticality for maintenance scheduling
- Reliability-Centred Maintenance (RCM): MSG-3 process for commercial aircraft

**Guiding Questions:**
- What is MTBF and why is it a poor metric for components with wear-out failure modes?
- How does MSG-3 differ from traditional scheduled maintenance and what does it reduce?
- Why does reliability analysis of a system not follow simple series/parallel rules when common-cause failures exist?

### 25.2 Maintainability & Access Design
- Maintainability design principles: access panels, panel removal torque limits, tool accessibility
- Mean Time To Repair (MTTR): how component access time is designed in
- Line replaceable units (LRU): standardisation, quick-disconnect design
- Shop replaceable units (SRU): deeper maintenance level
- Built-In Test Equipment (BITE): self-test, fault isolation to LRU
- Maintainability demonstration in certification

**Guiding Questions:**
- What makes a component "LRU-compliant" and why does this matter for airline maintenance planning?
- How does BITE reduce ground time by isolating faults to a replaceable unit?
- What access panel provision standard governs ease of maintenance in commercial aircraft?

### 25.3 Corrosion Prevention & Control (CPCP)
- Corrosion types: galvanic, crevice, intergranular, stress corrosion cracking
- CPCP under MSG-3: inspection intervals, treatment protocols
- Design measures: dissimilar material isolation, drain holes, sealants, coatings
- Galvanic couple between CFRP and aluminium: a critical modern design concern

**Guiding Questions:**
- Why does contact between CFRP and aluminium create a galvanic couple and how is it prevented?
- What is a CPCP (Corrosion Prevention and Control Program) and who is responsible for developing it?
- Why are drain holes in the lowest point of every cavity not just good practice but an airworthiness requirement?

### 25.4 Life Extension & Structural Modifications
- Ageing aircraft regulations: FAR 26, EASA Part 26
- Widespread Fatigue Damage (WFD) limit of validity
- Structural repair manual (SRM): allowable damage limits and repair schemes
- Major repair vs. minor repair and the STCprocess
- Aircraft economic life vs. structural life: when does it make sense to retire?

**Guiding Questions:**
- What is Widespread Fatigue Damage (WFD) and why did it prompt new ageing aircraft regulations after the Aloha Airlines accident?
- What is the difference between a major and minor repair, and which requires regulatory approval?
- How do airlines decide between retiring an ageing aircraft and extending its structural life?

---

## Section 26 · Environmental Sustainability & Future Trends

> *Where is aircraft design heading, and how must the industry change to address climate and technological challenges?*

### 26.1 Aviation's Environmental Impact
- CO₂, NOₓ, water vapour, contrail-induced cirrus: radiative forcing
- ICAO CORSIA: carbon offsetting mechanisms
- ATAG net-zero 2050 commitment: what it requires
- Noise footprint trends and community impact
- Life-cycle assessment (LCA) for aircraft: production, operation, end-of-life

**Guiding Questions:**
- Why is NOₓ at cruise altitude a disproportionately larger climate concern than the same quantity at ground level?
- What does CORSIA actually require of airlines and how is it enforced?
- What would a net-zero aviation sector by 2050 actually require in terms of technology and fleet renewal?

### 26.2 Alternative Propulsion & Energy
- Sustainable Aviation Fuel (SAF): drop-in compatibility, current supply constraints
- Hydrogen propulsion: combustion H2 vs. fuel cell H2 — infrastructure challenges
- Full-electric short-range: current battery limitation and practical range ceiling
- Hybrid-electric architecture roadmap: regional aviation (1,000–2,000 nm)
- Nuclear propulsion: historical (NB-36H), conceptual future (micro-reactors)

**Guiding Questions:**
- Why is SAF the most near-term decarbonisation solution for long-haul aviation?
- What specific energy density (Wh/kg) would batteries need to reach for a 500 nm electric regional aircraft?
- What are the airport infrastructure implications of a hydrogen-powered short-haul fleet?

### 26.3 Future Vehicle Concepts & Emerging Technologies
- Urban Air Mobility (UAM): eVTOL certification, vertiport infrastructure, noise
- Advanced Air Mobility (AAM): cargo drone networks, last-mile delivery
- Autonomous flight: from auto-land to full autonomy — regulatory pathway
- Supersonic return: Boom Overture, Spike Aerospace — net-zero supersonic challenge
- Blended Wing Body: Airbus MAVERIC, Boeing X-48 — aerodynamic efficiency vs. certification
- Distributed Electric Propulsion (DEP): NASA X-57 Maxwell — boundary layer ingestion
- AI in design: generative design, surrogate models, digital twin certification

**Guiding Questions:**
- What is the regulatory pathway for single-pilot or fully autonomous commercial aircraft?
- What does a "digital twin" mean for certification, and could it eventually replace some flight test?
- What is Distributed Electric Propulsion (DEP) and how does it interact with boundary layer ingestion to improve efficiency?
- What is the primary structural and certification challenge preventing the Blended Wing Body from entering service?

---

# APPENDICES

---

## Appendix A · Key Design Standards & References

| Standard / Reference | Scope |
|---|---|
| FAR Part 23/25/27/29 | US civil airworthiness |
| EASA CS-23/25/27/29/SC-VTOL | European civil airworthiness |
| MIL-HDBK-516C | US military airworthiness |
| ARP4754A | System development assurance |
| ARP4761 | Safety assessment methods |
| DO-178C | Airborne software |
| DO-254 | Airborne hardware |
| ASME Y14.5-2018 | GD&T standard |
| AS9100D | Quality management (aerospace) |
| AS9102B | First Article Inspection |
| MSG-3 | Maintenance programme development |
| MMPDS | Metallic material design allowables |
| CMH-17 | Composite materials handbook |
| Raymer (2018) | Conceptual design |
| Torenbeek (2013) | Advanced design |
| Roskam (8 vols) | Detailed design methods |
| Anderson (2012) | Aerodynamics & flight |
| Sadraey (2012) | Systems engineering approach |

---

## Appendix B · Acronym Glossary

*(to be populated as sections are written)*

---

## Appendix C · Guiding Questions Master Index

*(cross-referenced index of all guiding questions by topic)*

---

*End of Master Outline — Version 1.0 — 2026-03-22*
