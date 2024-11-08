import sources from "@/assets/SourceData";
import AddCamera from "@/components/AddCamera";
import SourceTable from "@/components/SourceTable";
import DashboardLayout from "@/layout/DashboardLayout";

const AddSource = () => {
  return (
    <>
      <DashboardLayout>
        <div className="flex justify-between">
          <p className="text-2xl font-semibold pb-4">Source Management</p>
          <AddCamera />
        </div>
        <SourceTable sources={sources} />
      </DashboardLayout>
    </>
  );
};

export default AddSource;
