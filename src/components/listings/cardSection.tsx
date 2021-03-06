import React from "react";
import Link from "next/link";

import { Card } from "../utils/itemCard";
import { uselistings } from "../../contexts/listings-Context";

const CardSection = ({ mapView }) => {
  const { state } = uselistings();

  return (
    <div className={!mapView ? "cardsWrapper" : "hidden"}>
      {state.listings.map((item) => {
        return (
          <div className="md:px-3 mt-3 md:mt-5 mx-auto md:mx-0 first:mt-24 md:first:mt-5 last:pb-40">
            <Link href="">
              <a>
                <Card
                  baths={item.properties.baths}
                  beds={item.properties.beds}
                  imageSrc={item.properties.image}
                  itemLocation={item.properties.address}
                  itemName={item.properties.name}
                  itemPrice={item.properties.price}
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
