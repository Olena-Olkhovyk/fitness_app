export const exerciseOptions = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "9647a49227msh987541702074902p1ae020jsn7d3ce606d08f",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
