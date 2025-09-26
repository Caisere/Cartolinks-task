import { Bell, Headset, PictureInPictureIcon } from "lucide-react";
import { navigationIcons } from "../_contants";
import { Button } from "./ui/button";
import ToggleMode from "./togglemode";

function Header() {
  return (
    <header className="">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8 p-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="font-semibold text-lg">Krea AI</span>
              <p>benevilent</p>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 bg-transparent">
            <nav className="flex w-1/2 bg-gray-100 mx-auto py-2 px-4 rounded-lg gap-4 justify-center items-center">
              {navigationIcons.map((icon, i) => (
                <div className="flex flex-row justify-center items-center" key={i}>
                  <Button variant={"outline"} size="icon" className="border-0">
                    {icon}
                  </Button>
                </div>
              ))}
            </nav>
          </div>
          <div className="flex gap-1">
            <div className="hidden sm:flex">
              <Button variant="outline" size="sm">
                <PictureInPictureIcon width={18} height={18} />
                Gallery
              </Button>
              <Button variant="outline" size="sm">
                <Headset width={18} height={18}  />
                Support
              </Button>
              <Button variant="outline" size="sm">
                <Bell width={18} height={18}  />
              </Button>
            </div>
            {/* toggle mode button */}
            <ToggleMode />
          </div>
        </div>
    </header>
  );
}

export default Header;
