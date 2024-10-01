import Link from "next/link"
import React, { FC } from "react"
import { Logo } from "@/components/svgs"
import LogoWithText from "./ui/logo-with-text"

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex flex-col items-center bg-slate-50 text-center text-surface lg:text-left">
      <div className="container p-6">
        <LogoWithText className="mb-16 w-full justify-center" />
        <div className="grid text-center justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="mb-6">
            <h5 className="text-slate-800 font-semibold uppercase mb-2">Pages</h5>
            <ul className="mb-0 list-none flex flex-col gap-2 text-slate-800/80 hover:text-slate-800">
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="#!">Get Started</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="text-slate-800 font-semibold uppercase mb-2">Legal</h5>

            <ul className="mb-0 list-none flex flex-col gap-2 text-slate-800/80 hover:text-slate-800">
              <li>
                <Link href="#!">Link 1</Link>
              </li>
              <li>
                <Link href="#!">Link 2</Link>
              </li>
              <li>
                <Link href="#!">Link 3</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="text-slate-800 font-semibold uppercase mb-2">Social</h5>

            <ul className="mb-0 list-none flex flex-col gap-2 text-slate-800/80 hover:text-slate-800">
              <li>
                <Link href="#!">Link 1</Link>
              </li>
              <li>
                <Link href="#!">Link 2</Link>
              </li>
              <li>
                <Link href="#!">Link 3</Link>
              </li>
              <li>
                <Link href="#!">Link 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-slate-50 text-xs p-4 text-center">© 2024 Copyright: Unfaircontracts</div>
    </footer>
  )
}

export default Footer
