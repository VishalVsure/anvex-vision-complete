import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

const Excelimport = () => {
  //   const downloadExcel = () => {
  //     const sheetId = "116R6bHVDID7oSargF0lADS2hTAmdm5TO";
  //     const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;
  //     window.open(url, "_blank");
  //   };

  return (
    <Button
      variant="default"
      className="flex items-center gap-2 px-4 py-2 rounded-md"
    >
      <span className="font-semibold">Import Excel</span>
      <FontAwesomeIcon icon={faFileExcel} className="text-white" />
    </Button>
  );
};

export default Excelimport;
