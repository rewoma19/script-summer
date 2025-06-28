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

function simpleTicketStatus(tickets, ticketId) {
  // If tickets[ticketId] evaluates to a null value, then assign the string "invalid ticket !!!" to the simpleStatus variable
  let simpleStatus = tickets[ticketId] ?? "invalid ticket !!!";

  return simpleStatus;
}

function gtcVersion(visitor) {
  let versionAvailable = visitor.gtc?.version;
  return versionAvailable;
}
