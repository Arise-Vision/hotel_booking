import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className='container mx-auto px-4'>
        <Link href='/' className='bg-gradient-to-br from-transparent via-black/30 to-transparent dark:from-white/30 dark:via-transparent dark:to-white/30 text-white/30 italic border px-4 py-2 rounded-full font-bold'>
          Power King
        </Link>

        <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p>123 Road</p>
            <div>
              <Link className='flex items-center py-4 cursor-pointer hover:text-puple-200' href={'https://t.me/ArnaudBan'}>
                <BsFillSendFill />
                <p className='ml-2'>@powerKing</p>
              </Link>
            </div>
            <div>
              <Link className='flex items-center cursor-pointer hover:text-puple-200' href="tel:+256701947469">
                <BsTelephoneOutbound />
                <p className='ml-2'>Call (256) 701 947469</p>
              </Link>
            </div>
            <div>
              <Link className='flex items-center pt-4 cursor-pointer hover:text-puple-200' href="mailto:powerKing@gmail.com">
                <BiMessageDetail />
                <p className='ml-2'>powerKing@gmail.com</p>
              </Link>
            </div>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>Our Story</p>
            <p className='pb-4'>Get in Touch</p>
            <p className='pb-4'>Our Privacy Commitment</p>
            <p className='pb-4'>Terms of service</p>
            <p>Customer Assistance</p>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>Dining Experience</p>
            <p className='pb-4'>Wellness</p>
            <p className='pb-4'>Fitness</p>
            <p className='pb-4'>Sports</p>
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className='dark:bg-white/40 bg-black/40 h-10 md:h-[25px] mt-10 w-full bottom-0 left-0 flex justify-center items-center'>
        Build by Arnaud and Colline
      </div>
    </footer>
  );
};

export default Footer;
