// Gold Digger AI Investment Radio — Home.jsx
// Unified single-page app combining Briefing, Jarvis, Web3Studio, Shows
// Last updated: 2026-04-11

import { useState, useEffect, useRef } from "react";

const GEMINI_KEY = "AIzaSyAHs-T0oZFnI9FFjlmNoKUxzNrC1iwaB4A";
const BOOK_COVER = "https://media.base44.com/images/public/69c320cc14a171ca1a982f7f/4b485d1f3_image.png";

// [Full component code here — see deployed version at app-59a831c3.base44.app]
// Modules: Landing, BriefingPlayer, JarvisView, Web3Studio, ShowsView

export default function Home() {
  const [view, setView] = useState("landing");
  if (view === "briefing") return <BriefingPlayer onBack={() => setView("landing")} />;
  if (view === "jarvis")   return <JarvisView    onBack={() => setView("landing")} />;
  if (view === "web3")     return <Web3Studio    onBack={() => setView("landing")} />;
  if (view === "shows")    return <ShowsView     onBack={() => setView("landing")} onNav={setView} />;
  return <Landing onNav={setView} />;
}
