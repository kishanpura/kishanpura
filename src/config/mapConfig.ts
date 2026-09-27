/**
 * ============================================================================
 * 📍 VILLAGE PIN LOCATION & GOOGLE MAPS CONFIGURATION
 * ============================================================================
 *
 * NOTE FOR DEVELOPER / USER:
 * You can easily update your proper pin location anytime in this file!
 * Any changes made here will automatically update across the entire website:
 *   1. Official Google Maps Embed & Satellite View
 *   2. Direct Navigation & Directions Links
 *   3. Interactive Landmark Pins
 *   4. GPS Coordinates Badges & Clipboard Copier
 *   5. Schema.org SEO Geo Metadata & HTML tags
 * ============================================================================
 */

export interface VillagePinLocation {
  id: string;
  name: { en: string; hi: string };
  category:
    | "gpoffice"
    | "patwar"
    | "ksc"
    | "gphc"
    | "gah"
    | "phed"
    | "gsss"
    | "mgsss"
    | "svm"
    | "tps"
    | "rps"
    | "memitra"
    | "nemitra"
    | "demitra"
    | "bstand"
    | "rplaces"
    | "others";
  lat: number;
  lng: number;
  description: { en: string; hi: string };
  historicalNote?: { en: string; hi: string };
  googleMapsPlaceUrl?: string;
}

export interface VillageMapConfig {
  villageName: string;
  localName: string;

  // 📍 >>> UPDATE YOUR PRIMARY PIN LOCATION HERE <<<
  coordinates: {
    lat: number;
    lng: number;
  };

  // Administrative details
  pincode: string;
  tehsil: string;
  district: string;
  state: string;
  country: string;

  // Zoom level for embed map (12 = regional, 15 = village wide, 17 = building level)
  defaultZoom: number;

  // Google Maps Short URL provided in request
  googleMapsShortUrl: string;

  // Pre-configured village landmark pins (all easily editable below)
  landmarks: VillagePinLocation[];
}

