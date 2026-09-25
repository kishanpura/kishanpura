export interface VillagePOI {
  id: string;
  name: { en: string; hi: string };
  category: 'heritage' | 'civic' | 'health' | 'agriculture' | 'culture' | 'water';
  coordinates: [number, number];
  description: { en: string; hi: string };
  historicalNote?: { en: string; hi: string };
  image: string;
  tags: string[];
}

export interface VillageStat {
  label: { en: string; hi: string };
  value: string;
  subtext: { en: string; hi: string };
  iconName: string;
}

export interface CropSeason {
  name: { en: string; hi: string };
  period: { en: string; hi: string };
  seasonType: 'rabi' | 'kharif' | 'perennial';
  crops: {
    title: { en: string; hi: string };
    localName: string;
    description: { en: string; hi: string };
    seasonTag: string;
    icon: string;
  }[];
}

export interface TimelineMilestone {
  year: string;
  era: { en: string; hi: string };
  title: { en: string; hi: string };
  summary: { en: string; hi: string };
  significance: { en: string; hi: string };
}

export interface GalleryItem {
  id: string;
  title: { en: string; hi: string };
  category: 'farming' | 'heritage' | 'community' | 'nature';
  image: string;
  caption: { en: string; hi: string };
}

export interface DirectoryContact {
  role: { en: string; hi: string };
  name: { en: string; hi: string };
  service: { en: string; hi: string };
  timing: string;
  location: { en: string; hi: string };
  contactType: 'panchayat' | 'medical' | 'education' | 'agriculture' | 'postal';
  icon: string;
}

export const VILLAGE_INFO = {
  name: {
    en: "Kishanpura (Utrada)",
    hi: "किशनपुरा (उतरादा)",
    punjabi: "ਕਿਸ਼ਨਪੁਰਾ (ਉਤਰਾਦਾ)",
  },
  tagline: {
    en: "A Century of Agrarian Legacy, Canal Lifelines & Communal Harmony",
    hi: "एक सदी की कृषि विरासत, नहरों की जीवनधारा और सामुदायिक समरसता",
  },
  location: {
    coordinates: [29.8885022, 74.2898204] as [number, number],
    mapsUrl: "https://maps.app.goo.gl/iRabyMTfmXtFguSi8",
    pincode: "335062",
    tehsil: "Sadulshahar",
    district: "Sri Ganganagar (near Hanumangarh border)",
    state: "Rajasthan, India",
    postOffice: "Kishanpura Utrada Branch Office",
    railwayNearby: "Sadulshahar (14 km), Sangaria (22 km), Sri Ganganagar (38 km)",
  },
};

export const VILLAGE_STATS: VillageStat[] = [
  {
    label: { en: "Centennial Heritage", hi: "शताब्दी विरासत" },
    value: "100+ Yrs",
    subtext: { en: "Historic School Est. 1926", hi: "राजकीय विद्यालय स्थापना 1926" },
    iconName: "Clock",
  },
  {
    label: { en: "Canal Irrigated Land", hi: "नहरी सिंचित भूमि" },
    value: "1,450+ Ha",
    subtext: { en: "Rich Canal Command Farmland", hi: "उपजाऊ नहरी कृषि क्षेत्र" },
    iconName: "Sprout",
  },
  {
    label: { en: "Village Community", hi: "ग्रामीण परिवार" },
    value: "3,920+",
    subtext: { en: "Across ~780 Households", hi: "~780 सुखी एवं मेहनती परिवार" },
    iconName: "Users",
  },
  {
    label: { en: "Citrus & Grain Pride", hi: "किन्नू एवं अन्न भंडार" },
    value: "#1 Kinnow Belt",
    subtext: { en: "Golden Wheat & Sweet Citrus", hi: "विश्वविख्यात मीठा किन्नू व गेहूँ" },
    iconName: "Sun",
  },
];

