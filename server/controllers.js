
// var declaration
const messages = [];
const id = 0;

// exports

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(message);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messIndex];

        messages[messIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const delMes = req.params.id;
        const messIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messIndex, 1);
        res.status(200).send(messages);
    }
}