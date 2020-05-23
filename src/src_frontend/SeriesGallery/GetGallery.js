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
      description:
        "Dry British sitcom starring David Mitchell and Robert Webb.",
      click: "Click here to find out more",
      logo: peepShow,
      info:
        'Follow the lives of Mark Corrigan and Jeremy "Jez" Usbourne, two dysfunctional friends who met at the fictional Dartmouth University and now share a flat in Croydon, South London.',
      link: "Back to homepage",
    },
    {
      id: "downtonAbbey",
      name: "Downton Abbey",
      description:
        "Thrilling period drama starring Hugh Bonneville, Maggie Smith and Michelle Dockery.",
      click: "Click here to find out more",
      logo: downton,
      info:
        "Take a journey back in time to post-Edwardian Yorkshire, and follow the lives of the lovable aristocratic Crawley family. Watch as they and their domestic servants endure heartbreak, joy and experience great historical events which in turn affect their lives and the British social hierarchy.",
      link: "Back to homepage",
    },
    {
      id: "derryGirls",
      name: "Derry Girls",
      description:
        "Hilarious British sitcom starring Saoirse-Monica Jackson and Jamie-Lee O'Donnell.",
      click: "Click here to find out more",
      logo: derryGirls,
      info:
        "Watch Erin, Orla, Clare, Michelle and Michelle's English cousin James live out their teenagehood during the end of the Troubles in Derry, where they all attend a Catholic girls' secondary school.",
      link: "Back to homepage",
    },
    {
      id: "explained",
      name: "Explained",
      description:
        "Fascinating American docu-series, narrated by celebrities such as Emma Stone, Jerry Springer and Kristen Bell",
      click: "Click here to find out more",
      logo: explained,
      info:
        "Dig into the deeper issues with this intriguing, well-researched series. Listen as various celebrity narrators present 20-minute episodes tackling topics that aren't generally part of the daily news cycle, including cryptocurrency, why women are paid less, and astrology.",
      link: "Back to homepage",
    },
    {
      id: "louisThereoux",
      name: "Louis Theroux",
      description:
        "Mind-blowing docu-series, presented by multi-award-winning journalist and broadcaster, Louis Theroux",
      click: "Click here to find out more",
      logo: louisT,
      info:
        "Watch as award-winning journalist Louis Theroux investigates some of the world's most controversial subcultures, such as scientologists, white supremacists, and porn stars. Theroux immerses himself in their lifestyles by typically living amongst them, in turn subtly exposing the contradictions and flaws in the beliefs that frame their lives.",
      link: "Back to homepage",
    },
    {
      id: "sexEducation",
      name: "Sex Education",
      description:
        "Heartwarming British comedy starring Gillian Anderson, Emma Mackey and Asa Butterfield",
      click: "Click here to find out more",
      logo: sexEd,
      info:
        "Go back to school with Otis, Eric, Maeve and their curious classmates as they navigate their way through teenage sex and relationships. Otis' mother, Jean Milburn, is a licensed sex therapist, and through a series of bizarre events, Otis himself becomes a paid sex therapist for his high school peers, despite being just as clueless as the rest of them.",
      link: "Back to homepage",
    },
  ];
}
