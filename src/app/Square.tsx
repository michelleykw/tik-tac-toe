'use client';

export default function Square({ value, onSquareClick } : SquareProps) {
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

interface SquareProps {
    value: String | null;
    onSquareClick: (params: any) => void;
}