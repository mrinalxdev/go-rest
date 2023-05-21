"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemsProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItems: React.FC<MobileItemsProps> = ({
  href,
  icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };
  return <div>Mobile Items</div>;
};

export default MobileItems;
