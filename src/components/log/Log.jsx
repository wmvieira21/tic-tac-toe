export default function Log({ entries }) {


    return (
        <div id='log'>
            <h3>Game log:</h3>
            <ul>
                {entries.map((entry, index) => {
                    const { square, player } = entry;
                    const { rowIndex, cellIndex } = square;
                    return <li key={index}>Player {player} played: on row: {rowIndex} collumn {cellIndex}</li>;
                }
                )}
            </ul>
        </div>
    );
}