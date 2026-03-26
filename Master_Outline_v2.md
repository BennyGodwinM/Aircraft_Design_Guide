
# Aircraft Design — Master Notebook Outline v2
### Comprehensive Edition · Informed by Full Study Library

> **Scope:** Aircraft design in its fullest sense — from blank-sheet requirements through hypersonic vehicles,
> advanced CFD, flight control systems, and digital manufacturing. Strictly aircraft-domain; no orbital mechanics
> or rocket propulsion except where directly relevant to aircraft propulsion or high-speed vehicle design.
>
> **Reference key:** Each section lists the primary textbooks that should be used when writing that notebook.
> All references are from the Study library at `C:\Users\benny\Desktop\Study`.

---

# PART I — FOUNDATIONS & CONTEXT

## Section 1 · Introduction to Aircraft Design & Vehicle Classification
*Primary refs: Anderson — Introduction to Flight 7th Ed; Raymer — Aircraft Design (Conceptual Approach 6th Ed);
Leishman — Introduction to Aerospace Flight Vehicles; Quest for Performance (NASA)*

### 1.1 What Is Aircraft Design?
### 1.2 A History of Aircraft Design — From the Wright Flyer to the Present
### 1.3 Design Philosophy: Art, Science, and Engineering Judgement
### 1.4 The Three Design Phases: Conceptual, Preliminary, Detail
### 1.5 The Interdisciplinary Nature of Aircraft Design (V-diagram and spiral model)
### 1.6 Vehicle Classification Taxonomy
- Fixed-wing: transport, fighter, GA, agricultural, maritime
- Rotorcraft: single-main-rotor, tandem, coaxial, tiltrotor
- Multirotor UAVs and eVTOL
- Blended wing body and unconventional configurations
### 1.7 Common Hurdles, Trade-offs, and Design Drivers
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
NASA Systems Engineering Handbook; Understanding Air France 447; Crash Detectives (Negroni)*

### 3.1 Regulatory Bodies and Jurisdictions — FAA, EASA, ICAO, CAAC, military (MIL-SPEC)
### 3.2 Certification Basis and the Type Certificate (TC) Process
### 3.3 Airworthiness Categories
- FAR/CS Part 23 (Normal, Utility, Acrobatic, Commuter)
- FAR/CS Part 25 (Transport Category)
- FAR/CS Part 27 and 29 (Rotorcraft)
- FAR Part 107 and EASA SC-VTOL (Drones and eVTOL)
### 3.4 Safety Philosophy: Failure Modes, FTA, and Certification by Analysis
### 3.5 Environmental and Noise Regulations — ICAO Annex 16, Stage standards
### 3.6 Case Studies in Certification Failure — Air France 447, Boeing 737 MAX

---

# PART II — MATHEMATICAL & COMPUTATIONAL METHODS FOR AIRCRAFT DESIGN

## Section 4 · Applied Mathematics for Aircraft Designers
*Primary refs: Mathematical Methods for Physics and Engineering 3rd Ed (Riley, Hobson, Bence);
Advanced Engineering Mathematics (Zill); Differential Equations (Dawkins);
Numerical Methods for Engineers (Chapra, Canale); Numerical Methods in Engineering with Python (Kiusalaas)*

### 4.1 Vector Calculus in Aerodynamics — Gradient, Divergence, Curl, Stokes' and Gauss' Theorems
### 4.2 Ordinary Differential Equations in Flight Mechanics (initial value problems, eigenvalue analysis)
### 4.3 Partial Differential Equations in Fluid Dynamics — Elliptic, Parabolic, Hyperbolic Types
### 4.4 Linear Algebra for Structural and Stability Analysis
- Matrix operations: LU decomposition, eigenvalues, eigenvectors
- Application: finite element stiffness matrices, state-space A-matrices
### 4.5 Fourier Series and Transforms — Application to Signal Processing and Aeroelastic Response
### 4.6 Tensor Notation and Index Notation for Fluid Mechanics
### 4.7 Complex Variable Methods — Conformal Mapping and Joukowski Transforms
### 4.8 Numerical Methods in Aircraft Design
- Root-finding: Newton-Raphson for trim and constraint analysis
- Numerical integration: Runge-Kutta for trajectory simulation
- Finite differences and finite volumes
- Least-squares fitting of aerodynamic data
### 4.9 Optimisation Fundamentals
- Gradient-based methods, constrained optimisation (KKT conditions)
- Multi-disciplinary design optimisation (MDO) architecture
- Surrogate models and response surface methods

---

## Section 5 · Computational Tools for Aircraft Design
*Primary refs: Python for Mechanical and Aerospace Engineering (Kenan); Numerical Python (Johansson);
Python Data Science Handbook (VanderPlas); MATLAB Practical Introduction (textbook);
Data-Driven Science and Engineering (Brunton, Kutz)*

### 5.1 Python Ecosystem for Aerospace Engineering
- NumPy, SciPy, Matplotlib: the core stack
- Pandas for tabular aerodynamic data
- SymPy for symbolic derivations
### 5.2 Key Aerospace Python Libraries
- AeroSandbox, OpenMDAO, VSPAero wrappers, pySU2
### 5.3 MATLAB/Simulink in Aircraft Design and Simulation
### 5.4 Version Control and Reproducible Engineering Workflows (Git, Jupyter, Docker)
### 5.5 Data-Driven Methods in Aerospace
- Regression and surrogate modelling for drag polars
- Proper Orthogonal Decomposition (POD) for aerodynamic data reduction
- Machine Learning for aerodynamic database construction
- DMD and model reduction (Brunton & Kutz framework)
### 5.6 Uncertainty Quantification in Aircraft Design
- Monte Carlo methods
- Polynomial Chaos Expansion

---

# PART III — THERMODYNAMICS & HEAT TRANSFER FOUNDATIONS

## Section 6 · Thermodynamics and Heat Transfer Applied to Aircraft
*Primary refs: Thermodynamics: An Engineering Approach (Çengel, Boles);
Fundamentals of Engineering Thermodynamics (Moran, Shapiro);
Heat Transfer in Single and Multiphase Systems (Naterer);
Lecture Notes on Thermodynamics (Powers)*

### 6.1 Thermodynamic Fundamentals — Laws, Properties, Cycles
### 6.2 Isentropic Flow and Gas Dynamics Prerequisites
- Perfect gas relations
- Isentropic relations, normal and oblique shocks, expansion fans
### 6.3 The Brayton Cycle — Foundation of the Gas Turbine Engine
### 6.4 Heat Transfer Modes (Conduction, Convection, Radiation) in Aircraft
- Thermal soaking during high-speed flight
- Engine bay and nacelle thermal management
- ECS heat loads and cabin thermal comfort
### 6.5 Aerodynamic Heating — Boundary Layer Energy Equation
### 6.6 Thermal Protection Systems (TPS) — Ablative, Metallic, Ceramic
### 6.7 Aircraft De-icing and Anti-icing Systems (Thermal and Fluid)
### 6.8 Heat Exchangers in Aircraft (Oil Coolers, Intercoolers, PDHS)

---

# PART IV — MISSION ANALYSIS & CONCEPTUAL DESIGN

## Section 7 · Mission Analysis & Top-Level Aircraft Requirements (TLARs)
*Primary refs: Raymer Ch. 3; Torenbeek — Advanced Aircraft Design;
Fundamentals of Aircraft and Airship Design Vol. 1 (Nicolai, Carichner)*

### 7.1 Deriving TLARs from the Mission Statement
### 7.2 Mission Fuel Fraction Method — Breguet Range Equation (derivation and application)
### 7.3 Constraint Analysis (Thrust-to-Weight vs. Wing Loading diagram)
- Takeoff constraint
- Climb-rate constraint
- Cruise constraint
- Turn performance constraint
- Landing constraint
### 7.4 Mission Profiles for Different Aircraft Categories
- Commercial transport: city-pair analysis
- Military: hi-lo-hi, lo-lo-lo, fighter CAP missions
- UAVs: loiter endurance optimization
- eVTOL: urban air mobility trip profile
### 7.5 Trade Studies at Mission Level
- Payload-range diagram construction
- Sensitivity analysis (∂MTOW/∂technology factor)

