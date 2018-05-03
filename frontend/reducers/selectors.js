export const selectChildCompanies = (companies, initFilter) => {
  let companyArr = Object.values(companies);
  if (initFilter === 0) {
    return companies;
  }
  return companyArr.filter(
    (company) => company.initiative_id === Number(initFilter)
  );
};
