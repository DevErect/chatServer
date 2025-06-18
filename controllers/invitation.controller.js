import Invite from "../models/Invite.js";

export const inivitation = async (req, res) => {
    const { date, place, info } = req.body;

    if (!date) {
        return res.status(400).json({ message: "Date is required." });
    }

    try {
        const invite = new Invite({ date, place, info });
        await invite.save();
        res.status(200).json({ message: "Invite saved." });
    } catch (err) {
        res.status(500).json({ message: "Error saving invite." });
    }
}
