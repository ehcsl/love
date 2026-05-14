import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/call-answering")({
  component: () => <ServicePlaceholder titleKey="sub_call" />,
});
