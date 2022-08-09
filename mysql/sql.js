module.exports = {
  customerList: `select * from customers`,
  customerInsert: `INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?);`,
  customerUpdate: `update customers set ? where id=?`,
};
//  `insert into customers (name, email, phone, address) VALUES(?, ?, ?, ?)`,
