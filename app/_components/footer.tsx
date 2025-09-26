import { footerContents } from "../_contants";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="flex flex-col gap-4 mt-4 sm:mt-0">
      <h1 className="text-2xl font-semibold">Generate</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {footerContents.map((content) => (
          <div key={content.title} className="flex gap-2 items-center justify-between border border-gray-700/20 dark:border-gray-50/5 p-2 rounded-lg">
            <Button
              variant="outline"
              size='icon'
              className={`${content.color} text-gray-50 border-0 p-2`}
            >
              {content?.icon}
            </Button>
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex gap-[6px]">
                <h2>{content.title}</h2>
                <p
                  className={`${content.tag ? "bg-blue-700 py-1 px-3 text-[12px] text-gray-50 rounded-xl" : ""}`}
                >
                  {content.tag && "New"}
                </p>
              </div>
              <p className="text-[12px]">{content.subtitle}</p>
            </div>
            <Button variant="outline" className="transition-all duration-300 text-gray-70 border-0 bg-gray-300 dark:bg-gray-700 p-2">Open</Button>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
