'use client'

import React from "react";
import useWindowWidth from "@/hooks/useWindowDimension";
import Cardinfomobile from "./Cardinfomobile";
import Cardinfotablet from "./Cardinfotablet";
import Cardinfodesktop from "./Cardinfodesktop";
import Loading from '@/app/[locale]/loading';

const Cardinfo = (props) => {
  const cardinfo = props.cardinfo;
  const cardfeatures = props.cardfeatures;
  const carddescriptions = props.carddescriptions;

  const windowWidth = useWindowWidth();

  return (
    <section>
      {windowWidth === 0 ? <Loading /> : <div>
        {windowWidth < 1048 ? (
          <div>
            {windowWidth < 664 ? (
              <Cardinfomobile cardinfo={cardinfo} cardfeatures={cardfeatures} carddescriptions={carddescriptions} />
            ) : (
              <Cardinfotablet cardinfo={cardinfo} cardfeatures={cardfeatures} carddescriptions={carddescriptions} />
            )}
          </div>
        ) : (
          <Cardinfodesktop cardinfo={cardinfo} cardfeatures={cardfeatures} carddescriptions={carddescriptions} />
        )}
      </div>}
    </section>
  );
};

export default Cardinfo;