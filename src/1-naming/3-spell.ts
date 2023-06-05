// ❌
function insInv() {
  const crtATs = new Date(); // 🤢 read out loud if you dare
  //console.log(crtATs);
}

// ✅
function insertInvoice() {
  // 😏 easy to spot mistakes
  const createdAtTimestamp = new Date();
}
