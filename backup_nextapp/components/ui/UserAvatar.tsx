import { User } from "next-auth"
import { Avatar } from "./avatar"
import { AvatarFallback, AvatarProps } from "@radix-ui/react-avatar"
import Image from "next/image"
import { Icons } from "../Icons"

interface UserNavProps extends AvatarProps{
  user: Pick<User, 'name' | 'image'>
}

export default function UserAvatar({ user, ...props }: UserNavProps) {
  
  console.log(user.image)
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative aspect-square h-full w-full ">
          <Image src={user.image} fill alt="profile picture" referrerPolicy="no-referrer" />
        </div>
      ) : (
        <AvatarFallback >
          <span className="sr-only">
            {user?.name}
          </span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )
      }
    </Avatar >
  )
}