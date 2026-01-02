interface BeerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function BreweryModal({ isOpen, onClose, title, children }: BeerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 ">
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-amber-400 text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">✕</button>
        </div>

        {children}
      </div>
    </div>
  );
}
