const assignmentNames = {
  10: {
    maths: [
      "01 - The Quadratic Function",
      "02 - Right angled Triangles",
      "03 - Coordinate Geometry",
      "04 - Vectors",
      "05 - Solving Equations",
      "06 - Simultaneous Equations",
      "07 - Inequalities",
      "08 - Geometric Construction",
      "09 - Similar and Congruent Triangles",
      "10 - Sequences, Progressions and Series",
    ],
    physics: [
      "01 - Hydrostatics",
      "02 - Direct Current Circuits",
      "03 - 1D linear motion",
      "04 - 2D Motion and SUVAT",
      "05 - Newton's Laws",
      "06 - Pulleys",
      "07 - Work and Energy",
      "08 - Mechanisms and Force Multipliers",
      "09 - Momentum",
      "10 - Internal Energy",
    ],
  },
  12: {
    maths: [
      "01 - The Quadratic Function",
      "02 - Trigonometric Transformations and Equations",
      "03 - Differentiation 1",
      "04 - Basic Integration Skills",
      "05 - Sequences and Series",
      "06 - Coordinate Geometry",
      "07 - Exponents and Logs",
      "08 - Equations",
      "09 - Analysis and Graphic Representation of Functions",
      "10 - Inequalities",
    ],
    physics: [
      "01 - Vectors in Physics",
      "02 - EMF and Internal Resistance",
      "03 - Newton’s Laws",
      "04 - Centre of Mass and Statics",
      "05 - Momentum",
      "06 - Work and Energy",
      "07 - DC Circuits",
      "08 - Geometrical Optics",
      "09 - Simple Harmonic Motion",
      "10 - Electrostatics and Capacitors",
    ],
  },
  13: {
    maths: [
      "01 - Complex Numbers",
      "02 - Differentiation 2",
      "03 - Differential Equations in Physics",
      "04 - 3D Geometry",
      "05 - Sets, maps, cardinality",
      "06 - Delta function and Fourier transformation",
    ],
    physics: [
      "01 - Circular Motion",
      "02 - Gravity and Orbits",
      "03 - Magnetic Fields",
      "04 - Electromagnetic induction",
      "05 - RLC circuits",
      "06 - Ideal Gas and Thermodynamics",
    ],
  },
};

function getAssignmentUrl(subject, year, number) {
  const assignmentNumber = formatAssignmentNumber(number);
  return `https://compos.web.ox.ac.uk/sitefiles/${subject}${year}-${assignmentNumber}.pdf`;
}

function formatAssignmentNumber(number) {
  if (number < 10) return `0${number}`;
  return `${number}`;
}

function makeAssignments(subject, year, root) {
  const names = assignmentNames[year][subject];
  for (let i = 0; i < names.length; i++) {
    const parent = document.createElement("li");
    const redirect = document.createElement("a");
    redirect.innerHTML = names[i];
    redirect.href = getAssignmentUrl(subject, year, i + 1);
    parent.appendChild(redirect);
    root.appendChild(parent);
  }
}
