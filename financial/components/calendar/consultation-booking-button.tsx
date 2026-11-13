"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, type ComponentProps } from "react";

type BookingButtonProps = ComponentProps<"button"> & {
  namespace?: string;
  calLink?: string;
  children?: React.ReactNode;
  className?: string;
};

export default function BookingButton({
  namespace = "consultation",
  calLink = "giselepecapedra/consultation",
  children,
  className = "",
  ...buttonProps
}: BookingButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: namespace,
      });

      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: {
            brandColor: "#1F4A3D",
          },
        },
      });
    })();
  }, [namespace]);

  return (
    <button
      {...buttonProps}
      type="button"
      data-cal-namespace={namespace}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
