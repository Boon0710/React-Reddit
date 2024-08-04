import Logo from "./Logo";
import RightContent from "./RightContent";
import SearchInput from "./SearchInput";
function Header() {
  return (
    <header className="flex bg-slate-50 h-15 py-1.5 px-3 items-center justify-between">
      <div className="flex-shrink-0">
        <Logo />
      </div>
      <div className="flex-grow mx-4">
        <SearchInput />
      </div>
      <div className="flex-shrink-0">
        <RightContent />
      </div>
    </header>
  );
}

export default Header;
