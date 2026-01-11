let customers = [];

const coverageSlider = document.getElementById("coverage");
const coverageValue = document.getElementById("coverageValue");

/* Show slider value live */
coverageSlider.addEventListener("input", () => {
  coverageValue.textContent = coverageSlider.value;
});

/* Premium calculation function */
function calculatePremium(age, policyType, coverage) {
  let basePremium = 0;

  if (policyType === "Health") basePremium = 3000;
  else if (policyType === "Life") basePremium = 5000;
  else if (policyType === "Vehicle") basePremium = 2000;

  if (age > 45) {
    basePremium += basePremium * 0.2;
  }

  return basePremium + (coverage * 500);
}

/* Form submit */
document.getElementById("customerForm").addEventListener("submit", e => {
  e.preventDefault();

  const customer = {
    name: cname.value,
    age: Number(age.value),
    policyType: policy.value,
    coverage: Number(coverage.value),
    premium: calculatePremium(age.value, policy.value, coverage.value)
  };

  customers.push(customer);
  renderTable();
  e.target.reset();
  coverageValue.textContent = "1";
});

/* Render customer table */
function renderTable() {
  tableBody.innerHTML = customers.map(c => `
    <tr>
      <td class="border p-2">${c.name}</td>
      <td class="border p-2">${c.age}</td>
      <td class="border p-2">${c.policyType}</td>
      <td class="border p-2">${c.coverage}L</td>
      <td class="border p-2">₹${c.premium}</td>
    </tr>
  `).join("");
}
