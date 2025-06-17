export interface SocialLink {
    name: string
    url: string
    icon?: string
}

export interface UserData {
    name: string
    title: string
    socialLinks: SocialLink[]
}

export const userData: UserData = {
    name: 'Mike',
    title: 'Web Developer',
    socialLinks: [
        {
            name: 'Github',
            url: 'https://github.com/your-username',
            icon: 'github'
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/your-profile',
            icon: 'linkedin'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/your-profile',
            icon: 'instagram'
        }
    ]
}

export const { name, title, socialLinks } = userData