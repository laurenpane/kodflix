import React from "react";
import peepShow from "../Images/peepShow.jpg";
import downton from "../Images/downton.jpg";
import derryGirls from "../Images/derryGirls.jpg";
import explained from "../Images/explained.jpg";
import louisT from "../Images/louisT.jpg";
import sexEd from "../Images/sexEd.jpg";
import Series from "../Series/Series.js";

export default function SeriesGallery() {
  return (
    <div className="container">
      <Series name="Peep Show" logo={peepShow} />
      <Series name="Downton Abbey" logo={downton} />
      <Series name="Derry Girls" logo={derryGirls} />
      <Series name="Explained" logo={explained} />
      <Series name="Louis Thereoux" logo={louisT} />
      <Series name="Sex Education" logo={sexEd} />
    </div>
  );
}
