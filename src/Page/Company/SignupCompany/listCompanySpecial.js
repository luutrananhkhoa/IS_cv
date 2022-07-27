import iig from './igg.png'
export const listCompanySpecial = [
  {
    text: 'Special list company',
    HandleFunction: (
      contractStudentBusiness,
      address,
      name,
      national,
      business,
      linkedin,
      facebook,
      website,
      password
    ) => {
      return contractStudentBusiness.methods.addBusinessProfile(
        address,
        name,
        national,
        business,
        linkedin,
        facebook,
        website,
        password
      )
    },
  },
  {
    text: 'IIG Viet Nam',
    logo: iig,
    HandleFunction: (
      contractStudentBusiness,
      address,
      name,
      national,
      business,
      linkedin,
      facebook,
      website,
      password
    ) => {
      return contractStudentBusiness.methods.addIIGProfile(
        address,
        name,
        national,
        facebook,
        website,
        linkedin,
        password
      )
    },
  },
]
