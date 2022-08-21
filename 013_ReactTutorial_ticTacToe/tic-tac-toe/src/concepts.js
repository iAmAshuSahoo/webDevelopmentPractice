// Data change with Mutation

var player = {
    score: 1,
    name: "Kami"
}

player.score = 2

// Data change withOUT MUTATION

var student = {
    rollNo: 1,
    name: "Ayush"
}

var newStudent = Object.assign({}, student, {rollNo: 2});
var newStudent1 = {...student, rollNo: 2};


// The end result is the same but by not mutating (or changing the underlying data) directly, 
// we gain several benefits