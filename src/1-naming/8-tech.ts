// ❌
function getEmployeeArray(paramCompanyNameString: string) {
  // 🤢 too much technique and little business
  return findInMongo(paramCompanyNameString);
}
function findInMongo(searchTerm: string) {
  console.log("findInMongo", searchTerm);
}
