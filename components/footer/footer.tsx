import {
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-6 mt-28"
      id="contactme"
    >
      {/* Left Section */}
      <div className="text-center md:text-left">
        <h2 className="text-cyan-400 text-2xl font-bold">Salim Baktash</h2>
        <p className="text-gray-400">Full STACK DEVELOPER</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-3">
          <a
            href="https://github.com/SSTechInd-Tec"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-salim-8453a729b"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/StarkBakTec?t=LkhI8Ia-lewG7-_sZASoVA&s=09"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/1A2X9Hw6N4/"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/starkbaktec/"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Right Section - Moves Under on Mobile */}
      <div className="text-center md:text-right">
        <h3 className="text-lg font-semibold">Contact Me</h3>
        <p className="mt-1 flex justify-center md:justify-end items-center space-x-2">
          <Phone size={20} />
          <span>787 311 374 - 706 833 150</span>
        </p>
        <p className="flex justify-center md:justify-end items-center space-x-2">
          <Mail size={20} />
          <span>baktash@starkbak.net</span>
        </p>
      </div>
    </footer>
  );
}
