"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const avatars = [
  { src: "/images/avatar-1.jpg", alt: "Sarah" },
  { src: "/images/avatar-2.jpg", alt: "Marcus" },
  { src: "/images/avatar-3.jpg", alt: "Amara" },
  { src: "/images/avatar-4.jpg", alt: "David" },
  { src: "/images/avatar-5.jpg", alt: "Priya" },
];

export default function AvatarStack({
  count = "12,000+",
  label = "marketers already subscribed",
  className,
}: {
  count?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex -space-x-2.5">
        {avatars.map((a, i) => (
          <motion.div
            key={a.alt}
            initial={{ opacity: 0, scale: 0.5, x: -8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 0.6 + i * 0.07,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="h-8 w-8 overflow-hidden rounded-full border-2 border-bg-primary"
            style={{ zIndex: avatars.length - i }}
          >
            <Image
              src={a.src}
              alt={a.alt}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="text-sm">
        <span className="font-heading font-semibold text-text-primary">
          {count}
        </span>{" "}
        <span className="text-text-muted">{label}</span>
      </div>
    </div>
  );
}
