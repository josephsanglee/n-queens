/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var obj = {};
  obj.n = n;
  var board = new Board(obj);
  var matrix = board.rows();
  
  var result;

  // matrix.forEach(function(row, rowIndex) {

  var helper = function(matrix, depth) {
    for (var i = 0; i < matrix.length; i++) {
      var row = matrix[i];

      for (var j = 0; j < row.length; i++) {
        var temp = JSON.parse(JSON.stringify(matrix));
        // debugger;
        temp[i][j] = 1;
        temp;

        var tempBoard = new Board(temp);
        if (depth === n && !tempBoard.hasAnyRowConflicts() && !tempBoard.hasAnyColConflicts()) { // no conflicts
          console.log(temp, "temp", n, "n");
          return temp;
        }
        // results = results.concat(temp);
        
      }
    }
  };

  result = helper(matrix, n);

  solution = undefined;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log("about to return for", n)
  return result;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
