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

  return matrix;
};

window.solutionsFinder = function(board, n, method, depth = 0) {
  if (depth === n) {
    return 1;
  }
  
  var count = 0;

  for (var colIndex = 0; colIndex < n; colIndex++) {
    board.togglePiece(depth, colIndex);
    
    if (!board[method]()) {
      count += solutionsFinder(board, n, method, depth + 1);
    } 

    board.togglePiece(depth, colIndex);
  }
  
  return count;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});

  var nRooksSolutions = solutionsFinder(board, n, 'hasAnyRooksConflicts');
  return nRooksSolutions;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var result = JSON.stringify(board.rows());
  //finds a single solution, not multiple
  var solutionFinder = function(depth) {
    depth = depth || 0;

    if (depth === n) {
      result = JSON.stringify(board.rows());
      return;
    } else {
      for (var colIndex = 0; colIndex < n; colIndex++) {
        board.togglePiece(depth, colIndex);
        
        if (!board.hasAnyQueensConflicts()) {
          solutionFinder(depth + 1);
        }

        board.togglePiece(depth, colIndex);
      }
    }
  };

  solutionFinder();
  var solution = JSON.parse(result);


  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var nQueensSolutions = solutionsFinder(board, n, 'hasAnyQueensConflicts');
  
  return nQueensSolutions;
};
