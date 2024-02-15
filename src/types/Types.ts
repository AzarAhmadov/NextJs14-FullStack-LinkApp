export type SocialMediaIcon = {
    icon: JSX.Element
    name: string
    link: string
    _id: string
    title: string
}

export type Linkdata = {
    title: string
    url: string
    icon?: JSX.Element
}

export type SosialType = {
    title: string
    logo: string
    name?: string
    onclick?: () => void
}
