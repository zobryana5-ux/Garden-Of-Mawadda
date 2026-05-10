import { createFileRoute } from "@tanstack/react-router";
import { Petals } from "@/components/garden/Petals";
import { ScrollVine } from "@/components/garden/ScrollVine";
import { RoseCursor } from "@/components/garden/Cursor";
import { Section1Gate } from "@/components/garden/Section1Gate";
import { Section2FirstVerse } from "@/components/garden/Section2FirstVerse";
import { Section3Story } from "@/components/garden/Section3Story";
import { Section4Prayers } from "@/components/garden/Section4Prayers";
import { Section5Greenhouse } from "@/components/garden/Section5Greenhouse";
import { Section6FinalVerse } from "@/components/garden/Section6FinalVerse";
import { Section7RSVP } from "@/components/garden/Section7RSVP";
import { Section8Footer } from "@/components/garden/Section8Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ahmed & Nour — The Garden of Mawadda" },
      { name: "description", content: "A botanical wedding invitation. Join Ahmed & Nour in their garden of love, blessed by the verses of Allah." },
      { property: "og:title", content: "Ahmed & Nour — The Garden of Mawadda" },
      { property: "og:description", content: "A botanical wedding invitation, blessed by the words of Allah." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Petals />
      <ScrollVine />
      <RoseCursor />
      <Section1Gate />
      <Section2FirstVerse />
      <Section3Story />
      <Section4Prayers />
      <Section5Greenhouse />
      <Section6FinalVerse />
      <Section7RSVP />
      <Section8Footer />
    </main>
  );
}
