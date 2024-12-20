export const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`Weather API Error: ${response.statusText}`);

  return response.json();
};
