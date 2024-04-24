export async function fetchData() {
  const response = await fetch(
    "https://api-internal.azurewebsites.net/strycket2023"
  );
  const data = await response.json();
  return data;
}
