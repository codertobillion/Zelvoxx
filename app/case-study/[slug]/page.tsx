import { client } from "@/sanity/lib/client";

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Safety check (prevents undefined crash)
  if (!params?.slug) {
    return <div className="text-white p-20">Invalid URL</div>;
  }

  const query = `
    *[_type == "caseStudy" && slug.current == $slug][0]{
      title,
      clientName,
      industry,
      problem,
      system,
      result
    }
  `;

  const data = await client.fetch(query, {
    slug: params.slug, // ✅ GUARANTEED VALUE
  });

  if (!data) {
    return <div className="text-white p-20">Not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold mb-6">{data.title}</h1>

      <p className="text-white/60 mb-10">{data.industry}</p>

      <h2 className="text-xl font-semibold mb-2">Problem</h2>
      <p className="mb-6">{data.problem}</p>

      <h2 className="text-xl font-semibold mb-2">Our System</h2>
      <p className="mb-6">{data.system}</p>

      <h2 className="text-xl font-semibold mb-2">Result</h2>
      <p>{data.result}</p>
    </div>
  );
}