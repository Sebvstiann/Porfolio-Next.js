interface MenuOverlayProps {
  links: { title: string; path: string }[];
  onClick: (path: string) => void;
}

export const MenuOverlay = ({ links, onClick }: MenuOverlayProps) => {
  return (
    <div className="fixed inset-0 bg-[#121212] bg-opacity-95 z-50 md:hidden">
      <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <ul className="flex flex-col items-center">
          {links.map((link, index) => (
            <li key={index} className="py-6 text-4xl">
              <button
                onClick={() => onClick(link.path)}
                className="text-slate-200 hover:text-white transition-colors"
              >
                {link.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 