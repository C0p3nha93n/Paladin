import React, { useState } from 'react';
import { Copy, Check, Twitter } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "TO BE ANNOUNCED!";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-12">
        <img 
          src="/paladin.png"
          alt="PALADIN"
          className="w-[600px] h-auto"
        />
      </div>

      {/* Contract Address */}
      <div className="mb-24 flex items-center justify-center">
        <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3 group">
          <span className="font-bold text-gray-800 mr-2">$PAL ca</span>
          <span className="text-gray-600 font-mono text-sm">
            {contractAddress}
          </span>
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            title="Copy contract address"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 mb-20 text-center">
        <div className="flex flex-col">
          <div className="text-[64px] font-light text-gray-800">130</div>
          <div className="text-gray-600 tracking-wider">PALIDATOR NODES</div>
        </div>

        <div className="flex flex-col">
          <div className="text-[64px] font-light text-gray-800 flex items-center justify-center">
            <span className="inline-flex items-center">
              <span className="w-8 h-8 border-4 border-gray-800 rounded-full mr-2" />
              40M
            </span>
          </div>
          <div className="text-gray-600 tracking-wider">ACTIVE STAKE</div>
        </div>

        <div className="flex flex-col">
          <div className="text-[64px] font-light text-gray-800">$9.5B</div>
          <div className="text-gray-600 tracking-wider">VALUE SECURED</div>
        </div>
      </div>

      {/* CTA Button */}
      <a 
        href="https://paladin-3.gitbook.io/paladin-or-p3-docs" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-8 py-3 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors tracking-wider"
      >
        GET STARTED
      </a>
      <a
          href="https://x.com/PaladinOnSolana"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
          title="Follow us on X (Twitter)"
        >
          <Twitter className="w-6 h-6" />
        </a>
    </div>
  );
}

export default App;