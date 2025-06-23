function needsLicense(kind) {
  let needsLicense;

  if (kind === "truck" || kind === "car") {
    needsLicense = true;
  } else {
    needsLicense = false;
  }

  return needsLicense;
}
