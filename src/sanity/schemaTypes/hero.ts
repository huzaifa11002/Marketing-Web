export default{
    name: 'hero',
    type: 'document',
    title: 'Hero',
    fields: [
        {
            name:'shortTitle',
            type: 'string',
            title: 'Short Title',
        },
        {
            name: 'longTitle',
            type: 'string',
            title: 'Long Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule: import('sanity').Rule) =>
                Rule.custom((val: string) => {
                    if (!val || typeof val !== 'string') return true;
                    const wordCount = val.trim().split(/\s+/).length;
                    return wordCount <= 30 || 'Description must be 30 words or less';
                })
        },
        {
            name:'buttonText',
            type: 'string',
            title: 'Button Text',
        },
        {
            name:'heroImage',
            type:'image',
            title:'Hero Image',
        },
    ],
}