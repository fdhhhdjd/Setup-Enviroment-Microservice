const transactionCtl = {
  GetTransaction: async (req, res) => {
    return res.status(200).json({
      msg: "Server Transaction",
    });
  },
};
module.exports = transactionCtl;
