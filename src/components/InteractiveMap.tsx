import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import L from "leaflet";
import {
  MapPin,
  Layers,
  Compass,
  ExternalLink,
  Info,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Navigation,
  Copy,
  Check,
  Code2,
  Maximize2,
  ZoomIn,
  ZoomOut,
  SlidersHorizontal,
  ChevronRight,
  Eye,
  RefreshCw,
} from "lucide-react";
import {
  MAP_CONFIG,
  VillagePinLocation,
  getGoogleMapsEmbedUrl,
  getGoogleMapsDirectionsUrl,
  getGoogleMapsSearchUrl,
  generatePinCodeSnippet,
} from "../config/mapConfig";

interface InteractiveMapProps {
  currentLang: "en" | "hi";
  theme: "dark" | "light";
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  currentLang,
  theme,
}) => {
  // Map Provider View: 'google' (Official Google Maps - primary) or 'geospatial' (Leaflet Canvas)
  const [mapProvider, setMapProvider] = useState<"google" | "geospatial">(
    "google",
  );

  // Google Map type: 'k' = Satellite, 'm' = Roadmap / Terrain
  const [googleMapType, setGoogleMapType] = useState<"k" | "m">("k");

  // Google Map interactive zoom control
  const [zoomLevel, setZoomLevel] = useState<number>(MAP_CONFIG.defaultZoom);

  // Active category filter
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Selected landmark / pin
  const [selectedPin, setSelectedPin] = useState<VillagePinLocation>(
    MAP_CONFIG.landmarks[0],
  );

  // Dynamic coordinates currently displayed on map (allows live testing in UI)
  const [activeCoords, setActiveCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: MAP_CONFIG.coordinates.lat,
    lng: MAP_CONFIG.coordinates.lng,
  });

  // Pin customizer drawer / modal
  const [showPinTester, setShowPinTester] = useState(false);
  const [customLatInput, setCustomLatInput] = useState(
    MAP_CONFIG.coordinates.lat.toString(),
  );
  const [customLngInput, setCustomLngInput] = useState(
    MAP_CONFIG.coordinates.lng.toString(),
  );
  const [testPinApplied, setTestPinApplied] = useState(false);

  // Clipboard copy states
  const [copiedCoords, setCopiedCoords] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Leaflet refs
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const baseLayersRef = useRef<{
    satellite: L.TileLayer;
    standard: L.TileLayer;
  } | null>(null);
  const [leafletMapType, setLeafletMapType] = useState<
    "satellite" | "standard"
  >("satellite");

  const categories = [
    { id: "gpoffice", label: { en: "Gram Panchayat", hi: "ग्राम पंचायत" } },
    { id: "patwar", label: { en: "Patwar Ghar", hi: "पटवार घर" } },
    { id: "ksc", label: { en: "Kisan Seva Center", hi: "किसान सेवा केंद्र" } },
    {
      id: "gphc",
      label: {
        en: "Govt. Pr. Health Center",
        hi: "रा. प्राथमिक स्वास्थ्य केंद्र",
      },
    },
    {
      id: "gah",
      label: { en: "Govt. Animal Hostipal", hi: "रा. पशु चिकित्सालय" },
    },
    {
      id: "phed",
      label: {
        en: "Pub. Health Engineering Department",
        hi: "जन स्वास्थ्य अभियांत्रिकी विभाग",
      },
    },
    { id: "gsss", label: { en: "GSSS", hi: "रा.उ.मा. विद्यालय" } },
    { id: "mgsss", label: { en: "MGSSS", hi: "म.गाँ.रा.उ.मा. विद्यालय" } },
    {
      id: "svm",
      label: {
        en: "SVM Sr Sec School",
        hi: "सरस्वती विद्या मंदिर उ. मा. विद्यालय",
      },
    },
    {
      id: "tps",
      label: { en: "Tagore Public UPS", hi: "टैगोर उ. प्रा. विद्यालय" },
    },
    {
      id: "rps",
      label: {
        en: "Rameshwaram Public UPS",
        hi: "रामेश्वरम उ. प्रा. विद्यालय",
      },
    },
    { id: "memitra", label: { en: "Manoj E-mitra", hi: "मनोज ई-मित्र" } },
    { id: "nemitra", label: { en: "Naresh E-mitra", hi: "नरेश ई-मित्र" } },
    { id: "demitra", label: { en: "Dolatram E-mitra", hi: "दोलतराम ई-मित्र" } },
    { id: "bstand", label: { en: "Bus Stand", hi: "बस स्टैन्ड" } },
    { id: "rplaces", label: { en: "Religious Places", hi: "धार्मिक स्थल" } },
    { id: "others", label: { en: "Other", hi: "अन्य" } },
  ];

  const filteredLandmarks =
    activeCategory === "gpoffice"
      ? MAP_CONFIG.landmarks
      : MAP_CONFIG.landmarks.filter((p) => {
          if (activeCategory === "gsss")
            return p.category === "gsss" || p.category === "phed";
          return p.category === activeCategory;
        });

  const handleCopyCoords = () => {
    const text = `${activeCoords.lat.toFixed(7)}, ${activeCoords.lng.toFixed(7)}`;
    navigator.clipboard.writeText(text);
    setCopiedCoords(true);
    setTimeout(() => setCopiedCoords(false), 2200);
  };

  const handleCopySnippet = () => {
    const snippet = generatePinCodeSnippet(
      parseFloat(customLatInput) || activeCoords.lat,
      parseFloat(customLngInput) || activeCoords.lng,
    );
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2200);
  };

  const handleApplyCustomPin = (e: React.FormEvent) => {
    e.preventDefault();
    const lat = parseFloat(customLatInput);
    const lng = parseFloat(customLngInput);
    if (!isNaN(lat) && !isNaN(lng)) {
      setActiveCoords({ lat, lng });
      setTestPinApplied(true);
      setTimeout(() => setTestPinApplied(false), 3000);
    }
  };

  const handleResetToDefault = () => {
    setActiveCoords({
      lat: MAP_CONFIG.coordinates.lat,
      lng: MAP_CONFIG.coordinates.lng,
    });
    setCustomLatInput(MAP_CONFIG.coordinates.lat.toString());
    setCustomLngInput(MAP_CONFIG.coordinates.lng.toString());
    setZoomLevel(MAP_CONFIG.defaultZoom);
  };

  const handleSelectPin = (pin: VillagePinLocation) => {
    setSelectedPin(pin);
    setActiveCoords({ lat: pin.lat, lng: pin.lng });
    setCustomLatInput(pin.lat.toString());
    setCustomLngInput(pin.lng.toString());
    if (mapProvider === "geospatial" && mapInstanceRef.current) {
      mapInstanceRef.current.setView([pin.lat, pin.lng], 16, {
        animate: true,
        duration: 0.8,
      });
    }
  };

  // Leaflet custom marker generator
  const createCustomIcon = (category: string, isSelected: boolean) => {
    let color = "#10B981";
    if (category === "heritage") color = "#F59E0B";
    if (category === "water") color = "#06B6D4";
    if (category === "civic") color = "#8B5CF6";
    if (category === "health") color = "#F43F5E";
    if (category === "culture") color = "#F97316";
    if (category === "agriculture") color = "#10B981";

    const size = isSelected ? 42 : 34;

    const html = `
      <div style="position: relative; width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <div style="
          width: ${size}px; 
          height: ${size}px; 
          background: ${color}; 
          border: 2px solid #FFFFFF; 
          border-radius: 50% 50% 50% 0; 
          transform: rotate(-45deg); 
          box-shadow: 0 0 16px ${color}90, 0 4px 10px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        "></div>
        <div style="
          position: absolute; 
          width: ${size * 0.38}px; 
          height: ${size * 0.38}px; 
          background: #FFFFFF; 
          border-radius: 50%;
          top: ${size * 0.22}px;
          left: ${size * 0.31}px;
        "></div>
      </div>
    `;

    return L.divIcon({
      html,
      className: "custom-village-pin",
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size],
    });
  };

  // Initialize Leaflet if user toggles to geospatial explorer
  useEffect(() => {
    if (mapProvider !== "geospatial") return;
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [activeCoords.lat, activeCoords.lng],
        zoom: zoomLevel,
        maxZoom: 18,
        minZoom: 12,
        scrollWheelZoom: false,
      });

      const satellite = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "Tiles &copy; Esri &mdash; Kishanpura, Rajasthan",
          maxZoom: 18,
        },
      );

      const standard = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
          maxZoom: 19,
        },
      );

      satellite.addTo(map);
      baseLayersRef.current = { satellite, standard };
      mapInstanceRef.current = map;
    }
  }, [mapProvider, activeCoords, zoomLevel]);

  // Update Leaflet layer switcher
  useEffect(() => {
    if (mapProvider !== "geospatial") return;
    const map = mapInstanceRef.current;
    const layers = baseLayersRef.current;
    if (!map || !layers) return;

    if (leafletMapType === "satellite") {
      if (map.hasLayer(layers.standard)) map.removeLayer(layers.standard);
      if (!map.hasLayer(layers.satellite)) map.addLayer(layers.satellite);
    } else {
      if (map.hasLayer(layers.satellite)) map.removeLayer(layers.satellite);
      if (!map.hasLayer(layers.standard)) map.addLayer(layers.standard);
    }
  }, [leafletMapType, mapProvider]);

  // Update Leaflet markers
  useEffect(() => {
    if (mapProvider !== "geospatial") return;
    const map = mapInstanceRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => map.removeLayer(m));
    markersRef.current = [];

    filteredLandmarks.forEach((pin) => {
      const isSelected = selectedPin.id === pin.id;
      const marker = L.marker([pin.lat, pin.lng], {
        icon: createCustomIcon(pin.category, isSelected),
        title: pin.name[currentLang],
      });

      marker.on("click", () => {
        handleSelectPin(pin);
      });

      marker.addTo(map);
      markersRef.current.push(marker);
    });
  }, [filteredLandmarks, selectedPin, currentLang, mapProvider]);

  // Active Google Maps embed URL
  const googleMapsUrl = getGoogleMapsEmbedUrl(
    activeCoords.lat,
    activeCoords.lng,
    zoomLevel,
    googleMapType,
  );

  return (
    <motion.section
      id="map"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 relative overflow-hidden border-t ${
        theme === "dark" ? "border-white/10" : "border-slate-200"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            {/* <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1.5 font-mono">
              <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
              <span>
                {currentLang === 'en'
                  ? 'Official Google Maps Geolocation & Pin System'
                  : 'गूगल मैप्स आधिकारिक भू-स्थान एवं पिन प्रणाली'}
              </span>
            </div> */}
            <h2
              className={`text-xl font-extrabold font-display-modern ${
                theme === "dark" ? "text-white" : "text-slate-950"
              }`}
            >
              {currentLang === "en"
                ? "Village Location and Services"
                : "किशनपुरा डिजिटल मानचित्र"}
            </h2>
            {/* <p
              className={`text-xs sm:text-sm mt-1 max-w-xl ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {currentLang === "en"
                ? "High-precision satellite view centered at Kishanpura (Utrada). Easily test and update custom pin coordinates directly in code."
                : "किशनपुरा (उतरादा) का हाई-रिज़ॉल्यूशन सैटेलाइट दृश्य। आप कोडिंग में कभी भी सही पिन लोकेशन आसानी से बदल सकते हैं।"}
            </p> */}
          </div>
        </motion.div>

        {/* Pin Location Inspector & Live Tester Drawer (AnimatePresence) */}
        <AnimatePresence>
          {showPinTester && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.98 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`mb-8 rounded-3xl border p-5 sm:p-6 backdrop-blur-2xl shadow-2xl overflow-hidden relative ${
                theme === "dark"
                  ? "bg-slate-900/95 border-amber-500/40"
                  : "bg-white border-amber-500/40 shadow-xl"
              }`}
            >
              <div
                className={`flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4 border-b ${
                  theme === "dark" ? "border-white/10" : "border-slate-200"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-500 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <Code2 className="w-4 h-4" />
                    <span>PIN LOCATION INSPECTOR & LIVE TESTER</span>
                  </div>
                  <h3
                    className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    {currentLang === "en"
                      ? "Test & Preview New Coordinates on Google Maps"
                      : "गूगल मैप्स पर नए निर्देशांक तुरंत टेस्ट करें"}
                  </h3>
                  <p
                    className={`text-xs mt-0.5 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
                  >
                    {currentLang === "en"
                      ? "Type any Latitude & Longitude below to preview it live on the map. Copy the ready code snippet to update your config file."
                      : "नीचे अक्षांश और देशांतर दर्ज करके मैप पर लाइव देखें और फिर कोड कॉपी करके `mapConfig.ts` में पेस्ट करें।"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySnippet}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                  >
                    {copiedSnippet ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>
                      {copiedSnippet ? "Copied Code!" : "Copy Code Snippet"}
                    </span>
                  </button>

                  <button
                    onClick={() => setShowPinTester(false)}
                    className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                      theme === "dark"
                        ? "bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Form & Live Code Snippet Display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-5 items-center">
                {/* Inputs for testing pin */}
                <form
                  onSubmit={handleApplyCustomPin}
                  className="lg:col-span-6 space-y-3"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        className={`block text-[11px] font-mono mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Latitude (e.g. 29.8885022)
                      </label>
                      <input
                        type="text"
                        value={customLatInput}
                        onChange={(e) => setCustomLatInput(e.target.value)}
                        placeholder="29.8885022"
                        className={`w-full px-3 py-2 rounded-xl text-xs font-mono transition-colors focus:outline-none focus:border-amber-400 border ${
                          theme === "dark"
                            ? "bg-black/60 border-white/20 text-emerald-300"
                            : "bg-slate-50 border-slate-300 text-slate-900 focus:bg-white"
                        }`}
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-[11px] font-mono mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                      >
                        Longitude (e.g. 74.2898204)
                      </label>
                      <input
                        type="text"
                        value={customLngInput}
                        onChange={(e) => setCustomLngInput(e.target.value)}
                        placeholder="74.2898204"
                        className={`w-full px-3 py-2 rounded-xl text-xs font-mono transition-colors focus:outline-none focus:border-amber-400 border ${
                          theme === "dark"
                            ? "bg-black/60 border-white/20 text-emerald-300"
                            : "bg-slate-50 border-slate-300 text-slate-900 focus:bg-white"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>
                        {currentLang === "en"
                          ? "Preview Pin On Map"
                          : "मैप पर टेस्ट करें"}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={handleResetToDefault}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all border ${
                        theme === "dark"
                          ? "bg-white/10 hover:bg-white/15 text-slate-300 border-white/10"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                      }`}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>
                        {currentLang === "en"
                          ? "Reset to Default Pin"
                          : "डिफ़ॉल्ट पर रीसेट"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {testPinApplied && (
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-emerald-500 font-semibold flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Google Map Updated!</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </form>

                {/* Where to edit in code instructions */}
                <div
                  className={`lg:col-span-6 p-4 rounded-2xl border font-mono text-[11px] ${
                    theme === "dark"
                      ? "bg-black/70 border-white/10 text-slate-300"
                      : "bg-slate-900 border-slate-800 text-slate-200 shadow-md"
                  }`}
                >
                  <div className="text-amber-400 font-bold mb-1 flex items-center justify-between">
                    <span>// FILE: src/config/mapConfig.ts</span>
                    <span className="text-[10px] text-slate-400">
                      LINE 33-36
                    </span>
                  </div>
                  <pre className="text-emerald-300 leading-relaxed overflow-x-auto">
                    {`coordinates: {
                        lat: ${parseFloat(customLatInput) || activeCoords.lat}, // 📍 Update latitude here
                        lng: ${parseFloat(customLngInput) || activeCoords.lng}, // 📍 Update longitude here
                      },`}
                  </pre>
                  <p className="text-[10px] text-slate-400 mt-2 font-sans">
                    ✨ After updating `mapConfig.ts`, the official Google Map,
                    directions, and pins automatically sync everywhere.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filter Pills (Fluid Staggered Animation) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin overflow-auto">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "text-white"
                    : theme === "dark"
                      ? "bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10"
                      : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeMapCategory"
                    className="absolute inset-0 bg-emerald-500 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label[currentLang]}</span>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-3">
          <AnimatePresence mode="wait">
            {selectedPin && (
              <motion.div
                key={selectedPin.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`rounded-3xl backdrop-blur-2xl border shadow-2xl p-5 space-y-3 relative overflow-hidden ${
                  theme === "dark"
                    ? "bg-slate-900/90 border-white/15"
                    : "bg-white border-slate-200 shadow-slate-200/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/30">
                    {selectedPin.category}
                  </span>
                  <span
                    className={`text-[11px] font-mono ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {selectedPin.lat.toFixed(4)}° N,{" "}
                    {selectedPin.lng.toFixed(4)}° E
                  </span>
                </div>

                <div>
                  <h3
                    className={`text-lg font-bold leading-snug ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {selectedPin.name[currentLang]}
                  </h3>
                </div>

                <p
                  className={`text-xs leading-relaxed ${
                    theme === "dark" ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {selectedPin.description[currentLang]}
                </p>

                {selectedPin.historicalNote && (
                  <div
                    className={`p-3 rounded-xl border text-xs ${
                      theme === "dark"
                        ? "bg-amber-500/10 border-amber-500/30 text-amber-200"
                        : "bg-amber-50 border-amber-200 text-amber-900"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-1.5 font-semibold mb-0.5 ${
                        theme === "dark" ? "text-amber-400" : "text-amber-700"
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>
                        {currentLang === "en"
                          ? "Centennial Archive"
                          : "ऐतिहासिक संदर्भ"}
                      </span>
                    </div>
                    <p>{selectedPin.historicalNote[currentLang]}</p>
                  </div>
                )}

                {/* Action links */}
                <div
                  className={`pt-3 border-t flex items-center justify-between ${
                    theme === "dark" ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <a
                    href={getGoogleMapsDirectionsUrl(
                      selectedPin.lat,
                      selectedPin.lng,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-500 hover:text-emerald-600 flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>
                      {currentLang === "en" ? "Navigate Here" : "दिशा-निर्देश"}
                    </span>
                  </a>

                  <a
                    href={getGoogleMapsSearchUrl(
                      selectedPin.lat,
                      selectedPin.lng,
                      selectedPin.name.en,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                      theme === "dark"
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>Google Place</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Map Presentation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Right Column: Selected Landmark Card & Fast Pin Switcher */}
            <div className="lg:col-span-4 space-y-4">
              {/* Landmark Fast-Select Pin List (Fluid Enter/Exit) */}
              <div
                className={`p-4 rounded-2xl border shadow-lg ${
                  theme === "dark"
                    ? "bg-slate-900/80 border-white/10"
                    : "bg-white border-slate-200 shadow-slate-200/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2 px-1">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                      theme === "dark" ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {currentLang === "en"
                      ? "// VILLAGE PINS LIST"
                      : "// ग्राम पिन सूची"}
                  </span>
                  <span className="text-[10px] text-emerald-500 font-mono font-semibold">
                    {filteredLandmarks.length} Pins
                  </span>
                </div>

                <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                  <AnimatePresence>
                    {filteredLandmarks.map((pin) => {
                      const isSelected = selectedPin.id === pin.id;
                      return (
                        <motion.button
                          key={pin.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          whileHover={{ x: 3 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSelectPin(pin)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 font-bold border border-emerald-500/40 shadow-xs"
                              : theme === "dark"
                                ? "hover:bg-white/5 text-slate-300"
                                : "hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          <span className="truncate pr-2">
                            {pin.name[currentLang]}
                          </span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-emerald-500" : theme === "dark" ? "text-slate-600" : "text-slate-400"}`}
                          />
                        </motion.button>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            {/* Right Column: Interactive Map Frame */}
            {/* Quick Action Toolbar with Animated Buttons */}
            <div className="lg:col-span-8 space-y-4 relative">
              {/* Copy Coordinates Button */}
              {/* Map Control Bar & Category Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                {/* Provider Toggle (Google Maps vs Landmark Explorer) */}
                <div
                  className={`flex items-center gap-1.5 p-1.5 rounded-2xl border backdrop-blur-xl shadow-lg ${
                    theme === "dark"
                      ? "bg-slate-900/90 border-white/15"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setMapProvider("google")}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      mapProvider === "google"
                        ? "text-white"
                        : theme === "dark"
                          ? "text-slate-400 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {mapProvider === "google" && (
                      <motion.div
                        layoutId="activeMapProvider"
                        className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Google Maps Live</span>
                    </span>
                  </button>

                  <button
                    onClick={() => setMapProvider("geospatial")}
                    className={`relative px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      mapProvider === "geospatial"
                        ? "text-white"
                        : theme === "dark"
                          ? "text-slate-400 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {mapProvider === "geospatial" && (
                      <motion.div
                        layoutId="activeMapProvider"
                        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Geospatial POI Explorer</span>
                    </span>
                  </button>
                </div>

                {/* Sub-controls: Satellite vs Map + Interactive Zoom */}
                <div className="flex items-center gap-2">
                  {mapProvider === "google" ? (
                    <div
                      className={`flex items-center gap-1 p-1.5 rounded-2xl border backdrop-blur-xl text-xs ${
                        theme === "dark"
                          ? "bg-slate-900/90 border-white/15"
                          : "bg-white border-slate-200 shadow-md"
                      }`}
                    >
                      <button
                        onClick={() => setGoogleMapType("k")}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                          googleMapType === "k"
                            ? "bg-orange-500 text-white shadow-xs"
                            : theme === "dark"
                              ? "text-slate-400 hover:text-white"
                              : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Satellite
                      </button>
                      <button
                        onClick={() => setGoogleMapType("m")}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                          googleMapType === "m"
                            ? "bg-orange-500 text-white shadow-xs"
                            : theme === "dark"
                              ? "text-slate-400 hover:text-white"
                              : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Roadmap
                      </button>

                      {/* Direct Zoom Controls */}
                      <div
                        className={`h-4 w-px mx-1 ${theme === "dark" ? "bg-white/20" : "bg-slate-200"}`}
                      />
                      <button
                        onClick={() =>
                          setZoomLevel((prev) => Math.min(prev + 1, 19))
                        }
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          theme === "dark"
                            ? "text-slate-300 hover:text-white hover:bg-white/10"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                        title="Zoom In"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                      <span
                        className={`text-[10px] font-mono px-1 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
                      >
                        {zoomLevel}z
                      </span>
                      <button
                        onClick={() =>
                          setZoomLevel((prev) => Math.max(prev - 1, 11))
                        }
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          theme === "dark"
                            ? "text-slate-300 hover:text-white hover:bg-white/10"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                        }`}
                        title="Zoom Out"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`flex items-center gap-1 p-1.5 rounded-2xl border backdrop-blur-xl text-xs ${
                        theme === "dark"
                          ? "bg-slate-900/90 border-white/15"
                          : "bg-white border-slate-200 shadow-md"
                      }`}
                    >
                      <button
                        onClick={() => setLeafletMapType("satellite")}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                          leafletMapType === "satellite"
                            ? "bg-emerald-600 text-white shadow-xs"
                            : theme === "dark"
                              ? "text-slate-400 hover:text-white"
                              : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Esri Satellite
                      </button>
                      <button
                        onClick={() => setLeafletMapType("standard")}
                        className={`px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                          leafletMapType === "standard"
                            ? "bg-emerald-600 text-white shadow-xs"
                            : theme === "dark"
                              ? "text-slate-400 hover:text-white"
                              : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Dark Grid
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="absolute right-1 top-5 z-50 gap-x-4">
                  <div className="flex flex-col gap-y-2">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopyCoords}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-xl border items-center gap-2 backdrop-blur-md shadow-md cursor-pointer transition-all ${
                        theme === "dark"
                          ? "bg-slate-900/80 hover:bg-slate-800 text-white border-white/15"
                          : "bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-xs"
                      }`}
                      title="Copy active GPS coordinates"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copiedCoords ? (
                          <motion.span
                            key="copied"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            className="flex items-center gap-1.5 text-emerald-500"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>GPS Copied!</span>
                          </motion.span>
                        ) : (
                          <motion.span
                            key="copy"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            className={`flex items-center gap-1.5 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                          >
                            <Copy className="w-3.5 h-3.5 text-cyan-500" />
                            <span>
                              {activeCoords.lat.toFixed(4)}°,{" "}
                              {activeCoords.lng.toFixed(4)}°
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    {/* Directions Launcher */}
                    <motion.a
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 0 20px rgba(16,185,129,0.4)",
                      }}
                      whileTap={{ scale: 0.96 }}
                      href={getGoogleMapsDirectionsUrl(
                        activeCoords.lat,
                        activeCoords.lng,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>
                        {currentLang === "en" ? "Directions" : "दिशा-निर्देश"}
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>
              <motion.div
                layout
                className={`lg:col-span-8 rounded-3xl overflow-hidden shadow-2xl border relative ${
                  theme === "dark"
                    ? "border-white/15 bg-slate-900"
                    : "border-slate-200 bg-white shadow-slate-200/50"
                }`}
              >
                <AnimatePresence mode="wait">
                  {mapProvider === "google" ? (
                    <motion.div
                      key={`google-${activeCoords.lat}-${activeCoords.lng}-${googleMapType}-${zoomLevel}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-[480px] sm:h-[540px] relative bg-slate-950"
                    >
                      {/* Google Maps Official Lightweight Embed */}
                      <iframe
                        title="Kishanpura Utrada Google Maps Live"
                        src={googleMapsUrl}
                        width="100%"
                        height="100%"
                        style={{
                          border: 0,
                          filter:
                            theme === "dark" && googleMapType === "m"
                              ? "invert(90%) hue-rotate(180deg)"
                              : "none",
                        }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      />

                      {/* Real-time Pin Radar Ping Overlay */}
                      <div className="absolute top-4 left-4 z-10 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-[11px] font-mono text-white flex items-center gap-2 shadow-xl pointer-events-none">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span>
                          Google Maps Live · {activeCoords.lat.toFixed(4)}° N,{" "}
                          {activeCoords.lng.toFixed(4)}° E
                        </span>
                      </div>

                      {/* Open in Google Maps Overlay Button */}
                      <div className="absolute bottom-4 right-4 z-10">
                        <a
                          href={MAP_CONFIG.googleMapsShortUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-xl transition-all"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                          <span>Full Google Maps App</span>
                          <ExternalLink className="w-3 h-3 opacity-70" />
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="geospatial-map"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-[480px] sm:h-[540px] relative bg-slate-950"
                    >
                      {/* Leaflet Canvas */}
                      <div ref={mapContainerRef} className="w-full h-full" />

                      {/* Geospatial HUD Badge */}
                      <div className="absolute top-4 left-4 z-20 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-[11px] font-mono text-emerald-400 flex items-center gap-2 shadow-xl pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>POI Vector Canvas</span>
                      </div>

                      <div className="absolute bottom-4 left-4 z-20">
                        <button
                          onClick={handleResetToDefault}
                          className="px-3 py-1.5 rounded-xl bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-xl transition-all cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3 text-emerald-400" />
                          <span>Recenter Pin</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
