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
/**
 *
 * @param hospitalBeds
 * @param casesByTime
 *
 * Takes the number of hospitalBeds and cases by times and
 * return the number of hosipita beds that will be availaible by requested time.
 */
const calcHospitalSpace = (hospitalBeds, casesByTime) => Math.trunc(
  (hospitalBeds * 0.35) - casesByTime
);

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
  const sevCasByReqTim = severeCasesByRequestedTime;
  const hospitalBedsByRequestedTime = calcHospitalSpace(totalHospitalBeds, sevCasByReqTim);
  const calcReqIcuCare = (severe) => (severe * 0.05);
  const calcReqVent = (severe) => (severe * 0.02);
  const casesForICUByRequestedTime = Math.trunc(calcReqIcuCare(infectionsByRequestedTime));
  const casesForVentilatorsByRequestedTime = Math.trun(calcReqVent(infectionsByRequestedTime));
  const infByRT = infectionsByRequestedTime;
  const tInDay = timeInDays;
  const dollerOut = infByRT * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * tInDay;
  const dollarsInFlight = Math.trunc(dollerOut);
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
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
  const sevCasByReqTim = severeCasesByRequestedTime;
  const hospitalBedsByRequestedTime = calcHospitalSpace(totalHospitalBeds, sevCasByReqTim);
  const calcReqIcuCare = (severe) => (severe * 0.05);
  const calcReqVent = (severe) => (severe * 0.02);
  const casesForICUByRequestedTime = Math.trunc(calcReqIcuCare(infectionsByRequestedTime));
  const casesForVentilatorsByRequestedTime = Math.trun(calcReqVent(infectionsByRequestedTime));
  const infByRT = infectionsByRequestedTime;
  const tInDay = timeInDays;
  const dollerOut = infByRT * region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * tInDay;
  const dollarsInFlight = Math.trunc(dollerOut);
  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
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
