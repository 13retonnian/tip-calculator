const tipCalculator = function()
{
 // let billTotal = document.getElementById("bill-total-input").onsubmit
 // billTotal = billTotal.innerText;

  // Assign initial values  
  const billTotal = 40;
  const tipRate = .18;
  const taxRate = 0.05;

  // Calculate tip
  let tax = billTotal * taxRate;
  let billTaxed = billTotal + tax;
  let tip = billTaxed * tipRate;
  let totalBill = billTotal + tax + tip;
  tip = tip.toFixed(2);
  tax = tax.toFixed(2);
  totalBill = totalBill.toFixed(2);
  // Output result with template literals
  
  let tipCalculated = document.getElementById("tip-calculated");
  tipCalculated.innerHTML = `Tip: $${tip} Tax: $${tax} Bill Plus Tax and Tip: $${totalBill}`;
}