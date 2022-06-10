import './Cell.css';
interface CellProps {
    num: number;
    prime: boolean;
}

function Cell({num, prime}: CellProps) {
    return (
        prime ? (
            <td className="prime">
                {num}
            </td>
        )
        : (
        <td>
            {num}
        </td>
        )
    );
}

Cell.defaultProps = {
    prime: false
};

export default Cell;