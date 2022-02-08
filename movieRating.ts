//function takes array of reviews(1-5) & returns bad movie indices
//according to standard set in input
function movieRating(standard: number, ratings: number[][]): number[] {
    const review: number[]=[];
    for(let i= 0; i < ratings.length; i++) {
        let total = 0;
    ratings[i].forEach((rating: number) => {total += rating; });
    if (total/ratings[i].length < standard) {
        review.push(i);}}
    return review;
}
console.log(movieRating(3.3,[[3, 4], [3, 3, 3, 4], [4],[2,2,3,1]]))
