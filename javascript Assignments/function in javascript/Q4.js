
// Q4. Write a JavaScript function called calculateTax that takes an income as an argument 
// and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. 
// Test the function with various incomes.

// Income Tax Rates Applicable for FY 2023-24 as per the new regime for HUF and all Individuals
// <₹ 3,00,000 --> No Tax
// ₹ 3,00,001 to ₹ 6,00,000 --> 5%
// ₹ 6,00,001 to ₹ 9,00,000 --> 10%
// ₹ 9,00,001 to ₹ 12,00,000 --> 15%
// ₹ 12,00,001 to ₹ 15,00,000 --> 20%
// >₹ 15,00,000 --> 30%

function calculateTax (income = 0) {
    let tax = 0;
    if (income <= 300000){
        tax = `No tax`;
    }
    else if (income > 300000 && income <= 600000){
        tax = income*(5/100);
    }
    else if (income > 600000 && income <= 900000){
        tax = income*(10/100);
    }
    else if (income > 900000 && income <= 1200000){
        tax = income*(15/100);
    }
    else if (income > 1200000 && income <= 1500000){
        tax = income*(20/100);
    }
    else if (income > 1500000){
        tax = income*(30/100);
    }
    else {
        tax = `Error, Cant calculate tax`;
    }

    if (typeof tax == typeof 3){
        tax = tax.toFixed(1);
    }
    return tax;
}

console.log(calculateTax(250000)); // No tax
console.log(calculateTax(354254)); // 17712.7
console.log(calculateTax(600000)); // 30000.0
console.log(calculateTax(925000)); // 138750.0
console.log(calculateTax(1332569)); // 266513.8
console.log(calculateTax(2505896)); // 751768.8





