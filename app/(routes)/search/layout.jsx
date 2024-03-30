import CategorySidebar from "@/app/_components/CategorySidebar";

const layout = ({ children }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 mt-12">
                <div className="hidden md:block">
                     {/* Side category Navbar */}
                    <CategorySidebar/>
                </div>

                <div className="md:col-span-3 ">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default layout;