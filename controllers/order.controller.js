class OrderController {
  static addOrder(req, res) {
    const orderID = req.body.id;

    return res.status(201).json({
      message: 'Berhasil membuat order dengan order ID ' + orderID
    })
  }

  static getOrderByID(req, res) {
    return res.status(200).json({
      message: 'Order dengan id ' + req.params.id + ' ditemukan',
      data: {
        id: req.params.id,
        name: 'Iphone 10',
        price: 6_570_000
      }
    })
  }

  static getAllOrder(req, res) {
    return res.status(200).json({
      message: 'Berhasil mendapatkan items',
      data: [
        { id: 1, name: 'Iphone 10', price: 6_570_000 },
        { id: 2, name: 'Samsung Ultra Light', price: 4_500_000 },
      ]
    })
  }

  static updateItem(req, res) {
    const orderID = req.params.id;
    const status = req.body.status;

    return res.status(200).json({
      message: 'Berhasil merubah status order dengan id ' + orderID,
      newStatus: status
    })
  }
}

module.exports = OrderController;