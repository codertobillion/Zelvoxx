import { client } from "@/sanity/lib/client";
import { caseStudiesQuery } from "@/sanity/lib/queries";
import PortfolioContent from "./PortfolioContent";

export default async function Portfolio() {
  const data = await client.fetch(caseStudiesQuery);
  return <PortfolioContent data={data} />;
}