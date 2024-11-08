import BasicSourceDetails from "@/components/BasicSourceDetails";
import RulesetManage from "@/components/RulesetManage";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/layout/DashboardLayout";
import { toast } from "sonner";

const ManageSource = () => {
  return (
    <>
      <DashboardLayout>
        <p className="text-2xl font-semibold pb-4">Camera Configuration</p>
        <BasicSourceDetails />
        <br />
        <hr />
        <br />
        <RulesetManage />
        <div className="flex justify-end py-4 ">
          <Button
            onClick={() => {
              toast("Camera Rules saved");
            }}
          >
            Save
          </Button>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ManageSource;
