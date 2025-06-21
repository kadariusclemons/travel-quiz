export async function sendQuestion(question) {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    return data.answer || "Sorry, I couldn't get an answer.";
  } catch (err) {
    console.error(err);
    return "Error fetching answer.";
  }
}
