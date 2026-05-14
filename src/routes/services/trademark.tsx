import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/trademark")({
  component: () => <ServicePlaceholder titleKey="sub_trademark" />,
});
