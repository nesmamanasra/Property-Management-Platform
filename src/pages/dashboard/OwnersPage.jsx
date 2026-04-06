import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import Owners from "../../components/dashboard/Owners";

export default function OwnersPage() {
    return (
       <div className="min-h-screen bg-[#F7F8FA] flex flex-col">
   
         {/* Navbar فوق الكل */}
         <Navbar />
   
         {/* تحته: Sidebar + Main */}
         <div className="flex flex-1">
           <Sidebar />
   
           <div className="flex-1">
             <Owners/>
           </div>
         </div>
   
       </div>
     );
}