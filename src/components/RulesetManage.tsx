import { CircleCheck } from "lucide-react";
import { Circle } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import Rule from "@/interfaces/RulesetInterface";
import { useState } from "react";

const initialRules: Rule[] = [
  { id: "1", rulename: "Vehicle Counting", value: false },
  { id: "2", rulename: "PPE detection", value: false },
  { id: "3", rulename: "Face Emotion Recognition", value: false },
  { id: "4", rulename: "Person Gender Recognition", value: false },
  { id: "5", rulename: "Object Detection", value: false },
  { id: "6", rulename: "Person Counting", value: false },
  { id: "7", rulename: "Unattended Baggage Detection", value: false },
  { id: "8", rulename: "Unique Visitors", value: false },
];

const RulesetManage = () => {
  const [rules, setRules] = useState<Rule[]>(initialRules);

  const handleToggle = (id: string) => {
    setRules((prevRules) =>
      prevRules.map((rule) =>
        rule.id === id ? { ...rule, value: !rule.value } : rule
      )
    );
  };

  return (
    <>
      <p className="text-xl font-semibold pb-6">Ruleset Setting</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rules.map((rule) => (
          <div key={rule.id} className="flex gap-4 w-full">
            {rule.value ? (
              <Toggle
                className="border"
                variant="checked"
                data-sta
                onClick={() => handleToggle(rule.id)}
              >
                <div className="flex items-center justify-start gap-2 col-span-4 w-full px-2">
                  <CircleCheck className="flex" />
                  <p>{rule.rulename}</p>
                </div>
              </Toggle>
            ) : (
              <Toggle
                className="border"
                variant="default"
                onClick={() => handleToggle(rule.id)}
              >
                <div className="flex items-center justify-start gap-2 col-span-4 w-full px-2">
                  <Circle className="flex" />
                  <p>{rule.rulename}</p>
                </div>
              </Toggle>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RulesetManage;
