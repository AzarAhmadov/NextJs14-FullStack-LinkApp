
'use server'

import { Bio, Sosial } from "@/lib/models/models";
import { connectDB } from "../utils/connectDB";

export const addBio = async (formData: FormData) => {

    const { name, bio } = Object.fromEntries(formData);

    try {
        connectDB();

        const newBio = new Bio({
            name,
            bio
        });

        await newBio.save();
        console.log("saved to db");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const updateBio = async (formData: FormData) => {

    try {
        const { id, name, bio } = Object.fromEntries(formData);
        connectDB()
        await Bio.findOneAndUpdate({ id }, { name, bio }, { new: true });

    } catch (err) {
        console.log(err)
    }
};

export const addSosial = async (FormData: FormData) => {
    try {
        const { name, link } = Object.fromEntries(FormData)
        connectDB()

        const newLink = new Sosial({
            name,
            link
        })

        await newLink.save();
        console.log("saved to db");

    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" };
    }
}


