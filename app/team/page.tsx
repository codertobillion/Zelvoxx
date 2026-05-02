import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { teamMembersQuery } from "@/sanity/lib/queries";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import TeamContent from "./components/TeamContent";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Team | The People Behind ZELVOX",
    description: "Meet the operators, founders, and specialists building growth systems for ambitious brands. Not just an agency—a team of executors.",
  };
}

export default async function TeamPage() {
  const teamMembers = await client.fetch(teamMembersQuery);

  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <TeamContent members={teamMembers || []} />
      <Footer />
    </main>
  );
}
