import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";

type ExampleCardProps = {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
};

export const ExampleCard = ({
  title,
  description,
  code,
  children,
}: ExampleCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border dark:border-gray-700 shadow-md rounded-2xl p-6 space-y-4 relative">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
      <p className="text-gray-600 dark:text-gray-100">{description}</p>

      <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800 flex items-center justify-center min-h-[100px]">
        {children}
      </div>

      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 text-sm px-2 py-1 rounded bg-gray-700 text-white hover:bg-gray-600"
        >
          {copied ? "Copied!" : <Copy size={16} />}
        </button>

        <SyntaxHighlighter
          language="tsx"
          style={oneDark}
          customStyle={{ borderRadius: "0.5rem", paddingTop: "2rem" }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
