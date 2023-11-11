
import { Categories } from "@/components/categories";
import {SearchInput} from "@/components/search-input";
import prismadb from "@/lib/prismadb";

const RootPage = async () => {
    const categories = await prismadb.category.findMany();
    return(
        <div className="h-full p-12 space-y-2 mt-10">
             <SearchInput/> 
             <Categories data={categories}/>
        </div>
    )
}

export default RootPage;
