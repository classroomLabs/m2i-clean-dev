class Client {}
// ❌
function client(): Client {
  // 🤢 what are you doing with a client?
  return new Client();
}

function allowed(): boolean {
  // 🤢 are you asking me?
  return false;
}

// ✅
function createClient(): Client {
  // 😏 a verb in a function tells what she does
  return new Client();
}
function isAllowed(): boolean {
  // 😏 is, has, can, must... help reading and understanding
  return true;
}
