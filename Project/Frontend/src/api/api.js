// Frontend/src/api/api.js
export const fetchStatistics = async () => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT'); // replace with your backend URL
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    return null;
  }
};
