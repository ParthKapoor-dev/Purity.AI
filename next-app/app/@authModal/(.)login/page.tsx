import CloseModal from "@/components/auth/closeModal";
import LoginComponent from "@/components/auth/login";

export default function InterceptingLoginPage() {
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-20">
      <div className="container flex items-center h-full w-[50rem] mx-auto">
        <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">

          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>

          <LoginComponent/>
        </div>
      </div>
      
    </div>
  )
}