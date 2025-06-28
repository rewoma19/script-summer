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

function ticketStatus(tickets, ticketId) {
  let status;

  // check if ticketId property does not exist in tickets object
  if (!tickets.hasOwnProperty(ticketId)) {
    status = "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    status = "not sold";
  } else {
    status = `sold to ${tickets[ticketId]}`;
  }

  return status;
}