---

## Section 8 · Conceptual Design & Configuration Selection
*Primary refs: Raymer Ch. 4–6; Fundamentals of Aircraft and Airship Design Vol. 1;
Basics of RC Model Aircraft Design (Lennon); Unmanned Aircraft Systems (Austin);
Aircraft Aerodynamic Design — Geometry and Optimization*

### 8.1 Configuration Options for Fixed-Wing Aircraft
- Conventional (tractor, monoplane, low/mid/high wing)
- Canard, three-surface, tandem wing
- Blended Wing Body (BWB) and flying wing
- Biplane and multi-surface configurations
### 8.2 Configuration Options for Rotorcraft
- Single main rotor + tail rotor (Sikorsky)
- Tandem (Boeing CH-47), Coaxial (Kamov), Intermeshing
- Compound rotorcraft
### 8.3 Configuration Options for Multirotor UAVs
- Quadrotor, hexarotor, octorotor scaling laws
- Frame geometry effects on controllability
### 8.4 Tiltrotor, Tiltwing, and Hybrid VTOL Configurations
### 8.5 Fighter and Tactical Aircraft Configurations
- Delta, cranked arrow, ogival delta
- Stealth shaping (RCS considerations in planform)
- Forward-swept wing: aeroelastic tailoring vs. gain
### 8.6 Qualitative Configuration Trade Study Process
- Pugh matrix and weighted scoring
- Technology readiness level (TRL) constraints

---

## Section 9 · Preliminary Sizing & Weight Estimation
*Primary refs: Raymer Ch. 6–7; Torenbeek; Roskam — Airplane Design Parts I–III;
Fundamentals of Aircraft and Airship Design Vol. 1 & 2*

### 9.1 First-Order Weight Estimation — Raymer Statistical Method
### 9.2 Fuel-Fraction Method: Segment-by-Segment MTOW Build-Up
### 9.3 Class I Weight Estimation (historical fraction approach)
### 9.4 Class II Weight Estimation — Component Build-Up
- Wing group, fuselage group, empennage group
- Propulsion, landing gear, systems, payload, fuel
### 9.5 Center-of-Gravity Estimation and CG Travel
- CG potato diagram construction
- Permissible CG range vs. longitudinal stability margin
### 9.6 Wing Loading and Aspect Ratio Selection
### 9.7 First-Cut Geometry Definition
- Wing geometry parameters: span, chord, sweep, taper, dihedral
- Fuselage layout: internal volume, cross-section
- Empennage sizing: tail volume coefficients

---

# PART V — AERODYNAMICS

## Section 10 · Aerodynamic Fundamentals
*Primary refs: Fundamentals of Aerodynamics 6th Ed (Anderson); Aerodynamics for Engineers 5th Ed (Bertin, Cummings);
Foundations of Aerodynamics 5th Ed (Kuethe, Chow); Principles of Ideal-Fluid Aerodynamics (Karamcheti)*

### 10.1 Fluid Mechanics Foundations
- Continuity, momentum, energy equations (integral and differential forms)
- Navier-Stokes equations: derivation and physical interpretation
- Potential flow: Laplace equation, superposition
- Vorticity, circulation, Kelvin's theorem
### 10.2 Lift and Drag — Subsonic Incompressible Flow
- Kutta-Joukowski theorem
- Thin airfoil theory (lift slope, pitching moment, camber line analysis)
- Prandtl lifting-line theory and finite-wing effects
- Induced drag: Oswald efficiency factor, span loading
### 10.3 Drag Polar Construction
- Zero-lift drag: flat-plate skin friction, form factor, interference
- Lift-induced drag
- Wave drag (transonic)
- Total drag polar and maximum L/D
### 10.4 Viscous Effects and Boundary Layers
- Boundary layer equations: Blasius, Thwaites
- Transition: natural, forced, bypass
- Turbulent boundary layers: log-law, skin friction correlations
- Separation and stall mechanisms
### 10.5 Compressibility Effects — Transonic Aerodynamics
- Critical Mach number, drag divergence, area rule
- Supercritical airfoils
- Normal and oblique shocks on wings
### 10.6 Rotor and Propeller Aerodynamics
- Actuator disk / momentum theory
- Blade Element Momentum Theory (BEMT)
- Tip loss, swirl, and wake contraction corrections

---

## Section 11 · Wing & Airfoil Design
*Primary refs: Low-Speed Aerodynamics (Katz, Plotkin); Aerodynamics of Wings and Bodies (Ashley, Landahl);
Fundamentals of Aerodynamics (Anderson); Aerodynamics for Engineering Students (Houghton);
Aircraft Aerodynamic Design — Geometry and Optimization; An Approach to Constrained Aerodynamic Design*

### 11.1 Airfoil Selection and Design
- NACA 4-digit, 5-digit, 6-series families: geometry and characteristics
- Modern supercritical airfoils: design philosophy
- Inverse airfoil design (specify Cp distribution, recover geometry)
- XFOIL and panel method workflow
### 11.2 Wing Planform Design
- Sweep effects: leading-edge and half-chord sweep
- Taper ratio: induced drag vs. structural weight
- Twist (geometric and aerodynamic) for washout
- High-aspect-ratio vs. low-aspect-ratio trade
- Winglets: blended, split, spiroid — analysis methods
### 11.3 High-Lift Systems
- Plain, slotted, Fowler flaps: CL increment estimation
- Leading-edge slats and Krueger flaps
- Maximum lift prediction methods
- Noise from high-lift devices
### 11.4 Control Surfaces — Ailerons, Spoilers, Flaperons, Elevons
- Hinge moment estimation
- Control power sizing
- Adverse yaw and differential aileron settings

---

## Section 12 · Fuselage & Body Aerodynamics
*Primary refs: Aerodynamics for Engineers (Bertin); Fundamentals of Aerodynamics (Anderson);
Aircraft Aerodynamic Design — Geometry and Optimization; Aeronautical Engineer's Data Book*

### 12.1 Fuselage Aerodynamics
- Fineness ratio and form drag
- Body of revolution analysis: source distribution methods
- Upsweep drag and aft-body flow separation
### 12.2 Wing-Body Interference
- Interference drag: fillets, fairings, junctions
- Wing root carrythrough and fuselage lift
### 12.3 Nacelle and Pod Aerodynamics
- Podded engine aerodynamics: fan cowl and nozzle interaction
- Inlet design: capture area, spillage drag, total pressure recovery
### 12.4 Fuselage in Rotorcraft: Pods, Booms, and Fairings
### 12.5 Empennage Aerodynamics
- Horizontal and vertical tail contributions to total drag
- T-tail deep-stall susceptibility
### 12.6 Landing Gear Interference and Retraction

---

## Section 13 · Stability Aerodynamics
*Primary refs: Aerodynamics for Engineers (Bertin); Fundamentals of Aerodynamics (Anderson);
Introduction to Aircraft Flight Mechanics (textbook)*

### 13.1 Longitudinal Static Stability Derivatives — Cmα, Cmδe
### 13.2 Neutral Point and Static Margin — Stick-Fixed and Stick-Free
### 13.3 Directional Stability Derivatives — Cnβ, Cnδr
### 13.4 Lateral Stability Derivatives — Clβ, Clδa
### 13.5 Dynamic Derivatives — Cmq, Cmα̇, Clp, Cnr
### 13.6 Rotorcraft Aerodynamic Stability — Flap-Lag-Torsion Coupling

---

## Section 14 · Experimental Aerodynamics & Wind Tunnel Testing
*Primary refs: Low-Speed Wind Tunnel Testing (Barlow, Rae, Pope);
An Album of Fluid Motion (Van Dyke);
Aeronautical Engineer's Data Book*

