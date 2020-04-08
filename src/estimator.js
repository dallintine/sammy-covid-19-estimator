const covid19ImpactEstimator = (data) => {
const input = data;
const estimator = chain(
        estiomateCurrentlyInfected,
        estimatePrjectedInfections,

        estmateServereCases,
        estimateBedSpeceAvailability,

        estimateCasesForICU,
        estmateCasesForVentilotors,
        estimateDollarsInFlight
    );
return { data, impact, severeImpact };
    return estimator({
        data,
        impact: {},
        severeImpact: {}
    });
};
export default covid19ImpactEstimator;
