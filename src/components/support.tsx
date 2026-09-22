// SupportBot.tsx

import { useEffect } from "react";
// import { FaEnvelope } from "react-icons/fa";

const SupportBot = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent loading Tawk.to more than once
    if (document.getElementById("tawkto-script")) return;

    const script = document.createElement("script");

    script.id = "tawkto-script";
    script.async = true;
    script.src =
      "https://embed.tawk.to/6ab26530d457d23440c68046/1k34dmida";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      const existingScript = document.getElementById("tawkto-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-[100px] left-5 z-[9999] flex flex-col items-center space-y-1">
      {/* <button
        onClick={() =>
          (window.location.href = "mailto:danbraunstein57@gmail.com")
        }
        aria-label="Email Support"
        className="p-3 rounded-full shadow-lg bg-blue-800 hover:bg-blue-700 text-white transition"
      >
        <FaEnvelope size={18} />
      </button>

      <span className="text-sm text-black font-bold">Email Us</span> */}
    </div>
  );
};

export default SupportBot;