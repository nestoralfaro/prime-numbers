import Cell from "./Cell";

interface Grid {
    rows?: number;
    cols?: number;
}

function PrimeTable(props: Grid) {
    const numbers: number[][] = [];
    //Default to 10 * 10 table
    const rows: number = props.rows || 10;
    const cols: number = props.cols || 10;
    let digit: number = 1;
    
    const isPrime: Function = (n: number) => {
        //starting at 2 because we are interested in range (1, sqrt(n)]
        //i.e., numbers between 1 exclusive to the squre root of n inclusive
        //Given that lim = the floor of the number's square root
        //Every number after lim should be a factor from the range mentioned previously.
        //Therefore, we can just ignore them. Getting the floor for uneven numbers.
        for (let i: number = 2, lim: number = Math.floor(Math.sqrt(n)); i <= lim; ++i)
            //check if the numbers between 1 and n are divisible by n
            //if so, then it is NOT a prime number
            if (n % i === 0) return false;
        //The number is prime if it is divisible by itself and 1, hence just ignore 1
        return n > 1;
    }

    //Dynamically generate a rows * cols array
    for (let row: number = 0; row < rows; ++row) {
        numbers[row] = [];
        for (let col: number = 0; col < cols; ++col) {
            numbers[row][col] = digit;
            ++digit;
        }
    }

    return (
        <table className="numbers">
            <tbody>
                {
                    //for each row
                    numbers.map((row: number[]) =>
                        <tr>
                            {
                                //for each number
                                row.map((n: number) =>
                                    isPrime(n) ?
                                    <Cell num={n} prime={true}/>
                                    : <Cell num={n}/>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default PrimeTable;