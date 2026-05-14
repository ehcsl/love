import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/mail-forwarding")({
  component: () => <ServicePlaceholder titleKey="sub_mail" />,
});
