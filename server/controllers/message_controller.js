let id = 0;
let messages = [];

module.exports = {
  create(req, res, next) {
      console.log(req.body)
    messages.push({
      id: id,
      text: req.body.text,
      time: req.body.time,
      displayName: req.body.displayName
    });
    id += 1;
    res.json(messages);
    console.log(messages);
  },

  read(req, res, next) {
    res.json(messages);
  },
  update(req, res, next) {
    let message = {
      text: ""
    };

    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id == req.params.id) {
        message = messages[i];
        console.log(messages[i]);
      }
    }
    message.text = req.body.text || message.text;
    res.json(messages);
  },

  deleteMess(req, res, next) {
    messages = messages.filter(message => message.id != req.params.id);
    res.json(messages);
  }
};
