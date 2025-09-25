import { LucideIcon } from "lucide-react"
import React, { ReactElement } from "react"

export type FooterContent = {
    icon: ReactElement,
    title: string,
    subtitle: string,
    tag: boolean,
    color: string
}

// export type NavigationIcons = JSX.Element[]