export const VILLAGE_POIS: VillagePOI[] = [
  {
    id: "gsss-school",
    name: {
      en: "GSSS Kishanpura Uttaradha (Est. 1926)",
      hi: "राजकीय उच्च माध्यमिक विद्यालय किशनपुरा (स्था. 1926)",
    },
    category: "heritage",
    coordinates: [29.8896, 74.2882],
    description: {
      en: "The intellectual backbone of the village, celebrating a century of public education since 1926. It has nurtured generations of scholars, defense personnel, civil servants, and agrarian innovators.",
      hi: "गाँव की बौद्धिक रीढ़, जो 1926 से सार्वजनिक शिक्षा की मशाल जलाए हुए है। यहाँ से निकले विद्यार्थियों ने देश सेवा, शिक्षा और कृषि में गौरव बढ़ाया है।",
    },
    historicalNote: {
      en: "Established during the princely era when canal settlements were taking root in northern Rajasthan.",
      hi: "रियासती काल में बीकानेर रियासत के दौरान स्थापित जब उत्तरी राजस्थान में नहरी बस्तियाँ बस रही थीं।",
    },
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Education", "Centennial Landmark", "Heritage"],
  },
  {
    id: "central-chaupal",
    name: {
      en: "Central Village Chaupal & Banyan Sanctuary",
      hi: "केंद्रीय ग्राम चौपाल एवं बरगद छांव",
    },
    category: "culture",
    coordinates: [29.8885, 74.2898],
    description: {
      en: "The social heartbeat of Kishanpura. Beneath the majestic shady trees, village elders discuss harvests, arbitrate amicable neighborhood decisions, sip afternoon masala chai, and welcome guests.",
      hi: "किशनपुरा का सामाजिक केंद्र। प्राचीन बरगद व नीम की छांव तले गाँव के बुजुर्ग बैठते हैं, चौपाल पर विचार-विमर्श, चाय और अपनापन हमेशा जीवंत रहता है।",
    },
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    tags: ["Social Heart", "Chaupal", "Traditions"],
  },
  {
    id: "canal-siphon",
    name: {
      en: "Canal Distributary & Minor Waterway",
      hi: "नहरी वितरिका व जल साइफन प्रणाली",
    },
    category: "water",
    coordinates: [29.8850, 74.2840],
    description: {
      en: "The sweet Himalayan-fed water channels that transformed this semi-arid borderland into the granary of Rajasthan. Features traditional brick culverts and vara-bandi water distribution regulators.",
      hi: "हिमालयी जलधारा जो नहरों के माध्यम से इस क्षेत्र को राजस्थान का हरित अन्न भंडार बनाती है। यहाँ पारंपरिक वारा-बंदी जल वितरण व्यवस्था लागू है।",
    },
    historicalNote: {
      en: "Part of the landmark irrigation systems pioneered in the early 20th century.",
      hi: "20वीं सदी की ऐतिहासिक नहरी सिंचाई क्रांति का अभिन्न हिस्सा।",
    },
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tags: ["Canal Lifeline", "Water", "Irrigation"],
  },
  {
    id: "kinnow-belt",
    name: {
      en: "Kishanpura Kinnow & Citrus Orchards",
      hi: "किशनपुरा किन्नू व रसदार बागान",
    },
    category: "agriculture",
    coordinates: [29.8920, 74.2930],
    description: {
      en: "Sprawling orchards of glossy green trees loaded with sweet, deep-orange Kinnow mandarins. Kishanpura's microclimate and canal water yield exceptionally juicy, premium-grade export fruit.",
      hi: "मीठे रसीले किन्नू के विस्तृत बाग। यहाँ की उपजाऊ मिट्टी और नहरी पानी से उच्च गुणवत्ता वाले किन्नू तैयार होते हैं जो पूरे भारत व विदेशों में भेजे जाते हैं।",
    },
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kinnow Orchards", "Agriculture", "Citrus Capital"],
  },
  {
    id: "panchayat-bhawan",
    name: {
      en: "Gram Panchayat Bhawan & Civic Center",
      hi: "ग्राम पंचायत भवन एवं नागरिक सेवा केंद्र",
    },
    category: "civic",
    coordinates: [29.8878, 74.2912],
    description: {
      en: "The local self-governance headquarters overseeing village development, digital public services, agricultural welfare schemes, clean water initiatives, and village panchayat assemblies.",
      hi: "गाँव का प्रशासनिक मुख्यालय जहाँ से ग्राम विकास, डिजिटल ई-मित्र सेवाएँ, जल जीवन मिशन और जनकल्याणकारी योजनाओं का संचालन होता है।",
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["Governance", "Civic", "Panchayat"],
  },
  {
    id: "govt-hospital",
    name: {
      en: "Kishanpura Government Primary Health Center",
      hi: "राजकीय प्राथमिक स्वास्थ्य केंद्र किशनपुरा",
    },
    category: "health",
    coordinates: [29.8904, 74.2865],
    description: {
      en: "Providing 24/7 primary healthcare, maternal wellness, vaccination drives, and emergency medical aid to Kishanpura and neighboring rural hamlets with compassionate rural healthcare staff.",
      hi: "ग्रामीणों और आसपास के ढाणियों को 24 घंटे प्राथमिक चिकित्सा, टीकाकरण, मातृत्व स्वास्थ्य व आकस्मिक सेवाएं उपलब्ध कराने वाला स्वास्थ्य केंद्र।",
    },
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Healthcare", "Hospital", "Wellness"],
  },
  {
    id: "village-temple",
    name: {
      en: "Shri Krishna & Hanuman Mandir Complex",
      hi: "श्री कृष्ण एवं संकटमोचन हनुमान मंदिर",
    },
    category: "culture",
    coordinates: [29.8880, 74.2889],
    description: {
      en: "A sanctum of peace and spirituality in the heart of the village. Morning chants, evening aarti bells, and festive community langars bring all faiths and families together in harmony.",
      hi: "गाँव के केंद्र में आस्था और शांति का धाम। सुबह की आरती, शंख ध्वनि और त्योहारों पर आयोजित सामूहिक प्रसाद-भंडारे सभी ग्रामीणों को जोड़ते हैं।",
    },
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Spiritual", "Mandir", "Community"],
  },
  {
    id: "gaushala",
    name: {
      en: "Kishanpura Shri Krishna Gaushala",
      hi: "किशनपुरा श्री कृष्ण गौशाला एवं पशु कल्याण",
    },
    category: "agriculture",
    coordinates: [29.8862, 74.2945],
    description: {
      en: "Dedicated to the care of indigenous Rathi and Sahiwal cows. The village fosters organic farming practices, natural cow dung biogas, and traditional dairy respect.",
      hi: "देशी राठी और साहीवाल गायों की सेवा को समर्पित गौशाला। यहाँ से जैविक खाद और संधारणीय ग्रामीण पर्यावरण को बढ़ावा मिलता है।",
    },
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=1200&q=80",
    tags: ["Gaushala", "Desi Cows", "Ahimsa"],
  },
];

export const VILLAGE_TIMELINE: TimelineMilestone[] = [
  {
    year: "1926",
    era: { en: "Foundation of Education", hi: "शिक्षा की नींव" },
    title: {
      en: "Historic Primary School Established",
      hi: "ऐतिहासिक विद्यालय की स्थापना",
    },
    summary: {
      en: "GSSS Kishanpura Uttaradha opened its doors in 1926, bringing formal literacy and progressive thought to the agrarian frontier well before independence.",
      hi: "1926 में राजकीय विद्यालय की स्थापना हुई, जिसने आज़ादी से पहले ही इस ग्रामीण अंचल में शिक्षा की क्रांति का सूत्रपात किया।",
    },
    significance: {
      en: "One of the earliest public learning institutions in the entire Sadulshahar belt.",
      hi: "सादुलशहर क्षेत्र के सबसे पुराने शैक्षणिक संस्थानों में से एक।",
    },
  },
  {
    year: "1930s",
    era: { en: "The Waters of Hope", hi: "नहरी क्रांति का उदय" },
    title: {
      en: "Arrival of Canal Irrigation",
      hi: "नहरी जल का ऐतिहासिक आगमन",
    },
    summary: {
      en: "Canal water reached the fields of Kishanpura, transforming thirsty desert sands into thriving emerald crop fields and attracting skilled farming families.",
      hi: "नहरों के पानी ने किशनपुरा के धोरों को उपजाऊ खेतों में बदल दिया। मेहनती किसान परिवारों ने इस भूमि को सोना उगलने वाली धरती बनाया।",
    },
    significance: {
      en: "Began the permanent settlement and established our world-renowned crop rotation.",
      hi: "गाँव का स्थायी स्वरूप और समृद्ध कृषि चक्र का आरंभ।",
    },
  },
  {
    year: "1960s–70s",
    era: { en: "Green Revolution", hi: "हरित क्रांति का दौर" },
    title: {
      en: "High-Yield Crops & Village Electrification",
      hi: "उन्नत फसलें व ग्रामीण विद्युतीकरण",
    },
    summary: {
      en: "Introduction of high-yield Mexican wheat and improved mustard seeds. The village connected to the power grid, powering tube-wells, seed processing, and household lights.",
      hi: "उन्नत गेहूँ और सरसों के बीजों की खेती शुरू हुई। गाँव में बिजली पहुँची और कृषि यंत्रों का विस्तार हुआ।",
    },
    significance: {
      en: "Kishanpura farmers became champions of regional agricultural output.",
      hi: "किशनपुरा के किसानों ने अन्न उत्पादन में अग्रणी स्थान प्राप्त किया।",
    },
  },
  {
    year: "1990s",
    era: { en: "The Citrus Boom", hi: "किन्नू बागवानी का स्वर्णकाल" },
    title: {
      en: "Kinnow Mandarin Revolution",
      hi: "किन्नू बागानों का क्रांतिकारी प्रसार",
    },
    summary: {
      en: "Pioneering progressive farmers converted dozens of acres into drip-irrigated Kinnow citrus orchards, sparking economic prosperity across every household.",
      hi: "प्रगतिशील किसानों ने किन्नू के बाग लगाए। आज किशनपुरा का मीठा किन्नू दूर-दूर तक प्रसिद्ध है।",
    },
    significance: {
      en: "Cemented the village's status on India's premier horticulture map.",
      hi: "गाँव को देश के प्रमुख बागवानी केंद्रों में स्थापित किया।",
    },
  },
  {
    year: "2026",
    era: { en: "Centennial Modern Era", hi: "शताब्दी वर्ष एवं डिजिटल ग्राम" },
    title: {
      en: "Centennial Celebration & Digital Heritage",
      hi: "100 वर्ष का उत्सव एवं आधुनिक गाँव",
    },
    summary: {
      en: "Celebrating 100 years of educational excellence (1926–2026), solar-powered farm irrigation, high-speed fiber internet, and this digital village portfolio for diaspora worldwide.",
      hi: "100 वर्ष की शैक्षणिक यात्रा (1926-2026), सौर ऊर्जा से संचालित कृषि, डिजिटल कनेक्टिविटी और वैश्विक पहचान।",
    },
    significance: {
      en: "Honoring our ancestors while equipping our youth for 21st-century leadership.",
      hi: "अपनी जड़ों का सम्मान और नई पीढ़ी के लिए स्वर्णिम भविष्य।",
    },
  },
];

export const CROP_SEASONS: CropSeason[] = [
  {
    name: { en: "Rabi Season (Winter to Spring)", hi: "रबी फसल (सर्दियाँ से बसंत)" },
    period: { en: "October – April", hi: "अक्टूबर – अप्रैल" },
    seasonType: "rabi",
    crops: [
      {
        title: { en: "Golden Wheat", hi: "सोने जैसा गेहूँ" },
        localName: "कनक / गंदम (Kanak)",
        description: {
          en: "Lush green wheat shoots blanket the entire village in winter, turning into radiant gold by April harvest. Known for high protein and sweet chapati flavor.",
          hi: "सर्दियों में चारों ओर हरी चादर और बसंत में सुनहरी चमक। स्वादिष्ट रोटियों के लिए प्रसिद्ध पोषक गेहूँ।",
        },
        seasonTag: "Main Grain Staple",
        icon: "Wheat",
      },
      {
        title: { en: "Mustard Fields", hi: "पीली सरसों" },
        localName: "सरसों / राया (Sarson)",
        description: {
          en: "Vibrant yellow blossom seas in December-January that perfume the village breeze and produce pure, aromatic cold-pressed mustard oil.",
          hi: "दिसंबर-जनवरी में महकती पीली सरसों। यहाँ से शुद्ध व खुशबूदार कच्ची घानी सरसों तेल तैयार होता है।",
        },
        seasonTag: "Oilseed Pride",
        icon: "Flower2",
      },
      {
        title: { en: "Gram & Barley", hi: "चना एवं जौ" },
        localName: "चना व जौ (Chana & Jau)",
        description: {
          en: "Nutritious traditional legumes and hearty grains supporting soil nitrogen replenishment and cattle fodder.",
          hi: "भूमि की उर्वरता बढ़ाने वाले और पशुधन के लिए पौष्टिक दलहन व अनाज।",
        },
        seasonTag: "Legume & Fodder",
        icon: "Leaf",
      },
    ],
  },
  {
    name: { en: "Kharif Season (Monsoon to Autumn)", hi: "खरीफ फसल (मानसून से शरद)" },
    period: { en: "June – October", hi: "जून – अक्टूबर" },
    seasonType: "kharif",
    crops: [
      {
        title: { en: "White Gold (Cotton)", hi: "सफेद सोना (कपास)" },
        localName: "नरमा / कपास (Narma)",
        description: {
          en: "Fluffy white cotton bolls ripen in late autumn, providing high cash yields and employment during hand-picking season.",
          hi: "शरद ऋतु में खिलते कपास के फूल। किसानों की प्रमुख नकदी फसल जो स्थानीय अर्थव्यवस्था को मजबूती देती है।",
        },
        seasonTag: "Fiber Cash Crop",
        icon: "Cloud",
      },
      {
        title: { en: "Cluster Beans (Guwar)", hi: "ग्वार फली" },
        localName: "ग्वार (Guwar)",
        description: {
          en: "Resilient crop valued globally for guar gum and rich organic cattle nutrition.",
          hi: "कम पानी में तैयार होने वाली बहुमूल्य फसल, जिसकी अंतर्राष्ट्रीय स्तर पर माँग है।",
        },
        seasonTag: "Industrial & Feed",
        icon: "Layers",
      },
      {
        title: { en: "Moong & Bajra", hi: "मूँग एवं बाजरा" },
        localName: "मूँग व बाजरा (Moong / Bajra)",
        description: {
          en: "Wholesome pearls of nutrition, roasted during monsoon evenings and eaten with homemade white butter.",
          hi: "पौष्टिक मोटा अनाज, बाजरे की रोटी और मूँग की दाल ग्रामीण रसोई का प्रमुख हिस्सा है।",
        },
        seasonTag: "Nutrient Rich",
        icon: "Sparkles",
      },
    ],
  },
  {
    name: { en: "Perennial Horticulture (Orchards)", hi: "बारहमासी बागवानी (किन्नू)" },
    period: { en: "November – February Harvest", hi: "नवंबर – फरवरी तुड़ाई" },
    seasonType: "perennial",
    crops: [
      {
        title: { en: "Kishanpura Kinnow Mandarin", hi: "किशनपुरा का रसीला किन्नू" },
        localName: "किन्नू (Kinnow / Santra)",
        description: {
          en: "The crown jewel of our village! Sweet, aromatic, full of natural vitamin C, directly loaded onto trucks for fruit markets across India and abroad.",
          hi: "किशनपुरा का गौरव! मीठा, प्राकृतिक विटामिन सी से भरपूर, जो देशभर की मंडियों में अपनी मिठास पहुंचाता है।",
        },
        seasonTag: "Signature Fruit",
        icon: "Citrus",
      },
    ],
  },
];

export const VILLAGE_CULTURE_ITEMS = [
  {
    title: { en: "Chaupal Baithak & Evening Tea", hi: "चौपाल बैठक और सांध्य चाय" },
    desc: {
      en: "Every afternoon as the sun softens, charpois (rope cots) are laid out beneath the neem trees. Conversations range from crop prices and canal turns to historic folklore.",
      hi: "दोपहर ढलते ही नीम के नीचे चारपाइयां बिछ जाती हैं। फसलों के भाव, नहर की बारी और पुरानी कहानियों की चर्चा के साथ गरमा-गरम चाय का दौर चलता है।",
    },
    icon: "Coffee",
  },
  {
    title: { en: "Baisakhi & Harvest Rejoicing", hi: "बैसाखी एवं फसल कटाई का उल्लास" },
    desc: {
      en: "Celebrating the bounty of golden wheat. Village youth perform folk dances, sweets are prepared in every household, and thanksgiving prayers are offered for plentiful rains.",
      hi: "गेहूँ की पकी फसल का स्वागत। ढोल की थाप पर लोक नृत्य, घरों में पकवान और ईश्वर के प्रति कृतज्ञता की सामूहिक प्रार्थना।",
    },
    icon: "PartyPopper",
  },
  {
    title: { en: "Culinary Heritage of the Borderland", hi: "सरहदी ग्रामीण खानपान" },
    desc: {
      en: "Freshly churned white butter (makkhan), piping hot Bajre ki Roti, sarson ka saag, fresh kinnow juice, kair-sangri, and lassi served with boundless warmth.",
      hi: "घर का निकाला सफेद मक्खन, बाजरे की रोटी, सरसों का साग, ताजा किन्नू का रस, कैर-सांगरी और छाछ का अनूठा स्वाद।",
    },
    icon: "UtensilsCrossed",
  },
  {
    title: { en: "Canal Vara-Bandi Tradition", hi: "वारा-बंदी की अनुशासित परंपरा" },
    desc: {
      en: "A century-old cooperative tradition where water distribution turns are strictly and fairly honored day and night, demonstrating profound communal cooperation.",
      hi: "एक सदी पुरानी अनुशासित जल वितरण प्रणाली, जहाँ बिना किसी विवाद के दिन-रात समय पर अपनी बारी का पानी खेतों में लगाया जाता है।",
    },
    icon: "Compass",
  },
];

export const VILLAGE_GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: { en: "Lush Kinnow Orchards at Dawn", hi: "भोर के समय किन्नू के बाग" },
    category: "farming",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1200&q=80",
    caption: {
      en: "Sunlight filtering through morning dew on ripe Kinnow fruits in Kishanpura.",
      hi: "किशनपुरा में पके हुए किन्नू पर पड़ती सुबह की सुनहरी किरणें।",
    },
  },
  {
    id: "g2",
    title: { en: "Golden Mustard in Winter Bloom", hi: "सर्दियों में खिली पीली सरसों" },
    category: "nature",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
    caption: {
      en: "Endless yellow blankets that turn our rural fields into living paintings.",
      hi: "दूर-दूर तक फैले सरसों के खेत जो प्रकृति की मनमोहक छटा बिखेरते हैं।",
    },
  },
  {
    id: "g3",
    title: { en: "Canal Waterways & Farmland Edge", hi: "नहरी जलधारा और खेतों की मेढ़" },
    category: "nature",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    caption: {
      en: "The historic canal distributor lines that bring life to our soil.",
      hi: "मिट्टी में जान फूंकने वाली ऐतिहासिक नहर की शाखा।",
    },
  },
  {
    id: "g4",
    title: { en: "Centennial School Grounds", hi: "शताब्दी स्कूल प्रांगण" },
    category: "heritage",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
    caption: {
      en: "Generations of children have marched into these classrooms since 1926.",
      hi: "1926 से ज्ञान की अलख जगाता विद्यालय परिसर।",
    },
  },
  {
    id: "g5",
    title: { en: "Village Chaupal Gathering", hi: "चौपाल पर बुजुर्गों की बैठक" },
    category: "community",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    caption: {
      en: "Wisdom, companionship, and shared laughs under the village canopy.",
      hi: "बरगद की छांव में आत्मीयता, अनुभव और भाईचारे की मिसाल।",
    },
  },
  {
    id: "g6",
    title: { en: "Wheat Harvest Festival", hi: "गेहूँ कटाई का त्योहार" },
    category: "farming",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    caption: {
      en: "Combining traditional farm labor with modern harvesters during the bumper harvest.",
      hi: "बंपर पैदावार के समय खेतों में उमंग और आधुनिक कटाई।",
    },
  },
];

