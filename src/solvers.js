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
  var board = new Board({n: n});
  var matrix = board.rows();
  //MVP!
  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matrix));
  console.log('about to return for', n);

  return matrix;
};

var solutionsFinder = function(board, depth, n, type) {
  var count = 0;

  if (depth === n) {
    count++;
  } else {
    for (var colIndex = 0; colIndex < n; colIndex++) {
      board.togglePiece(depth, colIndex);
      
      if (type === 'rooks' && !board.hasAnyRooksConflicts()) {
        count += solutionsFinder(board, depth + 1, n, 'rooks');
      } else if (type === 'queens' && !board.hasAnyQueensConflicts()) {
        count += solutionsFinder(board, depth + 1, n, 'queens');
      }

      board.togglePiece(depth, colIndex);
    }
  }

  return count;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  //helper function defined outside of this function to abstract the code to work with both rooks and queens
  var count = solutionsFinder(board, 0, n, 'rooks');

  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var count = 0;

  var helper = function(depth) {

  };

  // var count = solutionsFinder(board, 0, n, 'queens');

  console.log('Number of solutions for ' + n + ' queens:', count);
  return count;
};
