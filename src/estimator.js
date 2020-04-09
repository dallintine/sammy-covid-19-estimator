const covid19ImpactEstimator = (data) => data;
export const impactCases = (data) => {
    const{
        periodType,
        timeToElapse,
        reportedCases,
        totalHospitalBeds,
        region
    } = data;
    const currentlyInfected = reportedCases * 10;
    const timeInDays = convertToDays(periodType, timeToElapse);
    const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(timeInDays / 3));
    const severCasesByRequestedTime = Math.floor(totalHospitalBeds * 0.35);
    const hospitalBedsAvailable = Math.floor(totalHospitalBeds * 0.35);
    const hospitalBedsByResquestedTime = hospitalBedsAvailable - severCasesByRequestedTime;
    const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
    const casesForVentilatorByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
    const dollerOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
    const toTwoDecimal = dollerOut.toFixed(2);
    const dollersInFlight = Number(toTwoDecimal);

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

export const severeImpactCases = (data) =>{
    const {
        periodType,
        timeToElapse,
        reportedCases,
        totalHospitalBeds,
        region
    } = data;
    const currentlyInfected = reportedCases * 50;
    const timeInDays = convertToDays(periodType, timeToElapse);
    const infectionsByRequestedTime = currentlyInfected * (2 ** Math.floor(timeInDays / 3));
    const severCasesByRequestedTime = Math.floor(totalHospitalBeds * 0.35);
    const hospitalBedsAvailable = Math.floor(totalHospitalBeds * 0.35);
    const hospitalBedsByResquestedTime = hospitalBedsAvailable - severCasesByRequestedTime;
    const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);
    const casesForVentilatorByRequestedTime = Math.floor(infectionsByRequestedTime * 0.02);
    const dollerOut = region.avgDailyIncomePopulation * region.avgDailyIncomeInUSD * timeInDays;
    const toTwoDecimal = dollerOut.toFixed(2);
    const dollersInFlight = Number(toTwoDecimal);

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
const covid19ImpactEstimator = (data) =>  
{
    {
    data,
    impact; impactCases(data),
    severeImpact; severeImpactCases(data)
   }
};

export default covid19ImpactEstimator;
