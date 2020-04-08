


const covid19ImpactEstimator = (data) => {
const input = data;
impact.currentlyInfected=reportedCases * 10;
impact=currentlyInfected * 512;
severeImpact.currentlyInfected = reportedCases * 50;
severeImpact=currentlyInfected * 512;
return { data, impact, severeImpact };
console.log(covid19ImpactEstimator);
};

const covid19ImpactEstimators = (data) => {
const estimator = chain(
        estiomateCurrentlyInfected,
        estimatePrjectedInfections,
    
        estmateServereCases,
        estimateBedSpeceAvailability,

        estimateCasesForICU,
        estmateCasesForVentilotors,
        estimateDollarsInFlight
    );
    return estimator({
        data,
        impact: {},
        severeImpact: {}
    });
    
};

export default covid19ImpactEstimator;