export const DIRECTORY_CONTACTS: DirectoryContact[] = [
  {
    role: { en: "Gram Panchayat Office", hi: "ग्राम पंचायत कार्यालय" },
    name: { en: "Sarpanch & Village Administration", hi: "सरपंच एवं ग्राम विकास अधिकारी" },
    service: { en: "Civic certificates, land records, PM-Awas, road works", hi: "नागरिक प्रमाण पत्र, पट्टे, विकास कार्य" },
    timing: "10:00 AM – 5:00 PM (Mon–Fri)",
    location: { en: "Panchayat Bhawan, Main Road", hi: "पंचायत भवन, मुख्य मार्ग" },
    contactType: "panchayat",
    icon: "Building2",
  },
  {
    role: { en: "Primary Health Center", hi: "राजकीय प्राथमिक स्वास्थ्य केंद्र" },
    name: { en: "Medical Officer In-Charge", hi: "चिकित्सा अधिकारी एवं स्टाफ" },
    service: { en: "OPD, 24/7 Maternity, Emergency Aid, Free Medicines", hi: "ओपीडी, 24 घंटे आपातकालीन व प्रसूति सेवा" },
    timing: "24x7 Emergency / OPD 8:00 AM – 2:00 PM",
    location: { en: "Hospital Road, Kishanpura", hi: "अस्पताल रोड, किशनpura" },
    contactType: "medical",
    icon: "Stethoscope",
  },
  {
    role: { en: "GSSS Kishanpura School", hi: "राजकीय उच्च माध्यमिक विद्यालय" },
    name: { en: "Principal & Academic Staff", hi: "प्रधानाचार्य एवं शिक्षक गण" },
    service: { en: "Grades 1 to 12, Science, Arts & Agriculture streams", hi: "कक्षा 1 से 12, विज्ञान, कला एवं कृषि संकाय" },
    timing: "8:00 AM – 2:00 PM (Working Days)",
    location: { en: "School Campus, Ward 4", hi: "स्कूल परिसर, वार्ड 4" },
    contactType: "education",
    icon: "GraduationCap",
  },
  {
    role: { en: "Kishanpura Branch Post Office", hi: "शाखा डाकघर (पिन 335062)" },
    name: { en: "Branch Postmaster (BPM)", hi: "शाखा डाकपाल" },
    service: { en: "Speed Post, Savings Bank, Sukanya Samriddhi, IPPB", hi: "डाक, पार्सल, बचत खाता एवं डीबीटी" },
    timing: "9:00 AM – 1:00 PM (Mon–Sat)",
    location: { en: "Near Old Bazar, Kishanpura", hi: "पुराने बाजार के पास, किशनपुरा" },
    contactType: "postal",
    icon: "Mail",
  },
  {
    role: { en: "Krishi Seva & Cooperative", hi: "ग्राम सेवा सहकारी समिति" },
    name: { en: "Agricultural Officer / Samiti Manager", hi: "समिति व्यवस्थापक व कृषि पर्यवेक्षक" },
    service: { en: "Subsidized seeds, fertilizer, soil testing, tractor implements", hi: "उन्नत बीज, खाद, मृदा परीक्षण व कृषि उपकरण" },
    timing: "9:30 AM – 4:30 PM",
    location: { en: "Mandi Road, Kishanpura", hi: "मंडी रोड, किशनपुरा" },
    contactType: "agriculture",
    icon: "Tractor",
  },
];

