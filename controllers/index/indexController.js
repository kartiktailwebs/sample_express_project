const indexCnt = (req, res, next) => {
  res.render('index', { title: 'Express' })
}

export default indexCnt
