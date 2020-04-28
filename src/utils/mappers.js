// Status
export const mapStatus = (status) => statusText[status];

export const mapColorStatus = (status) => statusColor[status];

const statusText = {
  opened: "ABERTO",
  closed: "FECHADO",
};

const statusColor = {
  opened: "Primary",
  closed: "Success",
  canceled: "Gray",
};



// Priorities
export const mapPriority = (p) => priorities[p];

const priorities = {
  1: "BAIXA",
  2: "MÉDIA",
  3: "ALTA",
};