export const VISITOR_GUIDE = {
  bestSeason: {
    en: "October to March (Autumn to Spring). The weather is pleasantly crisp, mustard fields are in radiant yellow bloom, and Kinnow orchards are heavy with juicy fruit.",
    hi: "अक्टूबर से मार्च का समय सबसे सुहावना होता है। सरसों के खेत खिले होते हैं और बागों में मीठे किन्नू लदे होते हैं।",
  },
  distanceList: [
    { from: "Sadulshahar", distance: "14 km", time: "18 mins by car / bus" },
    { from: "Sangaria", distance: "22 km", time: "25 mins" },
    { from: "Sri Ganganagar (District HQ)", distance: "38 km", time: "45 mins" },
    { from: "Hanumangarh", distance: "44 km", time: "50 mins" },
    { from: "Bathinda (Punjab)", distance: "85 km", time: "1 hr 30 mins" },
    { from: "New Delhi", distance: "390 km", time: "6.5 hrs via NH-9 / NH-52" },
  ],
  travelTips: [
    {
      title: { en: "Canal Walk at Sunrise", hi: "सूर्योदय के समय नहरी सैर" },
      desc: {
        en: "Walk along the canal dykes at 6:30 AM to watch peacocks dancing in the mustard fields and mist rising from the waters.",
        hi: "सुबह 6:30 बजे नहर की पटरी पर टहलें। सरसों के खेतों में मोर और पानी पर उठती धुंध का मनोहारी दृश्य देखें।",
      },
    },
    {
      title: { en: "Taste Fresh Kinnow Right from the Tree", hi: "पेड़ से ताजा किन्नू का स्वाद" },
      desc: {
        en: "Visit a friendly orchard with local farmers; savor fruit warmed by the winter sun with zero artificial processing.",
        hi: "स्थानीय किसानों के साथ बाग में जाएं और धूप में पके ताजे किन्नू का अद्भुत स्वाद लें।",
      },
    },
    {
      title: { en: "Respect Village Etiquette", hi: "ग्रामीण मर्यादा व सम्मान" },
      desc: {
        en: "A warm 'Ram Ram' or 'Sat Sri Akal' greets everyone you meet. Village hospitality is legendary; you'll rarely leave a home without tea.",
        hi: "मिलने वाले हर व्यक्ति को 'राम-राम' या 'सत श्री अकाल' कहें। यहाँ की खातिरदारी ऐसी है कि बिना चाय पिए कोई नहीं जाने देता।",
      },
    },
  ],
};
