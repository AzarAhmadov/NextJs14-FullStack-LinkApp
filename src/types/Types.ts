export type SocialMediaIcon = {
    icon: JSX.Element
    link: string
}

export type Linkdata = {
    title: string
    url: string
    icon?: JSX.Element
}

export type SosialType = {
    title: string
    logo: string
    onclick?: () => void
}

export type Props = {
    title: string,
    icon: JSX.Element,
    onClick?: () => void
}