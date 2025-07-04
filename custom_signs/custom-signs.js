function buildSign(occasion, name) {
  const occasionSign = `Happy ${occasion} ${name}!`;
  return occasionSign;
}

// Test case
console.log(buildSign("Birthday", "Rob"));
