"use client";
import BlogList from "@/components/BlogList";
import Hero from "@/components/Hero";
import PricingSection from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <PricingSection />
      <BlogList />
    </>
  );
}
