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
  category: 'primary' | 'heritage' | 'agriculture' | 'water' | 'civic' | 'health' | 'culture';
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
      id: "pin-center",
      name: {
        en: "Kishanpura Village Center & Banyan Chaupal",
        hi: "किशनपुरा केंद्रीय ग्राम चौपाल व बरगद",
      },
      category: "primary",
      lat: 29.8885022,
      lng: 74.2898204,
      description: {
        en: "The historic social epicenter where village elders and panchayat gatherings convene under ancient banyans.",
        hi: "गाँव का ऐतिहासिक हृदय स्थल जहाँ सदियों पुराने बरगद की छाँव में ग्रामीण चौपाल और उत्सव आयोजित होते हैं।",
      },
    },
    {
      id: "pin-school",
      name: {
        en: "GSSS Kishanpura Uttaradha (Centenary 1926-2026)",
        hi: "राजकीय उच्च माध्यमिक विद्यालय (स्थापना 1926)",
      },
      category: "heritage",
      lat: 29.88995,
      lng: 74.2915,
      description: {
        en: "Centenary educational beacon established in 1926, educating five generations across northern Rajasthan.",
        hi: "1926 में स्थापित गौरवशाली शताब्दी विद्यालय, जिसने पाँच पीढ़ियों को गुणवत्तापूर्ण शिक्षा प्रदान की है।",
      },
      historicalNote: {
        en: "Celebrating 100 continuous years of free public education in 2026.",
        hi: "2026 में सतत निःशुल्क सार्वजनिक शिक्षा के 100 वर्ष पूर्ण।",
      },
    },
    {
      id: "pin-panchayat",
      name: {
        en: "Gram Panchayat Bhawan & E-Mitra Kendra",
        hi: "ग्राम पंचायत भवन एवं ई-मित्र सेवा केंद्र",
      },
      category: "civic",
      lat: 29.8872,
      lng: 74.2885,
      description: {
        en: "Local democratic self-governance administrative headquarters serving citizens with government schemes.",
        hi: "गाँव का प्रशासनिक केंद्र जहाँ नागरिक सेवाएँ, डिजिटल अभिलेख व ग्रामीण विकास कार्य संचालित होते हैं।",
      },
    },
    {
      id: "pin-canal",
      name: {
        en: "Gang Canal Irrigation Distributary",
        hi: "गंग नहर जल वितरण प्रणाली व पक्की डिग्गी",
      },
      category: "water",
      lat: 29.8912,
      lng: 74.2868,
      description: {
        en: "The life-giving arterial Himalayan canal channel irrigating over 1,450 hectares under Vara-Bandi turns.",
        hi: "गाँव की जीवनदायिनी नहरी प्रणाली जिसके अनुशासित जल-वितरण से 1,450 हेक्टेयर भूमि सिंचित होती है।",
      },
    },
    {
      id: "pin-orchards",
      name: {
        en: "Kinnow Mandarin Citrus Orchards Belt",
        hi: "किन्नू संतरा बागवानी क्षेत्र",
      },
      category: "agriculture",
      lat: 29.8858,
      lng: 74.2934,
      description: {
        en: "Lush horticultural orchards yielding sweet, juicy Kinnows exported across India every winter.",
        hi: "सर्दियों में रसीले, मीठे किन्नू की बंपर पैदावार वाले आधुनिक ड्रिप-इरिगेटेड बाग।",
      },
    },
    {
      id: "pin-phc",
      name: {
        en: "Primary Health Centre (PHC Kishanpura)",
        hi: "प्राथमिक स्वास्थ्य केंद्र (24x7 आपातकालीन)",
      },
      category: "health",
      lat: 29.8891,
      lng: 74.2942,
      description: {
        en: "Village healthcare hub providing 24x7 medical attendance, maternal welfare, and vaccination.",
        hi: "गाँव का मुख्य चिकित्सा केंद्र जो 24 घंटे प्राथमिक उपचार, टीकाकरण और मातृत्व सेवाएँ उपलब्ध कराता है।",
      },
    },
    {
      id: "pin-temple",
      name: {
        en: "Sri Ram Mandir & Community Dharamshala",
        hi: "श्री राम मंदिर एवं सार्वजनिक धर्मशाला",
      },
      category: "culture",
      lat: 29.8879,
      lng: 74.2908,
      description: {
        en: "Spiritual center and gathering hall for community celebrations, Ramlila, and harvest kirtans.",
        hi: "ग्राम का पावन आस्था स्थल जहाँ सामूहिक उत्सव, जागरण व सत्संग का आयोजन होता है।",
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
  mapType: 'k' | 'm' = 'k' // 'k' = Satellite, 'm' = Roadmap
): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=${zoom}&t=${mapType}&output=embed`;
}

/**
 * Generates a direct Google Maps Directions URL from user's current location
 */
export function getGoogleMapsDirectionsUrl(
  lat: number = MAP_CONFIG.coordinates.lat,
  lng: number = MAP_CONFIG.coordinates.lng
): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

/**
 * Generates a full Google Maps web search link
 */
export function getGoogleMapsSearchUrl(
  lat: number = MAP_CONFIG.coordinates.lat,
  lng: number = MAP_CONFIG.coordinates.lng,
  label: string = MAP_CONFIG.villageName
): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}+(${encodeURIComponent(label)})`;
}

/**
 * Helper to generate code snippet for user to copy when updating pins
 */
export function generatePinCodeSnippet(lat: number, lng: number): string {
  return `// Update in src/config/mapConfig.ts:\ncoordinates: {\n  lat: ${lat},\n  lng: ${lng},\n},`;
}