export const MAP_CONFIG: VillageMapConfig = {
  villageName: "Kishanpura (Utrada)",
  localName: "किशनपुरा (उतरादा)",

  // ============================================================================
  // 📍 1. PRIMARY VILLAGE PIN (Latitude, Longitude)
  // Edit the lat and lng values below to move the primary pin anywhere:
  // ============================================================================
  coordinates: {
    lat: 29.8885022, // 📍 Latitude
    lng: 74.2898204, // 📍 Longitude
  },

  pincode: "335062",
  tehsil: "Sadulshahar",
  district: "Sri Ganganagar",
  state: "Rajasthan",
  country: "India",

  defaultZoom: 15,
  googleMapsShortUrl: "https://maps.app.goo.gl/iRabyMTfmXtFguSi8",

  // ============================================================================
  // 📍 2. EDITABLE VILLAGE LANDMARK PINS
  // You can adjust individual landmark coordinates or add new pins here:
  // ============================================================================
  landmarks: [
    {
      id: "pin-panchayat",
      name: {
        en: "Village Panchayat office",
        hi: "",
      },
      category: "gpoffice",
      lat: 29.891742586070087,
      lng: 74.28730956534514,
      description: {
        en: "The Gram Panchayat Office - office of Village Sarpanch and Village Development Officer.\nThis office is with a large hall for meeting and some programs.\nThis office also has two room used as different offices",
        hi: "ग्राम पंचायत कार्यालय - यह गाँव के सरपंच और ग्राम विकास अधिकारी का कार्यालय है।\nइस भवन में मीटिंग और कुछ कार्यक्रमों के लिए एक बड़ा हॉल है।\nइस भवन में दो कमरे भी हैं जिनका इस्तेमाल अलग-अलग कार्यालयों के तौर पर किया जाता है।",
      },
    },
    {
      id: "pin-patwar",
      name: { en: "Patwar Ghar", hi: "पटवार घर" },
      category: "patwar",
      lat: 29.891867703588733,
      lng: 74.28733549595347,
      description: {
        en: "Patwar Ghar - the office of the village Patwari.\nThis office maintains land records, maps, and ownership details.\nVillagers visit here for land-related documents and verification.",
        hi: "पटवार घर - गाँव के पटवारी का कार्यालय।\nयह कार्यालय भूमि अभिलेख, नक्शे और स्वामित्व विवरण रखता है।\nगाँववाले भूमि से जुड़े दस्तावेज़ और सत्यापन के लिए यहाँ आते हैं।",
      },
    },
    {
      id: "pin-ksc",
      name: { en: "Kisan Seva Center", hi: "किसान सेवा केंद्र" },
      category: "ksc",
      lat: 29.89188289164046,
      lng: 74.28742563568764,
      description: {
        en: "Kisan Seva Center - service center for farmers.\nProvides seeds, fertilizers, and guidance for agriculture.\nHelps farmers with schemes and subsidies.",
        hi: "किसान सेवा केंद्र - किसानों के लिए सेवा केंद्र।\nयह बीज, खाद और कृषि मार्गदर्शन प्रदान करता है।\nकिसानों को योजनाओं और सब्सिडी में मदद करता है।",
      },
    },
    {
      id: "pin-gphc",
      name: {
        en: "Govt. Pr. Health Center",
        hi: "रा. प्राथमिक स्वास्थ्य केंद्र",
      },
      category: "gphc",
      lat: 29.89127738167092,
      lng: 74.29189499355807,
      description: {
        en: "Government Primary Health Center - basic healthcare facility.\nProvides first aid, maternal care, and vaccination services.\nDoctors and nurses are available for primary treatment.",
        hi: "रा. प्राथमिक स्वास्थ्य केंद्र - प्राथमिक स्वास्थ्य सुविधा।\nयह प्राथमिक उपचार, मातृत्व देखभाल और टीकाकरण सेवाएँ प्रदान करता है।\nडॉक्टर और नर्स प्राथमिक इलाज के लिए उपलब्ध रहते हैं।",
      },
    },
    {
      id: "pin-gah",
      name: { en: "Govt. Animal Hospital", hi: "रा. पशु चिकित्सालय" },
      category: "gah",
      lat: 29.89103801089594,
      lng: 74.29182534273708,
      description: {
        en: "Government Animal Hospital - veterinary care for livestock.\nProvides treatment, vaccination, and medicines for animals.\nFarmers bring cattle here for health checkups.",
        hi: "रा. पशु चिकित्सालय - पशुओं के लिए चिकित्सा सुविधा।\nयह पशुओं का इलाज, टीकाकरण और दवाइयाँ प्रदान करता है।\nकिसान अपने पशुओं को स्वास्थ्य जांच के लिए यहाँ लाते हैं।",
      },
    },
    {
      id: "pin-phed",
      name: {
        en: "Pub. Health Engineering Department",
        hi: "जन स्वास्थ्य अभियांत्रिकी विभाग",
      },
      category: "phed",
      lat: 29.8911619026577,
      lng: 74.29041927293697,
      description: {
        en: "Public Health Engineering Department - water supply and sanitation office.\nManages pipelines, drinking water, and village sanitation projects.",
        hi: "जन स्वास्थ्य अभियांत्रिकी विभाग - जल आपूर्ति और स्वच्छता कार्यालय।\nयह पाइपलाइन, पेयजल और गाँव की स्वच्छता परियोजनाओं का प्रबंधन करता है।",
      },
    },
    {
      id: "pin-gsss",
      name: { en: "GSSS", hi: "रा.उ.मा. विद्यालय" },
      category: "gsss",
      lat: 29.89225365500645,
      lng: 74.29104817277421,
      description: {
        en: "Government Senior Secondary School - higher education for village students.\nIncludes classrooms, labs, and playground.\nProvides education up to 12th standard.",
        hi: "रा.उ.मा. विद्यालय - गाँव के छात्रों के लिए उच्च शिक्षा।\nइसमें कक्षाएँ, प्रयोगशालाएँ और खेल का मैदान है।\nयह 12वीं कक्षा तक शिक्षा प्रदान करता है।",
      },
    },
    {
      id: "pin-mgsss",
      name: { en: "MGSSS", hi: "म.गाँ.रा.उ.मा. विद्यालय" },
      category: "mgsss",
      lat: 29.890206358412264,
      lng: 74.29068404074064,
      description: {
        en: "Mahatma Gandhi Government Senior Secondary School.\nProvides education facilities with focus on discipline and academics.\nHas science labs and library.",
        hi: "म.गाँ.रा.उ.मा. विद्यालय - महात्मा गांधी राजकीय वरिष्ठ माध्यमिक विद्यालय।\nयह अनुशासन और शिक्षा पर ध्यान केंद्रित करता है।\nइसमें विज्ञान प्रयोगशालाएँ और पुस्तकालय है।",
      },
    },
    {
      id: "pin-svm",
      name: {
        en: "SVM Sr Sec School",
        hi: "सरस्वती विद्या मंदिर उ. मा. विद्यालय",
      },
      category: "svm",
      lat: 29.885207192007126,
      lng: 74.28678434291287,
      description: {
        en: "Saraswati Vidya Mandir Senior Secondary School.\nPrivate school with focus on cultural and moral education.\nProvides modern teaching methods.",
        hi: "सरस्वती विद्या मंदिर उ. मा. विद्यालय - निजी विद्यालय।\nयह सांस्कृतिक और नैतिक शिक्षा पर ध्यान देता है।\nआधुनिक शिक्षण पद्धतियाँ अपनाता है।",
      },
    },
    {
      id: "pin-tps",
      name: { en: "Tagore Public UPS", hi: "टैगोर उ. प्रा. विद्यालय" },
      category: "tps",
      lat: 29.888818596090037,
      lng: 74.28878503673847,
      description: {
        en: "Tagore Public Upper Primary School.\nProvides education up to 8th standard.\nFocuses on basic learning and extracurricular activities.",
        hi: "टैगोर उ. प्रा. विद्यालय - 8वीं कक्षा तक शिक्षा प्रदान करता है।\nयह बुनियादी शिक्षा और सह-पाठ्यक्रम गतिविधियों पर ध्यान देता है।",
      },
    },
    {
      id: "pin-rps",
      name: { en: "Rameshwaram Public UPS", hi: "रामेश्वरम उ. प्रा. विद्यालय" },
      category: "rps",
      lat: 29.890286297927133,
      lng: 74.28686558759718,
      description: {
        en: "Rameshwaram Public Upper Primary School.\nProvides education up to middle classes.\nEncourages sports and cultural programs.",
        hi: "रामेश्वरम उ. प्रा. विद्यालय - मध्य कक्षाओं तक शिक्षा प्रदान करता है।\nयह खेल और सांस्कृतिक कार्यक्रमों को प्रोत्साहित करता है।",
      },
    },
    {
      id: "pin-memitra",
      name: { en: "Manoj E-mitra", hi: "मनोज ई-मित्र" },
      category: "memitra",
      lat: 29.891342107918422,
      lng: 74.28771987116838,
      description: {
        en: "Manoj E-mitra - digital service center.\nProvides online services like bill payments, certificates, and government schemes.",
        hi: "मनोज ई-मित्र - डिजिटल सेवा केंद्र।\nयह बिल भुगतान, प्रमाणपत्र और सरकारी योजनाओं जैसी ऑनलाइन सेवाएँ प्रदान करता है।",
      },
    },
    {
      id: "pin-nemitra",
      name: { en: "Naresh E-mitra", hi: "नरेश ई-मित्र" },
      category: "nemitra",
      lat: 29.888967501722867,
      lng: 74.28937673976206,
      description: {
        en: "Naresh E-mitra - village digital kiosk.\nHelps villagers with online applications and government services.",
        hi: "नरेश ई-मित्र - गाँव का डिजिटल केंद्र।\nयह ग्रामीणों को ऑनलाइन आवेदन और सरकारी सेवाओं में मदद करता है।",
      },
    },
    {
      id: "pin-demitra",
      name: { en: "Dolatram E-mitra", hi: "दोलतराम ई-मित्र" },
      category: "demitra",
      lat: 29.88637914466447,
      lng: 74.28924863824479,
      description: {
        en: "Dolatram E-mitra - digital service point.\nProvides access to e-governance services and online facilities.",
        hi: "दोलतराम ई-मित्र - डिजिटल सेवा केंद्र।\nयह ई-गवर्नेंस सेवाओं और ऑनलाइन सुविधाओं तक पहुँच प्रदान करता है।",
      },
    },
    {
      id: "pin-bstand",
      name: { en: "Bus Stand", hi: "बस स्टैन्ड" },
      category: "bstand",
      lat: 29.88447415272094,
      lng: 74.28678971584337,
      description: {
        en: "Village Bus Stand - main transport hub.\nBuses to nearby towns and cities stop here.\nShops and tea stalls are located around the stand.",
        hi: "गाँव का बस स्टैन्ड - मुख्य परिवहन केंद्र।\nयहाँ से आसपास के कस्बों और शहरों के लिए बसें मिलती हैं।\nबस स्टैन्ड के आसपास दुकानें और चाय की स्टॉल हैं।",
      },
    },
    {
      id: "pin-rplaces",
      name: { en: "Religious Places", hi: "धार्मिक स्थल" },
      category: "rplaces",
      lat: 29.89388127049002,
      lng: 74.28656604496695,
      description: {
        en: "Religious Places - temples and shrines in the village.\nVillagers gather here for worship, festivals, and rituals.\nThese places are centers of cultural and spiritual life.",
        hi: "धार्मिक स्थल - गाँव के मंदिर और पूजा स्थल।\nगाँववासी यहाँ पूजा, त्योहार और अनुष्ठानों के लिए इकट्ठा होते हैं।\nये स्थल सांस्कृतिक और आध्यात्मिक जीवन के केंद्र हैं।",
      },
    },
    {
      id: "pin-others",
      name: { en: "Other", hi: "अन्य" },
      category: "others",
      lat: 29.8982,
      lng: 74.2938,
      description: {
        en: "Other important places in the village.\nIncludes community halls, playgrounds, or local shops.\nThese places serve daily needs and social gatherings.",
        hi: "अन्य महत्वपूर्ण स्थल - गाँव में सामुदायिक भवन, खेल का मैदान और स्थानीय दुकानें।\nये स्थल दैनिक आवश्यकताओं और सामाजिक कार्यक्रमों के लिए उपयोगी हैं।",
      },
    },
  ],
};

