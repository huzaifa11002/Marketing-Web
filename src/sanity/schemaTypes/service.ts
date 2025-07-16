export default {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
        {
            name: 'icon',
            type: 'image',
            title: 'Icon Image',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'shortDescription',
            type: 'text',
            title: 'Short Description',
            validation: (Rule: import('sanity').Rule) =>
                Rule.custom((val: string) => {
                    if (!val || typeof val !== 'string') return true;
                    const wordCount = val.trim().split(/\s+/).length;
                    return wordCount <= 30 || 'Description must be 30 words or less';
                })
        },
        {
            name: 'longDescription',
            type: 'array',
            title: 'Long Description',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' }
                        ],
                        annotations: [
                            {
                                name: 'link', type: 'object', fields: [
                                    { name: 'href', type: 'url', title: 'URL' }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    title: 'Image'
                }

            ],
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'showFileUpload',
            type: 'boolean',
            title: 'Show File Uploader',
            description: 'Tick to show file uploader section',
            initialValue: false
        },
        {
            name: 'fileUpload',
            type: 'file',
            title: 'File Upload',
            hidden: ({ parent }: { parent?: { showFileUpload?: boolean } }) => !parent?.showFileUpload,
            options: {
                accept: '.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            },
        }
    ],
}