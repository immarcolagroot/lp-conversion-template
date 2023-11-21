interface NavButtonProps {
  title: string;
  onClick?: () => void;
}

export default function NavButton({ title }: NavButtonProps) {
  return (
    <button className="text-black opacity-50 text-base font-medium hover:opacity-25">
      {title}
    </button>
  );
}
