import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const GRID_LENGTH = 3;
let turn = 'X';

const Game = () => {
  const [grid, setGrid] = useState([]);
  const [board, setIndexBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [won, setWon] = useState(null);

  const initializeGrid = () => {
    const tempGrid = [];
    for (let colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {
      const tempArray = [];
      for (let rowidx = 0; rowidx < GRID_LENGTH; rowidx++) {
        tempArray.push(0);
      }
      tempGrid.push(tempArray);
    }
    setGrid(tempGrid);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const setBoard = (index, colIdx, rowIdx) => {
    if(grid[colIdx][rowIdx] === 0 && !won){
      let newGrid = grid;
      let newBoard = board;
      const marked = 3 * colIdx + rowIdx;
      let value = xIsNext ? 1 : 2;
      newBoard[marked] = value;
      newGrid[colIdx][rowIdx] = value;
      setIndexBoard(newBoard);
      setXisNext(!xIsNext);
      setGrid(newGrid);
    }
    if(calculateWinner(board)){
      setWon(calculateWinner(board));
    }
  }

  const setReset = () => {
    initializeGrid();
    setIndexBoard(Array(9).fill(null));
    setWon(null);
  }

  const getBox = (index, colIdx, rowIdx) => {
    let backgroundColor = 'red';
    const sum = colIdx + rowIdx;
    if (sum % 2 === 0) {
      backgroundColor = 'blue';
    }
    const gridValue = grid[colIdx][rowIdx];
    let content = '-';
    if (gridValue === 1) {
      content = 'X';
    } else if (gridValue === 2) {
      content = 'O';
    }
    return (
      <View key={index} styles={{...styles.boxStyle, backgroundColor, alignSelf: 'center' }}>
        <Text style={{ 
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 30,
          width: 100,
          height: 100,
          borderColor: 'black',
          borderWidth: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
        onPress={() => setBoard(index, colIdx, rowIdx)}
        >{content}</Text>
      </View>
    );
  };

  const getRow = (row, colIdx) => {
    return row.map((item, index) => {
      return getBox(index, colIdx, index);
    });
  };

  const getColumns = () => {
    return grid.map((row, index) => {
      return (
        <View style={styles.rowStyle} key={index}>
          {getRow(row, index)}
        </View>
      );
    });
  };

  const renderMainGrid = () => {
    return (
      <View style={{display: 'flex'}}>
        {won && <Text style={{ color: 'red', fontSize: 30, marginBottom: 40, }}>Hurray! {won === 1 ? "X" : "0" } Won </Text>}
        <View style={styles.columnsStyle}>{getColumns()}</View>
        <Button
          onPress={setReset}
          title="Reset"
          color="#841584"
        />
      </View>
    );
  };

  useEffect(() => {
    initializeGrid();
  }, []);

  if (grid.length === 0) {
    return <Text> initializing </Text>;
  }
  return renderMainGrid();
};

const styles = StyleSheet.create({
  columnsStyle: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  boxStyle: {width: 100, height: 100},
});

export default Game;
