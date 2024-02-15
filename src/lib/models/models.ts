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
        title: {
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

const ProfileSchema = new mongoose.Schema(
    {
        url: {
            type: String,
        }
    },
    { timestamps: true }
)

const ProfilBackeSchema = new mongoose.Schema(
    {
        back_url: {
            type: String,
        }
    },
    { timestamps: true }
)

export const Bio = mongoose.models?.Bio || mongoose.model("Bio", bioSchema);
export const Sosial = mongoose.models?.Sosial || mongoose.model("Sosial", SosialLinkSchema);
export const Profile = mongoose.models?.Profile || mongoose.model("Profile", ProfileSchema);
export const ProfileBack = mongoose.models?.ProfileBack || mongoose.model("ProfileBack", ProfilBackeSchema);