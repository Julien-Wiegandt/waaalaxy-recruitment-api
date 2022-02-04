let fifoqueue = [];

exports.getFifoqueue = (req, res) => {
  res.status(200).send(JSON.stringify(fifoqueue));
};

exports.updateFifoqueue = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const newFifoqueue = [];
  req.body.forEach((action) => {
    newFifoqueue.push({
      name: action.name,
      maxCredits: action.maxCredits,
      color: action.color,
    });
  });
  fifoqueue = newFifoqueue;
  res.status(200).send(JSON.stringify(fifoqueue));
};
