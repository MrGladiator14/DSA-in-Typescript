//function takes in ride time and miles, cost/min,
//and generates array of estimated fares
function fareEstimator(ride_time:number,ride_dist:number, cost_per_min:number[], cost_per_mile:number[]) :number[]{
    const fare: number[]=[];
    for(let i=0;i<cost_per_mile.length;i++){
        fare.push(ride_time*cost_per_min[i]+ride_dist*cost_per_mile[i]);
    }
    return fare;
}
console.log(fareEstimator(30,12,[0.2,0.35,0.4,0.45],[1,1.8,2.3,3.5]));



