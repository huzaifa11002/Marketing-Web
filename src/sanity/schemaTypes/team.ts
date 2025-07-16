export default{
    name: 'team',
    type: 'document',
    title: 'Team',
    fields: [
        {
            name:'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position',
        },
        {
            name:'image',
            type: 'image',
            title: 'Team Image',
        },
        {
            name:'facebook',
            type: 'url',
            title: 'Facebook URL',
        },
        {
            name:'instagram',
            type: 'url',
            title: 'Instagram URL',
        }
    ],
}