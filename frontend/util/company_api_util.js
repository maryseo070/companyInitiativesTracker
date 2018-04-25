export const fetchCompanies = () => {
  return $.ajax({
    method: "GET",
    url: "/api/companies"
  });
};
