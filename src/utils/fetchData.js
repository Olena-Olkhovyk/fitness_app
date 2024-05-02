export const exerciseOptions = {
  method: "GET",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "e26c7aa98emshe7802a94b9adc69p1f497cjsn522c46a951d0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "e26c7aa98emshe7802a94b9adc69p1f497cjsn522c46a951d0",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
