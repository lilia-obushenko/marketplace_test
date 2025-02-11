import Image from "next/image";

export interface BuyButtonProps {
  disabled?: boolean;
  textSize?: string;
  onClick: () => void;
}

export const BuyButton = ({ onClick, disabled }: BuyButtonProps) => {
  const addToCartClasses = `w-full text-md font-semibold flex items-center justify-center p-2 rounded-full border-[2px] border-[#424530]
    uppercase gap-[5px] custom-hover-effect transition-all ease-in-out active:bg-[#3C3E3B]
    ${
      disabled
        ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
        : "hover:bg-[#8B9280] hover:text-white border-[#8B9280]"
    }
  `;

  return (
    <button
      className={addToCartClasses}
      onClick={!disabled ? onClick : () => null}
      disabled={disabled}
    >
      Buy
      <Image
        src="/assets/icons/shopping.svg"
        alt="Shopping bag"
        height={18}
        width={18}
      />
    </button>
  );
};
