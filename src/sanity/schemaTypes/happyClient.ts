export default {
    name: 'happyClient',
    type: 'document',
    title: 'Happy Client',
    fields: [
        {
            name: 'label',
            type: 'string',
            title: 'Label',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'value',
            type: 'number',
            title: 'Value',
        }
    ],
}