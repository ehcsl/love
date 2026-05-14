import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/profits-tax-return")({
  component: () => <ServicePlaceholder titleKey="sub_ptr" />,
});
