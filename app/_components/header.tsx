import { Bell, Headset, PictureInPictureIcon } from "lucide-react";
import { navigationIcons } from "../_contants";
import { Button } from "./ui/button";




function Header () {
    return (
        <header>
            <div className="flex items-center justify-between max-w-7xl">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-8 p-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">K</span>
                            </div>
                            <span className="font-semibold text-lg">Krea AI</span>
                        </div>
                    </div>
                    <div className="flex flex-1 gap-1 bg-gray-100 p-1">
                        {navigationIcons.map((icon, i) => (
                            <div className="flex flex-row gap-1" key={i}>
                                <Button variant={"outline"} className="">
                                    {icon}
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <Button variant='outline' size='sm'>
                            <PictureInPictureIcon />
                            Gallery
                        </Button>
                        <Button variant='outline' size='sm'>
                            <Headset />
                            Support
                        </Button>
                        <Button variant='outline' size='sm'>
                            <Bell />
                        </Button>
                        {/* toggle mode button */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;