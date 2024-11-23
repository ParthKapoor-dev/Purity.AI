import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

import { ReactNode } from "react"


export interface dropdownInterface {
  label?: boolean;
  title?: string;
  separator?: boolean;
  icon?: any;
  shortcut?: string;
  triggerTitle?: string;
  triggerIcon?: any;
  subItems?: itemInterface[];
  link?: string,
  isButton?: boolean
  handleClick?: () => void
}


export interface itemInterface {
  title: string
  icon: any
  shortcut?: string
  link?: string
}

export function callLabel(title: string) {
  return {
    label: true,
    title
  }
}

export function dropButton(title: string, icon: any, shortcut?: string, handleClick?: () => void) {
  return {
    isButton: true,
    title,
    icon,
    shortcut,
    handleClick
  }
}

export function separator() {
  return {
    separator: true
  }
}


export function item(title: string, icon: any, shortcut?: string) {
  return {
    title,
    icon,
    shortcut
  }
}

export function subMenu(triggerTitle: string, triggerIcon: any, subItem: itemInterface[]) {

  const subItems = subItem.map(data => item(data.title, data.icon, data.shortcut))

  return {
    triggerTitle,
    triggerIcon,
    subItems
  }
}


export function DropDownMenu({ children, dropdownItems }: { children: ReactNode, dropdownItems: dropdownInterface[] }) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">

        {dropdownItems.map((item, index) => {

          if (item?.label)
            return <DropdownMenuLabel key={index}>{item.title}</DropdownMenuLabel>


          if (item.separator)
            return <DropdownMenuSeparator key={index} />

          if (item.isButton)
            return (
              <DropdownMenuItem key={index} onClick={item.handleClick}>
                {item.icon}
                <span> {item.title} </span>
                {item?.shortcut && (
                  <DropdownMenuShortcut> {item.shortcut} </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
            )

          if (item.triggerTitle)
            return (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger>
                  {item.triggerIcon}
                  <span> {item.triggerTitle} </span>
                </DropdownMenuSubTrigger>

                <DropdownMenuPortal>
                  <DropdownMenuSubContent>

                    {item.subItems?.map((data , index)=> (
                      <Link href={data.link || "/"} key={index}>
                        <DropdownMenuItem>
                          {data.icon}
                          <span> {data.title} </span>
                          {data?.shortcut && (
                            <DropdownMenuShortcut> {item.shortcut} </DropdownMenuShortcut>
                          )}
                        </DropdownMenuItem>
                      </Link>

                    ))}

                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            )

          return (
            <Link href={item.link || "/"} key={index}>
              <DropdownMenuItem>
                {item.icon}
                <span> {item.title} </span>
                {item?.shortcut && (
                  <DropdownMenuShortcut> {item.shortcut} </DropdownMenuShortcut>
                )}
              </DropdownMenuItem>
            </Link>
          )
        })}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}