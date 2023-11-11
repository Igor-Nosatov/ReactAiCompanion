import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar/>
            <div className="hidden md:flex mt-16 w-20 flex-col
            fixed inset-y-0">
               <Sidebar/>
            </div>
            <main className="flex min-h-screen flex-col justify-between pl-12">
          {children}
            </main>
        </div>
    )
}

export default RootLayout;
// min-h-screen flex-col items-center justify-left
