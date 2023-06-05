// ❌
// 🤢 a bad naming reminder
const customers = getCustomers();
const customersLength = getCustomers.length;

for (let i = 0; i < customersLength; i++) {
  // 🤢 what was cs meaning
  console.log("send invoices to", customers[i]);
}

customers.forEach((c) => console.log("send invoices to", c));

function getCustomers() {
  return [];
}
