import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "lucide-react";

export const Menu = () => {
  return (
    <NavigationMenu className="w-[150px] h-[30px]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Name</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className="w-40">
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
