const convertMonthsToDays = (months) => months * 30;

/**
 *
 * @param weeks
 *
 * Takes the number of weeks anc converts it to days
 */
const convertWeeksToDays = (weeks) => weeks * 7;

/**
 *
 * @param periodType
 * @param timeToElapse
 *
 * Takes the periodType and the timeToElapse and returns the days equivalent.
 */
const convertToDays = (periodType, timeToElapse) => {
  switch (periodType) {
    case 'months':
      return convertMonthsToDays(timeToElapse);
    case 'weeks':
      return convertWeeksToDays(timeToElapse);
    default:
      return timeToElapse;
  }
};

const impactCases = (data) => {
  const {
    periodType,
    timeToElapse,
    reportedCases,
    totalHospitalBeds,
    region
  } = data;
  const currentlyInfected = reportedCases * 10;
  const timeInDays = Math.trunc(convertToDays(periodType, timeToElapse) / 3);
  const infectionsByRequestedTime = Math.trunc(currentlyInfected * (2 ** timeInDays));
  const severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
  const hospitalBedsAvailable = Math.trunc(totalHospitalBeds * 0.35);
  const hospitalBedsByRequestedTime = hospitalBedsAvailable - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  const infByRT = infectionsByRequestedTime;
  const tInDay = timeInDays;
  const dollerOut = infByRT * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * tInDay;
  const dollersInFlight = Math.trunc(dollerOut);
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
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
  const timeInDays = Math.trunc(convertToDays(periodType, timeToElapse) / 3);
  const infectionsByRequestedTime = Math.trunc(currentlyInfected * (2 ** timeInDays));
  const severeCasesByRequestedTime = Math.trunc(0.15 * infectionsByRequestedTime);
  const hospitalBedsAvailable = Math.trunc(totalHospitalBeds * 0.35);
  const hospitalBedsByRequestedTime = hospitalBedsAvailable - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.05);
  const casesForVentilatorByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.02);
  const infByRT = infectionsByRequestedTime;
  const tInDay = timeInDays;
  const dollerOut = infByRT * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * tInDay;
  const dollersInFlight = Math.trunc(dollerOut);
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
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
