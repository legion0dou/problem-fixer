const calculateNetSalary = require("./calculateNetSalary");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter basic salary: ", (basicSalary) => {
  rl.question("Enter benefits: ", (benefits) => {
    const salaryDetails = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));

    // Display the salary details
    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("Payee (Tax):", salaryDetails.payee);
    console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
    console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
    console.log("Net Salary:", salaryDetails.netSalary);
    rl.close();
  });
});
