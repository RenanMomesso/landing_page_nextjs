/* eslint-disable prettier/prettier */
const GET_LANDING_PAGE = /*GRAPHQL*/ `
fragment logo on LandingPage {
  logo{
     
     alternativeText
     url
   }
}
fragment header on LandingPage {
  header {
     title
     description
     button
      {
       label
       url
     }
     image {
       alternativeText
       url
     }
   }
}

fragment sectionAboutProject on LandingPage {
 sectionAboutProject{
   title
   description
   image {
     alternativeText
     url
   }
 }
}

fragment sectionTech on LandingPage{
  sectionTech{
    title
    techIcons{
    title
      icon{
        url
      }
  }
}
}

fragment sectionConcepts on LandingPage {
  sectionConcepts{
    title
    concepts{
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules{
    title
    modules{
      title
      description
      subtitle
      
    }
  }
}
fragment sectionAgenda on LandingPage {
  sectionAgenda{
    title
    description
  }
}

fragment pricingBox on LandingPage{
  pricingBox{
    totalPrice
    numberInstallments
    priceInstallments
    benefits
    button{
      label
      url
    }
  }
}

fragment sectionAboutUs on LandingPage {
  sectionAboutUs{
    title
    authors{
      photo {
        alternativeText
        url
      }
      name
      role
      socialLinks {
        title
        url
      }
      description
    }
  }
}

fragment sectionReviews on LandingPage {
  sectionReviews {
    title
    reviews{
      name
      text
      photo{
        url
        
      }
    }
  }
}

query GET_LANDINGPAGE{
 landingPage{
  ...logo
  ...header
  ...sectionAboutProject
  ...sectionTech
  ...sectionConcepts
  ...sectionModules
  ...sectionAgenda
  ...pricingBox
  ...sectionAboutUs
  ...sectionReviews
 }
}
`


export default GET_LANDING_PAGE;