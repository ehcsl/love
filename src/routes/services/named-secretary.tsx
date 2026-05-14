import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/named-secretary")({
  component: () => <ServicePlaceholder titleKey="sub_named" />,
});
