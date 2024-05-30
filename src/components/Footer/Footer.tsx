import Link from "next/link";
import HomePageLink from "../HomeLink/HomePageLink";
import { Mails, PhoneIncoming, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <HomePageLink />
        <h4 className="font-semibold text-[40px] py-6">Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p className="text-[#999]">Kampala, Uganda</p>
            <div className="flex items-center py-4">
              <Send className="text-[#959] text-2xl" />
              <p className="text-white ml-2">@Power_king</p>
            </div>
            <div className="flex items-center">
              <PhoneIncoming className="text-[#959] text-2xl" />
              <p className="text-white ml-2">+256 701 997 3455</p>
            </div>
            <div className="flex items-center pt-4">
            <Mails className="text-[#959] text-2xl" />
              <p className="text-white ml-2">@Power_king</p>
            </div>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4 cursor-pointer hover:underline">Our Story</p>
            <p className="pb-4 cursor-pointer hover:underline">Get In Touch</p>
            <p className="pb-4 cursor-pointer hover:underline">Our Privacy Commitment</p>
            <p className="pb-4 cursor-pointer hover:underline">Terms of service</p>
            <p>Customer Assistance</p>
          </div>
          <div className="flex-1 md:text-right">
            <p className="pb-4 cursor-pointer hover:underline">Dining Experience</p>
            <p className="pb-4 cursor-pointer hover:underline">Wellness</p>
            <p className="pb-4 cursor-pointer hover:underline">Fitness</p>
            <p className="pb-4 cursor-pointer hover:underline">Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>
      <div className="bg-white/30 h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
    </footer>
  )
}

export default Footer