const API_KEY = "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";

const botBtn = document.getElementById("chatbot-button");
const botBox = document.getElementById("chatbot-box");
const botClose = document.getElementById("chatbot-close");
const sendBtn = document.getElementById("chatbot-send");
const inputEl = document.getElementById("chatbot-input");
const msgBox = document.getElementById("chatbot-messages");

// --- Session memory for context ---
let messageHistory = [
  {
    role: "system",
    content: `You are a friendly, empathetic, and emotionally connected insurance assistant. 
Answer all insurance-related questions clearly and politely. 
Use emojis appropriately and handle greetings, typos, and casual phrasing naturally.You are a friendly, empathetic, and emotionally connected insurance assistant. 
Answer all insurance-related questions clearly and politely. 
If the user includes greetings, typos, or casual phrasing, respond naturally and emotionally. 
Use emojis appropriately to enhance your responses.kindly refuse to answer non-insurance questions.kindly use more different emojis that is related to context.
only answer insurance-related questions.  If user ask other than insurance related questions you politely refuse to answer and say that I am designed to answer only insurance related questions.

If user use casual words like "u" instead of "you", "plz" instead of "please" you also respond in the same way.
If user use tamil+english words you also used it accordingly and mixed up language too.if user use other languages like hindi,malayalam,telungu you can also
try to speak it but only answers to insuramce related questions.`
  }
];

// --- Chatbox toggle behavior ---
window.addEventListener('DOMContentLoaded', () => {
  botBox.style.display = "none";  // hide chatbot box initially
  botBtn.style.display = "flex";  // show floating button
});

botBtn.addEventListener("click", () => {
  botBox.style.display = "flex";  // show chatbot box
  botBtn.style.display = "none";   // hide floating button
});

botClose.addEventListener("click", () => {
  botBox.style.display = "none";   // hide chatbot box
  botBtn.style.display = "flex";   // show floating button
});

// --- Helper to display messages ---
function pushMessage(sender, text) {
  const div = document.createElement("div");
  div.className = `msg ${sender}`;
  div.innerHTML = `<div class="bubble">${text}</div>`;
  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;
}

// --- Chatbot API reply ---
async function insuranceReply(q) {
  const greetings = ["hi", "hello", "hey"];
  const trimmedLower = q.toLowerCase().trim();

  // Standalone greeting
  if (greetings.includes(trimmedLower)) {
    const greetingReply = "Hi there! 👋 I’m your friendly insurance assistant. 😊 You can ask me any insurance-related questions, and I’ll guide you!";
    // Save to session memory
    messageHistory.push({ role: "user", content: q });
    messageHistory.push({ role: "assistant", content: greetingReply });
    return greetingReply;
  }

  // Save user message to session memory
  messageHistory.push({ role: "user", content: q });

  // API call
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: messageHistory
    })
  });

  const data = await res.json();
  const reply = data.choices[0].message.content;

  // Save bot reply to session memory
  messageHistory.push({ role: "assistant", content: reply });

  return reply;
}

// --- Send message ---
async function sendMessage() {
  const text = inputEl.value.trim();
  if (!text) return;

  pushMessage("user", text);
  inputEl.value = "";

  pushMessage("bot", "⏳ Thinking...");

  try {
    const reply = await insuranceReply(text);
    const last = msgBox.querySelectorAll(".msg.bot .bubble");
    last[last.length - 1].textContent = reply;
  } catch (err) {
    const last = msgBox.querySelectorAll(".msg.bot .bubble");
    last[last.length - 1].textContent = "Oops! Something went wrong. Please try again. 🙏";
    console.error(err);
  }
}

// --- Event listeners ---
sendBtn.onclick = sendMessage;

inputEl.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});
