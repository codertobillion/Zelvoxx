import PortfolioContent from "./PortfolioContent";

interface PortfolioProps {
  data?: any[];
}

export default function Portfolio({ data }: PortfolioProps) {
  return <PortfolioContent data={data || []} />;
}