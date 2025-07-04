function buildSign(occasion, name) {
  const occasionSign = `Happy ${occasion} ${name}!`;
  return occasionSign;
}

// Test case
console.log(buildSign("Birthday", "Rob"));

function buildBirthdaySign(age) {
  const ageGrade = age >= 50 ? "mature" : "young";
  const birthdaySign = `Happy Birthday! What a ${ageGrade} fellow you are.`;

  return birthdaySign;
}
