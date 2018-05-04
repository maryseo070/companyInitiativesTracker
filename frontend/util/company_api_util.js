export const createCompany = company => {
  return $.ajax({
    method: "POST",
    url: "/api/companies",
    dataType: "json",
    data: company
  });
};

export const fetchCompanies = () => {
  return $.ajax({
    method: "GET",
    url: "/api/companies"
  });
};

export const fetchCompany = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/companies/${id}`
  });
};

export const fetchInitiatives = () => {
  return $.ajax({
    method: "GET",
    url: "/api/initiatives"
  });
};