### 14.1 The Role of Experimental Aerodynamics in the Design Process
### 14.2 Wind Tunnel Types and Operating Regimes
- Subsonic open and closed return
- Transonic: slotted-wall test sections
- Supersonic and hypersonic
### 14.3 Model Design for Wind Tunnel Testing
- Geometric similarity and Reynolds number matching
- Balance design: six-component strain-gauge systems
- Flow visualization: tufts, oil film, PSP, PIV
### 14.4 Test Technique and Data Reduction
- Corrections: solid blockage, wake blockage, streamline curvature, lift interference
- Tunnel calibration and uncertainty analysis
### 14.5 Pressure Measurement Systems: Scanivalve, ZOC, PSI systems
### 14.6 Force and Moment Measurement: Internal vs. External Balances
### 14.7 Dynamic Testing: Forced Oscillation and Free-to-Roll
### 14.8 Correlation of Wind Tunnel Results with CFD and Flight Test

---

# PART VI — COMPUTATIONAL AERODYNAMICS & CFD

## Section 15 · CFD Fundamentals for Aircraft Design
*Primary refs: CFD — The Basics with Applications (Anderson); CFD: A Practical Approach (Tu, Yeoh, Liu);
Introduction to CFD — Development, Application and Analysis (Sharma);
Numerical Computation of Internal and External Flows Vol. 1 (Hirsch);
MIT CFD Notes*

### 15.1 Role and Place of CFD in the Aircraft Design Process
### 15.2 Governing Equations: Euler, RANS, LES, DNS — Hierarchy and Cost
### 15.3 Discretisation Methods Overview
- Finite Difference: truncation error, stability (von Neumann analysis)
- Finite Volume: flux reconstruction, Roe scheme, MUSCL
- Finite Element in CFD context
### 15.4 Grid Generation
- Structured vs. unstructured meshes
- Boundary layer meshing: y+ requirements for RANS
- CAD-to-mesh workflow (ICEM, Pointwise, Gmsh, SU2)
### 15.5 Boundary Conditions for External Aerodynamics
- Far-field treatment: Riemann invariants
- Wall: no-slip, adiabatic vs. isothermal
- Symmetry planes, periodic conditions
### 15.6 Time Integration — Steady vs. Unsteady Solvers
- Pseudo-time stepping (implicit, explicit)
- Dual-time stepping for unsteady RANS

---

## Section 16 · Turbulence Modelling in CFD
*Primary refs: CFD — Principles and Applications (Blazek);
Computational Methods for Fluid Dynamics (Ferziger, Perić);
CFD — The Finite Volume Method 2nd Ed (Versteeg, Malalasekera);
Navier-Stokes Equations and Turbulence (Foias et al.);
Lecture Notes on Viscous Flows and Turbulence (Smits)*

### 16.1 Reynolds-Averaged Navier-Stokes (RANS) Philosophy
### 16.2 Algebraic and One-Equation Models: Baldwin-Lomax, Spalart-Allmaras
### 16.3 Two-Equation Models: k-ε and k-ω SST — Theory and Practical Choices
### 16.4 Reynolds Stress Models (RSM) and their Limitations
### 16.5 Detached Eddy Simulation (DES) and Hybrid RANS-LES
### 16.6 Wall Functions vs. Low-Reynolds Approaches
### 16.7 Turbulence Modelling for Separated Flows — High Angle of Attack
### 16.8 Transition Modelling (γ-Reθ) for Low-Speed and NLF Aircraft

---

## Section 17 · Applied CFD for Aircraft Components
*Primary refs: Applied Computational Aerodynamics (Mason); Applied CFD Techniques (Löhner);
Fundamentals of Verification and Validation (Roache);
CFD — Principles and Applications (Blazek)*

### 17.1 Panel Methods and Vortex Lattice Method (VLM)
- Source/doublet panel method formulation
- VLM: planar and non-planar implementations
- AVL (Athena Vortex Lattice) workflow in design
### 17.2 Full-Configuration CFD Workflow
- RANS simulation of wing-body-nacelle-pylon configuration
- Mesh topology strategies for complex geometry
- Post-processing: Cp maps, streamlines, wake surveys
### 17.3 High-Lift CFD
- Multi-element airfoil simulation: slat/wing/flap
- 3D high-lift system (32° flap, full-span slat) validation
### 17.4 Store Separation and External Stores Aerodynamics
### 17.5 Rotor Aerodynamics: CFD for Helicopter Rotors
- Hover and forward flight simulation
- Blade-vortex interaction (BVI) prediction
### 17.6 Propeller Slipstream and Engine-Airframe Interaction
### 17.7 Verification & Validation (V&V) in Aerospace CFD
- Code verification: manufactured solutions
- Validation: AIAA standards, uncertainty estimation
- NASA DPW and HiLiftPW benchmark results

---

# PART VII — PROPULSION SYSTEMS

## Section 18 · Propulsion Overview & Gas Turbine Fundamentals
*Primary refs: Gas Turbine Performance (Walsh, Fletcher);
Jet Engines and Propulsion Systems for Engineers (Fowler);
Gas Turbine Handbook (Giampaolo);
Thermodynamics: An Engineering Approach (Çengel, Boles)*

### 18.1 Propulsion System Taxonomy
- Piston engines (carbureted, fuel-injected, turbocharged)
- Gas turbine: turbojet, turbofan (separate/mixed exhaust), turboprop, turboshaft
- Ramjet and scramjet (introduced here; detailed in Part XIV)
- Electric: battery, fuel cell, hydrogen
- Hybrid propulsion architectures
### 18.2 Gas Turbine Thermodynamic Cycle Analysis
- Ideal Brayton cycle
- Component efficiencies: intake, compressor, combustor, turbine, nozzle
- Specific thrust and specific fuel consumption (SFC) derivation
- Non-dimensional performance maps
### 18.3 Engine Matching and the Rubber-Engine Concept
- Scaling engine size to aircraft requirement
- Engine deck format and use in mission analysis
- Off-design performance (throttle, altitude, Mach)
### 18.4 Turbofan Bypass Ratio Optimisation
- Fan pressure ratio vs. bypass ratio trade
- Nacelle drag penalty
- Ultra-High Bypass (UHB) and Open Rotor (CROR) concepts
### 18.5 Turboprop and Turboshaft Systems for Rotorcraft
- Power turbine matching to rotor/gearbox
- Specific power vs. SFC trade
### 18.6 Compressor and Turbine Aerodynamics (Introduction)
- Axial compressor velocity triangles
- Degree of reaction, Euler turbomachinery equation
- Turbine cooling: film, impingement, transpiration

---

## Section 19 · Advanced Propulsion and Electric Aircraft
*Primary refs: Gas Turbine Performance (Walsh, Fletcher);
Fundamentals of Electric Propulsion: Ion and Hall Thrusters (Goebel, Katz) [for background];
Data-Driven Science and Engineering (Brunton, Kutz) [for ML propulsion modelling]*

### 19.1 Electric Propulsion for Aircraft
- Battery energy density: current state and projections
- Motor-ESC-propeller system efficiency chain
- Thermal management of electric drivetrains
- Range equation for all-electric aircraft
### 19.2 Hybrid-Electric Propulsion Architectures
- Series, parallel, and turboelectric configurations
- Power management and energy strategy
### 19.3 Hydrogen Propulsion (Combustion and Fuel Cell)
- Liquid hydrogen storage: insulation and boil-off
- Direct combustion in gas turbine vs. fuel cell + motor
- NOx emission considerations
### 19.4 Distributed Electric Propulsion (DEP)
- X-57 Maxwell and Joby S4 case studies
- Aero-propulsive coupling: slipstream and boundary layer ingestion
### 19.5 Propulsion-Airframe Integration Aerodynamics
- Boundary Layer Ingestion (BLI): inlet distortion and PSC
- Engine placement effects on CG and ground clearance

---

# PART VIII — STRUCTURAL DESIGN, MATERIALS & AEROELASTICITY

