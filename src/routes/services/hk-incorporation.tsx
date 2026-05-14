import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/hk-incorporation")({
  component: () => <ServicePlaceholder titleKey="sub_hk" />,
});
