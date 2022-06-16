export default {
    name: "imageSolo",
    type: "object",
    title: "ImageSolo",
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text'
              }
            ]
          }
    ]
  }