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

function graduationFor(name, year) {
  const gradSign = `Congratulations ${name}!
Class of ${year}`;

  return gradSign;
}

function costOf(sign, currency) {
  let costOfSign = 20;

  for (let char of sign) {
    costOfSign += 2;
  }

  const costStatement = `Your sign costs ${costOfSign.toFixed(2)} ${currency}.`;
  return costStatement;
}
