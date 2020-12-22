/* eslint-disable prettier/prettier */


export type TechIcon = {
    title: string
    icon: {
        url: string
    }
}



export type LogoProps = {
    alternativeText: string
    url?: string
}

export type HeaderProps = {
    title: string
    description: string
    button?: {
        label: string
        url: string
    }
    image: {
        alternativeText: string
        url: string
    }
}

export type SectionAboutProjectProps = {
    title: string
    description: string
    image: {
        alternativeText: string
        url: string
    }
}

export type SectionTechProps = {
    title: string
    techIcons: TechIcon[]
}

export type SectionConceptsProps = {
    title: string
    concepts: Array<{
        title: string
    }>
}


export type SectionModulesProps = {
    title: string
    modules: Array<{
        title: string
        description: string
        subtitle: string
    }>
}


export type SectionAgendaProps = {
    title: string
    description: string
}


export type PricingBoxProps = {
    totalPrice: number
    numberInstallments: number
    priceInstallments: number
    benefits: string
    button: {
        label: string
        url: string
    }
}

export type SocialLinks = {
    title: string
    url: string
}

export type Authors = {
    photo: {
        alternativeText: string
        url: string
    }
    name: string
    role: string
    socialLinks: SocialLinks[]
    description: string
}
export type SectionAboutUsProps = {
    title: string
    authors: Authors[]
}

export type Reviews = {
  
        name:string
        text:string
        photo:{
          url:string
          
        
}
}
export type SectionReviewProps = {

    title:string
    reviews:Reviews[]
    }



export type LandingPageProps = {
    logo: LogoProps
    header: HeaderProps
    sectionAboutProject: SectionAboutProjectProps
    sectionTech: SectionTechProps
    sectionConcepts: SectionConceptsProps
    sectionModules: SectionModulesProps
    sectionAgenda: SectionAgendaProps
    pricingBox: PricingBoxProps
    sectionAboutUs: SectionAboutUsProps
    sectionReviews:SectionReviewProps
}