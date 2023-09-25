function calculateNetSalary(basicSalary, benefits) {
    // Define tax rates and thresholds (replace with actual values)
    const taxRate = 0.2; // Example: 20%
    const nhifRate = 0.05; // Example: 5%
    const nssfRate = 0.1; // Example: 10%
    const nssfThreshold = 20000; // Example: NSSF threshold amount
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    
    // Calculate payee (tax)
    let payee = 0;
    // Replace these threshold values with the actual ones
    if (grossSalary > 30000) {
      payee = (grossSalary - 30000) * taxRate;
    }
    
    // Calculate NHIF deduction
    const nhifDeduction = grossSalary * nhifRate;
    
    // Calculate NSSF deduction
    const nssfDeduction = Math.min(grossSalary * nssfRate, nssfThreshold);
    
    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
    
    return {
      grossSalary,
      payee,
      nhifDeduction,
      nssfDeduction,
      netSalary,
    };
  }
  
  // Example usage:
  const basicSalary = 30000; // Replace with actual basic salary
  const benefits = 5000; // Replace with actual benefits
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  // Display the salary details
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.payee);
  console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
  console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
  console.log("Net Salary:", salaryDetails.netSalary);
  