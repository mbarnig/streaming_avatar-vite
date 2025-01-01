async function fetchAccessToken(): Promise<string> {
  const response = await fetch('/api/get-access-token');
  const { token } = await response.json();
  return token;
}