## Section 20 · Structural Concepts & Load Paths
*Primary refs: Aircraft Structures 4th Ed (Megson);
Analysis and Design of Flight Vehicle Structures (Bruhn);
Airframe Structural Design (Niu);
Airframe Stress Analysis and Sizing (Niu);
Stress Analysis in Aircraft Structures (Kuhn);
Structures — Or Why Things Don't Fall Down (J.E. Gordon)*

### 20.1 Loads — Sources and Classification
- Aerodynamic loads: pressure distribution, point forces
- Inertia loads: manoeuvre and gust envelopes (V-n diagram)
- Ground loads: landing, braking, towing, jacking
- Thermal loads in high-speed aircraft
### 20.2 Structural Concepts for Fixed-Wing Aircraft
- Monocoque, semi-monocoque, multi-spar, box beam
- Spar flanges, skins, stringers, ribs: function and load path
- Shear flow in thin-walled closed sections
- Torsion: Bredt formula, multi-cell sections
### 20.3 Structural Concepts for Rotorcraft
- Hub loads and blade attachment
- Fuselage keel beam and transmission deck
- Crashworthiness requirements (MIL-DTL-27624)
### 20.4 Structural Concepts for UAVs and Small Aircraft
- Monocoque foam-composite structures
- 3D-printed structure integration
### 20.5 Load Path Analysis and Finite Body Diagrams
### 20.6 Fail-Safe, Damage Tolerance, and Safe-Life Design Philosophy
- MIL-A-83444, FAR 25.571, FAR 25.1309
- Fatigue life estimation: S-N curves, crack growth (Paris Law)

---

## Section 21 · Materials Selection for Aircraft
*Primary refs: Fundamentals of Materials Science and Engineering (Callister);
Mechanics of Composite Materials (R. Jones);
Practical Analysis of Aircraft Composites (Excerpt);
Practical Stress Analysis for Design Engineers (Flabel);
Materials Handbook (Brady, Clauser, Vaccari);
Mechanical Engineering Handbook (Kreith)*

### 21.1 Metallic Materials in Aerospace
- Aluminium alloys: 2xxx, 6xxx, 7xxx series — temper designations, properties
- Steel alloys: 4130, 4340, 17-4PH, maraging steel
- Titanium: Ti-6Al-4V, Ti-3Al-2.5V — fatigue and corrosion advantages
- Nickel superalloys: Inconel 718, Waspaloy for hot sections
### 21.2 Composite Materials
- Fibre types: E-glass, S-glass, carbon (IM7, T700, T800), aramid (Kevlar)
- Matrix types: epoxy, bismaleimide (BMI), PEEK, thermoplastic
- Laminate theory: Classical Laminate Theory (CLT) — A, B, D matrices
- Failure criteria: maximum strain, Tsai-Wu, Puck
- Delamination and interlaminar shear strength
### 21.3 Sandwich Structures
- Core materials: Nomex honeycomb, aluminium honeycomb, foam
- Face sheet design: stiffness, buckling, impact tolerance
### 21.4 Certification and Testing of Composites
- Building-block approach: coupon, element, subcomponent, component
- Environmental conditioning (ETW, CTD, RTD)
### 21.5 Advanced and Emerging Materials
- Carbon fibre-reinforced ceramics (C/SiC) for high-temperature
- Metal matrix composites (MMC)
- Smart materials: SMA, piezoelectric

---

## Section 22 · Stress Analysis and Structural Sizing
*Primary refs: Analysis and Design of Flight Vehicle Structures (Bruhn);
Airframe Stress Analysis and Sizing (Niu);
Roark's Formulas for Stress and Strain (Young);
Practical Stress Analysis for Design Engineers (Flabel);
Structural Dynamics for Aeronautical Engineers (Bismarck)*

### 22.1 Stress Analysis Methods
- Classical methods: beam bending, direct shear, torsion
- Thin-wall section analysis: open vs. closed sections
- Buckling: column, panel, shear buckling (Euler, Johnson, Fischel)
- Crippling of stiffened panels
### 22.2 Finite Element Analysis (FEA) in Aircraft Structures
- Stiffness method: element formulations (rod, beam, shell, solid)
- Meshing strategy for structural components
- Loading, boundary conditions, and constraint handling
- MSC Nastran and Abaqus workflows
### 22.3 Structural Optimisation
- Sizing optimisation: minimum-weight under stress and stiffness constraints
- Topology optimisation for brackets and fittings
- Composite stacking sequence optimisation
### 22.4 Joint and Fastener Analysis
- Bearing, shear-out, and net tension failure
- Hi-Lok, lockbolt, rivet patterns: allowables
- Bonded joints: adhesive shear stress analysis (Volkersen)
### 22.5 Fatigue and Damage Tolerance
- Fracture mechanics: K, G, Paris Law crack growth integration
- Spectrum loading: rainflow counting, Miner's rule
- Inspection intervals from damage tolerance analysis

---

## Section 23 · Aeroelasticity
*Primary refs: Introduction to Aircraft Aeroelasticity and Loads (Wright, Cooper);
Structural Dynamics for Aeronautical Engineers (Bismarck);
Flow Induced Vibrations (Textbook Chapters)*

### 23.1 The Aeroelastic Triangle: Aerodynamics, Elasticity, Dynamics
### 23.2 Static Aeroelasticity
- Wing torsional divergence: derivation of divergence speed
- Control reversal: aileron effectiveness vs. speed
- Wing root bending-torsion coupling
### 23.3 Dynamic Aeroelasticity: Flutter
- Theodorsen unsteady aerodynamic theory (2-DOF strip theory)
- V-g and V-ω flutter solution methods
- Panel flutter and membrane instability
- Flutter clearance by FAR 25.629
### 23.4 Gust and Buffet Response
- Pratt discrete gust: FAR 25.341
- Continuous turbulence: power spectral density (PSD) method (MIL-HDBK-1797)
### 23.5 Aeroelastic Tailoring
- Coupling wash-in/wash-out via composite laminate design
- Forward-swept wings and aeroelastic tailoring
### 23.6 Limit Cycle Oscillation (LCO) and Non-linear Effects
### 23.7 Ground Vibration Test (GVT) and Flutter Certification Process

---

## Section 24 · Aircraft Systems Design
*Primary refs: Raymer Ch. 9; Sadraey Ch. 9–12; AIAA Aerospace Design Engineers Guide;
Aviation Mechanic Handbook (Crane)*

### 24.1 Flight Control Systems
- Mechanical: push-pull rods, cables, pulleys, control mixing
- Power-assisted: hydraulic servoactuators, PCUs
- Fly-by-Wire (FBW): analogue vs. digital, redundancy architectures
- Fly-by-Light (FBL): fibre optic control
### 24.2 Hydraulic and Pneumatic Systems
- System pressure ratings (3000 psi, 5000 psi)
- Hydraulic fluid, seal materials, actuator types
### 24.3 Electrical Power Systems
- AC/DC generation, APU, RAT
- Busbar architecture and load-shedding logic
- More-Electric Aircraft (MEA) architecture
### 24.4 Avionics, Navigation, and Communication
- Integrated modular avionics (IMA)
- Flight Management System (FMS)
- TCAS, ADS-B, terrain avoidance (TAWS)
### 24.5 Environmental Control System (ECS) and Life Support
- Air cycle machine (ACM) and vapour cycle (VCS)
- Bleed vs. bleedless (B787 no-bleed) architectures
### 24.6 Fuel Systems
- Fuel tanks: wet wing, integral, bladder
- Fuel management: transfer, jettison, cross-feed
- CG shift due to fuel burn — management by transfer
### 24.7 Landing Gear Systems
- Configuration: tricycle, taildragger, bicycle + outrigger
- Sizing: tip-over criteria, ground clearance, flotation
- Retraction kinematics and door sequencing
- Shock absorber design: oleo-pneumatic sizing

---

# PART IX — PERFORMANCE ANALYSIS

## Section 25 · Fixed-Wing Aircraft Performance
*Primary refs: Airplane Performance, Stability and Control (Perkins, Hage);
Introduction to Aircraft Flight Mechanics; Raymer Ch. 17;
Fundamentals of Aircraft and Airship Design Vol. 1*