/**
 * Generates an official, lightweight Google Maps Embed iframe URL
 * (No API key needed, zero-cost, high reliability, ultra-fast loading)
 */
export function getGoogleMapsEmbedUrl(
  lat: number = MAP_CONFIG.coordinates.lat,
  lng: number = MAP_CONFIG.coordinates.lng,
  zoom: number = MAP_CONFIG.defaultZoom,
  mapType: "k" | "m" = "k", // 'k' = Satellite, 'm' = Roadmap
): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&t=${mapType}&output=embed`;
}

/**
 * Generates a direct Google Maps Directions URL from user's current location
 */
export function getGoogleMapsDirectionsUrl(
  lat: number = MAP_CONFIG.coordinates.lat,
  lng: number = MAP_CONFIG.coordinates.lng,
): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

/**
 * Generates a full Google Maps web search link
 */
export function getGoogleMapsSearchUrl(
  lat: number = MAP_CONFIG.coordinates.lat,
  lng: number = MAP_CONFIG.coordinates.lng,
  label: string = MAP_CONFIG.villageName,
): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}+(${encodeURIComponent(label)})`;
}

/**
 * Helper to generate code snippet for user to copy when updating pins
 */
export function generatePinCodeSnippet(lat: number, lng: number): string {
  return `// Update in src/config/mapConfig.ts:\ncoordinates: {\n  lat: ${lat},\n  lng: ${lng},\n},`;
}
