// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export default function productDetail(req, res) {
  const { pid } = req.query
  res.end(`product: ${pid}`)
}