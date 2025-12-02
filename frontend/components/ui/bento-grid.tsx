import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
        <Card
            className={cn(
                "row-span-1 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border-transparent dark:!border-white/10 dark:!bg-neutral-900 justify-between flex flex-col space-y-4",
                className
            )}
        >
            <CardHeader className="p-0">
                {header}
            </CardHeader>
            <CardContent className="p-4 group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <CardTitle className="font-bold mb-2 mt-2">
                    {title}
                </CardTitle>
                <CardDescription className="font-normal text-xs text-muted-foreground">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
};