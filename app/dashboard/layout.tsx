import SideNav from "@/app/ui/dashboard/sidenav";   

export default function Layout({children }: {children: React.ReactNode }){
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-auto bg-gradient-to-br from-zinc-900 via-blue-700 to-violet-900 text-gray-50 ">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    );
}