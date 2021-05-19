const schema = () =>{
  return (`{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Keshav Kumar",
    "disambiguatingDescription": "IIT Jodhpur works at Practo from Sitamarhi lives in Bangalore",
    "alumniOf": {
      "@type": "OrganizationRole",
      "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Indian Institute Of Technology Jodhpur",
          "sameAs": "https://en.wikipedia.org/wiki/IIT_Jodhpur"
      },
      "startDate": "2009"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer",
      "educationRequirements": "B.Tech in Computer Science and Engineering",
      "estimatedSalary": [
        {
          "@type": "MonetaryAmountDistribution",
          "name": "base",
          "currency": "USD",
          "duration": "P1Y",
          "percentile10": "100000.5",
          "percentile25": "115000",
          "median": "120000.28",
          "percentile75": "130000",
          "percentile90": "150000"
        }
      ],
      "occupationLocation": [
        {
          "@type": "City",
          "name": "Bangalore"
        }
      ]
    },
    "worksFor": {
      "@context": "https://schema.org",
      "@type": "Organization",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore, India",
        "postalCode": "560076",
        "streetAddress": "Bannerghatta Road, Arekere"
      },
      "email": "keshav.kumar@practo.com",
      "name": "Practo Technologies"
    }
  }`)
}

export default schema;
