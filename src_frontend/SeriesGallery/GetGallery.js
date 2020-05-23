import peepShow from "../Images/peepShow.jpg";
import downton from "../Images/downton.jpg";
import derryGirls from "../Images/derryGirls.jpg";
import explained from "../Images/explained.jpg";
import louisT from "../Images/louisT.jpg";
import sexEd from "../Images/sexEd.jpg";

export default function getGallery() {
  return [
    {
      id: "peepShow",
      name: "Peep Show",
      logo: peepShow,
      info:
        'Follow the lives of Mark Corrigan and Jeremy "Jez" Usbourne, two dysfunctional friends who met at the fictional Dartmouth University and now share a flat in Croydon, South London.',
      link: "Back to homepage",
    },
    {
      id: "downtonAbbey",
      name: "Downton Abbey",
      logo: downton,
      info:
        "Take a journey back in time to post-Edwardian Yorkshire, and follow the lives of the lovable aristocratic Crawley family. Watch as they and their domestic servants endure heartbreak, joy and experience great historical events which in turn affect their lives and the British social hierarchy.",
      link: "Back to homepage",
    },
    {
      id: "derryGirls",
      name: "Derry Girls",
      logo: derryGirls,
      info:
        "Watch Erin, Orla, Clare and Michelle, and Michelle's English cousin James navigate their teen years during the end of the Troubles in Derry, where they all attend a Catholic girls' secondary school.",
      link: "Back to homepage",
    },
    {
      id: "explained",
      name: "Explained",
      logo: explained,
      info:
        "Dig deeper into topical issues from this docuseries, which features short 20-minute episodes that tackle topics, questions and ideas that aren't often part of the daily news cycle, including cryptocurrency, why women are paid less, and astrology.",
      link: "Back to homepage",
    },
    {
      id: "louisThereoux",
      name: "Louis Thereoux",
      logo: louisT,
      info:
        "Watch award-winning journalist Louis Theroux investigate some of the world's most controversial subcultures, such as survivalists, white supremacists, and porn stars, as he immerses himself in their lifestyle by living amongst them, as he subtly exposes the contradictions and flaws in their beliefs.",
      link: "Back to homepage",
    },
    {
      id: "sexEducation",
      name: "Sex Education",
      logo: sexEd,
      info:
        "Follow the lives of Otis, Eric, Maeve and their curious classmates as they navigate their way through teenagehood. Otis' mother, Jean Milburn, is a sex therapist, and through a series of events, Otis becomes a paid sex therapist in school for his fellow high students, despite being just as clueless as te rest of them.",
      link: "Back to homepage",
    },
  ];
}
