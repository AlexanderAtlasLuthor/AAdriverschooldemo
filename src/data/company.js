// Public-facing identity, contact details and shared asset paths for A&A Online Training.
// Only information that already exists in the project is listed here.
export const BRAND = {
  name: 'A&A Online Training',
  shortName: 'A&A',
  parent: 'A&A Services',
  legalEntity: 'A & Associates',
  tagline: 'Quality In Everything We Do',
  descriptor: 'A training initiative of A&A Services',
  purpose: 'Structured online training experiences across multiple industries and learning needs.',
};

export const CONTACT = {
  phone: '(561) 533-5303',
  phoneHref: 'tel:+15615335303',
  fax: '(561) 533-3858',
  address: "951 Sansbury's Way, West Palm Beach, FL 33411",
  addressLines: ["951 Sansbury's Way", 'West Palm Beach, FL 33411'],
  website: 'www.AAServices.com',
  websiteHref: 'https://www.AAServices.com',
};

export const COURSE_SUPPORT_NOTE = 'Course-specific support channels and hours are provided during enrollment and from every course screen.';

// Files under /public — referenced by absolute path so deep links resolve on every route.
export const ASSETS = {
  logo: '/assets/logo-aa.png',
  logoTraining: '/assets/logo-aa-training.png',
};
