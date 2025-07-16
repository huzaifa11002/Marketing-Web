export default{
    name: 'testimonial',
    type: 'document',
    title: 'Testimonial',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'review',
            type: 'text',
            title: 'Review',
        },
    ],
}