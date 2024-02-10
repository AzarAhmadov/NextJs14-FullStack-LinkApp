
'use server'

import { Bio, Profile, ProfileBack, Sosial } from "@/lib/models/models";
import { connectDB } from "../utils/connectDB";
import { revalidatePath } from "next/cache";

export const addBio = async (formData: FormData) => {

    const { name, bio } = Object.fromEntries(formData);

    try {
        connectDB();

        const newBio = new Bio({
            name,
            bio
        });

        await newBio.save();
        revalidatePath('/Edit')
        revalidatePath('/Demo')

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
        revalidatePath('/Edit')
        revalidatePath('/Demo')

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
        revalidatePath('/Edit')
        revalidatePath('/Demo')

    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" };
    }
}

export const deleteSosial = async (formData: FormData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectDB()
        await Sosial.findByIdAndDelete(id);
        revalidatePath('/Edit')
        revalidatePath('/Demo')
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const addProfile = async (FormData: FormData) => {

    try {
        const { url } = Object.fromEntries(FormData)
        connectDB()

        const newUrl = new Profile({
            url
        })

        await newUrl.save();
        revalidatePath('/Edit')
        revalidatePath('/Demo')

    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" };
    }
}

export const updateProfile = async (FormData: FormData) => {

    try {
        const { id, url } = Object.fromEntries(FormData);
        connectDB()
        await Profile.findOneAndUpdate({ id }, { url }, { new: true });
        revalidatePath('/Edit')
        revalidatePath('/Demo')

    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" };
    }
}

export const addBackProfile = async (FormData: FormData) => {

    try {
        const { back_url } = Object.fromEntries(FormData)
        connectDB()

        const newUrl = new ProfileBack({
            back_url
        })

        await newUrl.save();
        revalidatePath('/Edit')
        revalidatePath('/Demo')

    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" };
    }
}

export const updateBackProfile = async (FormData: FormData) => {

    try {
        const { id, back_url } = Object.fromEntries(FormData);
        connectDB()
        await ProfileBack.findOneAndUpdate({ id }, { back_url }, { new: true });
        revalidatePath('/Edit')
        revalidatePath('/Demo')

    } catch (err) {
        console.log(err)
        return { error: "Something went wrong!" };
    }
}