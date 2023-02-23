import { library } from "@fortawesome/fontawesome-svg-core";

// solids
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
// brands
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faReact,
  faCloud,
  faNodeJs,
  faHouseChimney,
  faSpinner,
  faAnglesRight,
  faAnglesLeft
);

export { FontAwesomeIcon };
