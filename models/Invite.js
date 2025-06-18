import mongoose from 'mongoose';

const inviteSchema = new mongoose.Schema({
    date: String,
    place: String,
    info: String,
    createdAt: { type: Date, default: Date.now },
});

export const Invite = mongoose.model("Invite", inviteSchema);
