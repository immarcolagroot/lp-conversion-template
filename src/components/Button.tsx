interface ButtonProps {
    title: string;
    onClick?: () => void;
    border?: string;
}

export default function Button({ title, border = 'white' }: ButtonProps) {
    return (
        <button className={`px-4 py-3 bg-primary bg-opacity-75 rounded-md border border-${border} hover:bg-opacity-50 transition`}>
            <span className="text-white text-base font-bold uppercase">
                {title}
            </span>
        </button>
    );
}
