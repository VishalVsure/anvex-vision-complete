import sources from "@/assets/SourceData";
import AddCamera from "@/components/AddCamera";
import Excelimport from "@/components/ExcelImport";
import SourceTable from "@/components/SourceTable";
import DashboardLayout from "@/layout/DashboardLayout";

const AddSource = () => {
  return (
    <>
      <DashboardLayout>
        <div className="p-4">
          <div className="flex justify-between">
            <p className="text-2xl font-semibold pb-4">Source Management</p>
            <div className="flex gap-4">
              <Excelimport />
              <AddCamera />
            </div>
          </div>
          <SourceTable sources={sources} />
        </div>
      </DashboardLayout>
    </>
  );
};

export default AddSource;
