


const covid19ImpactEstimator = (data) => data; 
{
const input = data;
return{
    data: input,
    impact: {
        currentlyInfected: reportedCases * 10,
        infectionsByRequestedTime: currentlyInfected * 1024
    },
    severeImpact: {
        currentlyInfected: reportedCases * 50,
        infectionsByRequestedTime: currentlyInfected * 1024
    }
};
// impact.currentlyInfected=reportedCases * 10;
// impact=currentlyInfected * 512;
// severeImpact.currentlyInfected = reportedCases * 50;
// severeImpact=currentlyInfected * 512;
// return { data, impact, severeImpact };
// console.log(data);
// };

// const covid19ImpactEstimators = (data) => {
// const estimator = chain(
//         estiomateCurrentlyInfected,
//         estimatePrjectedInfections,
    
//         estmateServereCases,
//         estimateBedSpeceAvailability,

//         estimateCasesForICU,
//         estmateCasesForVentilotors,
//         estimateDollarsInFlight
//     );
//     return estimator({
//         data,
//         impact: {},
//         severeImpact: {}
//     });
    
};

export default covid19ImpactEstimator;
