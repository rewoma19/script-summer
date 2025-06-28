function createVisitor(name, age, tickedId) {
  const visitorObject = {
    name,
    age,
    tickedId,
  };

  return visitorObject;
}

function revokeTicket(visitor) {
  visitor.tickedId = null;
  return visitor;
}
