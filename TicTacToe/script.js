// Beginner-friendly Tic Tac Toe (simple if-else logic)
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Handle a cell click (called from HTML inline onclick)
function handleCellClick(cellIndex) {
   
    if (board[cellIndex] !== '' || !gameActive) {
        return;
    }

    // Update board and UI
    board[cellIndex] = currentPlayer;
    document.getElementById('cell' + cellIndex).textContent = currentPlayer;
    checkWinner();
}

function checkWinner() {
    // Rows
    if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) { announceWinner(); return; }
    if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) { announceWinner(); return; }
    if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) { announceWinner(); return; }

    // Columns
    if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) { announceWinner(); return; }
    if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) { announceWinner(); return; }
    if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) { announceWinner(); return; }

    // Diagonals
    if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) { announceWinner(); return; }
    if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) { announceWinner(); return; }

    // Draw
    if (
        board[0] !== '' && board[1] !== '' && board[2] !== '' &&
        board[3] !== '' && board[4] !== '' && board[5] !== '' &&
        board[6] !== '' && board[7] !== '' && board[8] !== ''
    ) {
        document.getElementById('gameStatus').textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    // Switch player
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
    document.getElementById('gameStatus').textContent = "Player " + currentPlayer + "'s Turn";
}

function announceWinner() {
    document.getElementById('gameStatus').textContent = "Player " + currentPlayer + " Wins!";
    gameActive = false;
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    // Clear cells explicitly (no loops for simplicity)
    document.getElementById('cell0').textContent = '';
    document.getElementById('cell1').textContent = '';
    document.getElementById('cell2').textContent = '';
    document.getElementById('cell3').textContent = '';
    document.getElementById('cell4').textContent = '';
    document.getElementById('cell5').textContent = '';
    document.getElementById('cell6').textContent = '';
    document.getElementById('cell7').textContent = '';
    document.getElementById('cell8').textContent = '';

    document.getElementById('gameStatus').textContent = "Player X's Turn";
}
