import mongoose from "mongoose";

const bioSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
            required: false,
        }
    },
    { timestamps: true }
);

const SosialLinkSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);


export const Bio = mongoose.models?.Bio || mongoose.model("Bio", bioSchema);
export const Sosial = mongoose.models?.Sosial || mongoose.model("Sosial", SosialLinkSchema);