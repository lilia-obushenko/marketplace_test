import Image from "next/image";

interface PaginationProps {
  totalPages?: number;
  selectedPage?: number;
  onPageSelect?: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  selectedPage,
  onPageSelect,
}: PaginationProps) => {
  if (!selectedPage || !onPageSelect) return null;

  const handleNext = () => {
    onPageSelect(selectedPage + 1);
  };

  const handlePrev = () => {
    onPageSelect(selectedPage - 1);
  };

  return (
    <div className="flex justify-center">
      <div className="flex gap-[30px] items-center">
        <button
          className="rounded-[8px] px-[15px] py-[5px]"
          disabled={selectedPage === 1}
          onClick={handlePrev}
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            alt="arrow"
            width={25}
            height={25}
          />
        </button>
        <div className="flex items-center gap-[12px]">
          {Array.from({ length: totalPages ?? 0 }, (_, index) => index + 1).map(
            (item) => (
              <button
                key={item}
                className={`${
                  selectedPage === item ? "bg-[#424530] text-white" : ""
                } rounded-[8px] py-[5px] px-[15px] hover:bg-[#6B6A53]
                hover:text-white transition-all`}
                onClick={() => onPageSelect(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
        <button
          className="rounded-[8px] px-[15px] py-[5px]"
          disabled={selectedPage === totalPages}
          onClick={handleNext}
        >
          <Image
            src="/assets/icons/arrow-left.svg"
            alt="arrow"
            width={25}
            height={25}
            className="rotate-[180deg]"
          />
        </button>
      </div>
    </div>
  );
};
