import React from 'react'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

function layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}

export default layout;