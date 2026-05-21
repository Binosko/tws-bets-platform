import { useState } from "react";
import { Trash2, FileText, Download, Check, Plus, FolderHeart } from "lucide-react";

interface FavoriteItem {
  prompt: string;
  title: string;
  category: string;
  notes?: string;
  campaign?: string;
}

interface CampaignBibleProps {
  favorites: FavoriteItem[];
  onRemoveFromFavorites: (prompt: string) => void;
  onUpdateNotes: (prompt: string, notes: string) => void;
  onUpdateCampaign: (prompt: string, campaign: string) => void;
  onClearFavorites: () => void;
}

export default function CampaignBible({
  favorites,
  onRemoveFromFavorites,
  onUpdateNotes,
  onUpdateCampaign,
  onClearFavorites
}: CampaignBibleProps) {
  const [newCampaignName, setNewCampaignName] = useState<string>("");
  const [activeCampaignFilter, setActiveCampaignFilter] = useState<string>("All");
  const [exportCopied, setExportCopied] = useState<boolean>(false);

  // List of campaigns represented in favorites
  const campaignsList = ["All", ...Array.from(new Set(favorites.map((f) => f.campaign).filter(Boolean))) as string[]];

  const handleAddCampaignOption = () => {
    if (!newCampaignName.trim()) return;
    // Just alert or let user select it in cards. We can let users type it in the card's dropdown
    setNewCampaignName("");
    alert(`Campaign folder "${newCampaignName}" created! You can now assign prompts to it below.`);
  };

  const filteredFavorites = favorites.filter((f) => {
    if (activeCampaignFilter === "All") return true;
    return f.campaign === activeCampaignFilter;
  });

  const generateMarkdownExport = () => {
    let md = `# AETHERIS CAMPAIGN BIBLE - AGENCY ART DIRECTION REPORT\n`;
    md += `Generated on: ${new Date().toLocaleDateString()}\n`;
    md += `=====================================================\n\n`;

    const grouped = filteredFavorites.reduce((acc: any, item) => {
      const camp = item.campaign || "Unassigned Campaigns";
      if (!acc[camp]) acc[camp] = [];
      acc[camp].push(item);
      return acc;
    }, {});

    Object.keys(grouped).forEach((campName) => {
      md += `## Campaign Folder: ${campName}\n`;
      md += `-----------------------------------------------------\n\n`;
      grouped[campName].forEach((item: FavoriteItem, idx: number) => {
        md += `### ${idx + 1}. ${item.title}\n`;
        md += `**Category Style:** ${item.category}\n`;
        md += `**Midjourney/AI Prompt:**\n`;
        md += `\`\`\`\n${item.prompt}\n\`\`\`\n`;
        if (item.notes) {
          md += `**Art Director Notes:** ${item.notes}\n`;
        }
        md += `\n`;
      });
      md += `\n`;
    });

    return md;
  };

  const handleExportClipboard = () => {
    const mdText = generateMarkdownExport();
    navigator.clipboard.writeText(mdText);
    setExportCopied(true);
    setTimeout(() => setExportCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const mdText = generateMarkdownExport();
    const blob = new Blob([mdText], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Aetheris_Campaign_Bible.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-6">
      {/* Head */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-4">
        <div>
          <span className="text-[10px] tracking-widest text-amber-500 font-mono uppercase block">
            MY PRODUCTION CABINET
          </span>
          <h2 className="text-xl font-serif text-zinc-100 flex items-center gap-2">
            <FolderHeart className="w-5 h-5 text-amber-500" /> My Saved Campaign Bible
          </h2>
          <p className="text-xs text-zinc-400">
            Review, organize, add production notes, and export your curated premium advertising assets.
          </p>
        </div>

        {favorites.length > 0 && (
          <button
            onClick={onClearFavorites}
            className="px-3.5 py-1.5 bg-red-950/20 hover:bg-red-950/40 text-red-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-red-500/20 transition-all cursor-pointer justify-center self-stretch sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear All Saved
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 space-y-3 bg-zinc-950/30 rounded-xl border border-zinc-850">
          <FolderHeart className="w-12 h-12 text-zinc-600 mx-auto" />
          <div className="text-sm font-serif text-zinc-400">Your Campaign Bible is currently empty.</div>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Browse the prompt catalog or use the interactive builder to create and save your high-end campaigns.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Campaign Folder Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-950 p-4 rounded-xl border border-zinc-850">
            {/* Create Campaign Folder */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                Create New Campaign Folder
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Summer Fragrance 2026..."
                  value={newCampaignName}
                  onChange={(e) => setNewCampaignName(e.target.value)}
                  className="flex-1 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-amber-500/50 rounded-lg py-1.5 px-3 text-xs text-zinc-200 focus:outline-none transition-all"
                />
                <button
                  onClick={handleAddCampaignOption}
                  className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-zinc-950 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Create
                </button>
              </div>
            </div>

            {/* Filter by Campaign Folder */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                Filter by Campaign Folder
              </label>
              <div className="flex flex-wrap gap-1.5">
                {campaignsList.map((campName) => (
                  <button
                    key={campName}
                    onClick={() => setActiveCampaignFilter(campName)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      activeCampaignFilter === campName
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                        : "bg-zinc-900 hover:bg-zinc-850 text-zinc-400 border-zinc-800"
                    }`}
                  >
                    {campName === "All" ? "All Saved Prompts" : campName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Favorites List */}
          <div className="space-y-4">
            {filteredFavorites.map((fav, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-850 rounded-xl p-5 hover:border-zinc-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-4"
              >
                {/* Prompt Details */}
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-xs font-serif font-bold text-zinc-100">{fav.title}</h4>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase mt-0.5 block">
                        Category Style: {fav.category}
                      </span>
                    </div>

                    {/* Campaign Select Dropdown */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono text-zinc-500">Folder:</span>
                      <select
                        value={fav.campaign || ""}
                        onChange={(e) => onUpdateCampaign(fav.prompt, e.target.value)}
                        className="bg-zinc-900 border border-zinc-800 rounded px-2 py-0.5 text-[10px] text-zinc-300 focus:outline-none"
                      >
                        <option value="">Unassigned</option>
                        {campaignsList.filter(c => c !== "All").map((cName) => (
                          <option key={cName} value={cName}>
                            {cName}
                          </option>
                        ))}
                        {newCampaignName && !campaignsList.includes(newCampaignName) && (
                          <option value={newCampaignName}>{newCampaignName}</option>
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-900 text-[11px] font-mono text-zinc-300 leading-relaxed italic">
                    {fav.prompt}
                  </div>
                </div>

                {/* Director's notes and operations */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-3 lg:border-l lg:border-zinc-850 lg:pl-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Art Director Production Notes
                    </label>
                    <textarea
                      value={fav.notes || ""}
                      onChange={(e) => onUpdateNotes(fav.prompt, e.target.value)}
                      placeholder="Add custom rendering configurations, aspect ratios, or notes here..."
                      className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-750 focus:border-amber-500/50 rounded-lg p-2 text-[10px] text-zinc-200 placeholder-zinc-650 h-20 resize-none focus:outline-none transition-all"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-2 pt-2 border-t border-zinc-900">
                    <button
                      onClick={() => onRemoveFromFavorites(fav.prompt)}
                      className="text-zinc-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-red-500/5 transition-all text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      Ready to render
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Export Report Actions */}
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-850 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xs font-serif font-bold text-zinc-200">Export Creative Direction Bible</h3>
              <p className="text-[10px] text-zinc-500">
                Compile your currently filtered list of {filteredFavorites.length} prompts into a structured Markdown document.
              </p>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={handleExportClipboard}
                className="flex-1 sm:flex-initial bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700 py-2 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                {exportCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied Markdown!
                  </>
                ) : (
                  <>
                    <FileText className="w-3.5 h-3.5" /> Copy Markdown Report
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadFile}
                className="flex-1 sm:flex-initial bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-zinc-950 py-2 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download Report (.md)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
