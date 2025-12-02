import Link from "next/link"
import { ThemeLogo } from "@/components/theme-logo"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <ThemeLogo className="h-8 w-auto mb-2 md:mb-0 md:mr-4" />
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        &copy; 2024 DeBrand Studio. P.IVA 03013500644. Tel: 3474854512.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="https://www.facebook.com/MaxBrandini78" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">Facebook</Link>
                    <Link href="https://www.linkedin.com/in/cesare-brandini/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</Link>
                    <Link href="https://x.com/BrandiniMax" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">X</Link>
                    <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link>
                    <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary">Cookie</Link>
                </div>
            </div>
        </footer>
    )
}
