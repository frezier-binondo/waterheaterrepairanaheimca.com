export const BRAND_NAME = "Water Heater Repair in Anaheim CA";
export const BRAND_PHONE = "17149871987";
export const BRAND_PHONE_DISPLAY = "(714) 987-1987";
export const BRAND_ADDRESS = {
  street: "Anaheim Blvd & Lincoln Ave",
  city: "Anaheim",
  state: "CA",
  zip: "92805",
  region: "Orange County",
  country: "US",
};

export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106099.64570414902!2d-117.98687784381832!3d33.83786221447087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6b%3A0x2ef62f8418225cfa!2sAnaheim%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";
export const GOOGLE_MAPS_DIRECT_LINK = "https://maps.app.goo.gl/qsD6bZXJdmTvEVsX7";

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  fullTitle: string;
  category: "repair" | "install" | "commercial" | "emergency";
  priority: number;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "water-heater-repair",
    name: "Water Heater Repair",
    slug: "water-heater-repair",
    shortDesc: "Comprehensive diagnostics and repairs for residential gas, electric, and tankless units across Anaheim.",
    fullTitle: "Water Heater Repair in Anaheim, CA",
    category: "repair",
    priority: 1,
  },
  {
    id: "emergency-water-heater-repair",
    name: "Emergency Water Heater Repair",
    slug: "emergency-water-heater-repair",
    shortDesc: "24/7 urgent dispatch for burst tanks, gas smells, scorching relief valves, and severe water leaks.",
    fullTitle: "Emergency Water Heater Repair in Anaheim, CA",
    category: "emergency",
    priority: 2,
  },
  {
    id: "tankless-water-heater-repair",
    name: "Tankless Water Heater Repair",
    slug: "tankless-water-heater-repair",
    shortDesc: "Expert descaling, error code diagnosis, and sensor repairs for Rinnai, Navien, Noritz, and Rheem.",
    fullTitle: "Tankless Water Heater Repair in Anaheim, CA",
    category: "repair",
    priority: 3,
  },
  {
    id: "water-heater-installation",
    name: "Water Heater Installation",
    slug: "water-heater-installation",
    shortDesc: "Permitted, code-compliant installations with seismic bracing, expansion tanks, and low-NOx gas certification.",
    fullTitle: "Water Heater Installation in Anaheim, CA",
    category: "install",
    priority: 4,
  },
  {
    id: "water-heater-replacement",
    name: "Water Heater Replacement",
    slug: "water-heater-replacement",
    shortDesc: "Fast same-day tank and tankless replacements with old unit haul-away and upfront transparent pricing.",
    fullTitle: "Water Heater Replacement in Anaheim, CA",
    category: "install",
    priority: 5,
  },
  {
    id: "gas-water-heater-repair",
    name: "Gas Water Heater Repair",
    slug: "gas-water-heater-repair",
    shortDesc: "Safe natural gas burner cleaning, thermocouple testing, and gas control valve repairs.",
    fullTitle: "Gas Water Heater Repair in Anaheim, CA",
    category: "repair",
    priority: 6,
  },
  {
    id: "electric-water-heater-repair",
    name: "Electric Water Heater Repair",
    slug: "electric-water-heater-repair",
    shortDesc: "Heating element swaps, dual thermostat calibration, and 240V high-limit reset troubleshooting.",
    fullTitle: "Electric Water Heater Repair in Anaheim, CA",
    category: "repair",
    priority: 7,
  },
  {
    id: "water-heater-maintenance",
    name: "Water Heater Maintenance",
    slug: "water-heater-maintenance",
    shortDesc: "Annual mineral scale sediment flush, sacrificial anode rod replacements, and T&P valve safety testing.",
    fullTitle: "Water Heater Maintenance in Anaheim, CA",
    category: "repair",
    priority: 8,
  },
  {
    id: "commercial-water-heater-repair",
    name: "Commercial Water Heater Repair",
    slug: "commercial-water-heater-repair",
    shortDesc: "Heavy-duty commercial tank, boiler, and recirculating loop service for restaurants, hotels, and apartments.",
    fullTitle: "Commercial Water Heater Repair in Anaheim, CA",
    category: "commercial",
    priority: 9,
  },
  {
    id: "water-heater-leak-repair",
    name: "Water Heater Leak Repair",
    slug: "water-heater-leak-repair",
    shortDesc: "Pinpoint diagnosis of leaky brass drain valves, cold-water flex lines, temperature relief pipes, or tank rust.",
    fullTitle: "Water Heater Leak Repair in Anaheim, CA",
    category: "emergency",
    priority: 10,
  },
  {
    id: "water-heater-thermostat-repair",
    name: "Water Heater Thermostat Repair",
    slug: "water-heater-thermostat-repair",
    shortDesc: "Fix lukewarm or scorching water caused by failed upper/lower thermostats or gas control unit sensors.",
    fullTitle: "Water Heater Thermostat Repair in Anaheim, CA",
    category: "repair",
    priority: 11,
  },
  {
    id: "water-heater-pilot-light-repair",
    name: "Water Heater Pilot Light Repair",
    slug: "water-heater-pilot-light-repair",
    shortDesc: "Reliable thermocouple diagnostics, pilot orifice cleaning, and safe electronic spark ignition repairs.",
    fullTitle: "Water Heater Pilot Light Repair in Anaheim, CA",
    category: "repair",
    priority: 12,
  },
];

