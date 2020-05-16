import peepShow from "../Images/peepShow.jpg";
import downton from "../Images/downton.jpg";
import derryGirls from "../Images/derryGirls.jpg";
import explained from "../Images/explained.jpg";
import louisT from "../Images/louisT.jpg";
import sexEd from "../Images/sexEd.jpg";

export default function getGallery() {
  return [
    { id: "peepShow", name: "Peep Show", logo: peepShow },
    { id: "downtonAbbey", name: "Downton Abbey", logo: downton },
    { id: "derryGirls", name: "Derry Girls", logo: derryGirls },
    { id: "explained", name: "Explained", logo: explained },
    { id: "louisThereoux", name: "Louis Thereoux", logo: louisT },
    { id: "sexEducation", name: "Sex Education", logo: sexEd },
  ];
}
