import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export default function AboutUsContent() {
  return (
    <div className="max-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            About Anvex Vision
          </h1>

          <div className="space-y-4 mb-6">
            <p className="text-lg text-muted-foreground">
              AnveX Vision is crafted to meet the visual analytics needs of
              modern businesses, providing sophisticated capabilities in image,
              document, and video processing. Using advanced AI, AnveX Vision is
              able to identify objects, detect faces, and understand complex
              visual contexts in both static and dynamic media. This is
              especially useful for industries that rely on visual data for
              decision-making, such as retail, healthcare, and security. For
              instance, object recognition and anomaly detection can identify
              potential issues in manufacturing, ensuring quality control.
            </p>
            <p className="text-lg text-muted-foreground">
              In document processing, AnveX Vision streamlines workflows by
              automating data extraction from invoices, contracts, and other
              documents, which reduces manual data entry and increases accuracy.
              Video analysis capabilities add another layer of functionality,
              with the platform able to detect objects, track motion, and
              analyze human behavior within video content. This is particularly
              beneficial for security applications, where real-time monitoring
              and anomaly detection are critical.
            </p>
            <p className="text-lg text-muted-foreground">
              By automating these tasks, AnveX Vision not only enhances
              operational efficiency but also provides actionable insights that
              might be missed by human analysis alone. It serves as a
              comprehensive visual analytics tool, helping organizations turn
              visual content into valuable business intelligence.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              <span className="text-lg font-bold">
                Himanshu Vaidya : +91 9702455888
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-primary" />
              <span className="text-lg font-bold">
                Siddhesh Kolwankar : +91 9029095047
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
