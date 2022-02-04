export default {
  name: "statusMapping",
  title: "Status Mapping",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "SM9ID",
      title: "SM9 ID",
      type: "string",
    },
    {
      name: "freshserviceId",
      title: "FreshService ID",
      type: "string",
    },
    {
      name: "active",
      type: "boolean",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
