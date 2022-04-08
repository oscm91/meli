import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:4200/api/items', async (req, res, ctx) => {
    const query = req.url.searchParams.get('search')

    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    const result = await response.json();

    return res(
      ctx.status(200),
      ctx.json({
        author: {
          name: 'Oscar',
          lastname: 'Mora'
        },
        categories: (result.filters.filter((item) => item.id === 'category') || []).reduce((categories, filter) => {
          return [].concat(categories, filter.values.flatMap((category) => category.path_from_root.map(path => path.name)))
        }, []),
        items: result.results.map((item) => ({
          id: item.id,
          title: item.title,
          picture: `http://http2.mlstatic.com/D_${item.thumbnail_id}-L.jpg`,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimal: 0
          }
        }))
      }),
    )
  }),
  rest.get('http://localhost:4200/api/items/:id', async (req, res, ctx) => {
    const { id } = req.params;

    const response = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const result = await response.json();

    return res(
      ctx.status(200),
      ctx.json({
        author: {
          name:'Oscar',
          lastname: 'Mora'
        },
        item: {
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: result.price,
            decimals: 0,
          },
          picture: `http://http2.mlstatic.com/D_${result.thumbnail_id}-L.jpg`,
          condition: result.condition,
          free_shiping: result.shipping.free_shipping,
          sold_quantity: result.sold_quantity,
          category_id: result.category_id,
        }
      }),
    )
  }),
  rest.get('http://localhost:4200/api/items/:id/description', async (req, res, ctx) => {
    const { id } = req.params;

    const response = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
    const result = await response.json();

    return res(
      ctx.status(200),
      ctx.json({
        description: result.plain_text,
      }),
    )
  }),
  rest.get('http://localhost:4200/api/categories/:id', async (req, res, ctx) => {
    const { id } = req.params;

    const response = await fetch(`https://api.mercadolibre.com/categories/${id}`)
    const result = await response.json();

    return res(
      ctx.status(200),
      ctx.json({
        categories: result.path_from_root.reduce((categories, filter) => {
          return [].concat(categories, filter.name)
        }, [])
      }),
    )
  }),
]
