import { IconType } from "react-icons";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem = () => {
    return ( 
        <div>
            Sidebar Item
        </div>
    );
}
 
export default SidebarItem;