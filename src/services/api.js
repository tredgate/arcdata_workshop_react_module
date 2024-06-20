/**
 * Fetch users from the jsonplaceholder API (https://jsonplaceholder.typicode.com/users) - it is a fake online REST API for testing and prototyping.
 * @returns {Promise} - A promise that resolves to the users data.
 */
export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}
