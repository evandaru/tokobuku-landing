import { ReactNode, ElementType } from "react";

interface SectionProps {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Section({
    as: Component = "section",
    children,
    className = "",
    id,
}: SectionProps) {
    return (
        <Component id={id} className={`py-10 md:py-16 ${className}`}>
            {children}
        </Component>
    );
}
