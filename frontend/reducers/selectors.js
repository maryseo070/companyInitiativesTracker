export const selectChildCompanies = (companies, initFilter) => {
  let companyArr = Object.values(companies);
  if (Number(initFilter) === 0) {
    return companies;
  }
  return companyArr.filter(
    (company) => company.initiative_id === Number(initFilter)
  );
};
