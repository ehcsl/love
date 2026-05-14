import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/audit-coordination")({
  component: () => <ServicePlaceholder titleKey="sub_audit" />,
});
