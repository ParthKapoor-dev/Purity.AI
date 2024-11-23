"use client";

import { User } from "next-auth"
import UserAvatar from "../../ui/UserAvatar"
import { CreditCard, LogOut, Mail, MessageSquare, Settings, User as UserIcon, UserPlus, Users } from "lucide-react";
import { DropDownMenu, callLabel, dropButton, item, separator, subMenu } from "@/components/ui/DropDownComponent";
import { logout } from "@/app/(actions)/authActions";


interface UserNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}

export default function UserNav({ user }: UserNavProps) {

  const iconClassName = "mr-2 h-4 w-4";

  const UserNavData = [
    callLabel(user.name || "My Account"),
    separator(),
    item("Profile", <UserIcon className={iconClassName} />, "⇧⌘P"),
    item("Billing", <CreditCard className={iconClassName} />, "⌘B"),
    item("Settings", <Settings className={iconClassName} />, "⌘S"),

    separator(),
    item("Teams", <Users className={iconClassName} />),
    subMenu("Invite Users", <UserPlus className={iconClassName} />, [
      {
        title: user.email || "example@email.com",
        icon: <Mail className={iconClassName} />,
      },
      {
        title: "Message",
        icon: <MessageSquare className={iconClassName} />
      }
    ]),

    separator(),
    dropButton("Log out", <LogOut className={iconClassName} />, "⇧⌘Q", logout),
  ]


  return (
    <DropDownMenu dropdownItems={UserNavData}>
      <UserAvatar className="h-10 w-10"
        user={{
          name: user.name || null,
          image: user.image || null
        }} />
    </DropDownMenu>
  )
}
