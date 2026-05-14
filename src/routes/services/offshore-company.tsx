import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/offshore-company")({
  component: () => <ServicePlaceholder titleKey="sub_offshore" />,
});