export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  zipCodes: string;
  description: string;
  landmarks: string;
  waterCharacteristics: string;
}

export const LOCATIONS: LocationItem[] = [
  {
    id: "anaheim-hills",
    name: "Anaheim Hills",
    slug: "anaheim-hills",
    zipCodes: "92807, 92808",
    description: "Hillside residential neighborhoods with larger multi-bath executive estates and custom water heating demands.",
    landmarks: "Nohl Ranch Road, Anaheim Hills Golf Course, Oak Canyon Nature Center",
    waterCharacteristics: "High water pressure zones due to elevation changes, requiring reliable pressure regulators and expansion tanks.",
  },
  {
    id: "fullerton",
    name: "Fullerton",
    slug: "fullerton",
    zipCodes: "92831, 92832, 92833, 92834, 92835",
    description: "Historic college town with classic pre-war Craftsman homes, multi-family student housing, and vibrant downtown culinary lofts.",
    landmarks: "CSUF campus, Downtown Fullerton Promenade, Muckenthaler Cultural Center",
    waterCharacteristics: "Older piping layouts, legacy gas lines, and mineral sediment require diligent descaling and code retrofits.",
  },
  {
    id: "orange",
    name: "Orange",
    slug: "orange",
    zipCodes: "92865, 92866, 92867, 92868, 92869",
    description: "Famous for the Old Towne Plaza historic district with century-old bungalows, tight utility closets, and modern medical centers.",
    landmarks: "The Orange Plaza Circle, Chapman University, St. Joseph Hospital district",
    waterCharacteristics: "Tight closet access and historic structure venting needs; high calcium hardness from local groundwater blending.",
  },
  {
    id: "garden-grove",
    name: "Garden Grove",
    slug: "garden-grove",
    zipCodes: "92840, 92841, 92842, 92843, 92844, 92845",
    description: "Vibrant high-density residential community with active hotel corridors along Harbor Blvd and extensive mid-century homes.",
    landmarks: "Christ Cathedral, Historic Main Street, Harbor Boulevard Resort Corridor",
    waterCharacteristics: "Heavy daily residential and hospitality demand with intense sediment loading in older 40-50 gallon storage tanks.",
  },
  {
    id: "brea",
    name: "Brea",
    slug: "brea",
    zipCodes: "92821, 92823",
    description: "Modern suburban master-planned developments, retail centers, and hillside communities requiring energy-efficient upgrades.",
    landmarks: "Brea Mall, Carbon Canyon Regional Park, Brea Downtown Birch Street",
    waterCharacteristics: "High transition rate toward high-efficiency ENERGY STAR tankless systems and hybrid heat pump units.",
  },
  {
    id: "placentia",
    name: "Placentia",
    slug: "placentia",
    zipCodes: "92870",
    description: "Peaceful residential community with beloved Old Town Placentia heritage homes and mature family subdivisions.",
    landmarks: "Old Town Placentia, Bradford House, Kraemer Memorial Park",
    waterCharacteristics: "Aging galvanized pipe junctions and legacy water heaters experiencing interior tank corrosion and failed anode rods.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  category: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "hard-water-effects-water-heaters-orange-county",
    title: "How Orange County Hard Water Destroys Water Heaters & How to Prevent It",
    date: "November 14, 2026",
    readTime: "6 min read",
    category: "Maintenance Guide",
    author: "Anaheim Master Plumbing Advisor",
    image: "/images/hard-water-scale.jpg",
    excerpt: "Anaheim tap water averages 15 to 22 grains per gallon of mineral hardness. Learn why calcium scale causes banging noises, reduces efficiency by 30%, and how annual flushing saves thousands.",
    content: [
      "If you live in Anaheim or anywhere across northern Orange County, your tap water originates from deep groundwater aquifers managed by the Orange County Water District and surface water imported via the Colorado River Aqueduct. While completely safe to drink, this water is naturally rich in calcium and magnesium ions—classifying it as 'very hard' water.",
      "When cold water enters your water heater tank or tankless heat exchanger, the heating process precipitates these dissolved minerals out of solution. Over months, this creates an impenetrable layer of calcium scale at the base of the tank. In gas heaters, this scale creates an insulating barrier between the burner flame and the water, forcing the steel bottom to overheat and crack prematurely.",
      "In electric water heaters, limescale coats the lower 240V heating element until it overheats and burns out. Homeowners will typically notice popping, crackling, or deep rumbling sounds—the sound of trapped steam boiling under mineral sediment.",
      "The proven solution is annual maintenance: having a licensed Anaheim water heater technician perform an acid descaling flush on tankless models, or a complete high-pressure sediment drain and sacrificial magnesium anode rod inspection on traditional tank units.",
    ],
  },
  {
    slug: "repair-vs-replace-water-heater-signs",
    title: "Repair or Replace? The Homeowner's Guide to Water Heater Decisions",
    date: "November 08, 2026",
    readTime: "7 min read",
    category: "Troubleshooting",
    author: "Anaheim Water Heater Network",
    image: "/images/water-heater-repair.jpg",
    excerpt: "Before you spend hundreds on a repair, use the 50% rule and check your tank's age. Here is how to evaluate whether a repair will last or if replacement is the smart financial decision.",
    content: [
      "Standing in front of a leaking or non-heating water heater is one of the most frustrating moments a homeowner faces. The immediate dilemma is always: Should I pay to repair this, or is it time to invest in a brand new unit?",
      "Rule #1: Inspect the location of the leak. If water is dripping from a flex line, brass ball valve, or the temperature and pressure (T&P) relief valve, that is 100% repairable. However, if water is weeping from the steel tank jacket itself, the inner glass lining has ruptured. No plumber can weld or patch a leaking water heater tank; replacement is mandatory and immediate.",
      "Rule #2: The 50% Rule and Age Calculation. Traditional tank water heaters have an expected lifespan of 8 to 12 years in Southern California. If your unit is over 8 years old and the repair quote exceeds 50% of the replacement cost, replacement is far more economical in the long run.",
      "Upgrading also opens the door to high-efficiency ENERGY STAR models, low-NOx certified gas burners compliant with South Coast AQMD Rule 1121, and modern tankless demand systems that never run out of hot water.",
    ],
  },
  {
    slug: "tankless-water-heater-troubleshooting-codes",
    title: "Understanding Tankless Water Heater Error Codes & Cold Water Sandwiches",
    date: "October 29, 2026",
    readTime: "5 min read",
    category: "Tankless Systems",
    author: "Certified Tankless Specialist",
    image: "/images/tankless-water-heater.jpg",
    excerpt: "Flashing error code on your Rinnai, Navien, or Noritz display? Here is what common flame failure, venting restriction, and overheat sensor codes mean and what you should do immediately.",
    content: [
      "Tankless water heaters are marvels of modern thermal engineering, but their complex electronic sensors and modulating gas valves mean they communicate problems through digital diagnostic codes.",
      "For example, Rinnai Code 11 or Navien Code E012 typically indicates an ignition failure. This can be caused by a closed gas shutoff valve, an undersized gas line, low gas supply pressure, or carbon soot on the flame rod.",
      "Another frequent homeowner grievance is the 'cold water sandwich'—where the shower starts pleasantly hot, turns freezing cold for 20 seconds, and then returns to hot. This occurs when the tankless flow turbine detects an interrupted water draw and needs seconds to fire the burner back up. Modern units solve this with dedicated internal recirculating buffers.",
      "Because tankless units operate with high-voltage circuit boards and pressurized gas manifolds, troubleshooting internal error codes requires a licensed pro with digital combustion analyzers.",
    ],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    question: "How fast can a water heater technician arrive at my Anaheim home?",
    answer: "Because we connect you directly with pre-screened, licensed local plumbers stationed throughout Anaheim and north Orange County, urgent requests (such as burst tanks, flooding, or complete lack of hot water) typically receive priority same-day dispatch within 60 to 120 minutes depending on traffic and call volume.",
  },
  {
    question: "How much does water heater repair typically cost in Anaheim?",
    answer: "Minor repairs—such as replacing a failed thermocouple, flame sensor, electric heating element, or upper thermostat—generally range between $175 and $390 including parts and labor. More extensive repairs, such as electronic gas control valve replacement or tankless heat exchanger descaling, vary based on equipment make and model. All network pros provide clear upfront written quotes before turning a single wrench.",
  },
  {
    question: "Do you repair both gas and electric water heaters as well as tankless units?",
    answer: "Yes. Our referral network includes licensed California C-36 plumbing contractors who specialize across all fuel types: natural gas storage tanks, 240V electric water heaters, commercial boilers, hybrid heat pump water heaters, and tankless units from leading brands like Rinnai, Navien, Noritz, Rheem, and Bradford White.",
  },
  {
    question: "What should I do immediately if my water heater is leaking from the bottom?",
    answer: "First, shut off the cold water supply valve located on the piping directly above the heater by turning the handle clockwise. Second, kill the power source: turn off the dedicated double-pole breaker for electric units, or rotate the gas valve dial to 'OFF' for gas heaters. Finally, call (714) 987-1987 immediately. If the steel tank itself is leaking, the tank has failed and will require full replacement.",
  },
  {
    question: "Do water heater installations in Anaheim require building permits and inspections?",
    answer: "Yes. In California and specifically under City of Anaheim municipal code, replacing or installing a water heater requires a plumbing permit and a post-installation safety inspection. This ensures seismic strapping is properly anchored to withstand earthquakes, temperature-pressure relief discharge pipes are safely routed, and combustion air meets South Coast AQMD low-NOx standards. Licensed network plumbers handle the entire permit process on your behalf.",
  },
  {
    question: "What are the common signs that my water heater needs immediate professional repair?",
    answer: "Key warning signals include: water pooling around the tank base, rumbling or popping sounds during heating cycles, rusty or foul-smelling tap water, water running lukewarm despite highest thermostat settings, pilot light repeatedly blowing out, or sudden spikes in your SoCalGas or electric utility bill.",
  },
  {
    question: "Why is regular water heater flushing essential in Orange County?",
    answer: "Orange County water is naturally hard, containing heavy concentrations of dissolved calcium and magnesium. Over 12 to 24 months, these minerals bake into thick rock-like scale at the bottom of the tank, smothering the heating elements or burner floor. Annual flushing eliminates this sediment, restores thermal efficiency, lowers utility bills, and extends heater lifespan by up to 5 additional years.",
  },
  {
    question: "How do I know if my water heater should be repaired or completely replaced?",
    answer: "Follow the 10-year rule: if your tank heater is under 8 years old and the repair is localized to a valve, element, or thermostat, repair is usually the most economical move. If the tank is 10 to 12+ years old, has heavy external corrosion, or leaks directly from the bottom shell, replacement is the safer, more cost-effective choice to avoid catastrophic flood damage.",
  },
  {
    question: "What is the recommended safe temperature setting for my residential water heater?",
    answer: "The U.S. Department of Energy and safety specialists recommend setting residential water heaters to 120°F (49°C). This provides plenty of hot water for showers and dishwashers while preventing scald burns (which happen in 2 seconds at 150°F) and reducing standby energy consumption by up to 10%.",
  },
  {
    question: "What information should I have ready when I call for service?",
    answer: "To ensure fast dispatch, please have: 1) Your street address and city/ZIP, 2) Whether your unit is gas or electric, 3) If it is a traditional tank or wall-mounted tankless unit, 4) The brand and approximate age (printed on the rating plate), and 5) A brief description of the symptom (e.g., puddle on floor, completely cold water, or gas smell).",
  },
];
