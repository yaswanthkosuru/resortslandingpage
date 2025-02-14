"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();
  return (
    <nav className="w-full flex-col sticky bottom-0 flex z-50 gap-1 pt-1 px-2">
      <div className="flex gap-2 px-4 py-2 bg-indigo-600 items-baseline rounded">
        <p className="text-sm mr-auto">Without Exit Animation</p>
        <CustomLik path={path} href="/">
          Home
        </CustomLik>
        <CustomLik path={path} href="/products">
          Products
        </CustomLik>
        <CustomLik path={path} href="/about">
          About
        </CustomLik>
        <CustomLik path={path} href="/contact">
          Contact
        </CustomLik>
      </div>
      <div className="flex gap-2 px-4 py-2 bg-emerald-600 items-baseline rounded">
        <p className="text-sm mr-auto">With Exit Animation</p>
        <CustomLik path={path} href="/with-exit-animation">
          Home
        </CustomLik>
        <CustomLik path={path} href="/with-exit-animation/products-exit">
          Products
        </CustomLik>
        <CustomLik path={path} href="/with-exit-animation/about-exit">
          About
        </CustomLik>
        <CustomLik path={path} href="/with-exit-animation/contact-exit">
          Contact
        </CustomLik>
      </div>
    </nav>
  );
};

const CustomLik = (props: ComponentProps<typeof Link> & { path: string }) => {
  return (
    <div className="relative">
      <Link {...props} className="relative z-20 px-2" />
      {props.href === props.path && (
        <motion.div
          layout
          layoutId="underline"
          className="absolute inset-0 bg-black/50 rounded"
        />
      )}
    </div>
  );
};

export default Nav;
