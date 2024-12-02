import Button from "@/ui/primitives/button";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ContestItem {
  date: string;
  name: string;
  [key: string]: string;
}

interface DogContestsProps<T extends ContestItem> {
  title: string;
  icon: LucideIcon;
  items: T[];
  resultKey: keyof T;
  initialShow?: number;
}

const DogContests = <T extends ContestItem>({
  title,
  icon: Icon,
  items,
  resultKey,
  initialShow = 4,
}: DogContestsProps<T>) => {
  const [showAll, setShowAll] = useState(false);
  const displayCount = showAll ? items?.length : initialShow;

  const toggleShow = () => setShowAll(!showAll);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Icon className="w-5 h-5" />
        {title}
      </h2>
      <div className="grid gap-4">
        {items?.slice(0, displayCount).map((item, index) => (
          <div
            key={`${item.date}${index}`}
            className="border-b pb-2 last:border-0"
          >
            <p className="text-sm text-blue-600">{item.date}</p>
            <p className="text-sm">{item.name}</p>
            <p className="text-xs text-gray-600">{item[resultKey]}</p>
          </div>
        ))}

        {items?.length > initialShow && (
          <Button size="sm" className="w-full" onClick={toggleShow}>
            {showAll
              ? "Zobrazit méně"
              : `Zobrazit všech ${items.length} ${
                  title === "Závody" ? "závodů" : "výstav"
                }`}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DogContests;
