export async function getCountries() {
  try {
    const res = await fetch(
      'https://countriesnow.space/api/v0.1/countries/flag/images'
    );
    const { data } = await res.json();
    return data;
  } catch {
    throw new Error('Could not fetch countries');
  }
}
