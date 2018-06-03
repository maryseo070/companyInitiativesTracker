export const deletePendingComp = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/pending_companies/${id}`
  });
};

export const createPendingComp = company => {
  return $.ajax({
    method: "POST",
    url: "/api/pending_companies",
    dataType: "json",
    data: {company: company}
  });
};

export const fetchPendingComps = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pending_companies"
  });
};

export const fetchPendingComp = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/pending_companies/${id}`
  });
};
