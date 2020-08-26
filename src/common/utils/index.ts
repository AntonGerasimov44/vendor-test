import { IVendorData } from "common/components/vendorsTable/vendorsList";

export const isValidNewVendorsForm = (data: IVendorData) => {
  const {
    customerCaseStudies,
    description,
    features,
    fundingHistory,
    name,
    pricing,
    score,
  } = data;
  const { foundedYear, founders, keyInvestors, total } = fundingHistory;

  return (
    customerCaseStudies.length >= 5 &&
    customerCaseStudies.length <= 20 &&
    description.length >= 5 &&
    description.length <= 20 &&
    features.length >= 5 &&
    features.length <= 20 &&
    name.length >= 1 &&
    name.length <= 10 &&
    pricing.length >= 5 &&
    pricing.length <= 20 &&
    score >= 0.1 &&
    score <= 10 &&
    new Date(foundedYear).getFullYear() > 1500 &&
    new Date(foundedYear).getFullYear() < new Date().getFullYear() &&
    founders.length >= 5 &&
    founders.length <= 20 &&
    keyInvestors.length >= 5 &&
    keyInvestors.length <= 20 &&
    total >= 1 &&
    total <= 10000
  );
};
