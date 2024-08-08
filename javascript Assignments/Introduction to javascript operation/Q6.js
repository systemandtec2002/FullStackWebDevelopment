// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    console.log("BMI:", bmi);
  }
  
  const weightInKg = 40;
  const heightInMeters = 1.75;
  
  calculateBMI(weightInKg, heightInMeters);
  