### 25.1 Equations of Motion — Point Mass Model
### 25.2 Level Flight: Thrust Required, Minimum Power, Maximum Speed
### 25.3 Climb Performance
- Rate of climb (ROC), angle of climb
- Time to climb, service ceiling, absolute ceiling
- Energy height and specific excess power (Ps)
### 25.4 Range and Endurance
- Breguet range equation (jet): derivation and sensitivity
- Endurance maximization: jet vs. propeller aircraft
- Long-range cruise vs. maximum range cruise
### 25.5 Manoeuvre Performance
- Sustained turn rate (STR), instantaneous turn rate (ITR)
- V-n diagram: manoeuvre and gust envelopes
- Corner speed and specific excess power at corner
- Energy manoeuvre (EM) theory for fighter sizing
### 25.6 Takeoff and Landing Performance
- Balanced Field Length (BFL): continued and rejected takeoff
- Landing: approach speed, stopping distance, FAR/CS 25 requirements
### 25.7 Mission Performance Simulation
- Python/MATLAB numerical integration of mission segments
- Fuel burn schedule and reserve fuel requirements

---

## Section 26 · Rotorcraft & Multirotor Performance
*Primary refs: Basic Helicopter Aerodynamics; Raymer Ch. 18;
Fundamentals of Aircraft and Airship Design Vol. 2*

### 26.1 Hover Performance — Figure of Merit and Induced Power
### 26.2 Blade Loading, Disk Loading, and Design Trade-offs
### 26.3 Forward Flight Performance (Rotorcraft)
- Power components: induced, profile, parasite
- Vne, retreating blade stall, compressibility on advancing blade
- Autorotation: descent rate prediction and energy management
### 26.4 Multirotor UAV Performance
- Hover efficiency: motor-prop combination selection
- Forward flight drag and pitch attitude
- Battery sizing for endurance: specific energy budget
### 26.5 Tiltrotor and Hybrid VTOL Performance
- Conversion corridor analysis
- Download penalty in hover
- Transition performance: power required vs. speed through nacelle tilt

---

# PART X — FLIGHT DYNAMICS & STABILITY

## Section 27 · Static & Longitudinal Dynamic Stability
*Primary refs: Airplane Performance, Stability and Control (Perkins, Hage);
Aircraft Dynamics — From Modeling to Simulation (Napolitano);
Introduction to Aircraft Flight Mechanics;
Atmospheric and Space Flight Dynamics — Modeling and Simulation with MATLAB and Simulink (Tewari)*

### 27.1 Longitudinal Static Stability — Stick-Fixed and Stick-Free
### 27.2 Neutral Point, Aerodynamic Centre, and Static Margin — Analytical Derivation
### 27.3 Tail Sizing for Static Stability: HT volume coefficient
### 27.4 Equations of Motion — 6-DOF Rigid Body
- Euler angle convention and body-axis forces/moments
- Linearisation about trimmed flight condition
- Decoupled longitudinal and lateral-directional small-perturbation equations
### 27.5 Longitudinal Dynamic Modes
- Phugoid (slow): period, damping, physical mechanism
- Short-period: frequency, damping, CAP criterion (ADS-33, MIL-F-8785)
### 27.6 Lateral-Directional Dynamic Modes
- Roll mode: time constant, L_p damping derivative
- Dutch roll: period, damping, spiral instability
- Spiral mode: divergent vs. convergent — acceptability criteria
### 27.7 Handling Qualities Assessment
- Level 1, 2, 3 HQ ratings (Cooper-Harper scale)
- MIL-HDBK-1797 and ADS-33 requirements
### 27.8 Rotorcraft Dynamic Stability
- Flap dynamics, lead-lag, and ground resonance
- Feedback from rotor flapping to fuselage: DAFCS context

---

## Section 28 · State-Space Modelling and Frequency Domain Analysis
*Primary refs: Aircraft Dynamics — From Modeling to Simulation (Napolitano);
Aircraft Control and Simulation (Stevens, Lewis);
Atmospheric and Space Flight Dynamics (Tewari);
Control System Design (Friedland)*

### 28.1 State-Space Formulation of Aircraft Dynamics
- State vector selection for longitudinal and lat-dir decoupled systems
- A, B, C, D matrices from stability derivatives
### 28.2 Eigenvalue Analysis — Mode Shapes and Participation Factors
### 28.3 Transfer Function Derivation from State-Space
- Characteristic equation
- Key transfer functions: θ/δe, φ/δa, ψ/δr
### 28.4 Frequency Response Analysis
- Bode and Nichols plots of open-loop aircraft
- Bandwidth and phase delay (ADS-33 HQ boundary)
### 28.5 Nonlinear Simulation of Aircraft Dynamics
- Full 6-DOF simulation with aerodynamic database
- Engine model integration (thrust lag, gyroscopic moments)
- Atmosphere model: ISA + turbulence (Dryden, von Kármán)

---

# PART XI — FLIGHT CONTROL SYSTEMS

## Section 29 · Classical and Modern Control Theory Applied to Aircraft
*Primary refs: Aircraft Control and Simulation (Stevens, Lewis);
Automatic Control of Aircraft and Missiles (Blakelock);
Control System Design (Friedland);
Flight Control Systems — Practical Issues in Design and Implementation (Pratt)*

### 29.1 Classical Control Loop Design
- PID controller: tuning for aircraft inner loops
- Root locus design: gain-phase margin requirements
- Lag, lead, and notch compensators
### 29.2 Stability Augmentation Systems (SAS)
- Pitch rate feedback, yaw damper
- Pitch attitude hold and altitude hold autopilots
### 29.3 Modern Control Design for Aircraft
- Full State Feedback (pole placement, LQR)
- Observer design: Luenberger, Kalman Filter
- LQG/LTR design
### 29.4 Robust Control
- H∞ control: mixed sensitivity minimisation
- μ-synthesis for parameter uncertainty (from Robust Flight Control, Magni)
### 29.5 Nonlinear Flight Control
- Gain scheduling: design across the flight envelope
- Feedback linearisation and dynamic inversion
- NDI (Nonlinear Dynamic Inversion) in Eurofighter and F-35

---

## Section 30 · Fly-By-Wire Systems and Digital Flight Control
*Primary refs: Flight Control Systems (Pratt); Aircraft Control and Simulation (Stevens, Lewis);
Advanced Control of Aircraft, Spacecraft and Rockets (Tewari)*

### 30.1 Fly-By-Wire Architecture
- Analogue FBW (Concorde) vs. digital FBW (Airbus A320, F-16)
- Redundancy levels: simplex, duplex, triplex, quad
- Dissimilar redundancy for software common mode failures
### 30.2 Flight Envelope Protection (FEP)
- Angle-of-attack limiting: alpha-floor
- Load factor limiting: g-limiting in manoeuvre
- Bank angle and pitch attitude protection
### 30.3 Control Laws Design — Airbus NORMAL and DIRECT Laws
### 30.4 Software Design Assurance
- DO-178C levels: DAL A through E
- Formal methods in FBW software verification
### 30.5 Actuator Health Monitoring and Reconfiguration
- Actuator fault detection and isolation (FDI)
- Control reconfiguration with control allocation
### 30.6 Pilot-in-the-Loop Dynamics and PIO Prevention
- Biodynamic coupling
- Gain-phase criteria for PIO resistance (MIL-STD-1797)

---

## Section 31 · Autopilot, Autonomous Systems and UAV Flight Control
*Primary refs: Aircraft Control and Simulation (Stevens, Lewis);
Unmanned Aircraft Systems (Austin);
Data-Driven Science and Engineering (Brunton, Kutz)*

