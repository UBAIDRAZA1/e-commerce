export default {
    name: 'product',
    type: 'document',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Level'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image'
      }
    ]
  };
  