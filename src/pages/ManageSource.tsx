import BasicSourceDetails from "@/components/BasicSourceDetails";
import RulesetManage from "@/components/RulesetManage";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

const ManageSource = () => {
  return (
    <>
    <p className="text-2xl font-semibold pb-4">Camera Configuration</p>
      <BasicSourceDetails />
      <br />
      <hr />
      <br />
      <RulesetManage />
      <div className="flex justify-end py-4 ">
      <Button onClick={()=>{toast("Camera Rules saved")}}>
        Save
      </Button>
      </div>
    </>
  );
};

export default ManageSource;
