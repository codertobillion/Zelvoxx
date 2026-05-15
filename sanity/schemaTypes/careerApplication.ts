import { defineType, defineField } from "sanity";

export const careerApplicationType = defineType({
  name: "careerApplication",
  title: "Career Application",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "City / Location",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role Applying For",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portfolioUrl",
      title: "Portfolio / LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
    }),
    defineField({
      name: "resumeFileName",
      title: "Resume File Name",
      type: "string",
    }),
    defineField({
      name: "workMode",
      title: "Preferred Work Mode",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "remote" },
          { title: "Hybrid", value: "hybrid" },
          { title: "On-Site", value: "onsite" },
        ],
      },
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "string",
    }),
    defineField({
      name: "whyJoin",
      title: "Why Do You Want To Join Zelvoxx?",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Review", value: "review" },
          { title: "Interview", value: "interview" },
          { title: "Task / Trial", value: "trial" },
          { title: "Hired", value: "hired" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || "Unnamed",
        subtitle: `${subtitle || "No role"} • ${status?.toUpperCase() || "NEW"}`,
      };
    },
  },
});
