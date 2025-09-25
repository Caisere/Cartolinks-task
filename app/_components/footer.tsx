import { footerContents } from "../_contants";
import { Button } from "./ui/button";

function Footer () {
    return (
        <footer>
            <h1>Generate</h1>
            <div className="grid grid-col-1 sm:grid-col-2 md:grid-col-4">
                {footerContents.map(content => (
                    <div key={content.title} className="flex gap-1 items-center">
                        <Button variant='outline' className={`${content.color} text-gray-50 border-0`}>
                            {content?.icon}
                        </Button>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-1">
                                <h2>{content.title}</h2>
                                <p className="bg-blue-700 py-1 px-3 text-sm text-gray-50 rounded-xl">{content.tag && 'New'}</p>
                            </div>
                            <p>{content.subtitle}</p>
                        </div>
                        <Button variant='outline'>Open</Button>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer;