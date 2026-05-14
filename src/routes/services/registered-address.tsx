import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/registered-address")({
  component: () => <ServicePlaceholder titleKey="sub_addr" />,
});
