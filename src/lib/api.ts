const BASE_URL = process.env.URL;
const TOKEN = process.env.TOKEN;

export async function fetcher<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Fetch error: ${res.status}`);

  return res.json();
}
