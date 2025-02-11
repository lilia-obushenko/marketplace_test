import Image from "next/image";
import React from "react";

interface ReviewsProps {
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <div className="bg-[#F4F4F4] w-full flex gap-[16px] flex-wrap p-[15px] justify-start rounded-[10px]">
      {reviews.map((review, i) => (
        <div
          className="bg-white p-[15px] lg:basis-[48%] w-full rounded-[10px]"
          key={review.comment + i}
        >
          <div className="flex mb-[8px]">
            {Array.from(
              { length: review.rating ?? 0 },
              (_, index) => index + 1
            ).map((el) => (
              <Image
                src="/assets/icons/full_star.svg"
                alt="Star"
                width={15}
                height={15}
                key={el}
              />
            ))}
          </div>

          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