### 31.1 Classical Autopilot Modes
- Heading hold, altitude hold, speed hold
- ILS approach guidance: localizer and glideslope
### 31.2 UAV Flight Controller Architecture
- Inner loop: attitude control (quadrotor vs. fixed wing)
- Outer loop: position and path following
- PX4 and ArduPilot architecture review
### 31.3 Path Planning and Trajectory Optimisation
- Dubins paths and clothoid paths
- Waypoint sequencing and geofencing
- Collision avoidance: ACAS-X and Detect and Avoid (DAA)
### 31.4 Sensor Fusion and State Estimation
- Extended Kalman Filter (EKF) for INS/GPS integration
- AHRS algorithms (Mahony, Madgwick)
### 31.5 Machine Learning in Flight Control
- Reinforcement learning for adaptive autopilots
- Neural network-based system identification

---

# PART XII — HIGH-SPEED & HYPERSONIC AIRCRAFT

## Section 32 · Transonic and Supersonic Aircraft Design
*Primary refs: Fundamentals of Aerodynamics (Anderson);
Aerodynamics for Engineers (Bertin);
Fighter Combat — Tactics and Maneuvering (R.L. Shaw);
F-22 Raptor (Pace); Lockheed SR-71 Blackbird (Crickmore);
Projects of Skunk Works (Pace)*

### 32.1 Supersonic Aerodynamics Fundamentals
- Method of Characteristics (MOC) for nozzle and inlet design
- Linearised supersonic theory: Ackeret, Busemann
- Wave drag: Sears-Haack body, area rule (Whitcomb)
- Delta wing aerodynamics: vortex lift (Polhamus leading-edge suction analogy)
### 32.2 Supersonic Inlet Design
- Internal and external compression inlets
- Normal shock, conical shock, mixed compression
- Inlet buzz, inlet unstart — prevention and control
- Variable geometry inlets: F-15, SR-71 spike, Concorde ramp
### 32.3 Supersonic Nozzle Design
- Convergent-divergent nozzle: throat sizing, area ratio
- Afterburner and variable nozzle (A/B thrust)
### 32.4 Supersonic Fighter Design Considerations
- Wing selection: low-aspect-ratio delta vs. clipped-delta
- Volume wave drag minimisation
- Stealth considerations: RCS in planform (Low Observable design)
- Manoeuvre performance at supersonic: sustained vs. instantaneous
### 32.5 Sonic Boom and Community Impact
- N-wave formation: near-field and far-field
- Shaped sonic boom: Quiet Supersonic Transport (QSST) approaches

---

## Section 33 · Hypersonic Vehicle Design & Aerothermodynamics
*Primary refs: Hypersonic and High-Temperature Gas Dynamics (Anderson);
Hypersonic Aerothermodynamics (Bertin);
Advances in Hypersonics Vol. 1 (Bertin et al.);
Selected Aerothermodynamic Design Problems of Hypersonic Flight Vehicles (Hirschel, Weiland);
Hypersonics Before the Shuttle — X-15 and Beyond (Jenkins);
Hypersonic Airbreathing Propulsion (Heiser, Pratt, Daley, Mehta)*

### 33.1 Hypersonic Flow Regimes (M > 5) — Physical Phenomena
- Thin shock layers, entropy swallowing, leading edge bluntness effects
- High-temperature gas effects: vibrational excitation, dissociation, ionization
- Hypersonic equivalence principle and Newton flow
### 33.2 Aerothermodynamic Heating
- Stagnation point heating: Fay-Riddell formula
- Flat plate and cone heating distributions
- Reference temperature method for boundary layer heating
- Shock-boundary layer interaction (SBLI): type I and type II
### 33.3 Stability and Control of Hypersonic Vehicles
- Aerodynamic centre migration with Mach number
- Control authority at high Mach: elevons, body flaps
- Reaction Control Systems (RCS) for reentry
### 33.4 Thermal Protection System Design
- Ablative TPS: charring ablators (AVCOAT, PICA)
- Metallic TPS: X-15 Inconel skin
- Ceramic TPS: Space Shuttle tiles (LI-900, HRSI, FRCI)
- Design procedure: heat load, recession, and insulation sizing
### 33.5 Hypersonic Airbreathing Propulsion
- Dual-mode ramjet-scramjet (DMRJ) operation
- Inlet design for scramjet: shock-on-lip condition
- Isolator and combustor design
- Fuel injection and mixing (parallel, transverse, pylons, struts)
- Nozzle expansion and boat-tail effects
### 33.6 Hypersonic Vehicle Shapes and Design Trades
- Waverider concept: Küchemann and curve-traced waveriders
- Lifting body configurations (M2-F2, X-38)
- Integrated inlet-airframe: forebody compression
### 33.7 Hypersonic Flight Test Vehicles
- X-15: lessons learned, aerothermodynamic data
- X-43A (Hyper-X): first scramjet flight success
- X-51A Waverider: hydrocarbon scramjet at Mach 5.1
- HTV-2 and boost-glide vehicles
### 33.8 Hypersonic Vehicle CFD
- Real-gas CFD: LAURA, DPLR, US3D
- Grid requirements near shocks and stagnation point
- Catalytic and non-catalytic wall models
- Code validation: RAM-C data, CEV heat shield tests

---

# PART XIII — DETAILED STRUCTURAL & THERMAL DESIGN

## Section 34 · Advanced Structural Analysis and Sizing
*Primary refs: Analysis and Design of Flight Vehicle Structures (Bruhn);
Airframe Stress Analysis and Sizing (Niu);
Roark's Formulas for Stress and Strain (Young);
Structural Dynamics for Aeronautical Engineers (Bismarck)*

### 34.1 Wing Box Structural Sizing Procedure
- Critical load cases: 2.5g manoeuvre, −1g push-over, gust
- Skin/stringer panel buckling and crippling allowables
- Spar web shear buckling and tension field
### 34.2 Fuselage Pressurization and Hoop Stress
- Longitudinal bending over fuselage: P + M interaction
- Frame spacing for cabin pressurization: fail-safe design
- Fatigue life of pressurized fuselage joints
### 34.3 Empennage Structural Design
- HT and VT spar sizing: torsion, bending, and shear
- Actuator load introduction and fitting design
### 34.4 Landing Gear Structural Analysis
- Drop test requirements: MIL-A-8862, FAR 25.723
- Oleo-pneumatic shock absorber sizing
- Drag and side loads on gear structure
### 34.5 Structural Dynamic Analysis
- Normal modes: FEM normal mode extraction
- Dynamic response: frequency response, transient analysis
- Acoustic fatigue from turbulent boundary layer and jet noise

---

## Section 35 · Thermal Design and Acoustic Management
*Primary refs: Heat Transfer in Single and Multiphase Systems (Naterer);
Thermodynamics: An Engineering Approach (Çengel);
Hypersonic Aerothermodynamics (Bertin)*

### 35.1 Thermal Environment Mapping for Aircraft
- Ground-level solar heating
- Aerodynamic heating at cruise (high subsonic / supersonic)
- Engine bay heat loads
### 35.2 Thermal Analysis Methods
- 1D lumped-mass transient model
- 2D finite difference for TPS
- FEA thermal models integrated with structural models (coupled thermo-mechanical)
### 35.3 Engine Nacelle Thermal Management
- Fire detection and extinguishing zones
- Fire zone cowling requirements (FAR 25.1185)
### 35.4 Aircraft Acoustic Design
- Noise sources: fan tone, jet, airframe (trailing edge, slat, gear)
- Community noise prediction (ANOPP framework)
- Acoustic treatment: spliced liner design, bulk absorbers
- Low-observable acoustic considerations (UAV low-noise prop design)
### 35.5 Interior Cabin Noise and Vibration
- Transmission Loss (TL) of cabin sidewall
- Active Noise and Vibration Control (ANVC) systems

---

# PART XIV — CAD, DIGITAL DESIGN & ENGINEERING TOOLS

## Section 36 · CAD Framework and Digital Design Environment
*Primary refs: AIAA Aerospace Design Engineers Guide;
NASA Systems Engineering Handbook;
Aircraft Aerodynamic Design — Geometry and Optimization*

