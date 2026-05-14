import { createFileRoute } from "@tanstack/react-router";
import { ServicePlaceholder } from "@/components/ServicePlaceholder";

export const Route = createFileRoute("/services/change-of-directors")({
  component: () => <ServicePlaceholder titleKey="sub_change_dir" />,
});
