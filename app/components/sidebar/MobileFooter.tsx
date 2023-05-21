"use client";
import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItems from "./MobileItems";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }
  return (
    <div className=" fixed flex justify-between w-full bottom-0 z-40 items-center bg-white border-t-[1px]">
      {routes.map((route) => (
        < MobileItems 
            key={route.href}
            href={route.href}
            icon={route.icon}
            active={route.active}
            onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