### 36.1 CAD Tools in Aerospace — Selection and Ecosystem
- CATIA V5/V6, Siemens NX, PTC Creo, SolidWorks
- OpenVSP for conceptual/preliminary geometry
### 36.2 Parametric and Feature-Based Modelling
- Master geometry concept and associativity
- Datum structures and reference planes
### 36.3 Surface Modelling and Class-A Aerodynamic Surfaces
- NURBS surfaces: control points, continuity (G0, G1, G2)
- Loft construction: profiles, guide curves, end conditions
### 36.4 Assembly Modelling and Product Structure
- Assembly constraints: coincident, concentric, rigid joint
- Product structure (EBOM vs. MBOM) and module breakdown
### 36.5 Digital Twin and Model-Based Systems Engineering (MBSE)
- SysML and architecture frameworks (DODAF, NAF)
- Parametric models driving aerodynamic and structural analyses
### 36.6 Configuration Management and PDM/PLM

---

## Section 37 · Interference Checks & Clearance Analysis
*Primary refs: AIAA Aerospace Design Engineers Guide; Airframe Structural Design (Niu)*

### 37.1 Types of Interference and Clearance Requirements
### 37.2 Clash Detection Workflows in CAD (CATIA/NX DMU)
### 37.3 Systems Routing and Clash Management
- Hydraulic, fuel, bleed air, electrical routing
### 37.4 Mass Properties and CG Verification in CAD
### 37.5 Jig-Shape vs. Loaded Shape Compensation (Jig Twist)

---

## Section 38 · Tolerancing, GD&T & Dimensional Management
*Primary refs: AIAA Aerospace Design Engineers Guide;
Airframe Stress Analysis and Sizing (Niu)*

### 38.1 Tolerancing Fundamentals: Bilateral, Unilateral, Limit Dimensions
### 38.2 Geometric Dimensioning and Tolerancing (GD&T)
- ASME Y14.5-2018 datum reference frames
- Feature control frame interpretation
- Position, profile of a surface, runout, angularity, parallelism
### 38.3 Dimensional Management in Aircraft Assembly
- Statistical tolerance analysis (RSS vs. worst-case)
- Key Characteristic (KC) management: aerodynamic contour, fastener hole
### 38.4 Tolerance Specification for Composites
- Layup variability: ply drop stagger, wrinkle acceptance criteria
- Assembly gap and shimming requirements

---

# PART XV — MANUFACTURING & BUILD CONSIDERATIONS

## Section 39 · Manufacturing Processes & Design for Manufacturing
*Primary refs: AIAA Aerospace Design Engineers Guide;
Mechanics of Composite Materials (Jones);
Practical Analysis of Aircraft Composites;
Fundamentals of Materials Science and Engineering (Callister)*

### 39.1 Design for Manufacturing (DFM) and Assembly (DFA) Principles
### 39.2 Metallic Manufacturing Processes
- Sheet metal: stretch forming, deep drawing, drop hammer
- Machining: CNC milling, EDM, electrochemical machining
- Casting: investment casting for turbine blades
- Forging: die forging for primary structure
- Extrusions: spars and stringers
### 39.3 Composite Manufacturing Processes
- Hand layup and vacuum bagging
- Autoclave cure: temperature-pressure cycle management
- Resin Transfer Moulding (RTM) and VARTM
- Automated Fibre Placement (AFP) and Automated Tape Laying (ATL)
- Out-of-autoclave (OoA) prepreg
### 39.4 Additive Manufacturing (AM) in Aerospace
- SLM/DMLS for titanium and Inconel brackets
- DED for repair
- FFF/FDM for tooling and fixtures
- Certification challenges: AS7003, MMPDS equivalence testing
### 39.5 Assembly and Integration Processes
- Determinant Assembly: hole-based vs. fixture-based tooling
- Automated drilling and riveting (GEMCOR, ALEMA)
- Shimming philosophy: solid vs. liquid shim

---

## Section 40 · Quality Control, Inspection & Airworthiness of Manufacture
*Primary refs: AIAA Aerospace Design Engineers Guide; Aviation Mechanic Handbook (Crane);
NASA Systems Engineering Handbook*

### 40.1 First Article Inspection (FAI) and AS9102
### 40.2 Non-Destructive Testing (NDT/NDE)
- Ultrasonic: A-scan, phased array (PAUT), TOFD
- Radiography: X-ray and CT scanning
- Eddy current: crack and corrosion detection
- Thermography: active flash and lockin for composite delaminations
- Visual inspection: borescope for engine, remote visual inspection (RVI)
### 40.3 Statistical Process Control (SPC) in Aerospace Manufacturing
### 40.4 Acceptance Testing and Flight Test
- Functional test: systems check-out and ramp test
- Low-speed taxi: brake and steering check
- High-speed taxi: lift-off speed assessment
- First flight envelope expansion: flutter, buffet, stall, spin
### 40.5 AS9100 Quality Management System

---

# PART XVI — OPERATIONS, SUSTAINMENT & LIFECYCLE

## Section 41 · Maintainability, Reliability & Supportability
*Primary refs: NASA Systems Engineering Handbook; AIAA Aerospace Design Engineers Guide;
Aviation Mechanic Handbook (Crane); Understanding Air France 447*

### 41.1 Reliability Engineering Fundamentals
- Failure rate, MTBF, MTTR, availability
- System reliability modelling: series, parallel, k-out-of-n
- Fault Tree Analysis (FTA) and FMEA/FMECA
### 41.2 Maintainability Design
- Access panel placement: time on task analysis
- Modular LRU architecture: quick-release fasteners, pigtail connectors
- Maintenance Steering Group (MSG-3) logic
### 41.3 Corrosion Prevention and Control Programme (CPCP)
- Boeing CPCP (D6-82808) and its airworthiness directive basis
- Sealing, surface treatment, finish systems
### 41.4 Structural Life Management and Life Extension
- Damage tolerance inspection intervals
- SLEP (Service Life Extension Programme): supplemental inspection documents
### 41.5 MRO Cost Drivers in Design — Design-for-Supportability
- Direct Maintenance Cost (DMC) metrics
- Condition-based maintenance (CBM) and health monitoring

---

## Section 42 · Environmental Sustainability and Future Trends
*Primary refs: Fundamentals of Engineering Thermodynamics (Moran, Shapiro);
Data-Driven Science and Engineering (Brunton, Kutz)*

### 42.1 Aviation's Environmental Footprint
- CO₂, NOx, contrail formation, noise
- CORSIA and EU ETS framework
### 42.2 Alternative Propulsion and Sustainable Aviation Fuel (SAF)
- SAF production pathways: HEFA, PtL, gasification
- Drop-in vs. non-drop-in fuels
### 42.3 Future Vehicle Concepts and Emerging Technologies
- Distributed Electric Propulsion (DEP): X-57 Maxwell
- Ultra-High Bypass (UHB) and Open Fan (CFM RISE)
- Blended Wing Body (BWB): Boeing X-48B and Airbus MAVERIC
- Regional Air Mobility (RAM) and Urban Air Mobility (UAM)
### 42.4 Digital Engineering and the Future Design Cycle
- Model-Based Design and virtual certification
- AI/ML in aerodynamic shape optimisation (adjoint methods)
- Additive manufacturing at scale
### 42.5 Lifecycle Assessment (LCA) of Aircraft
- Cradle-to-grave CO₂: production, operation, end-of-life
- Recyclability of composite structures

---

# PART XVII — SPECIAL TOPICS

## Section 43 · Autonomous & Uncrewed Systems (UAS)
*Primary refs: Unmanned Aircraft Systems (Austin);
Aircraft Control and Simulation (Stevens, Lewis);
Data-Driven Science and Engineering (Brunton, Kutz)*

