export default{
    name:'about',
    type: 'document',
    title: 'About',
    fields: [
        {
            name: 'shortDescription',
            type: 'text',
            title: 'Short Description',
            validation: (Rule: import('sanity').Rule) =>
                Rule.custom((val: string) => {
                    if (!val || typeof val !== 'string') return true;
                    const wordCount = val.trim().split(/\s+/).length;
                    return wordCount <= 100 || 'Description must be 100 words or less';
                })
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
            name: 'longDescription',
            type: 'text',
            title: 'Long Description',
        },
    ]
}