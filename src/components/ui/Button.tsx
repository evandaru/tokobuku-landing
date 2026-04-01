"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  target?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer rounded-full";

  const variants = {
    primary:
      "bg-brand-green text-white hover:bg-brand-dark-green hover:shadow-lg hover:-translate-y-0.5 border border-transparent",
    secondary:
      "bg-brand-orange text-white hover:bg-brand-dark-orange hover:shadow-lg hover:-translate-y-0.5 border border-transparent",
    outline:
      "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white",
  };

  const sizes = {
    sm: "text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2",
    md: "text-sm md:text-base px-4 py-2.5 md:px-6 md:py-3",
    lg: "text-base md:text-lg px-6 py-3 md:px-8 md:py-4",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
