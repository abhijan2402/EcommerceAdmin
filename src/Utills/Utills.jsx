export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "green";
    case "pending":
      return "orange";
    case "rejected":
      return "red";
    case "refund":
      return "purple";
    case "processing":
      return "blue";
    case "created":
      return "cyan";
    case "blocked":
      return "gray";
    default:
      return "default";
  }
};
