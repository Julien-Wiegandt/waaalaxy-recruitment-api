let credits = [];

exports.getCredits = (req, res) => {
  res.status(200).send(JSON.stringify(credits));
};

exports.updateCredits = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const newCredits = [];
  req.body.forEach((creditsAction) => {
    newCredits.push({ credits: creditsAction.credits, name: creditsAction.name });
  });
  credits = newCredits;
  res.status(200).send(JSON.stringify(credits));
};
