import Image from "next/image";
interface IButtonProps {
  text?: string;
  className?: string;
  Person?: string;
}

export function DialogButton({ className, text, Person }: IButtonProps) {
  return (
    <button
      className={`${className} w-80 bg-Dialog p-3  text-textDialog text-left rounded-md  relative   animate-pulse temporary-bounce`}
    >
      <span className="absolute -top-7 left-4 w-40 bg-person p-2 text-center rounded-md">
        {Person ? Person : "Narrator"}
      </span>
      {text}
      <div className="text-white absolute right-4 bottom-3 animate-bounce">
        <Image src="/chevron-down.svg" height={24} width={24} alt="a" />
      </div>
    </button>
  );
}
