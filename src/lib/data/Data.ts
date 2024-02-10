

import { Bio, Profile, ProfileBack, Sosial } from "../models/models";
import { connectDB } from "../utils/connectDB";

export const getBio = async () => {
    try {
        connectDB();
        const bio = await Bio.find();
        return bio;
    } catch (err) {
        throw new Error("Failed to fetch Bio!");
    }
};

export const getSosial = async () => {
    try {
        connectDB();
        const sosial = await Sosial.find();
        return sosial
    } catch (err) {
        throw new Error("Failed to fetch Sosials");
    }
}

export const getProfileUrl = async () => {
    try {
        connectDB();
        const profileUrl = await Profile.find();
        return profileUrl
    } catch (err) {
        throw new Error("Failed to fetch Profile Url");
    }
}

export const getProfileBackUrl = async () => {
    try {
        connectDB();
        const profileBack = await ProfileBack.find();
        return profileBack
    } catch (err) {
        throw new Error("Failed to fetch Profile Back Url");
    }
}