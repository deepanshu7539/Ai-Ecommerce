import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "149",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "Organize Basic Set (Walnut)",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "Organize Pen Holder",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "15",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "Organize Sticky Note Holder",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "Organize Phone Holder",
    href: "#",
  },
  // Add more products as needed
];

function Crouser({ isChatboxOpen }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="mx-auto w-[70vw] px-4 sm:px-6 lg:px-8  mt-4 container p-4 transition-all duration-300 -z-50 ">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="mx-auto h-[20vh]"
            />
            <div className="text-center mt-4 ">
              <h3 className="text-lg font-medium">{product.name}</h3>
              {/* <div className="flex items-center justify-center mt-2">
                <span className="text-gray-600">${product.price}</span>
                <div className="flex ml-2">
                  {Array.from({ length: product.rating }, (_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">
                  {product.reviewCount} reviews
                </span>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Crouser;
