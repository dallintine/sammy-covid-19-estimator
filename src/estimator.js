const covid19ImpactEstimator = (data) => {
const input = data;
return { data, impact, severeImpact };
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
