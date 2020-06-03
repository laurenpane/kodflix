import peepShow from "../Images/peepShow.jpg";
import downtonAbbey from "../Images/downtonAbbey.jpg";
import derryGirls from "../Images/derryGirls.jpg";
import explained from "../Images/explained.jpg";
import louisThereoux from "../Images/louisThereoux.jpg";
import sexEducation from "../Images/sexEducation.jpg";

export default function getGallery() {
  return [
    {
      id: "peepShow",
      name: "Peep Show",
      description:
        "Genius dry British sitcom starring David Mitchell and Robert Webb",
      click: "Click to read more",
      logo: peepShow,
      info:
        'Follow the lives of Mark Corrigan and Jeremy "Jez" Usbourne, two dysfunctional friends who met at the fictional Dartmouth University and now share a flat in Croydon, South London.',
      link: "Back to homepage",
    },
    {
      id: "downtonAbbey",
      name: "Downton Abbey",
      description:
        "Thrilling period drama starring Hugh Bonneville and Maggie Smith",
      click: "Click to read more",
      logo: downtonAbbey,
      info:
        "Take a journey back in time to post-Edwardian Yorkshire, and follow the lives of the lovable aristocratic Crawley family. Watch as they and their domestic servants endure heartbreak, joy and experience great historical events which in turn affect their lives and the British social hierarchy.",
      link: "Back to homepage",
    },
    {
      id: "derryGirls",
      name: "Derry Girls",
      description:
        "Hilarious British sitcom starring Saoirse-Monica Jackson and Jamie-Lee O'Donnell",
      click: "Click to read more",
      logo: derryGirls,
      info:
        "Watch Erin, Orla, Clare, Michelle and Michelle's English cousin James live out their teenagehood during the end of the Troubles in Derry, where they all attend a Catholic girls' secondary school.",
      link: "Back to homepage",
    },
    {
      id: "explained",
      name: "Explained",
      description:
        "Fascinating American docu-series, narrated by celebrities such as Jerry Springer and Kristen Bell",
      click: "Click to read more",
      logo: explained,
      info:
        "Dig into the deeper issues with this intriguing, well-researched series. Listen as various celebrity narrators present 20-minute episodes tackling topics that aren't generally part of the daily news cycle, including cryptocurrency, why women are paid less, and astrology.",
      link: "Back to homepage",
    },
    {
      id: "louisThereoux",
      name: "Louis Theroux",
      description:
        "Award-winning documentaries from acclaimed journalist/broadcaster Louis Theroux",
      click: "Click to read more",
      logo: louisThereoux,
      info:
        "Watch as award-winning journalist Louis Theroux investigates some of the world's most controversial subcultures, such as scientology, white supremacy, and pornography. Theroux immerses himself in these lifestyles, typically by living amongst those at the forefront, in turn subtly exposing the contradictions and flaws in the beliefs that frame their lives.",
      link: "Back to homepage",
    },
    {
      id: "sexEducation",
      name: "Sex Education",
      description:
        "Heartwarming British comedy starring Gillian Anderson and Asa Butterfield",
      click: "Click to read more",
      logo: sexEducation,
      info:
        "Go back to school with Otis, Eric, Maeve and their curious classmates as they navigate their way through teenage sex and relationships. Otis' mother, Jean Milburn, is a licensed sex therapist, and through a series of bizarre events, Otis himself becomes a paid sex therapist for his high school peers, despite being just as clueless as the rest of them.",
      link: "Back to homepage",
    },
  ];
}