### 43.1 UAS Classification and Regulatory Landscape
- ICAO classifications, FAR Part 107, EASA Open/Specific/Certified
### 43.2 Aerodynamic Design of Fixed-Wing UAS
- Low Reynolds number (Re = 10⁴–10⁶) airfoil selection
- Laminar separation bubble management
### 43.3 Multirotor UAS Design
- Rotor sizing: disk loading vs. battery weight trade
- Frame design for structural compliance under crash loads
### 43.4 Sense and Avoid (SAA) and DAA Systems
### 43.5 UAS Communication and Link Architecture
- RF link budget, spectrum allocation
- LOS vs. BLOS operations: SATCOM latency issues
### 43.6 Counter-UAS Technology (C-UAS)

---

## Section 44 · eVTOL and Urban Air Mobility
*Primary refs: AIAA Aerospace Design Engineers Guide;
Unmanned Aircraft Systems (Austin) [background];
EASA SC-VTOL and FAA SFAR-103 regulatory framework*

### 44.1 eVTOL Market Landscape and Use Cases
### 44.2 Configuration Trade Study
- Multirotor, lift+cruise, vectored thrust, compound
- Noise as primary design driver
### 44.3 eVTOL Sizing and Range Prediction
- Hover power and cruise power balance
- Battery energy density requirements vs. year of service entry
### 44.4 Safety Architecture for eVTOL
- Motor redundancy: N+2 philosophy
- Ballistic parachute and autorotation fallback
### 44.5 Certification Path: EASA SC-VTOL and FAA
### 44.6 Vertiport Design and Infrastructure Constraints

---

## Section 45 · Fighter Aircraft Design and Tactics
*Primary refs: Fighter Combat — Tactics and Maneuvering (Robert L. Shaw);
F-22 Raptor (Pace); Projects of Skunk Works (Pace);
Lockheed SR-71 Blackbird (Crickmore);
Visual Aircraft Recognition (Dept. of Army)*

### 45.1 Fighter Design Philosophy: E-M Theory and Beyond-Visual-Range (BVR)
### 45.2 Stealth (Low Observable) Design
- Radar Cross Section (RCS): physical optics, diffraction contributions
- Shaping: planform alignment, edge serration, inlet masking
- Radar absorbent material (RAM) and coating systems
- IR signature reduction: nozzle shielding, exhaust cooling
### 45.3 Supermanoeuvre and High-Angle-of-Attack Flight
- Thrust vectoring: 2D and 3D nozzles
- Relaxed static stability (RSS) in fighters
- Post-stall manoeuvre and Cobra/Herbst manoeuvre analysis
### 45.4 Canopy Design and Cockpit Layout
- Bird strike certification for canopies
- HMD (Helmet-Mounted Display) integration
### 45.5 Air Combat Manoeuvring and BFM Fundamentals (Shaw)
- Lag pursuit, lead pursuit, pure pursuit geometry
- Scissors, high-yo-yo, low-yo-yo defensive manoeuvres
- Energy-manoeuvre diagram as a fighter design tool

---

## Section 46 · Novel and Unconventional Configurations
*Primary refs: Aircraft Aerodynamic Design — Geometry and Optimization;
Fundamentals of Aircraft and Airship Design Vol. 1 & 2*

### 46.1 Blended Wing Body (BWB) Design
- Aerodynamic benefits: wetted aspect ratio improvement
- Structural challenges: non-circular pressurized cabin
- Stability and control without conventional tail
### 46.2 Box Wing and Joined Wing Configurations
- Structural stiffness benefits of closed-surface topology
- Interference aerodynamics between joined wing and main wing
### 46.3 Variable Geometry Aircraft
- Variable sweep (F-111, Tornado, B-1): pivot design, carry-through structure
- Morphing wings: flexible skin, shape memory alloy actuation
### 46.4 Solar-Powered High-Altitude Long-Endurance (HALE) Aircraft
- Energy balance: PV generation vs. motor power at cruise altitude
- Wing design at Re < 10⁵
### 46.5 Flying Wing and Tailless Aircraft
- Reflexed airfoils for positive pitching moment
- Vortex lift for stability at high AoA
- Pitch control: elevons, split drag flaps

---

# SUPPLEMENTARY RESOURCES

## SR.1 — The International Standard Atmosphere (ISA)
### ISA governing equations and layer structure
### Tabulated properties (0 to 65,000 ft)
### Four-panel property plots (T, P, ρ, a vs. altitude)
### Density altitude — definition, equations, and plots
### Non-standard atmospheres (ISA +15, ISA +35, ISA −15, tropical, polar)
### Real-gas effects above 25 km (dissociation onset)

---

## SR.2 — Airfoil Data & NACA Series Reference
*Primary refs: Fundamentals of Aerodynamics (Anderson); Low-Speed Aerodynamics (Katz, Plotkin);
NACA TR-824 (Theory of Wing Sections)*

### NACA 4-digit: geometry definition and Cl, Cd, Cm tables
### NACA 5-digit and 6-series aerodynamic characteristics
### Modern airfoil families: supercritical, natural laminar flow, rotor blade sections
### Airfoil data sources: UIUC database, NACA TN-1135, XFOIL usage guide

---

## SR.3 — Aerospace Material Properties
*Primary refs: Callister; Materials Handbook (Brady); Mechanical Engineering Handbook (Kreith);
Roark's Formulas for Stress and Strain (Young)*

### Aluminium alloys: 2024-T3, 7075-T6, 7068-T6511 — allowables from MMPDS
### Steel and titanium alloys: fatigue and fracture data
### Carbon fibre composite lamina properties: IM7/8552, T700/M21
### Temperature-dependent properties for elevated-temperature alloys
### Density and thermal properties summary table

---

## SR.4 — Propulsion Reference Data
*Primary refs: Gas Turbine Performance (Walsh, Fletcher); Jet Engines (Fowler)*

### Turbofan deck data: thrust vs. Mach, altitude for representative engines
### SFC carpet plots: bypass ratio vs. OPR vs. TET
### Propeller efficiency charts: advance ratio, blade activity factor
### Electric motor specific power vs. year (Ragone chart equivalent)

---

## SR.5 — CFD Solver Reference and Quick-Start Guides
*Primary refs: CFD — The Basics (Anderson); Applied Computational Aerodynamics (Mason)*

### OpenFOAM case setup for external aerodynamics (RANS, k-ω SST)
### SU2 adjoint optimisation workflow
### VLM using AVL: input format, output interpretation
### XFOIL batch analysis: polar sweep and transition analysis

---

## SR.6 — Key Design Standards and References
### FAR/CS Part 23, 25, 27, 29 — airworthiness standards
### MIL-HDBK-1797: Flying Qualities of Piloted Aircraft
### ADS-33: Handling Qualities for Rotorcraft
### MIL-A-8866, 8861, 8862: structural load and fatigue requirements
### MMPDS-12: material allowables handbook
### AS9100, AS9102, AS7003: quality and AM standards
### DO-178C / DO-254: software and electronics certification
### ICAO Annex 16: environmental protection

---

## SR.7 — Glossary, Acronyms, and Symbols
### Full acronym list for each Part
### Symbol reference (aerodynamic, structural, propulsion, control)
### Unit conversions: SI ↔ Imperial for key aerospace quantities

---

# APPENDICES

## Appendix A · Guiding Questions Master Index
### One-liner guiding question for each section (cross-reference by section number)

## Appendix B · Bibliography and Citation Style Guide
### All references cited in the notebook series (BibTeX entries in references.bib)
### Citation rules: published works only; no course slide material

## Appendix C · Python/NumPy Code Snippet Library
### Reusable routines: ISA model, Breguet, V-n diagram, trim solver, weight sizing

## Appendix D · Key Figures and Plots Master List
### Every matplotlib figure used across all notebooks, with source attribution

## Appendix E · Design Worked Examples
### E.1 — Commercial Turbofan Transport (737-class): full sizing walkthrough
### E.2 — Military Fighter (F-16-class): EM diagram and constraint analysis
### E.3 — Multirotor UAV (quadrotor inspection drone): battery and rotor sizing
### E.4 — Tiltrotor (V-22-class): conversion corridor and performance

---

*End of Master Notebook Outline v2 — Aircraft Design (Comprehensive Edition)*
