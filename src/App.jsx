import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "./base/presentation/ui/components/sidebar/sidebar";
import "./index.css";

function App() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarTrigger />
        <div className="p-4">Main Content Here</div>
      </Sidebar>
    </SidebarProvider>
  );
}

export default App;
