interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 md:mb-20 text-brand-dark-green ${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-3xl ${className}`}
    >
      {subtitle && (
        <span className="inline-block py-1 px-3 rounded-full bg-brand-lime/10 text-brand-dark-lime text-sm font-medium tracking-wide mb-4 border border-brand-lime/20">
          {subtitle}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-brand-green mb-6 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
