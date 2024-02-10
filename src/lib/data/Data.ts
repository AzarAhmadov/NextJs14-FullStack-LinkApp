import { Bio, Profile, ProfileBack, Sosial } from "../models/models";
import { connectDB } from "../utils/connectDB";

export const getBio = async () => {
    try {
        await connectDB();
        const bio = await Bio.find();
        return bio;
    } catch (err) {
        console.log(err)
    }
};

export const getSosial = async () => {
    try {
        await connectDB();
        const sosial = await Sosial.find();
        return sosial;
    } catch (err) {
        console.log(err)
    }
}

export const getProfileUrl = async () => {
    try {
        await connectDB();
        const profileUrl = await Profile.find();
        return profileUrl;
    } catch (err) {
        console.log(err)
    }
}

export const getProfileBackUrl = async () => {
    try {
        await connectDB();
        const profileBack = await ProfileBack.find();
        return profileBack;
    } catch (err) {
        console.log(err)
    }
}
