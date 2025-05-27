import {Message} from "../models/Message.js"


export const fileUpload = async (req, res) => {
    const { sender, recipient, message } = req.body;
    const file = req.file;


    const newMsg = new Message({
        sender,
        recipient,
        message,
        fileUrl: file.path,
        fileType: file.mimetype,
        fileName: file.originalname
    });

    await newMsg.save();
    res.json(newMsg);
}