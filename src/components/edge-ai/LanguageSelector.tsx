import { cn } from "@/lib/utils";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
];

interface LanguageSelectorProps {
  selectedLanguage: string;
  onSelect: (code: string) => void;
}

const LanguageSelector = ({ selectedLanguage, onSelect }: LanguageSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          className={cn(
            "p-4 rounded-xl border-2 transition-all duration-200 text-center",
            selectedLanguage === lang.code
              ? "border-edge-green bg-edge-green/10 shadow-edge"
              : "border-border bg-card hover:border-edge-green/50"
          )}
        >
          <div className="text-lg font-bold text-foreground">{lang.nativeName}</div>
          <div className="text-sm text-muted-foreground">{lang.name}</div>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
