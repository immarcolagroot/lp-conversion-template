interface ButtonProps {
    title: string;
    onClick?: () => void;
}

export default function Button({ title }: ButtonProps) {
    return (
        <div className="pt-14 flex justify-center">
            <button className="px-4 py-3 bg-primary bg-opacity-75 rounded-md border border-black hover:bg-opacity-50 transition">
                <span className="text-white text-base font-bold uppercase">
                    {title}
                </span>
            </button>
        </div>
    );
}
