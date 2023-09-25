function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const pointsThresholdForSuspension = 12;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / 5);
  
      if (demeritPoints > pointsThresholdForSuspension) {
        console.log("License suspended");
      } else {
        console.log(`Points: ${demeritPoints}`);
      }
    }
  }
  
  // Example usage:
  const carSpeed = 80;
  speedDetector(carSpeed);

  