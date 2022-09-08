async function handler(req, res) {
  console.log('REQ', req.body);

  res.status(200).send({ value: { message: 'Logged' } })
}

export default handler
