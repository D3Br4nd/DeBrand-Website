import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento transition duration-200 p-6 justify-between flex flex-col space-y-4",
                "bg-card/50 border",
                "hover:border-primary/50 hover:shadow-md",
                className
            )}
        >
            <div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 dark:from-neutral-900 dark:to-neutral-800 to-neutral-50 overflow-hidden relative group-hover/bento:scale-[1.02] transition-transform duration-200">
                {header}
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="mb-2 text-primary group-hover/bento:scale-110 origin-left transition-transform duration-200">
                    {icon}
                </div>
                <div className="font-sans font-bold text-neutral-800 dark:text-white mb-2 text-lg">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
