const convertToDays = (data) => data;
const impactCases = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;
  const currentlyInfected = reportedCases * 10;
  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.trunc(timeInDays / 3));
  const severCasesByRequestedTime = Math.trunc(totalHospitalBeds * 0.35);
  const hospitalBedsAvailable = Math.trunc(totalHospitalBeds * 0.35);
  const hospitalBedsByResquestedTime = hospitalBedsAvailable - severCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  const dollerOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
  const dollersInFlight = dollerOut.toFixed(2);


  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severCasesByRequestedTime,
    hospitalBedsByResquestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorByRequestedTime,
    dollersInFlight
  };
};

const severeImpactCases = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;
  const currentlyInfected = reportedCases * 50;
  const timeInDays = convertToDays(periodType, timeToElapse);
  const infectionsByRequestedTime = currentlyInfected * (2 ** Math.trunc(timeInDays / 3));
  const severCasesByRequestedTime = Math.trunc(totalHospitalBeds * 0.35);
  const hospitalBedsAvailable = Math.trunc(totalHospitalBeds * 0.35);
  const hospitalBedsByResquestedTime = hospitalBedsAvailable - severCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  const dollerOut = region.avgDailyIncomePopultion * region.avgDailyIncomeInUSD * timeInDays;
  const dollersInFlight = dollerOut.toFixed(2);


  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severCasesByRequestedTime,
    hospitalBedsByResquestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorByRequestedTime,
    dollersInFlight
  };
};

const covid19ImpactEstimator = (data) => {
  const impact = impactCases(data);
  const severeImpact = severeImpactCases(data);
  return {
    data,
    impact,
    severeImpact
  };
};
export default covid19ImpactEstimator;
