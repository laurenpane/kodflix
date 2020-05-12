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
      <Series id="peepShow" name="Peep Show" logo={peepShow} />
      <Series id="downtonAbbey" name="Downton Abbey" logo={downton} />
      <Series id="derryGirls" name="Derry Girls" logo={derryGirls} />
      <Series id="explained" name="Explained" logo={explained} />
      <Series id="louisTheroux" name="Louis Thereoux" logo={louisT} />
      <Series id="sexEducation" name="Sex Education" logo={sexEd} />
    </div>
  );
}
