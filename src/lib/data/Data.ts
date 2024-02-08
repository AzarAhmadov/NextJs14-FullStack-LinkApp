

import { Bio, Sosial } from "../models/models";
import { connectDB } from "../utils/connectDB";

export const getBio = async () => {
    try {
        connectDB();
        const bio = await Bio.find();
        return bio;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch Bio!");
    }
};

export const getSosial = async () => {
    try {
        connectDB();
        const sosial = await Sosial.find();
        return sosial
    } catch (err) {
        console.log(err)
    }
}